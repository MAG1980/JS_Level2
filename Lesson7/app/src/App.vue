<template>
  <HeaderApp :reload="reload" :clickOnProduct="clickOnProduct" :clickedProduct="clickedProduct"></HeaderApp>
  <Products
      @add-product="addProduct">
  </Products>
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
  data() {
    return {
      reload: 'false',
      clickOnProduct: false,
      clickedProduct: null,
    }
  },
  methods: {
    addProduct(product) {
      this.clickedProduct = product;
      this.clickOnProduct = !this.clickOnProduct;
    },
  },
  mounted() {
    // this.reload = "true";
    let url = this.$store.getters.fullCatalogUrl;
    console.log(url);
    this.$store.dispatch('getJson', url);
  }

};
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
