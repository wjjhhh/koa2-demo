/**
 * Created by Stone Cold on 2018/2/5.
 */
const Koa = require('koa')
const app = new Koa()
const router = require('./router')
const middleware = require('./middleware')

middleware(app)
router(app)

app.listen(3000,()=>{
  console.log('server is running!!!')
})