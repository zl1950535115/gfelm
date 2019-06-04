import request from '@/utils/request'

// 获取首页分类
export let getCateList = params=>{
  return request.get('https://elm.cangdu.org/v2/index_entry?geohash=40.041898,116.300096&group_type=1&flags[]=F')
}

// 获取搜索结果
export let getSearchList = params=>{
  return request.get({
    url:'https://elm.cangdu.org/v4/restaurants?extras[]=restaurant_activity&geohash=40.041898,116.300096&type=search',
    params
  })
}