<template>
  <div class="wrap">
    <div class="header">
      <div>
        <img src="/static//images/timg.png" alt="">
        <div>
          <b @click="gologin">登录/注册</b>
          <span>暂无绑定手机号</span>
        </div>
      </div>
      <img src="/static/tabs/iconfontjiantou5.png" alt="">
    </div>
    <div class="section">
      <div class="section-h">
        <dl>
          <dt>0.00元</dt>
          <dd>我的余额</dd>
        </dl>
        <dl>
          <dt>0.00元</dt>
          <dd>我的优惠</dd>
        </dl>
        <dl>
          <dt>0.00元</dt>
          <dd>我的积分</dd>
        </dl>
      </div>
      <div class="section-list">
        <ul>
          <li><span>我的订单</span><img src="/static/tabs/iconfontjiantou5.png" alt=""></li>
          <li><span>积分商城</span><img src="/static/tabs/iconfontjiantou5.png" alt=""></li>
          <li><span>饿了么会员卡</span><img src="/static/tabs/iconfontjiantou5.png" alt=""></li>
        </ul>
      </div>
      <div class="section-bottom">
        <ul>
          <li><span>服务中心</span><img src="/static/tabs/iconfontjiantou5.png" alt=""></li>
          <li><span>下载饿了么APP</span><img src="/static/tabs/iconfontjiantou5.png" alt=""></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    gologin(){
      wx.navigateTo({
        url: '/pages/login/main'
      })
    }
  },
}
</script>

<style lang="scss">
  .wrap{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
  }
  .header{
    width:100%;
    display: flex;
    justify-content:space-between;
    align-items:center;
    background:#3190e8;
    padding:20rpx;
    box-sizing: border-box;
    color:#fff;
    >div{
      flex:1;
      display: flex;
      align-items:center;
      img{
        width:150rpx;
        height:150rpx;
        border-radius: 50%;
      }
      >div{
        padding-left:20rpx;
      }
    }
    >img{
      width:40rpx;
      height:40rpx;
    }
  }
  .section{
    width:100%;
    height: 100%;
    background: #f2f2f2;
  }
  .section-h{
    width: 100%;
    display: flex;
    padding:20rpx 0;
    background: #fff;
    margin-bottom:20rpx;
    dl{
      flex:1;
      text-align:center;
      border-right: 1rpx solid #ccc;
      &:last-child{
        border:none;
      }
    }
  }
  .section-list,.section-bottom{
    width:100%;
    background: #fff;
    margin-bottom:20rpx;
    li{
      height:100rpx;
      padding:0 10rpx;
      display: flex;
      justify-content:space-between;
      align-items:center;
      border-bottom: 1rpx solid #ccc;
      &:last-child{
        border:none;
      }
      >img{
        width:40rpx;
        height: 40rpx;
      }
    }
  }
</style>
