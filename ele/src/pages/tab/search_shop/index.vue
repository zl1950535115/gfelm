<template>
  <div>
    wangziyin
  </div>
</template>

<script>
import {mapState,mapActions} from 'vuex'
export default {
  computed: {
    ...mapState({
      SearchShopList: state=>state.index.SearchShopList
    })
  },
  methods: {
    ...mapActions({
      getSearchShopList:'index/getSearchShopList'
    })
  },
  mounted(){
    this.getSearchShopList({
      shopid:this.$root.$mp.query.id
    })
    console.log(this.SearchShopList)
  }
}
</script>

<style>

</style>
