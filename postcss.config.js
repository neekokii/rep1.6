module.exports = {
  plugins: [
    require('autoprefixer')({
      overrideBrowserslist: ['last 2 versions']
    }),
    require('postcss-preset-env')({
      // Options
    })
  ]
};
