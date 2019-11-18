const path = require('path')

function resolve (dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  publicPath: process.env.NODE_ENV === 'production' && process.env._ENV === 'demo' ? '/vue-mtui/example' : '/',
  css: {
    loaderOptions: {
      sass: {
        data: '@import "@/common/css/index.scss";'
      }
    }
  },
  chainWebpack: config => {
    if (process.env._ENV !== 'package') {
      config
        .entry('app')
        .clear()
        .add('./example/main.js')

      config
        .plugin('html')
        .tap(args => {
          args[0].template = './example/index.html'
          return args
        })
    }

    config.module
      .rule('js')
      .test(/\.m?jsx?$/)
      .include
      .add(resolve('src'))
      .add(resolve('examples'))
      .end()
  }
}
