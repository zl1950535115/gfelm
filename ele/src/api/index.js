import request from '@/utils/request'

console.log('request...', request);
// 获取首页分类
export let getCateList = params=>{
  return request.get('https://elm.cangdu.org/v2/index_entry?geohash=40.041898,116.300096&group_type=1&flags[]=F')
}

export let getshoplist = params=>{
  return request.get('https://elm.cangdu.org/shopping/restaurants?latitude=40.041898&longitude=116.300096&offset=0&limit=20&extras[]=activities&keyword=&restaurant_category_id=&restaurant_category_ids[]=&order_by=&delivery_mode[]=')
}
//商品详情
export function Detail(data) {
  // console.log(data,'data....')
  return request.get('https://elm.cangdu.org/shopping/restaurant/'+data)
}
//购物车页面
export function shopping(data) {
  // console.log(data,'data....')
  return request.get('https://elm.cangdu.org/shopping/v2/menu?restaurant_id='+data)
}
