<template>
  <section class="products__subscribe">
    <div class="container subscribe__wrapper">
      <div class="subscribe__vertical_line">
        <figure class="subscribe__quote">
          <div class="subscribe__portrait">
            <img src="@/assets/img/women_portrait.jpg" alt="портрет женщины" class="subscribe__photo">
          </div>
          <div class="subscribe__text">
            <figcaption class="subscribe__quote_text">“Vestibulum quis porttitor dui! Quisque viverra nunc
              mi,
              a pulvinar purus condimentum a. Aliquam condimentum mattis neque sed pretium”</figcaption>
            <p class="subscribe__signature">Bin Burhan</p>
            <p class="subscribe__place">Dhaka, Bd</p>
            <div class="subscribe__lister">
              <div class="subscribe__lister_item"></div>
              <div class="subscribe__lister_item"></div>
              <div class="subscribe__lister_item"></div>
            </div>
          </div>

        </figure>

      </div>
      <div class="subscribe__form">
        <h4 class="subscribe__heading">Subscribe</h4>
        <p class="subscribe__heading_text">FOR OUR NEWLETTER AND PROMOTION</p>
        <form class="subscribe__form_input" action="#">
          <input class="subscribe__email" type="email" placeholder="Enter Your Email">
          <button class="subscribe__button" type="submit">Subscribe</button>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Subscribe"
}
</script>

<style scoped>

</style>