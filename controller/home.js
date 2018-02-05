/**
 * Created by Stone Cold on 2018/2/5.
 */
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
    if (name == 'jj很帅' && password == '123456') {
      ctx.body = `hello,${name}`
    }
    else {
      ctx.body = `用户${name}的密码${password}有误`
    }
  }
}