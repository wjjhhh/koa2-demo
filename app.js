/**
 * Created by Stone Cold on 2018/2/5.
 */
const Koa = require('koa')
const path = require('path')
const app = new Koa()
const bodyParser = require('koa-bodyparser')
const router = require('./router')
const nunjucks = require('koa-nunjucks-2')

app.use(bodyParser())

app.use(nunjucks({
  ext: 'html',
  path: path.join(__dirname,'views'),
  nunjucksConfig:{
    trimBlocks: true //开启转义，防xss
  }
}))

router(app)

app.listen(3000,()=>{
  console.log('server is running!!!')
})