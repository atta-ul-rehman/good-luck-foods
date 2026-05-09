let appPromise;

async function getApp() {
    if (!appPromise) {
        appPromise = import('../index.js').then((mod) => mod.default || mod);
    }

    return appPromise;
}

module.exports = async (req, res) => {
    const app = await getApp();
    return app(req, res);
};
