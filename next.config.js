const withFonts = require('next-fonts');
const debug = process.env.NODE_ENV !== 'production';

module.exports = withFonts({
    target: 'serverless',
    env: {
        base_url: 'https://cheapscate7.github.io/json-repo',
    },
    webpack(config, options) {
        return config;
    },
});
