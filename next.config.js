const withFonts = require('next-fonts');
const withOffline = require('next-offline');
const debug = process.env.NODE_ENV !== 'production';

module.exports = withOffline(
    withFonts({
        target: 'serverless',
        generateInDevMode: true,
        workboxOpts: {
            swDest: 'static/service-worker.js',
            runtimeCaching: [
                {
                    urlPattern: /^https?.*/,
                    handler: 'NetworkFirst',
                    options: {
                        cacheName: 'https-calls',
                        networkTimeoutSeconds: 15,
                        expiration: {
                            maxEntries: 150,
                            maxAgeSeconds: 30 * 24 * 60 * 60, // 1 month
                        },
                        cacheableResponse: {
                            statuses: [0, 200],
                        },
                    },
                },
                {
                    urlPattern: /\.(?:png|jpg|jpeg|svg)$/,
                    handler: 'CacheFirst',
                    options: {
                        cacheName: 'images',

                        expiration: {
                            maxEntries: 15,
                        },
                    },
                },
            ],
        },
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
