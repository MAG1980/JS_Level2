<template>
  <details class="header__cart">
    <summary class="header__cart_title">
      <img src="@/assets/img/cart.svg">
      <span class="header__cart-marker visually-hidden" id="header__cart-counter">1</span>
    </summary>

    <div class="header__cart_box" id="header__cart-box">
      <div class="header__cards" id="header__cards">
        <CartItem
            v-for="item in cartItems"
            :key="item.id_product"
            :img="imgCart"
            :cartItem="item"
            @remove-item="remove"
        ></CartItem>
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
  props: ["reload", "clickOnProduct", "clickedProduct"],
  name: "Cart",
  components: {
    CartItem,
  },
  data() {
    return {
      API: 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses',
      userSearch: '',
      showCart: false,
      catalogUrl: '/catalogData.json',
      cartUrl: '/getBasket.json',
      cartItems: [],
      imgCart: 'https://placehold.it/50x100',
    }
  },
  watch: {
    reload() {
      this.getJson(`${this.API + this.cartUrl}`)
          .then(data => {
            for (let item of data.contents) {
              this.$data.cartItems.push(item);
            }
          });
    },
    clickOnProduct() {
      console.log(this.clickedProduct);
      this.addProduct(this.clickedProduct);
    }
  },
  methods: {
    getJson(url) {
      return fetch(url)
          .then(result => result.json())
          .catch(error => console.log(error))
    },
    addProduct(item) {
      this.getJson(`${this.API}/addToBasket.json`)
          .then(data => {
            if (data.result === 1) {
              let find = this.cartItems.find(el => el.id_product === item.id_product);
              if (find) {
                find.quantity++;
              } else {
                const prod = Object.assign({quantity: 1}, item);
                this.cartItems.push(prod)
              }
            }
          })
    },
    remove(item) {
      this.getJson(`${this.API}/addToBasket.json`)
          .then(data => {
            if (data.result === 1) {
              if (item.quantity > 1) {
                item.quantity--;
              } else {
                this.cartItems.splice(this.cartItems.indexOf(item), 1);
              }
            }
          })
    },
  }
}
</script>

<style scoped>

</style>