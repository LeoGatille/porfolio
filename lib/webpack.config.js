var path = require('path');
module.exports = {
    entry: [
        "./lib/test.js"
    ],
    output: {
        path: path.resolve(__dirname, "bundle"),
        filename: 'webpacked.js',
    },
    target: 'web',
    mode: 'development',
    watch: true
};
//# sourceMappingURL=webpack.config.js.map