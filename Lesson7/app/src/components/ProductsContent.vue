<template>
  <div class="products__content">
    <ProductsItem
        v-for="item in products"
        :key="item.id_product"
        :img="img"
        :product="item">
    </ProductsItem>
    <ul>
      <li v-for="product in products" :key="product.id_product">{{ product.product_name }}</li>
    </ul>
    <p>{{ marker }}</p>
  </div>
</template>

<script>
import ProductsItem from "@/components/ProductsItem";

export default {
  props: ["reload"],
  name: "ProductsContent",
  components: {
    ProductsItem,
  },
  data() {
    return {
      API: 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses',
      userSearch: '',
      showCart: false,
      catalogUrl: '/catalogData.json',
      cartUrl: '/getBasket.json',
      cartItems: [],
      filtered: [],
      imgCart: 'https://placehold.it/50x100',
      products: [],
      imgProduct: 'https://placehold.it/200x150',
      marker: 0,
    }
  },
  watch: {
    reload() {
      this.marker += 1;
      // this.getJson(`${this.API + this.cartUrl}`)
      //     .then(data => {
      //       for (let item of data.contents) {
      //         this.$data.cartItems.push(item);
      //       }
      //     });
      this.getJson(`${this.API + this.catalogUrl}`)
          .then(data => {
            for (let item of data) {
              console.log(item);
              this.$data.products.push(item);
              this.$data.filtered.push(item);
            }
          });
      // this.getJson(`getProducts.json`)
      //     .then(data => {
      //       for (let item of data) {
      //         this.$data.products.push(item);
      //         this.$data.filtered.push(item);
      //       }
      //     };
    }
  },
  methods: {
    getJson(url) {
      return fetch(url)
          .then(result => result.json())
          .catch(error => console.log(error))
    }
    ,
  }
  ,
}
</script>

<style scoped>

</style>