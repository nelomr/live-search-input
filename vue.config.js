module.exports = {
    css: {
      loaderOptions: {
        sass: {
          additionalData: `@import "@/assets/styles/_variables.scss";`
        }
      }
    },
    publicPath: process.env.NODE_ENV === 'production'
    ? '/live-search-input/'
    : '/'
};