<template>
  <div class="products__content">
    <ProductsItem @add-product="addProduct"
                  v-for="item in this.$store.getters.productsFiltered"
                  :key="item.id_product"
                  :img="img"
                  :product="item">
    </ProductsItem>
  </div>
</template>

<script>
import ProductsItem from "@/components/ProductsItem";

export default {
  name: "ProductsContent",
  components: {
    ProductsItem,
  },
  data() {
    return {
      API: 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses',
      userSearch: '',
      showCart: false,
      cartItems: [],
      imgCart: 'https://placehold.it/50x100',
      imgProduct: 'https://placehold.it/200x150',
    }
  },
  methods: {
    addProduct(product) {
      this.$emit('add-item', product);
    },
  },
}
</script>

<style scoped>

</style>