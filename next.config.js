const withImages = require('next-images')
module.exports = {
...withImages(),
i18n: {
locales: ['fr-FR', 'en-US'],
defaultLocale: 'fr-FR',
localeDetection: false,
}
};