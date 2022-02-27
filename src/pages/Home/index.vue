<template>
  <div>
    <!-- 三级联动全局组件 三级联动已经注册为全局组件 不需要重新引入 -->
    <TypeNav />
    <ListContainer />
    <TodayRecommend />
    <Rank />
    <Like />
    <Floor v-for="(floor, index) in floorList" :key="floor.id" :floor="floor" />
    <Brand />
  </div>
</template>
<script>
import { mapState } from "vuex";
import ListContainer from "./ListContainer/index.vue";
import TodayRecommend from "@/pages/Home/TodayRecommend";
import Rank from "@/pages/Home/Rank";
import Like from "@/pages/Home/Like";
import Floor from "@/pages/Home/Floor";
import Brand from "@/pages/Home/Brand";
export default {
  name: "Home",
  components: { ListContainer, TodayRecommend, Rank, Like, Floor, Brand },
  mounted() {
    this.$store.dispatch('getFloorList')
  },
  computed: {
    ...mapState({ floorList: state => state.home.floorList })
  }
}
</script>
<style scoped>
</style>