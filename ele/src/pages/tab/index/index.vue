<template>
 <div class="box">  
    <div class="header">
      <span><img src="../../../../static/images/serch_03.jpg" alt=""></span>
      <p>地理位置</p>
      <span>登录|注册</span>
    </div>
    <div class="nav">
     <swiper indicator-dots="true" class="sWiper">
    <swiper-item>
    <ul>
       <li v-for="(item,index) in list[0]" :key="index">
         <img :src="img+item.image_url" alt="">
         <span>{{item.title}}</span>
       </li>
     </ul>
    </swiper-item>
    <swiper-item>
        <ul>
            <li v-for="(item,index) in list[1]" :key="index">
              <img :src="img+item.image_url" alt="">
              <span>{{item.title}}</span>
            </li>
          </ul>
    </swiper-item>
  </block>
</swiper>
    </div>
   <div class="box1">
      
   </div>

   <div class="section">
     <p><img src="../../../../static/images/1_03.jpg" alt=""> 附近商家</p>
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
    })
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
</style>
