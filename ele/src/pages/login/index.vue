<template>
  <div class="wrap">
    <div class="header">
      <img src="/static/images/zuojiantou_3.png" alt="">
      <span>密码登录</span>
      <span class="after"></span>
    </div>
    <div class="section">
      <div class="list">
        <ul>
          <li>
            <input type="text" placeholder="账号">
          </li>
          <li>
            <input type="password" name="" id="" placeholder="密码">
          </li>
          <li>
            <span>验证码</span>
            <div>
              <span>6666</span>
              <div>
                <span>看不清</span>
                <span>换一张</span>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div class="tips">
        <span>温馨提示：未注册过的账号，登录时将自动注册</span>
        <span>注册过的用户可凭账号密码登录</span>
      </div>
      <div class="login-wrap">
        <div class="login">登录</div>
      </div>
      <div class="reset">重置密码?</div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang='scss'>
  .wrap{
    width:100%;
    height: 100%;
    display: flex;
    flex-direction: column;
  }
  .header{
    width: 100%;
    height: 100rpx;
    background: #3190e8;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding:0 10rpx;
    box-sizing: border-box;
    color:#fff;
    >img{
      width:50rpx;
      height:50rpx;
    }
  }
  .after{
    width: 40rpx;
    height: 40rpx;
  }
  .section{
    width: 100%;
    flex:1;
    background: #f2f2f2;
    .list{
      width:100%;
      background: #fff;
      li{
        padding:20rpx 30rpx;
        box-sizing: border-box;
        &:last-child{
          display:flex;
          justify-content: space-between;
          align-items: center;
          >div{
            display: flex;
            justify-content: space-around;
            align-items: center; 
            >div{
              display: flex;
              flex-direction:column;
              font-size:30rpx;
              >span{
                padding:5rpx 30rpx;
                box-sizing: border-box;
              }
            }
          }
        }
      }
    }
  }
  .tips{
    width:100%;
    padding:20rpx 30rpx;
    box-sizing: border-box;
    display: flex;
    flex-direction:column;
    font-size:30rpx;
    color:red;
    span{
      &:first-child{
        padding-bottom:10rpx;
        box-sizing: border-box;
      }
    }
  }
  .login-wrap{
    padding:0 25rpx 50rpx;
    box-sizing: border-box;
  }
  .login{
    width:100%;
    height:100rpx;
    background: #4cd964;
    color:#fff;
    text-align:center;
    line-height: 100rpx;
    margin:0;
    box-sizing: border-box;
    border-radius: 10rpx;
  }
  .reset{
    width:100%;
    text-align:right;
    padding:0 25rpx;
    box-sizing: border-box;
    color:#3b95e9;
  }
</style>
