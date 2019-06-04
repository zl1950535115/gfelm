<template>
  <div class="NavBox">
    <div class="titleBox">
      <ul class="uls">
        <li
          :class="ind==index?'active':'actives'"
          v-for="(item,index) in arr"
          :key="index"
          @click="actives(index)"
        >
          <p>{{item}}</p>
          <span :class="ind==index?'therr':'therrs'"></span>
        </li>
      </ul>
    </div>
    <div class="content">
      <dl v-if="list" v-for="(item,index) in list" class="dls" :key="index" @click="a">
        <dt>
          <img class="img" :src="'http://elm.cangdu.org/img/'+item.image_path" alt="">
        </dt>
        <dd class="dd">
          <ul class="ulse">
            <li class="one_li">
              <div class="start">
                <p>品牌</p>
                <span class="name">{{item.name}}</span>
              </div>
              <ul class="therr_title">
                <li
                  class="smallsize"
                  v-for="(val,ind) in item.supports"
                  :key="ind"
                >{{val.icon_name}}</li>
              </ul>
            </li>
            <li class="title_box">
              <div class="info">
                <p class="star">💜 💜 💜 💜 💜</p>
                <p class="reain">{{item.rating}}</p>
                <p class="month_num">月售{{item.recent_order_num}}单</p>
              </div>
              <ul class="title">
                <!-- <li class="bgc">{{item.delivery_mode}}</li>
                <li class="time">{{item.supports[1].name}}</li> -->
              </ul>
            </li>
            <li class="time_price">
              <div class="info">
                <p class="star">￥12元起送</p>
                <p class="price">配送费约￥5</p>
              </div>
              <div class="distance">
                <p>{{item.distance}}/</p>
                <p>{{item.order_lead_time}}</p>
              </div>
            </li>
          </ul>
        </dd>
      </dl>
      <div v-if="list==false">
        <img
          class="gujia"
          src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgMTA4MCAyNjEiPjxkZWZzPjxwYXRoIGlkPSJiIiBkPSJNMCAwaDEwODB2MjYwSDB6Ii8+PGZpbHRlciBpZD0iYSIgd2lkdGg9IjIwMCUiIGhlaWdodD0iMjAwJSIgeD0iLTUwJSIgeT0iLTUwJSIgZmlsdGVyVW5pdHM9Im9iamVjdEJvdW5kaW5nQm94Ij48ZmVPZmZzZXQgZHk9Ii0xIiBpbj0iU291cmNlQWxwaGEiIHJlc3VsdD0ic2hhZG93T2Zmc2V0T3V0ZXIxIi8+PGZlQ29sb3JNYXRyaXggaW49InNoYWRvd09mZnNldE91dGVyMSIgdmFsdWVzPSIwIDAgMCAwIDAuOTMzMzMzMzMzIDAgMCAwIDAgMC45MzMzMzMzMzMgMCAwIDAgMCAwLjkzMzMzMzMzMyAwIDAgMCAxIDAiLz48L2ZpbHRlcj48L2RlZnM+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIDEpIj48dXNlIGZpbGw9IiMwMDAiIGZpbHRlcj0idXJsKCNhKSIgeGxpbms6aHJlZj0iI2IiLz48dXNlIGZpbGw9IiNGRkYiIHhsaW5rOmhyZWY9IiNiIi8+PHBhdGggZmlsbD0iI0Y2RjZGNiIgZD0iTTIzMCA0NGg1MzN2NDZIMjMweiIvPjxyZWN0IHdpZHRoPSIxNzIiIGhlaWdodD0iMTcyIiB4PSIzMCIgeT0iNDQiIGZpbGw9IiNGNkY2RjYiIHJ4PSI0Ii8+PHBhdGggZmlsbD0iI0Y2RjZGNiIgZD0iTTIzMCAxMThoMzY5djMwSDIzMHpNMjMwIDE4MmgzMjN2MzBIMjMwek04MTIgMTE1aDIzOHYzOUg4MTJ6TTgwOCAxODRoMjQydjMwSDgwOHpNOTE3IDQ4aDEzM3YzN0g5MTd6Ii8+PC9nPjwvc3ZnPg=="
          alt=""
        >
        <img
          class="gujia"
          src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgMTA4MCAyNjEiPjxkZWZzPjxwYXRoIGlkPSJiIiBkPSJNMCAwaDEwODB2MjYwSDB6Ii8+PGZpbHRlciBpZD0iYSIgd2lkdGg9IjIwMCUiIGhlaWdodD0iMjAwJSIgeD0iLTUwJSIgeT0iLTUwJSIgZmlsdGVyVW5pdHM9Im9iamVjdEJvdW5kaW5nQm94Ij48ZmVPZmZzZXQgZHk9Ii0xIiBpbj0iU291cmNlQWxwaGEiIHJlc3VsdD0ic2hhZG93T2Zmc2V0T3V0ZXIxIi8+PGZlQ29sb3JNYXRyaXggaW49InNoYWRvd09mZnNldE91dGVyMSIgdmFsdWVzPSIwIDAgMCAwIDAuOTMzMzMzMzMzIDAgMCAwIDAgMC45MzMzMzMzMzMgMCAwIDAgMCAwLjkzMzMzMzMzMyAwIDAgMCAxIDAiLz48L2ZpbHRlcj48L2RlZnM+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIDEpIj48dXNlIGZpbGw9IiMwMDAiIGZpbHRlcj0idXJsKCNhKSIgeGxpbms6aHJlZj0iI2IiLz48dXNlIGZpbGw9IiNGRkYiIHhsaW5rOmhyZWY9IiNiIi8+PHBhdGggZmlsbD0iI0Y2RjZGNiIgZD0iTTIzMCA0NGg1MzN2NDZIMjMweiIvPjxyZWN0IHdpZHRoPSIxNzIiIGhlaWdodD0iMTcyIiB4PSIzMCIgeT0iNDQiIGZpbGw9IiNGNkY2RjYiIHJ4PSI0Ii8+PHBhdGggZmlsbD0iI0Y2RjZGNiIgZD0iTTIzMCAxMThoMzY5djMwSDIzMHpNMjMwIDE4MmgzMjN2MzBIMjMwek04MTIgMTE1aDIzOHYzOUg4MTJ6TTgwOCAxODRoMjQydjMwSDgwOHpNOTE3IDQ4aDEzM3YzN0g5MTd6Ii8+PC9nPjwvc3ZnPg=="
          alt=""
        >
        <img
          class="gujia"
          src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgMTA4MCAyNjEiPjxkZWZzPjxwYXRoIGlkPSJiIiBkPSJNMCAwaDEwODB2MjYwSDB6Ii8+PGZpbHRlciBpZD0iYSIgd2lkdGg9IjIwMCUiIGhlaWdodD0iMjAwJSIgeD0iLTUwJSIgeT0iLTUwJSIgZmlsdGVyVW5pdHM9Im9iamVjdEJvdW5kaW5nQm94Ij48ZmVPZmZzZXQgZHk9Ii0xIiBpbj0iU291cmNlQWxwaGEiIHJlc3VsdD0ic2hhZG93T2Zmc2V0T3V0ZXIxIi8+PGZlQ29sb3JNYXRyaXggaW49InNoYWRvd09mZnNldE91dGVyMSIgdmFsdWVzPSIwIDAgMCAwIDAuOTMzMzMzMzMzIDAgMCAwIDAgMC45MzMzMzMzMzMgMCAwIDAgMCAwLjkzMzMzMzMzMyAwIDAgMCAxIDAiLz48L2ZpbHRlcj48L2RlZnM+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIDEpIj48dXNlIGZpbGw9IiMwMDAiIGZpbHRlcj0idXJsKCNhKSIgeGxpbms6aHJlZj0iI2IiLz48dXNlIGZpbGw9IiNGRkYiIHhsaW5rOmhyZWY9IiNiIi8+PHBhdGggZmlsbD0iI0Y2RjZGNiIgZD0iTTIzMCA0NGg1MzN2NDZIMjMweiIvPjxyZWN0IHdpZHRoPSIxNzIiIGhlaWdodD0iMTcyIiB4PSIzMCIgeT0iNDQiIGZpbGw9IiNGNkY2RjYiIHJ4PSI0Ii8+PHBhdGggZmlsbD0iI0Y2RjZGNiIgZD0iTTIzMCAxMThoMzY5djMwSDIzMHpNMjMwIDE4MmgzMjN2MzBIMjMwek04MTIgMTE1aDIzOHYzOUg4MTJ6TTgwOCAxODRoMjQydjMwSDgwOHpNOTE3IDQ4aDEzM3YzN0g5MTd6Ii8+PC9nPjwvc3ZnPg=="
          alt=""
        >
        <img
          class="gujia"
          src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgMTA4MCAyNjEiPjxkZWZzPjxwYXRoIGlkPSJiIiBkPSJNMCAwaDEwODB2MjYwSDB6Ii8+PGZpbHRlciBpZD0iYSIgd2lkdGg9IjIwMCUiIGhlaWdodD0iMjAwJSIgeD0iLTUwJSIgeT0iLTUwJSIgZmlsdGVyVW5pdHM9Im9iamVjdEJvdW5kaW5nQm94Ij48ZmVPZmZzZXQgZHk9Ii0xIiBpbj0iU291cmNlQWxwaGEiIHJlc3VsdD0ic2hhZG93T2Zmc2V0T3V0ZXIxIi8+PGZlQ29sb3JNYXRyaXggaW49InNoYWRvd09mZnNldE91dGVyMSIgdmFsdWVzPSIwIDAgMCAwIDAuOTMzMzMzMzMzIDAgMCAwIDAgMC45MzMzMzMzMzMgMCAwIDAgMCAwLjkzMzMzMzMzMyAwIDAgMCAxIDAiLz48L2ZpbHRlcj48L2RlZnM+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIDEpIj48dXNlIGZpbGw9IiMwMDAiIGZpbHRlcj0idXJsKCNhKSIgeGxpbms6aHJlZj0iI2IiLz48dXNlIGZpbGw9IiNGRkYiIHhsaW5rOmhyZWY9IiNiIi8+PHBhdGggZmlsbD0iI0Y2RjZGNiIgZD0iTTIzMCA0NGg1MzN2NDZIMjMweiIvPjxyZWN0IHdpZHRoPSIxNzIiIGhlaWdodD0iMTcyIiB4PSIzMCIgeT0iNDQiIGZpbGw9IiNGNkY2RjYiIHJ4PSI0Ii8+PHBhdGggZmlsbD0iI0Y2RjZGNiIgZD0iTTIzMCAxMThoMzY5djMwSDIzMHpNMjMwIDE4MmgzMjN2MzBIMjMwek04MTIgMTE1aDIzOHYzOUg4MTJ6TTgwOCAxODRoMjQydjMwSDgwOHpNOTE3IDQ4aDEzM3YzN0g5MTd6Ii8+PC9nPjwvc3ZnPg=="
          alt=""
        >
        <img
          class="gujia"
          src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgMTA4MCAyNjEiPjxkZWZzPjxwYXRoIGlkPSJiIiBkPSJNMCAwaDEwODB2MjYwSDB6Ii8+PGZpbHRlciBpZD0iYSIgd2lkdGg9IjIwMCUiIGhlaWdodD0iMjAwJSIgeD0iLTUwJSIgeT0iLTUwJSIgZmlsdGVyVW5pdHM9Im9iamVjdEJvdW5kaW5nQm94Ij48ZmVPZmZzZXQgZHk9Ii0xIiBpbj0iU291cmNlQWxwaGEiIHJlc3VsdD0ic2hhZG93T2Zmc2V0T3V0ZXIxIi8+PGZlQ29sb3JNYXRyaXggaW49InNoYWRvd09mZnNldE91dGVyMSIgdmFsdWVzPSIwIDAgMCAwIDAuOTMzMzMzMzMzIDAgMCAwIDAgMC45MzMzMzMzMzMgMCAwIDAgMCAwLjkzMzMzMzMzMyAwIDAgMCAxIDAiLz48L2ZpbHRlcj48L2RlZnM+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIDEpIj48dXNlIGZpbGw9IiMwMDAiIGZpbHRlcj0idXJsKCNhKSIgeGxpbms6aHJlZj0iI2IiLz48dXNlIGZpbGw9IiNGRkYiIHhsaW5rOmhyZWY9IiNiIi8+PHBhdGggZmlsbD0iI0Y2RjZGNiIgZD0iTTIzMCA0NGg1MzN2NDZIMjMweiIvPjxyZWN0IHdpZHRoPSIxNzIiIGhlaWdodD0iMTcyIiB4PSIzMCIgeT0iNDQiIGZpbGw9IiNGNkY2RjYiIHJ4PSI0Ii8+PHBhdGggZmlsbD0iI0Y2RjZGNiIgZD0iTTIzMCAxMThoMzY5djMwSDIzMHpNMjMwIDE4MmgzMjN2MzBIMjMwek04MTIgMTE1aDIzOHYzOUg4MTJ6TTgwOCAxODRoMjQydjMwSDgwOHpNOTE3IDQ4aDEzM3YzN0g5MTd6Ii8+PC9nPjwvc3ZnPg=="
          alt=""
        >
      </div>
    </div>
    <div :class="ind==0?'mark_s':'mark'">
      <div :class="ind==0?'mark_box_animate':'mark_box'">
       <div class="contentbox">
          <div class="Left">
          <ul class="ulsea">
            <li
              v-for="(item,index) in toplists"
              class="Active"
              :style="{background:index==listind?'white':''}"
              @click="liclick(index)"
              :key="index"
            >
              <div class="infobox">
                <img
                  v-if="index!=0"
                  class="icon"
                  src="https://fuss10.elemecdn.com/b/ff/533cf9617bd57fe1dfb05603bebcfpng.png"
                >
                <p class="titleSize">{{item.name}}</p>
              </div>
              <div class="right_ord">
                <p class="count_num">{{item.count}}</p>
                <p v-if="index!=0" class="oriderf">＞</p>
              </div>
            </li>
          </ul>
        </div>
        <div class="Right">
            <ul>
              <li class="lisver" v-for="(item,index)  in rightlist" v-if="index!=0" @click="revers(item)" :key="index">{{item.name}}</li>
            </ul>
        </div>
       </div>
      </div>
    </div>
    <div :class="ind==1?'mark_s':'mark'">
      <div :class="ind==1?'mark_box_animate':'mark_box'">
        <div class="LeftBOX">第二个盒子</div>
      </div>
    </div>
    <div :class="ind==2?'mark_s':'mark'">
      <div :class="ind==2?'mark_box_animate':'mark_box'">
        <div class="Left">第三个盒子</div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  data() {
    return {
      arr: ["商品超市", "排序", "筛选"],
      ind: null,
      flag: false,
      listind: null,
      rightlist:[]
    };
  },
  computed: {
    ...mapState({
      list: state => state.Navlist.list,
      toplists: state => state.Navlist.toplists
    })
  },
  methods: {
    revers(item){
      this.arr[0]=item.name 
      wx.setNavigationBarTitle({
      title:item.name 
    })
       this.$nextTick(() => {
          this.find(item.id)
        });
      this.ind=null
    },
    liclick(index) {
      this.listind = index;
      this.rightlist=this.toplists[this.listind].sub_categories
    },
    a() {
    },
    ...mapActions({
      navlist: "Navlist/nav",
      toplist: "Navlist/toplist",
      find:'Navlist/find'
    }),
    actives(index) {
      if (this.ind == index) {
        this.ind = null;
      } else {
        this.ind = index;
      }
    }
  },
  mounted() {
    this.navlist();
    this.toplist();
  }
};
</script>

