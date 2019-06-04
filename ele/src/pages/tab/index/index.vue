<template>
  <p @click="getlsit">点击进入何运正的页面</p>
</template>

<script>
import {mapState, mapActions} from 'vuex';

export default {
  computed: {
    ...mapState({
      list: state=>state.index.list
    })
  },
  methods: {
    ...mapActions({
      getCateList: 'index/getCateList'
    }),
    getlsit(){
      wx.navigateTo({
       url: '../../NavDetail/main',
     });
       
    }
  },
  mounted() {
    console.log('this.list...', this.list);
    this.getCateList();
  },
}
</script>

<style scoped>

</style>
