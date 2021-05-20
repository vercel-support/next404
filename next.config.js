module.exports = {
  // Image optimization config.
  images: {
    deviceSizes: [320, 568, 768, 1296],
    domains: [],
  },

  // Localisation config.
  i18n: {
    // These are all the supported locales for our app.
    locales: ['en', 'ar'],

    // This is the default locale when visiting a non-locale prefixed path e.g. `/hello`.
    defaultLocale: 'en',

    // Automatic locale detection.
    localeDetection: true,
  },

  future: {
    webpack5: true,
  },
};
