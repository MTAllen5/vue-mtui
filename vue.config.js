module.exports = {
  css: {
    loaderOptions: {
      sass: {
        data: '@import "@/common/css/index.scss";'
      }
    }
  },
  chainWebpack: config => {
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
}
