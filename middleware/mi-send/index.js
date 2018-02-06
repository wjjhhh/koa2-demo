/**
 * Created by Stone Cold on 2018/2/6.
 */
module.exports = () => {
  function render(json) {
    this.set('Content-Type','application/json')
    this.body = JSON.stringify(json)
  }
  return async (ctx,next)=>{
    ctx.send = render.bind(ctx)
    ctx.log.error('wjj has something wroing!')
    await next()
  }
}