/**
 * Created by Stone Cold on 2018/2/6.
 */
module.exports = (ctx, message, commonInfo) => {
  const {
    method, //请求方法
    url,//请求链接
    host,//发送请求的客户端host
    headers
  } = ctx.request
  const client = {
    method,
    url,
    host,
    message,
    referrer: headers['referer'],//请求的源地址
    userAgent: headers['user-agent']//客户端信息 设备及浏览器信息
  }
  return JSON.stringify(Object.assign(commonInfo,client))
}