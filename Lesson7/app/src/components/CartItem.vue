<template>
  <div class="header__card">
    <a class="header__card_link">
      <img src="@/assets/img/products/product_mini_2.jpg" alt="товар" class="header__card_img">
      <div class="header__card_info">
        <h3 class="header__card_title">{{ cartItem.product_name }}</h3>
        <p class="header__card_icons"><i class="fa fa-star" aria-hidden="true"></i>
          <i class="fa fa-star" aria-hidden="true"></i>
          <i class="fa fa-star" aria-hidden="true"></i>
          <i class="fa fa-star" aria-hidden="true"></i>
          <i class="fa fa-star-half-o" aria-hidden="true"></i>
        </p>
        <p class="header__card_text">{{ cartItem.quantity }} x ${{ cartItem.price }}</p>
      </div>
    </a>
    <button class="header__card_close"
            type="button"
            @click="this.$emit('remove-item', cartItem)">
      <i class="fa fa-times-circle" aria-hidden="true"></i>
    </button>
  </div>
</template>

<script>
export default {
  props: ["cartItem"],
  name: "CartItem"
}
</script>

<style scoped>

</style>