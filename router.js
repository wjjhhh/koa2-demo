/**
 * Created by Stone Cold on 2018/2/5.
 */
const Router = require('koa-router')
const router = new Router()

router.get('/',async(ctx,next)=>{
  ctx.body = `<h1>homepage</h1>`
})