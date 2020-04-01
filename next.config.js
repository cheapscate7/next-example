const withFonts = require('next-fonts');
const withOffline = require('next-offline');
const debug = process.env.NODE_ENV !== 'production';

module.exports = withOffline(
    withFonts({
        target: 'serverless',

        env: {
            base_url: 'https://cheapscate7.github.io/json-repo',
        },
        webpack(config, options) {
            return config;
        },
    })
);
