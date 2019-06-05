<template>
 <div class="Box">  
   <div class="shop">
      <dl>
        <dt><img :src="image+Details.image_path" alt=""></dt>
        <dd>
          <h1>{{Details.name}}</h1>
          <p>商家配送/分钟送达/配送费5￥</p>
          <p>公告:{{Details.promotion_info}}</p>
        </dd>
      </dl>
      <p class="reduce" v-for="(item,index) in Details.activities" :key="index">
        <span>{{item.description}}</span>
        <span>{{item.name}} ></span>
      </p>
   </div>
   <div class="shoping">
      <div class="header">
          <span @click="shan(index)" v-for="(item,index) in data" :class="flag==index?'active':''">{{item}}</span>
      </div>
      <div :class="flag == 0?'cons':'conss'">
              <scroll-view class="left" scroll-y scroll-with-animation='true' style="height: 100%;">
                <ul>
                    <li v-for="(item,index) in shopinglist" @click="Click(index)">{{item.name}}</li>
                  </ul>
              </scroll-view>
           <div class="right">
              <scroll-view scroll-y scroll-with-animation='true' :scroll-into-view="views" style="height: 100%;">
                  <div class="gou" v-for="(item,index) in shopinglist" :key="index"  :id="'a'+index">
               <span>{{item.name}}</span>
                <div v-for="(items,ind) in item.foods" class="jia">
                   <dl>
                     <dt><img :src="image+items.image_path" alt=""></dt>
                     <dd>
                       <h1>{{items.name}}</h1>
                       <p>发111</p>
                       <p>{{items.tips}}</p>
                       <div class="zi">
                         <span>￥20元起</span>
                         <div class="fu">
                           <span>-</span>
                           <b> </b>
                           <span>+</span>
                         </div>
                        </div>
                     </dd>
                   </dl>
                </div>
             </div>
              </scroll-view>
           </div>
      </div>
      <div :class="flag==0?'actives':'activess'">
        评价
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
    image:'//elm.cangdu.org/img/',
    data:['商品','评价'],
    flag:0,
    name:'block',
    ping:'none',
    views:null
  }
},

  computed: {
    ...mapState({
      Details: state=>state.index.Details,
      shopinglist:state=>state.index.shopinglist
      // List:state=>state.index.List
    })
  },
  methods: {
    ...mapActions({
      detail: 'index/detail',
      Shopping:'index/Shopping'
    }),
    shan(index){
      this.flag = index
      
    },
    Click(index){
      console.log(11)
      this.views = "a" + index;

    }
  },
  mounted() {
    // this.getCateList();
    // this.getShoplist();
    // console.log('111...',this.Details)
  },
  onLoad: function(option){
     this.detail(option.id)
     this.Shopping(option.id)
  }
}
</script>

<style scoped>
  .active{
    border-bottom: 3px solid skyblue;
  }
 .Box{
   width: 100%;
   height: 100%;
   font-size: 24rpx;
   display: flex;
   flex-direction: column;
   /* overflow: hidden; */

 }
 .pingg{
   display: block;
 }
.shop{
  width: 100%;
  height: 120px;
  background: pink;
}
.shop dl{
  display: flex;
}
.shop dl dt img{
  width: 70px;
  height: 70px;
  margin: 10px;
}
.shop dl dd{
  line-height: 25px;
  color: #fff;
}
.shop dl dd h1{
  font-size: 18px;
  font-weight: 600;
}
.reduce{
  display: flex;
  justify-content: space-between;
  padding: 0 5px;
}
.shoping{
  width: 100%;
  flex:1;
  display: flex;
  flex-direction: column;
  /* overflow: hidden; */
}
.header{
  width: 100%;
  height: 50px;
  /* background: green; */
  display: flex;
  justify-content: space-around;
  line-height: 50px;
}
.cons{
  flex:1;
  /* background: yellow; */
  display: flex;
}
#shopp{
  width: 100%;
  height: 100%;
  margin-top:5px;
}
.left{
  width: 20%;
  height: 100%;
}
.left ul li{
  width: 100%;
  height: 30px;
  line-height: 30px;
  text-align:center;
}
.left ul{
  width: 100%;
  height: 100%;
  background: #ededed;
}
.gou >span{
  width: 100%;
  height: 30px;
  font-size: 18px;
  font-weight: 600;
  line-height: 30px;
  background: #ededed;
  display: inline-block;
}
.right{
  width: 80%;
  height: 100%;
  /* background: red; */
  overflow-y: auto;
  /* float: right; */
}
.conss{
  display: none;
}
.activess{
  width: 100%;
  height: 100%;
  transform: translate(0);
  /* background: red; */
}
.actives{
  width: 100%;
  height: 100%;
  display: none;
}
.jia dl{
  width: 100%;
  display: flex;
  justify-content: space-around;
}
.jis dl dt{
  width: 20%
}
.jia dl dd{
  width: 80%;
  line-height: 20px;
}
.jia dl dt img{
  width: 40px;
  height: 40px;
   margin: 10px;
}
.zi{
  display: flex;
  justify-content: space-between;
}
.fu{
  display: flex;
  justify-content: space-around;
  margin-left: 10px;
}
.fu span{
  display: inline-block;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  line-height: 20px;
  color: #fff;
  background: skyblue;
  text-align: center;
  margin: 10px;
}
</style>
