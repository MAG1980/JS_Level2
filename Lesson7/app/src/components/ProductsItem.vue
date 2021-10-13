<template>
  <div class="products__item">
    <a class="products__product" href="single_page.html">
      <img src="@/assets/img/products/product_14.jpg" alt="товар" class="products__image">
      <p class="products__name">Mango People jacket№2</p>
    </a>
    <div class="products__item-rating">
      <p class="products__price"><span>$</span>20.00</p>
      <p class="products__item-stars">
        <i class="fas fa-star products__item-stars_golden" aria-hidden="true"></i>
        <i class="fas fa-star products__item-stars_golden" aria-hidden="true"></i>
        <i class="fas fa-star" aria-hidden="true"></i>
        <i class="fas fa-star" aria-hidden="true"></i>
        <i class="fas fa-star" aria-hidden="true"></i>
      </p>
    </div>
    <div class="products__add">
      <div class="products__add_wrapper">
        <a class="products__add_link" href="cart_page.html">
          <img src="@/assets/img/products/add_to_cart.png" alt="корзина" class="products__add_icon">
          <p class="products__add_text">Add to Cart</p>
        </a>
        <div class="products__add_links">
          <a class="products__add_small" href="cart_page.html">
            <img src="@/assets/img/icons/arrow_u_d.png" alt="обновить" class="products__add_icon">
          </a>
          <a class="products__add_small" href="cart_page.html">
            <img src="@/assets/img/icons/heart.png" alt="добавить в избранное"
                 class="products__add_icon">
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductsItem"
}
</script>

<style scoped>

</style>