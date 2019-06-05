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
            <input type="text" placeholder="账号" v-model="name">
          </li>
          <li>
            <input type="password" name="" id="" placeholder="密码" v-model="pwd">
          </li>
          <li>
            <input type="text" placeholder="验证码" v-model="codes">
            <div>
              <img :src="code" alt="">
              <div>
                <span>看不清</span>
                <span @click="getCodes" style="color:#3190e8">换一张</span>
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
        <div class="login" @click="login">登录</div>
      </div>
      <div class="reset">重置密码?</div>
    </div>
  </div>
</template>

<script>
import {mapState,mapActions} from 'vuex';

export default {
  data() {
    return {
      name:'',
      pwd:'',
      codes:''
    }
  },
  computed: {
    ...mapState({
      code: state=>state.index.code
    })
  },
  methods: {
    ...mapActions({
      getCode: 'index/getCode',
      getLogin: 'index/getLogin'
    }),
    getCodes(){
      this.getCode()
    },
    login(){
      if(!this.name || !this.pwd || !this.codes){
        wx.showModal({
          title: '提示',
          content: '请输入用户名/密码/验证码',
          showCancel:false,
          success (res) {
            if (res.confirm) {
              console.log('用户点击确定')
            }
          }
        })
      }else{
        console.log(this.name,this.pwd,this.codes)
        this.getLogin({username:this.name,password:this.pwd,captcha_code:this.codes})
      }
      
    }
  },
  mounted(){
    this.getCode()
  }
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
        border-bottom:1rpx solid #ccc;
        &:last-child{
          display:flex;
          justify-content: space-between;
          align-items: center;
          border-bottom:0;
          >div{
            width:40%;
            display: flex;
            justify-content: space-around;
            align-items: center; 
            >img{
              width: 145rpx;
              height: 96rpx;
            }
            >div{
              display: flex;
              flex-direction:column;
              font-size:30rpx;
              >span{
                padding:5rpx 0;
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
