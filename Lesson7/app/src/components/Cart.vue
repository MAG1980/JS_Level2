<template>
  <details class="header__cart">
    <summary class="header__cart_title">
      <img src="@/assets/img/cart.svg">
      <span class="header__cart-marker visually-hidden" id="header__cart-counter">1</span>
    </summary>

    <div class="header__cart_box" id="header__cart-box">
      <div class="header__cards" id="header__cards">
        <CartItem></CartItem>
        <!--                                <div class="header__card">
            <a class="header__card_link">
                <img src="img/products/product_mini_1.jpg" alt="товар" class="header__card_img">
                <div class="header__card_info">
                    <h3 class="header__card_title">Rebox Zane</h3>
                    <p class="header__card_icons"><i class="fa fa-star" aria-hidden="true"></i>
                        <i class="fa fa-star" aria-hidden="true"></i>
                        <i class="fa fa-star" aria-hidden="true"></i>
                        <i class="fa fa-star" aria-hidden="true"></i>
                        <i class="fa fa-star-half-o" aria-hidden="true"></i>
                    </p>
                    <p class="header__card_text">1 x $250</p>
                </div>
            </a>
            <button class="header__card_close" type="button"><i class="fa fa-times-circle"
                    aria-hidden="true"></i></button>
        </div>
        <div class="header__card">
            <a class="header__card_link">
                <img src="img/products/product_mini_2.jpg" alt="товар" class="header__card_img">
                <div class="header__card_info">
                    <h3 class="header__card_title">Rebox Zane</h3>
                    <p class="header__card_icons"><i class="fa fa-star" aria-hidden="true"></i>
                        <i class="fa fa-star" aria-hidden="true"></i>
                        <i class="fa fa-star" aria-hidden="true"></i>
                        <i class="fa fa-star" aria-hidden="true"></i>
                        <i class="fa fa-star-half-o" aria-hidden="true"></i>
                    </p>
                    <p class="header__card_text">1 x $250</p>
                </div>
            </a>
            <button class="header__card_close" type="button"><i class="fa fa-times-circle"
                    aria-hidden="true"></i></button>
        </div> -->
      </div>
      <div class="header__cart_summary">
        <p>TOTAL</p>
        <p id="header__cart-total-price">$0</p>
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
  data () {
    return {
      userSearch: '',
      showCart: false,
      catalogUrl: '/catalogData.json',
      cartUrl: '/getBasket.json',cartItems: [],
      imgCart: 'https://placehold.it/50x100'
    }
  },
}
</script>

<style scoped>

</style>