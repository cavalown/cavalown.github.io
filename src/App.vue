<template>
  <div id="app">
    <Header />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
export default {
  name: "App",
  components: {
    Header,
    Footer,
  },
};
</script>

<style>
*,
*::after,
*::after {
  box-sizing: border-box;
}
#app {
  font-family: Comic Sans MS;
}
</style>
