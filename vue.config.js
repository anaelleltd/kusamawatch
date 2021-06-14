// vue.config.js file to be placed in the root of your repository GITHUB PAGES method
module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/kusamawatch/public/'
    : '/'
}

// vue.config.js file to be placed in the root of your repository GITLAB PAGES method

/*module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/' + process.env.kusamawatch + '/public/'
    : '/'
}*/