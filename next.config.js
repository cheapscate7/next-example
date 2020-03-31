const withFonts = require('next-fonts');
const debug = process.env.NODE_ENV !== 'production';

module.exports = withFonts({
    target: 'serverless',
    env: {
        base_url: debug
            ? 'http://127.0.0.1:3000'
            : 'http://next-example.cheapscate7.now.sh',
    },
    webpack(config, options) {
        return config;
    },
});
