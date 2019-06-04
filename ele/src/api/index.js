import request from '@/utils/request'

console.log('request...', request);
// 获取首页分类
export let getCateList = params=>{
  return request.get('https://elm.cangdu.org/v2/index_entry?geohash=40.041898,116.300096&group_type=1&flags[]=F')
}
// 获取验证码
export let getCode = params=>{
  return request.post('https://elm.cangdu.org/v1/captchas')
}
// 登录
export let getLogin = params=>{
  return request.post('https://elm.cangdu.org/v2/login',params)
}
