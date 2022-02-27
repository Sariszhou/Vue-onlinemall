<template>
  <div>
    <Header />
    <!-- 路由组件的出口 即显示位置 -->
    <router-view></router-view>
    <!-- <Footer v-show="$route.path=='/home'||$route.path=='/Search'" /> -->
    <Footer v-show="$route.meta.show" />
  </div>
</template>

<script>
import Header from './components/Header'
import Footer from './components/Footer/index.vue'
export default {
  name: 'App',
  components: {
    Header,
    Footer
  },
  mounted(){
    // 考虑性能 将三级分类请求放在app中 只需要请求一次 而不是放在typeNav中
    //派发一个action ||获取商品分类的三级列表的数据
    this.$store.dispatch('categoryList')
  }
}
</script>

<style>
</style>
