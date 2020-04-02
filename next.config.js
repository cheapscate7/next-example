const withFonts = require('next-fonts');
const withOffline = require('next-offline');
const debug = process.env.NODE_ENV !== 'production';

module.exports = withOffline(
    withFonts({
        target: 'serverless',
        exportTrailingSlash: true,
        exportPathMap: function () {
            return {
                '/': { page: '/' },
                '/about': { page: '/about' },
            };
        },
        env: {
            base_url: 'https://cheapscate7.github.io/json-repo/next-example',
        },
        webpack(config, options) {
            return config;
        },
    })
);
