/**
 * Created by Stone Cold on 2018/2/6.
 */
const path = require('path')
const bodyParser = require('koa-bodyparser')
const nunjucks = require('koa-nunjucks-2')
const staticFiles = require('koa-static')
const miSend = require('./mi-send')
const miLog = require('./mi-log')
module.exports = (app) => {
  //指定public目录为静态资源目录，存放js css images
  app.use(staticFiles(path.resolve(__dirname,'./public')))
  app.use(bodyParser())
  app.use(miLog())
  app.use(miSend())
  app.use(nunjucks({
    ext: 'html',
    path: path.join(__dirname,'views'),
    nunjucksConfig:{
      trimBlocks: true //开启转义，防xss
    }
  }))

}