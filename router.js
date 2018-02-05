/**
 * Created by Stone Cold on 2018/2/5.
 */
const Router = require('koa-router')
const router = new Router()

module.exports = (app) => {
  router.get('/', async (ctx, next) => {
    ctx.body = `<h1>homepage</h1>`
  })

  router.get('/home/:id/:name', async (ctx, next) => {

    ctx.body = `<h1>homepage ${ctx.params.id} ${ctx.params.name}</h1>`
  })

  router.get('/user', async (ctx, next) => {
    ctx.body = `
    <form method="post" action="/user/register">
    <input type="text" placeholder="请输入用户：jj很帅" name="name"/>
    <input type="text" placeholder="请输入密码：123456" name="password">
    <button>提交</button>
</form>
    `
  })
  router.post('/user/register', async (ctx, next) => {
    let {name, password} = ctx.request.body
    if (name == 'jj很帅' && password == '123456') {
      ctx.body = `hello,${name}`
    }
    else {
      ctx.body = `用户${name}的密码${password}有误`
    }
  })

  app.use(router.routes()).use(router.allowedMethods())
}



