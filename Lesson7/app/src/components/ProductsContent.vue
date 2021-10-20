<template>
  <div class="products__content">
    <ProductsItem @add-product="addProduct"
                  v-for="item in this.$store.getters.productsFiltered"
                  :key="item.id_product"
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
  methods: {
    addProduct(product) {
      this.$emit('add-item', product);
    },
  },
}
</script>

<style scoped>

</style>