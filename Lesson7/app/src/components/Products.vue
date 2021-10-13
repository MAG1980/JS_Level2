<template>
  <section class="products container">
    <ProductsNavbar></ProductsNavbar>
    <div class="products__box">
      <ProductsFilter></ProductsFilter>
      <ProductsContent></ProductsContent>
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
  name: "Products",
  components: {
    ProductsNavbar,
    ProductsFilter,
    ProductsContent,
    ProductsPagination,
  }
}
</script>

<style scoped>

</style>