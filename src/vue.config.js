/*
 * @Author: your name
 * @Date: 2021-04-21 15:52:16
 * @LastEditTime: 2021-04-21 15:55:33
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \reading-web-admin\src\vue.config.js
 */
module.exports = {
    devServer: {
        proxyTable: {
            '/api': {
              target: 'http://192.168.56.101:7001', // 你要代理的域名和端口号，要加上http
              changeOrigin: true, // 跨域
              pathRewrite: {
                '^/api': '/api' // 这里用‘/api’代替target里面的地址，组件中调用接口时直接用api代替 比如我要调用'http://xxx.com:8080/api/NEWS/getNews.json?page=1&pageSize=10
              }
            }
         }
     }
}