<style>
.LeftBOX{
  width:100%;
  background-color:red;
}
.lisver{
  border-bottom:1rpx solid #eee;
  font-size:26rpx;
  color:#666;
  padding:20rpx;
}
.contentbox{
  width:100%;
  height:520rpx;
}
.ulsea {
  width: 100%;
  display: flex;
  flex-direction: column;
}
.ulsea li {
  flex: 1;
  padding: 10rpx;
}

.oriderf {
  font-size: 20rpx;
  color: #ccc;
  margin-left: 8rpx;
}
.right_ord {
  display: flex;
  align-items: center;
}
.count_num {
  color: white;
  font-size: 20rpx;
  background-color: #ccc;
  border-radius: 20rpx;
  padding: 5rpx;
}
.titleSize {
  font-size: 24rpx;
  color: #666;
  padding-left: 10rpx;
}
.Active {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.icon {
  width: 40rpx;
  height: 40rpx;
  padding-right: 10rpx;
  padding-left: 10px;
}
.infobox {
  display: flex;
  align-items: center;
}
.Left {
  float: left;
  width: 50%;
  height: 100%;
  background-color: #f1f1f1;
  box-sizing: border-box;
  overflow: scroll;
}
.Right {
  float: left;
  width: 50%;
  height: 100%;
  background-color: white;
  overflow: scroll;
}
.mark {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  visibility: hidden;
  z-index: 999;
}
.mark_s {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  transition: 0.3s;
}

.mark_box {
  width: 100%;
  margin-top: 80rpx;
  position: absolute;
  top: -1000rpx;
  transition: 0.3s;
  z-index: -1;
}
.mark_box_animate {
  width: 100%;
  margin-top: 80rpx;
  position: absolute;
  top: 0;
  transition: 0.3s;
  z-index: -1;
}
.distance {
  display: flex;
  font-size: 20rpx;
  color: #666;
}
.time_price {
  display: flex;
  justify-content: space-between;
}
.price {
  color: #666;
  font-size: 20rpx;
  padding-left: 10rpx;
}
.gujia {
  width: 100%;
  height: 200rpx;
  animation: bounce 3s ease-out infinite;
}
@keyframes bounce {
  0% {
    opacity: 0.5;
  }
  25% {
    opacity: 0.6;
  }
  50% {
    opacity: 0.7;
  }
  75% {
    opacity: 0.8;
  }
  100% {
    opacity: 1;
  }
}
.time {
  font-size: 17rpx;
  border: 0.5rpx solid #3190e8;
  color: #3190e8;
  text-align: center;
  display: flex;
  align-items: center;
  padding: 3rpx;
  margin-left: 3rpx;
}
.reain {
  color: #ff6000;
  font-size: 20rpx;
  padding-left: 10rpx;
}
.title {
  margin-right: 10rpx;
  display: flex;
}
.title_box {
  display: flex;
  justify-content: space-between;
}
.bgc {
  background-color: #3190e8;
  color: white;
  font-size: 17rpx;
  padding: 3rpx;
  display: flex;
  align-items: center;
}
page {
  width: 100%;
  height: 100%;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  text-decoration: none;
  list-style: none;
}
.star {
  font-size: 20rpx;
}
.info {
  display: flex;
  align-items: center;
  padding-left: 20rpx;
}
.ulse li {
  margin-top: 15rpx;
}
.dls {
  padding: 30rpx;
  display: flex;
  border-bottom: 1px solid #f1f1f1;
}
.month_num {
  font-size: 20rpx;
  color: #666;
  padding-left: 20rpx;
}
.dd {
  display: flex;
  flex: 1;
}
.smallsize {
  font-size: 20rpx;
  height: 20rpx;
  display: flex;
  line-height: 20rpx;
  align-items: center;
  border: 1rpx solid #f1f1f1;
}
.img {
  width: 150rpx;
  height: 150rpx;
}
.one_li {
  width: 100%;
  display: flex;
  padding-top: 5rpx;
  align-items: center;
  justify-content: space-between;
}
.start {
  display: flex;
  align-items: center;
  padding-left: 20rpx;
}
.name {
  color: #333;
  font-weight: 700;
  font-size: 30rpx;
  padding-left: 30rpx;
}
.start p {
  font-size: 24rpx;
  color: #333;
  font-weight: 500;
  background-color: #ffd930;
  padding: 3rpx;
}
.therr_title {
  display: flex;
  margin-right: 10rpx;
}
.ulse {
  width: 100%;
  display: flex;
  flex-direction: column;
}
.NavBox {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.content {
  flex: 1;
  margin-top: 80rpx;
}
.title {
  font-size: 28rpx;
}
.titleBox {
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 1000;
  background-color: white;
  border-bottom: 1px solid #f1f1f1;
}
.uls {
  width: 100%;
  height: 80rpx;
  display: flex;
  justify-content: space-between;
}
.uls li {
  text-align: center;
  line-height: 80rpx;
  flex: 1;
  height: 100%;
  font-size: 28rpx;
  position: relative;
}
.uls li:last-child::after {
  content: "";
  width: 0;
}
.active::after {
  position: absolute;
  content: "";
  width: 4rpx;
  height: 60%;
  right: 0;
  top: 25%;
  background-color: #e4e4e4;
}
.active {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #3190e8;
}
.actives {
  display: flex;
  align-items: center;
  justify-content: center;
  color: #666;
}
.actives::after {
  position: absolute;
  content: "";
  width: 4rpx;
  height: 60%;
  right: 0;
  top: 25%;
  background-color: #e4e4e4;
}
.therrs {
  width: 0;
  height: 0;
  border-left: 10rpx solid transparent;
  border-right: 10rpx solid transparent;
  border-top: 10rpx solid #666;
  margin-left: 10rpx;
  transition: 0.3s;
}
.therr {
  width: 0;
  height: 0;
  border-left: 10rpx solid transparent;
  border-right: 10rpx solid transparent;
  border-top: 10rpx solid #3190e8;
  margin-left: 10rpx;
  transform: rotate(180deg);
  transition: 0.3s;
}
</style>
