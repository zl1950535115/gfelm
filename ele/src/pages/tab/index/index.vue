<template>
 <div class="box">  
    <div class="header">
      <span><img src="/static/images/serch_03.jpg" alt="" @click="gosearch"></span>
      <p>地理位置</p>
      <span @click="gologin">登录|注册</span>
    </div>
    <div class="nav">
      <!-- <div v-if="list==false">
        <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgMTA4MCA0OTAiPjxkZWZzPjxwYXRoIGlkPSJiIiBkPSJNMCAwaDEwODB2NDg5SDB6Ii8+PGZpbHRlciBpZD0iYSIgd2lkdGg9IjIwMCUiIGhlaWdodD0iMjAwJSIgeD0iLTUwJSIgeT0iLTUwJSIgZmlsdGVyVW5pdHM9Im9iamVjdEJvdW5kaW5nQm94Ij48ZmVPZmZzZXQgZHk9IjEiIGluPSJTb3VyY2VBbHBoYSIgcmVzdWx0PSJzaGFkb3dPZmZzZXRPdXRlcjEiLz48ZmVDb2xvck1hdHJpeCBpbj0ic2hhZG93T2Zmc2V0T3V0ZXIxIiB2YWx1ZXM9IjAgMCAwIDAgMC45MzMzMzMzMzMgMCAwIDAgMCAwLjkzMzMzMzMzMyAwIDAgMCAwIDAuOTMzMzMzMzMzIDAgMCAwIDEgMCIvPjwvZmlsdGVyPjwvZGVmcz48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnPjx1c2UgZmlsbD0iIzAwMCIgZmlsdGVyPSJ1cmwoI2EpIiB4bGluazpocmVmPSIjYiIvPjx1c2UgZmlsbD0iI0ZGRiIgeGxpbms6aHJlZj0iI2IiLz48L2c+PGcgZmlsbD0iI0Y2RjZGNiI+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNzYgMzYpIj48cGF0aCBkPSJNOSAxMzloMTAwdjM0SDl6Ii8+PGVsbGlwc2UgY3g9IjU5IiBjeT0iNTkiIHJ4PSI1OSIgcnk9IjU5Ii8+PC9nPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDM0NiAzNikiPjxwYXRoIGQ9Ik05IDEzOWgxMDB2MzRIOXoiLz48ZWxsaXBzZSBjeD0iNTkiIGN5PSI1OSIgcng9IjU5IiByeT0iNTkiLz48L2c+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNjE2IDM2KSI+PHBhdGggZD0iTTkgMTM5aDEwMHYzNEg5eiIvPjxlbGxpcHNlIGN4PSI1OSIgY3k9IjU5IiByeD0iNTkiIHJ5PSI1OSIvPjwvZz48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSg4ODYgMzYpIj48cGF0aCBkPSJNOSAxMzloMTAwdjM0SDl6Ii8+PGVsbGlwc2UgY3g9IjU5IiBjeT0iNTkiIHJ4PSI1OSIgcnk9IjU5Ii8+PC9nPjwvZz48ZyBmaWxsPSIjRjZGNkY2Ij48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSg3NiAyNTIpIj48cGF0aCBkPSJNOSAxMzloMTAwdjM0SDl6Ii8+PGVsbGlwc2UgY3g9IjU5IiBjeT0iNTkiIHJ4PSI1OSIgcnk9IjU5Ii8+PC9nPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDM0NiAyNTIpIj48cGF0aCBkPSJNOSAxMzloMTAwdjM0SDl6Ii8+PGVsbGlwc2UgY3g9IjU5IiBjeT0iNTkiIHJ4PSI1OSIgcnk9IjU5Ii8+PC9nPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDYxNiAyNTIpIj48cGF0aCBkPSJNOSAxMzloMTAwdjM0SDl6Ii8+PGVsbGlwc2UgY3g9IjU5IiBjeT0iNTkiIHJ4PSI1OSIgcnk9IjU5Ii8+PC9nPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDg4NiAyNTIpIj48cGF0aCBkPSJNOSAxMzloMTAwdjM0SDl6Ii8+PGVsbGlwc2UgY3g9IjU5IiBjeT0iNTkiIHJ4PSI1OSIgcnk9IjU5Ii8+PC9nPjwvZz48L2c+PC9zdmc+
