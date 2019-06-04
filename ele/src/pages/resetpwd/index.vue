<template>
  <div class="box">
    <ul class="reset">
        <li><input type="text" placeholder="账号"></li>
        <li><input type="text" placeholder="旧密码" ></li>
        <li><input type="text" placeholder="请输入新密码" ></li>
        <li><input type="text" placeholder="请确认密码" ></li>
        <li>
            <input type="text" placeholder="验证码" >
            <img :src='code'>
            <div class="lter">
                <p>看不清</p>
                <p>换一张</p>
            </div>
        </li>
    </ul>
    <button>确认修改</button>
  </div>
</template>

<script>
import {mapState,mapActions} from 'vuex';

export default {
  computed: {
    ...mapState({
      code: state=>state.index.code
    })
  },
  methods: {
    ...mapActions({
      getCode: 'index/getCode'
    })
  },
  mounted(){
    this.getCode()
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
