/**
 * Created by Stone Cold on 2018/2/5.
 */
const Router = require('koa-router')
const router = new Router()
const HomeController = require('./controller/home')
module.exports = (app) => {
  router.get('/', HomeController.index)

  router.get('/home/:id/:name', HomeController.home)

  router.get('/user', HomeController.login)
  router.post('/user/register', HomeController.register)

  app.use(router.routes()).use(router.allowedMethods())
}



