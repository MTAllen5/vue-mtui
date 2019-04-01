module.exports = {
  css: {
    loaderOptions: {
      sass: {
        data: '@import "@/common/css/variable.scss"; @import "@/common/css/mixins.scss"; @import "@/common/css/global.scss";'
      }
    }
  }
}
