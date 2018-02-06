/**
 * Created by Stone Cold on 2018/2/5.
 */
const HomeService = require('../service/home')
module.exports = {
  index: async (ctx, next) => {
    ctx.body = `<h1>homepage</h1>`
  },
  home: async (ctx, next) => {
    ctx.body = `<h1>homepage ${ctx.params.id} ${ctx.params.name}</h1>`
  },
  login: async (ctx, next) => {
    await ctx.render('home/login',{
      btnName: '提交'
    })
  },
  register: async(ctx,next)=>{
    let {name, password} = ctx.request.body
    let res = await HomeService.register(name,password)
    if(res.status == "-1"){
      await ctx.render('home/login',res.data)
    }else{
      ctx.state.title = '个人中心'
      await ctx.render('home/success',res.data)
    }
  }
}