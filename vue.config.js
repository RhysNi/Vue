//默认配置修改 
module.exports = {
  pages: {
    index: {
      // page 的入口
      entry: 'src/main.js',
    },
  },
  //语法检查
  lintOnSave: false,
  //开启代理服务器方式一
  //  devServer: {
  //   proxy: 'http://localhost:5000'
  // }

  //开启代理服务器方式二
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:5000',
        pathRewrite: { '^/api': '' },
        ws: true,//用于支持websocket 默认true
        changeOrigin: true//用于控制请求头中的host值 默认true
      },
      '/v': {
        target: 'http://localhost:5001',
        pathRewrite: { '^/v': '' }
      }
    }
  }
} 