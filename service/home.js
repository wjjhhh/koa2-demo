/**
 * Created by Stone Cold on 2018/2/6.
 */
module.exports = {
  register: async function (name, pwd) {
    let data
    if (name == 'jj很帅' && pwd == '123456') {
      data = {
        status: 0,
        data: {
          title: '个人中心',
          content: '欢迎进入个人中心'
        }
      }
    }else{
      data = {
        status: -1,
        data: {
          title: '登陆失败',
          content: '请输入正确的账号信息'
        }
      }
    }
    return data
  }
}