/**
 * Created by Stone Cold on 2018/2/5.
 */
const Koa = require('koa')
const app = new Koa()
const bodyParser = require('koa-bodyparser')
const router = require('./router')

app.use(bodyParser())

router(app)

app.listen(3000,()=>{
  console.log('server is running!!!')
})