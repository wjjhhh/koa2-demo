/**
 * Created by Stone Cold on 2018/2/6.
 */
const log4js = require('log4js')
//引入日志输出信息的封装文件
const access = require('./access')
const methods = ["trace", "debug", "info", "warn", "error", "fatal", "mark"]

//提取默认公用参数对象
const baseInfo = {
  appLogLevel: 'debug', //指定记录的日志级别
  dir: 'logs',//指定日志存放的目录名
  env: 'dev', //指定当前环境，当为开发环境时，在控制台也输出，方便调试
  projectName: 'koa2-demo',
  serverIp: '0.0.0.0' //默认情况下服务器ip地址
}
const {env, appLogLevel, dir, projectName, serverIp} = baseInfo
//增加常量，用来存储公用的日志信息
const commonInfo = {projectName, serverIp}

module.exports = (options) => {
  const contextLogger = {}
  const appenders = {}
  appenders.cheese = {
    type: 'dateFile',//日志类型
    filename: `${dir}/task`,//输出文件名
    pattern: '-yyyy-MM-dd.log',//文件名加后缀
    alwaysIncludePattern: true,//是否总是有后缀名
  }
  //环境变量为dev,local,development 认为是开发环境
  if (env === 'dev' || env === 'local' || env === 'development') {
    appenders.out = {
      type: 'console'
    }
  }
  const config = {
    appenders,
    categories: {
      default: {
        appenders: Object.keys(appenders),
        level: appLogLevel
      }
    }
  }

  const logger = log4js.getLogger('cheese')

  return async (ctx, next) => {
    const start = +new Date()
    log4js.configure(config)
    methods.forEach((method, i) => {
      contextLogger[method] = (message) => {
        // logger[method](message)
        //将入参换为函数，返回字符串
        logger[method](access(ctx, message, commonInfo))
      }
    })
    ctx.log = contextLogger
    await next()
    const end = +new Date()
    const responseTime = end - start
    logger.info(access(ctx,{
      responseTime:`响应时间为${responseTime / 1000}s`
    },commonInfo))
  }

}