module.exports = {
  plugins: {
    autoprefixer: {},
    'postcss-nested': {},
    'postcss-preset-env': {
      features: {
        'color-mix': true
      }
    }
  }
}