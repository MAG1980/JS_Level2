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
  methods: {
    getJson(url) {
      return fetch(url)
          .then(result => result.json())
          .catch(error => console.log(error))
    },
    addProduct(product) {
      this.clickedProduct = product;
      this.clickOnProduct = !this.clickOnProduct;
    },
  },
  mounted() {

    this.$store.dispatch('fetchProducts');

    // Получение массива товаров корзины с сервера
    let cartURL = this.$store.getters.fullCartUrl;
    let cartProducts = this.getJson(cartURL)
        .then(data => {
          let arr = [];
          for (let item of data.contents) {
            arr.push(item);
          }
          return arr
        })
    this.$store.dispatch('fetchCart', cartProducts);
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
