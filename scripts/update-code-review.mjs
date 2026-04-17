import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const repoRoot = path.resolve(__dirname, '..');
const reviewDir = path.join(repoRoot, '.github', 'reviews');
const logFile = path.join(reviewDir, 'local-change-review.md');
const stateFile = path.join(reviewDir, '.review-state.json');

const modeIndex = process.argv.indexOf('--mode');
const mode = modeIndex >= 0 ? process.argv[modeIndex + 1] : 'manual';

function runGit(args) {
  return execFileSync('git', args, {
    cwd: repoRoot,
    encoding: 'utf8',
    stdio: ['pipe', 'pipe', 'pipe'],
  }).trim();
}

function safeRunGit(args) {
  try {
    return runGit(args);
  } catch {
    return '';
  }
}

function ensureFile(filePath, content) {
  if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, content, 'utf8');
  }
}

function readState() {
  if (!fs.existsSync(stateFile)) {
    return { lastCommit: '', lastPushHead: '' };
  }

  try {
    return JSON.parse(fs.readFileSync(stateFile, 'utf8'));
  } catch {
    return { lastCommit: '', lastPushHead: '' };
  }
}

function writeState(state) {
  fs.writeFileSync(stateFile, JSON.stringify(state, null, 2), 'utf8');
}

function listToBulletBlock(items, emptyLabel) {
  if (!items.length) {
    return `- ${emptyLabel}`;
  }

  return items.map((item) => `- ${item}`).join('\n');
}

function appendEntry(title, details) {
  ensureFile(
    logFile,
    '# Local Change Review Log\n\nThis file is updated automatically after each local commit and before each push.\n\nFuture chat sessions should read the newest entries here after reading codebase-review.md.\n',
  );

  const entry = `\n## ${title}\n\n${details}\n`;
  fs.appendFileSync(logFile, entry, 'utf8');
}

function getChangedFiles(rangeArgs) {
  const output = safeRunGit(['diff', '--name-only', ...rangeArgs]);
  return output ? output.split(/\r?\n/).filter(Boolean) : [];
}

function getCommitStats(rangeArgs) {
  const output = safeRunGit(['diff', '--shortstat', ...rangeArgs]);
  return output || 'No diff stats available.';
}

function getRecentCommitLines(rangeArgs) {
  const output = safeRunGit(['log', '--oneline', ...rangeArgs]);
  return output ? output.split(/\r?\n/).filter(Boolean) : [];
}

function updateForCommit(state) {
  const head = safeRunGit(['rev-parse', 'HEAD']);
  if (!head || state.lastCommit === head) {
    return state;
  }

  const subject = safeRunGit(['log', '-1', '--pretty=%s']);
  const authorDate = safeRunGit(['log', '-1', '--date=iso-strict', '--pretty=%ad']);
  const files = safeRunGit(['show', '--pretty=', '--name-only', 'HEAD'])
    .split(/\r?\n/)
    .filter(Boolean);
  const stats = safeRunGit(['show', '--shortstat', '--format=', 'HEAD']) || 'No diff stats available.';

  appendEntry(
    `Post-commit review: ${subject || head.slice(0, 7)}`,
    [
      `- Mode: post-commit`,
      `- Commit: ${head}`,
      `- Date: ${authorDate || new Date().toISOString()}`,
      `- Summary: ${subject || 'No commit subject available.'}`,
      `- Diff stats: ${stats}`,
      '- Files changed:',
      listToBulletBlock(files, 'No changed files reported.'),
      '- Review action: Read the files above first before opening wider parts of the repository.',
    ].join('\n'),
  );

  return { ...state, lastCommit: head };
}

function updateForPush(state) {
  const head = safeRunGit(['rev-parse', 'HEAD']);
  if (!head || state.lastPushHead === head) {
    return state;
  }

  const upstream = safeRunGit(['rev-parse', '--abbrev-ref', '--symbolic-full-name', '@{upstream}']);
  const range = upstream ? [`${upstream}..HEAD`] : ['HEAD~1..HEAD'];
  const commits = getRecentCommitLines(range);
  const files = getChangedFiles(range);
  const stats = getCommitStats(range);

  appendEntry(
    `Pre-push review: ${head.slice(0, 7)}`,
    [
      `- Mode: pre-push`,
      `- Head commit: ${head}`,
      `- Compared against: ${upstream || 'HEAD~1'}`,
      `- Diff stats: ${stats}`,
      '- Commits in push set:',
      listToBulletBlock(commits, 'No commit list available.'),
      '- Files in push set:',
      listToBulletBlock(files, 'No changed files reported.'),
      '- Review action: Re-read these files and reconcile them with .github/reviews/codebase-review.md and .github/reviews/local-change-review.md.',
    ].join('\n'),
  );

  return { ...state, lastPushHead: head };
}

fs.mkdirSync(reviewDir, { recursive: true });
ensureFile(
  logFile,
  '# Local Change Review Log\n\nThis file is updated automatically after each local commit and before each push.\n\nFuture chat sessions should read the newest entries here after reading codebase-review.md.\n',
);

let state = readState();

if (mode === 'post-commit') {
  state = updateForCommit(state);
} else if (mode === 'pre-push') {
  state = updateForPush(state);
} else {
  state = updateForCommit(state);
  state = updateForPush(state);
}

writeState(state);
