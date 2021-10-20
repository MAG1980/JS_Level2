<template>
  <HeaderApp></HeaderApp>
  <Products></Products>
  <Offer></Offer>
  <Subscribe></Subscribe>
  <FooterApp></FooterApp>
</template>

<script>
import FooterApp from "./components/FooterApp.vue";
import HeaderApp from "./components/HeaderApp";
import Products from "./components/Products";
import Offer from "@/components/Offer";
import Subscribe from "@/components/Subscribe";

export default {
  name: "App",
  components: {
    HeaderApp,
    Products,
    Offer,
    Subscribe,
    FooterApp,
  },
  mounted() {
    this.$store.dispatch('fetchProducts', `/api/products`);
    this.$store.dispatch('fetchCart', '/api/cart');
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