" alt="" class="gujia">
      </div> -->
      <swiper indicator-dots="true" class="sWiper">
        <swiper-item>
        <ul>
            <li v-for="(item,index) in list[0]" :key="index" @click="getlsit">
              <img :src="img+item.image_url" alt="">
              <span>{{item.title}}</span>
            </li>
          </ul>
        </swiper-item>
        <swiper-item>
            <ul>
              <li v-for="(item,index) in list[1]" :key="index" @click="getlsit">
                <img :src="img+item.image_url" alt="">
                <span>{{item.title}}</span>
              </li>
            </ul>
        </swiper-item>
      </swiper>
    </div>
   <div class="box1">
      
   </div>

   <div class="section">
     <p><img src="/static/images/1_03.jpg" alt=""> 附近商家</p>
     <div class="List"  v-for="(item,index) in List" :key="index">
       <dl>
         <dt><img :src="image+item.image_path" alt=""></dt>
         <dd>
           <p><span>品牌</span><span>{{item.name}}</span></p>
           <p>******4.7 <span>月售{{item.recent_order_num}}单</span></p>
           <p>￥20起送/配送费约 ￥5</p>
         </dd>
       </dl>
       <div class="left">
        <p>保准票</p>
        <p><span>蜂鸟转送</span><span>准时达</span></p>
        <p>{{item.distance}} {{item.order_lead_time}}</p>
       </div>
     </div>
   </div>
 </div>
  
</template>

<script>
import {mapState, mapActions} from 'vuex';

export default {
  data(){
    return{
    img:'https://fuss10.elemecdn.com',
    image:'//elm.cangdu.org/img/'
  }
},

  computed: {
    ...mapState({
      list: state=>state.index.list,
      List:state=>state.index.List
    })
  },
  methods: {
    ...mapActions({
      getCateList: 'index/getCateList',
      getShoplist:'index/getShoplist'
    }),
    gologin(){
      wx.navigateTo({
        url: '/pages/login/main'
      })
    },
    getlsit(){
      wx.navigateTo({
       url: '/pages/NavDetail/main',
     })
    },
    gosearch(){
      wx.switchTab({
        url: '/pages/tab/search/main'
      })
    }
  },
  mounted() {
    console.log('this.list...', this.list);
    this.getCateList();
    this.getShoplist();
  }
}
</script>

<style scoped>
 .box{
   width: 100%;
   height: 100%;
   font-size: 24rpx;
 }
 .box1{
   width: 100%;
   height: 10px;
   background:#e4e4e4; 
 }
 .header{
   width: 100%;
   height: 100rpx;
   background: #3190e8;
   font-size: 30rpx;
   display: flex;
   justify-content: space-around;
   align-items: center;
   color: #fff;
 }
 .header span img{
   width: 45rpx;
   height: 45rpx;
 }
 .nav{
   width: 100%;
 }
 .nav ul{
   display: flex;
   justify-content: space-around;
   flex-wrap: wrap;
   align-items: center;
 }
 .nav ul li{
   width: 25%;
   display: flex;
   flex-direction: column;
   justify-content: center;
   text-align: center;
   align-items: center;
   line-height: 40px;
 }
 .nav ul li img{
   width: 40px;
   height:40px;
  
 }
 .sWiper{
   height: 200px;
 }
 .section{
   width: 100%;
   
 }
 .section>p{
   color: #ccc;
   padding: 10px;
 }
 .section p img{
   width: 10px;
   height: 10px;
 }
 .List{
   width: 100%;
   display: flex;
   justify-content: space-around;
   margin-top:15px;
   border-bottom: 1rpx solid #ccc;
 }
 .List dl{
   width:60%;
   display: flex;
   justify-content: space-around;
 }
 .List dl dt img{
   width: 70px;
   height: 70px;
 }
 .List dl dd p{
   padding: 5px;
 }
 .List dl dd p:nth-child(1){
   display: flex;
   justify-content: space-around;
 }
 .List dl dd p:nth-child(1) span:nth-child(1){
   background: #ffd930;
   display: inline-block;
   text-align: center;
   width: 30px;
   height: 16px;
 }
 .List dl dd p:nth-child(1) span:nth-child(2){
   font-size: 18px;
 }
 .List dl dd p:nth-child(2){
   color: #ff9a0d;
 }
 .List dl dd p:nth-child(2) span{
   color:black;

 }
 .left{
  text-align: right;
  line-height: 28px;
 }
 .left p:nth-child(2) span:nth-child(1){
   background: #3190e8;
   border: 1rpx solid #3190e8;
   color: #fff;
 }
 .left p:nth-child(2) span:nth-child(2){
   margin-left: 5px;
   border: 1rpx solid #3190e8;
   color: #3190e8;
 }
 .gujia {
  width: 100%;
  height: 200rpx;
  animation: bounce 3s ease-out infinite;
}
</style>
