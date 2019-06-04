<template>
  <div class="search_box">
    <div class="input_box">
      <input placeholder="请输入商家或美食名称" v-model="message" />
      <button @click='submit'>提交</button>
    </div>
    <div v-if="flag" class='result_box'>
      <div class="result_true_box" v-if='trueOrFalse'>
        <p>商家</p>
        <dl v-for="(value,index) in SearchList" :key="index">
          <dt>
            <img src="/static/images/user.png" alt="">
          </dt>
          <dd>
            <p>{{value.name}}</p>
            <p>月售 {{value.recent_order_num}} 单</p>
            <p><span>{{value.float_minimum_order_amount }} 元起送</span>/<span>距离{{value.distance}}</span></p>
          </dd>
        </dl>
    </div>
    <div class="result_false_box" v-else>
      <p>很抱歉! 无搜索结果</p>
    </div>
  </div>
    </div>
    
</template>

<script>
import {mapState, mapActions} from 'vuex';
export default {
  data(){
    return {
      message:'',
      trueOrFalse:true,
      flag:false
    }
  },
  computed: {
    ...mapState({
      SearchList: state=>state.index.SearchList
    })
  },
  methods: {
    ...mapActions({
      getSearchList: 'index/getSearchList'
    }),
    async submit() {
      await this.getSearchList({
        keyword:this.message
      })
      if(this.message===''){
        this.flag=false
      }else{
        this.flag=true
        if(this.SearchList.length>0){
          this.trueOrFalse=true
        }else{
          this.trueOrFalse=false
        }
      }
      
    },
  },
}
</script>

<style lang='scss'>
  .search_box{
    width: 100%;
    height: 100%;
    overflow: auto;
    // display: flex;
    // flex-direction: column;
    background: #F5F5F5;
  }
  .input_box{
    width: 100%;
    background: #fff;
    display: flex;
    padding: 30rpx 0;
    box-sizing: border-box;
    input{
      width: 70%;
      height:70rpx;
      background: #F2F2F2;
      color:#666;
      border-radius: 10rpx;
      margin-left: 3%;
      padding: 0 14rpx;
      box-sizing: border-box;
      font-size:32rpx;
    }
    button{
      width: 20%;
      height: 70rpx;
      font-size: 32rpx;
      color:#fff;
      background: #3190E8;
      border-radius: 10rpx;
      line-height: 70rpx;
    }
  }
  .result_box{
    flex: 1;
    // overflow: auto;
  }
  .result_false_box{
    width: 100%;
    background: #fff;
    margin-top: 10rpx;
    text-align: center;
    padding: 25rpx 0;
    font-size: 34rpx;
  }
  .result_true_box{
    width: 100%;
    height: 100%;
    background: #F5F5F5;
    >p{
      width: 100%;
      padding: 30rpx;
      box-sizing: border-box;
      color: #666;
      background: #F5F5F5;
      font-size: 32rpx;
    }
    dl{
      width: 100%;
      height: 215rpx;
      display: flex;
      background: #fff;
      border-bottom: 1px solid #eee;
      dt{
        width: 150rpx;
        height: 100%;
        img{
          width: 120rpx;
          height: 120rpx;
          margin-left: 15rpx;
          margin-top: 30rpx;
        }
      }
      dd{
        flex: 1;
        padding: 0 20rpx 0 10rpx;
        p{
          font-size: 32rpx;
          padding: 16rpx 0 0 0 ;
          margin: 0;
          box-sizing: border-box;
        }
        p:last-child{
          padding-bottom:16rpx;
          border-bottom: 1px solid #eee;
        }
      }
    }
  }
</style>
