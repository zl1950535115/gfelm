import request from '@/utils/request'

console.log('request...', request);
// 获取首页分类
export let getCateList = params=>{
  return request.get('https://elm.cangdu.org/v2/index_entry?geohash=40.041898,116.300096&group_type=1&flags[]=F')
}
export function nav(){
  return request.get('https://elm.cangdu.org/shopping/restaurants?latitude=31.22967&longitude=121.4762')
}
export function toplist(){
  return request.get('https://elm.cangdu.org/shopping/v2/restaurant/category?latitude=40.041898&longitude=116.300096')
}
export function find(id){
  return request.get('https://elm.cangdu.org/shopping/restaurants?latitude=30.53824&longitude=117.07237&offset=0&limit=20&extras[]=activities&keyword=&restaurant_category_id=&restaurant_category_ids[]='+id+'&order_by=null&delivery_mode[]=null')
}
