# Good Luck Foods Code Review Baseline

## Purpose

This file is the first-stop review snapshot for future chat sessions. Read this before scanning the wider repository.

## Architecture Summary

### Frontend

- Stack: React 19, TypeScript, Vite.
- Main app entry: index.tsx and App.tsx.
- UI is mostly page/component driven under pages/ and components/.
- Public content routes include catalog pages, blog routes, and placeholder legal pages for privacy policy, terms of service, and wholesale agreement.
- Auth state is handled in context/AuthContext.tsx.
- Frontend API access goes through utils/api.ts.
- Blog content now attempts to load from WordPress REST (`VITE_WP_API_BASE_URL`), with fallback to local static data in data/blogs.ts.

### Backend

- Stack: Express, Mongoose, JWT.
- Main server entry: server/index.js.
- Route groups: server/routes/auth.js, server/routes/products.js, server/routes/contact.js.
- Auth middleware: server/middleware/auth.js.

## Build And Run

- Frontend dev: npm run dev
- Frontend build: npm run build
- Frontend preview: npm run preview
- Backend server: npm run server
- Static frontend hosting: upload dist/ contents; public/.htaccess provides BrowserRouter fallback for Apache/LiteSpeed hosts such as Hostinger.

## Priority Files To Read First

1. package.json
2. server/index.js
3. server/middleware/auth.js
4. server/routes/auth.js
5. utils/api.ts
6. context/AuthContext.tsx
7. vite.config.ts

Only expand into page/component files when the task is UI-specific.

## Current Findings

### High Severity

1. JWT secret falls back to a hardcoded value in server/middleware/auth.js and server/routes/auth.js.
2. The API returns raw internal error messages in server/routes/auth.js, server/routes/contact.js, and server/routes/products.js.
3. CORS is open to any origin in server/index.js.
4. GEMINI_API_KEY is exposed to the frontend bundle in vite.config.ts.
5. Input validation is missing across auth/contact/product routes.

### Medium Severity

1. Auth token is stored in localStorage in context/AuthContext.tsx.
2. Product list endpoint has no pagination in server/routes/products.js.
3. The frontend catalog still depends on hardcoded data in constants.tsx.

## Review Guidance For Future Sessions

- Start with this file and .github/reviews/local-change-review.md.
- Read the latest change-log entries to identify files touched since the baseline was written.
- Only open additional source files when the task requires implementation detail or when the change log points to them.
- If architecture or security assumptions change, update this file rather than duplicating those notes elsewhere.
