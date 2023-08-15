<template>
  <div id="app">
    <User />
    <hr />
    <Car />
  </div>
</template>

<script>
import User from "./components/User.vue";
import Car from "./components/Car.vue";

export default {
  name: "App",
  components: {
    User,
    Car,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
