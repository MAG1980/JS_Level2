<template>
  <details class="header__cart">
    <summary class="header__cart_title">
      <img src="@/assets/img/cart.svg">
      <span class="header__cart-marker visually-hidden" id="header__cart-counter">1</span>
    </summary>

    <div class="header__cart_box" id="header__cart-box">
      <div class="header__cards" id="header__cards">
        <CartItem
            v-for="item in this.$store.getters.productsCart"
            :key="item.id_product"
            :img="item.img_product"
            :cartItem="item"
        ></CartItem>
      </div>
      <div class="header__cart_summary">
        <p v-if=this.$store.getters.isEmptyCart>Корзина пуста</p>
        <p v-else>TOTAL</p>
        <p id="header__cart-total-price">${{ totalPrice }}</p>
      </div>
      <a href="checkout.html" class="header__button header__button_checkout">Checkout</a>
      <a href="shopping_cart.html" class="header__button header__button_go-to-cart">Go to cart</a>


    </div>
  </details>
</template>

<script>
import CartItem from "@/components/CartItem";

export default {
  name: "Cart",
  components: {
    CartItem,
  },
  data() {
    return {
      imgCart: 'http://placehold.it/100x75',
    }
  },
  computed: {
    totalPrice() {
      return this.$store.getters.productsCart.reduce((sum, item) => {
        return sum += item.quantity * item.price;
      }, 0)
    }
  },
  methods: {}
}
</script>

<style scoped>

</style>