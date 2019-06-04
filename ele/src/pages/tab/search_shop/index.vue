<template>
  <div>
    wangziyin
  </div>
</template>

<script>
import {mapState,mapActions} from 'vuex'
export default {
  methods: {
    ...mapActions({
      getSearchShopList:'index/getSearchShopList'
    })
  },
  mounted(){
    this.getSearchShopList({
      shopid:this.$root.$mp.query.id
    })
  }
}
</script>

<style>

</style>
