<template>
  <section class="products container">
    <ProductsNavbar></ProductsNavbar>
    <div class="products__box">
      <ProductsFilter></ProductsFilter>
      <ProductsContent
          :reload="reload"
          @add-item="addProduct">
      </ProductsContent>
      <ProductsPagination></ProductsPagination>
    </div>
  </section>
</template>

<script>
import ProductsNavbar from "@/components/ProductsNavbar";
import ProductsFilter from "@/components/ProductsFilter";
import ProductsContent from "@/components/ProductsContent";
import ProductsPagination from "@/components/ProductsPagination";

export default {
  props: ["reload"],
  name: "Products",
  components: {
    ProductsNavbar,
    ProductsFilter,
    ProductsContent,
    ProductsPagination,
  },
  methods: {
    addProduct(product) {
      this.$emit('add-product', product);
    },
  }
}
</script>

<style scoped>

</style>