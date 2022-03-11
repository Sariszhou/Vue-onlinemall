module.exports = {
  productionSourceMap:false,
    // 关闭eslint
    lintOnSave:false,
    // 配置代理 解决跨域
    devServer: {
          proxy: {
            '/api': {  //如果路径中出现/api 代理服务器就会向target发送请求
              target: 'http://39.98.123.211',
            //   pathRewrite: {'^/api' : ''},
            //   changeOrigin: true,     // target是域名的话，需要这个参数，
            //   secure: false,          // 设置支持https协议的代理
            },
          
        }
    }
}