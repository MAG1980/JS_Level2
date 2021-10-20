<template>
  <div class="products__item">
    <a class="products__product" href="single_page.html">
      <img :src="imgSrc" alt="товар" class="products__image">
      <p class="products__name">{{ product.product_name }}</p>
    </a>
    <div class="products__item-rating">
      <p class="products__price"><span>$</span>{{ product.price }}</p>
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
        <a class="products__add_link" href="cart_page.html" @click.prevent="addToCart">
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
  props: ['img', 'product'],
  name: "ProductsItem",
  data() {
    return {
      // imgSrc: 'http://placehold.it/300x300',
      imgSrc: `./img/products/product_${this.product.id_product}.jpg`,
    }
  },
  methods: {
    addToCart() {
      this.$store.dispatch('clickOnAdd', Object.assign({img_product: this.imgSrc}, this.product));
    }
  }
}
</script>

<style scoped>

</style>