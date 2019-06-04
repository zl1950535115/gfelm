import request from '@/utils/request'

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
// 商品列表
export let getshoplist = params=>{
  return request.get('https://elm.cangdu.org/shopping/restaurants?latitude=40.041898&longitude=116.300096&offset=0&limit=20&extras[]=activities&keyword=&restaurant_category_id=&restaurant_category_ids[]=&order_by=&delivery_mode[]=')
}

// 获取搜索结果
export let getSearchList = params=>{
  return request.get({
    url:'https://elm.cangdu.org/v4/restaurants?extras[]=restaurant_activity&geohash=40.041898,116.300096&type=search',
    params
  })
}
