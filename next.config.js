const withFonts = require('next-fonts');
const debug = process.env.NODE_ENV !== "production";

module.exports = withFonts({
    webpack(config, options) {
        return config;
    },
});
