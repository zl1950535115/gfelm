<template>
  <div class="box">
    <ul class="reset">
        <li><input type="text" placeholder="账号" v-model="user"></li>
        <li><input type="text" placeholder="旧密码" v-model="pwd"></li>
        <li><input type="text" placeholder="请输入新密码" v-model="newpwd"></li>
        <li><input type="text" placeholder="请确认密码" v-model="newpwdS"></li>
        <li>
            <input type="text" placeholder="验证码" v-model="codes">
            <img :src='code'>
            <div class="lter">
                <p>看不清</p>
                <p @click="getCodes" style="color:#3190e8">换一张</p>
            </div>
        </li>
    </ul>
    <button @click="sureAmend">确认修改</button>
  </div>
</template>

<script>
import {mapState,mapActions} from 'vuex';

export default {
  data() {
    return {
      user:'',
      pwd:'',
      newpwd:'',
      newpwdS:'',
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
      amendPwd: 'index/amendPwd'
    }),
    sureAmend(){
      if(!this.user || !this.pwd || !this.newpwd || !this.newpwdS || !this.codes){
        wx.showModal({
          title: '提示',
          content: '信息请输入完整',
          showCancel:false,
          success (res) {
            if (res.confirm) {
              console.log('用户点击确定')
            }
          }
        })
      }else{
        this.amendPwd({
          username:this.user,
          oldpassWord:this.pwd,
          newpassword:this.newpwd,
          confirmpassword:this.newpwdS,
          captcha_code:this.codes
          });
      }
    },
    getCodes(){
      this.getCode();
    }
  },
  mounted(){
    this.getCode();
    
  }
}
</script>

<style lang="scss">
.box {
  width: 100%;
  height: 100%;
  .reset {
    width: 100%;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    li {
      width: 100%;
      box-sizing: border-box;
      padding: 10px;
      height: 44px;
      border-bottom: 1px solid #ccc;
    }
    li:last-child {
      display: flex;
      align-items: center;
      justify-content: space-between;
      img {
          width: 70px;
          height: 40px;
      }
    }
  }
  button {
    background: #4cd964;
    color: #fff;
    margin: 10px;
    height: 40px;
    text-align: center;
    line-height: 40px;
  }
}
</style>
