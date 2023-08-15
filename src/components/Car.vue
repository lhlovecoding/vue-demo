<template>
  <div>
    <h1>这是Car组件</h1>
    <h3>{{ desc }}</h3>
    <ul>
      <li v-for="item in carList" :key="item.id">
        {{ item.name }}
      </li>
    </ul>
  </div>
</template>
<script>
import { mapGetters, mapState } from "vuex";
export default {
  data() {
    return {};
  },
  computed: {
    // carList() {
    //   return this.$store.state.carStore.carList;
    // },
    ...mapState("Car", ["carList"]),
    // desc() {
    //   return this.$store.getters["Car/addHeart"];
    // },
    ...mapGetters("Car", { desc: "addHeart" }),
  },
  methods: {},
};
</script>
<style>
</style>
