<template>
  <header class="header">
    <div class="container">
      <div class="header__top">
        <div class="header__left">
          <div class="header__logo">
            <a class="header__brand" href="index.html">
              <img src="@/assets/img/header_logo.jpg"
                   srcset="@/assets/img/header_logo@2x.jpg 2x, @/assets/img/header_logo@3x.jpg 3x"
                   class="header__img" alt="Логотип магазина">BRAN<span>D</span>
            </a>
          </div>
          <details class="header__search_button">
            <summary class="header__search_title">Browse</summary>
            <div class="header__link_details">
              <div class="header__link_list browse">
                <h3 class="header__link_title">Women</h3>
                <a href="single_page.html" class="header__link_link">Dresses</a>
                <a href="single_page.html" class="header__link_link">Tops</a>
                <a href="single_page.html" class="header__link_link">Sweaters/Knits</a>

                <a href="single_page.html" class="header__link_link">Skirts/Shorts</a>
                <a href="single_page.html" class="header__link_link">Accessories</a>
              </div>
              <div class="header__link_list browse">
                <h3 class="header__link_title">Men</h3>
                <a href="single_page.html" class="header__link_link">Tees/Tank tops</a>
                <a href="single_page.html" class="header__link_link">Shirts/Polos</a>
                <a href="single_page.html" class="header__link_link">Sweaters</a>
                <a href="single_page.html" class="header__link_link">Sweatshirts/Hoodies</a>
                <a href="single_page.html" class="header__link_link">Blazers</a>
                <a href="single_page.html" class="header__link_link">Jackets/vests</a>
              </div>
            </div>
          </details>
          <HeaderSearch></HeaderSearch>
        </div>
        <div class="header__right">
          <Cart></Cart>
          <a class="header__account">My Account <i class="fa fa-caret-down" aria-hidden="true"></i></a>
        </div>
      </div>
      <nav class="header__nav">
        <ul class="header__menu">
          <li class="header__menu_list"><a class="header__link" href="index.html">HOME</a></li>
          <li class="header__menu_list"><a class="header__link active" href="products.html">MAN</a>
            <div class="header__link_box">
              <div class="header__link_list">
                <h3 class="header__link_title">Women</h3>
                <a href="single_page.html" class="header__link_link">Dresses</a>
                <a href="single_page.html" class="header__link_link">Tops</a>
                <a href="single_page.html" class="header__link_link">Sweaters/Knits</a>
                <a href="single_page.html" class="header__link_link">Jackets/Coats</a>
                <a href="single_page.html" class="header__link_link">Blazers</a>
                <a href="single_page.html" class="header__link_link">Denim</a>
                <a href="single_page.html" class="header__link_link">Leggings/Pants</a>
                <a href="single_page.html" class="header__link_link">Skirts/Shorts</a>
                <a href="single_page.html" class="header__link_link">Accessories</a>
              </div>
              <div class="header__link_list">
                <h3 class="header__link_title">Women</h3>
                <a href="single_page.html" class="header__link_link">Dresses</a>
                <a href="single_page.html" class="header__link_link">Tops</a>
                <a href="single_page.html" class="header__link_link">Sweaters/Knits</a>
                <a href="single_page.html" class="header__link_link">Jackets/Coats</a>
                <h3 class="header__link_title header__link_title_mt">Women</h3>
                <a href="single_page.html" class="header__link_link">Dresses</a>
                <a href="single_page.html" class="header__link_link">Tops</a>
                <a href="single_page.html" class="header__link_link">Sweaters/Knits</a>
              </div>
              <div class="header__link_list no_m-r">
                <h3 class="header__link_title">Women</h3>
                <a href="single_page.html" class="header__link_link">Dresses</a>
                <a href="single_page.html" class="header__link_link">Tops</a>
                <a href="single_page.html" class="header__link_link">Sweaters/Knits</a>
                <a href="single_page.html" class="header__link_link">Jackets/Coats</a>
                <a href="single_page.html" class="header__link_link">
                  <img class="header__link-img" src="@/assets/img/sale.jpg" alt="распродажа">
                  <img class="header__link-offer" src="@/assets/img/super__sale.png"
                       alt="супер распродажа"></a>
              </div>
            </div>
          </li>
          <li class="header__menu_list"><a class="header__link" href="products.html">WOMEN</a>
            <div class="header__link_box">
              <div class="header__link_list">
                <h3 class="header__link_title">Women</h3>
                <a href="single_page.html" class="header__link_link">Dresses</a>
                <a href="single_page.html" class="header__link_link">Tops</a>
                <a href="single_page.html" class="header__link_link">Sweaters/Knits</a>
                <a href="single_page.html" class="header__link_link">Jackets/Coats</a>
                <a href="single_page.html" class="header__link_link">Blazers</a>
                <a href="single_page.html" class="header__link_link">Denim</a>
                <a href="single_page.html" class="header__link_link">Leggings/Pants</a>
                <a href="single_page.html" class="header__link_link">Skirts/Shorts</a>
                <a href="single_page.html" class="header__link_link">Accessories</a>
              </div>
              <div class="header__link_list">
                <h3 class="header__link_title">Women</h3>
                <a href="single_page.html" class="header__link_link">Dresses</a>
                <a href="single_page.html" class="header__link_link">Tops</a>
                <a href="single_page.html" class="header__link_link">Sweaters/Knits</a>
                <a href="single_page.html" class="header__link_link">Jackets/Coats</a>
                <h3 class="header__link_title header__link_title_mt">Women</h3>
                <a href="single_page.html" class="header__link_link">Dresses</a>
                <a href="single_page.html" class="header__link_link">Tops</a>
                <a href="single_page.html" class="header__link_link">Sweaters/Knits</a>
              </div>
              <div class="header__link_list no_m-r">
                <h3 class="header__link_title">Women</h3>
                <a href="single_page.html" class="header__link_link">Dresses</a>
                <a href="single_page.html" class="header__link_link">Tops</a>
                <a href="single_page.html" class="header__link_link">Sweaters/Knits</a>
                <a href="single_page.html" class="header__link_link">Jackets/Coats</a>
                <a href="single_page.html" class="header__link_link">
                  <img class="header__link-img" src="@/assets/img/sale.jpg" alt="распродажа">
                  <img class="header__link-offer" src="@/assets/img/super__sale.png"
                       alt="супер распродажа"></a>
              </div>
            </div>
          </li>
          <li class="header__menu_list"><a class="header__link" href="products.html">KIDS</a>
            <div class="header__link_box">
              <div class="header__link_list">
                <h3 class="header__link_title">Women</h3>
                <a href="single_page.html" class="header__link_link">Dresses</a>
                <a href="single_page.html" class="header__link_link">Tops</a>
                <a href="single_page.html" class="header__link_link">Sweaters/Knits</a>

                <a href="single_page.html" class="header__link_link">Skirts/Shorts</a>
                <a href="single_page.html" class="header__link_link">Accessories</a>
              </div>
              <div class="header__link_list">
                <h3 class="header__link_title">Women</h3>
                <a href="single_page.html" class="header__link_link">Dresses</a>
                <a href="single_page.html" class="header__link_link">Tops</a>
                <a href="single_page.html" class="header__link_link">Sweaters/Knits</a>
                <a href="single_page.html" class="header__link_link">Jackets/Coats</a>
                <a href="single_page.html" class="header__link_link">Blazers</a>
                <a href="single_page.html" class="header__link_link">Denim</a>
                <a href="single_page.html" class="header__link_link">Leggings/Pants</a>
                <a href="single_page.html" class="header__link_link">Skirts/Shorts</a>
                <a href="single_page.html" class="header__link_link">Accessories</a>
              </div>
            </div>
          </li>
          <li class="header__menu_list header__dropdown_right"><a class="header__link"
                                                                  href="products.html">ACCOSERIESE</a>
            <div class="header__link_box">
              <div class="header__link_list">
                <h3 class="header__link_title">Women</h3>
                <a href="single_page.html" class="header__link_link">Dresses</a>
                <a href="single_page.html" class="header__link_link">Tops</a>
                <a href="single_page.html" class="header__link_link">Sweaters/Knits</a>
                <a href="single_page.html" class="header__link_link">Jackets/Coats</a>
                <a href="single_page.html" class="header__link_link">Blazers</a>
                <a href="single_page.html" class="header__link_link">Denim</a>
                <a href="single_page.html" class="header__link_link">Leggings/Pants</a>
                <a href="single_page.html" class="header__link_link">Skirts/Shorts</a>
                <a href="single_page.html" class="header__link_link">Accessories</a>
              </div>
              <div class="header__link_list">
                <h3 class="header__link_title">Women</h3>
                <a href="single_page.html" class="header__link_link">Dresses</a>
                <a href="single_page.html" class="header__link_link">Tops</a>
                <a href="single_page.html" class="header__link_link">Sweaters/Knits</a>
                <a href="single_page.html" class="header__link_link">Jackets/Coats</a>
                <h3 class="header__link_title header__link_title_mt">Women</h3>
                <a href="single_page.html" class="header__link_link">Dresses</a>
                <a href="single_page.html" class="header__link_link">Tops</a>
                <a href="single_page.html" class="header__link_link">Sweaters/Knits</a>
              </div>
              <div class="header__link_list no_m-r">
                <h3 class="header__link_title">Women</h3>
                <a href="single_page.html" class="header__link_link">Dresses</a>
                <a href="single_page.html" class="header__link_link">Tops</a>
                <a href="single_page.html" class="header__link_link">Sweaters/Knits</a>
                <a href="single_page.html" class="header__link_link">Jackets/Coats</a>
                <a href="single_page.html" class="header__link_link">
                  <img class="header__link-img" src="@/assets/img/sale.jpg" alt="распродажа">
                  <img class="header__link-offer" src="@/assets/img/super__sale.png"
                       alt="супер распродажа"></a>
              </div>
            </div>
          </li>
          <li class="header__menu_list header__dropdown_right"><a class="header__link"
                                                                  href="products.html">FEATURED</a>
            <div class="header__link_box">
              <div class="header__link_list">
                <h3 class="header__link_title">Women</h3>
                <a href="single_page.html" class="header__link_link">Dresses</a>
                <a href="single_page.html" class="header__link_link">Tops</a>
                <a href="single_page.html" class="header__link_link">Sweaters/Knits</a>
                <a href="single_page.html" class="header__link_link">Jackets/Coats</a>
                <a href="single_page.html" class="header__link_link">Blazers</a>
                <a href="single_page.html" class="header__link_link">Denim</a>
                <a href="single_page.html" class="header__link_link">Leggings/Pants</a>
                <a href="single_page.html" class="header__link_link">Skirts/Shorts</a>
                <a href="single_page.html" class="header__link_link">Accessories</a>
              </div>
              <div class="header__link_list">
                <h3 class="header__link_title">Women</h3>
                <a href="single_page.html" class="header__link_link">Dresses</a>
                <a href="single_page.html" class="header__link_link">Tops</a>
                <a href="single_page.html" class="header__link_link">Sweaters/Knits</a>
                <a href="single_page.html" class="header__link_link">Jackets/Coats</a>
                <h3 class="header__link_title header__link_title_mt">Women</h3>
                <a href="single_page.html" class="header__link_link">Dresses</a>
                <a href="single_page.html" class="header__link_link">Tops</a>
                <a href="single_page.html" class="header__link_link">Sweaters/Knits</a>
              </div>
              <div class="header__link_list no_m-r">
                <h3 class="header__link_title">Women</h3>
                <a href="single_page.html" class="header__link_link">Dresses</a>
                <a href="single_page.html" class="header__link_link">Tops</a>
                <a href="single_page.html" class="header__link_link">Sweaters/Knits</a>
                <a href="single_page.html" class="header__link_link">Jackets/Coats</a>
                <a href="single_page.html" class="header__link_link">
                  <img class="header__link-img" src="@/assets/img/sale.jpg" alt="распродажа">
                  <img class="header__link-offer" src="@/assets/img/super__sale.png"
                       alt="супер распродажа"></a>
              </div>
            </div>
          </li>
          <li class="header__menu_list header__dropdown_right"><a class="header__link"
                                                                  href="products.html">HOT
            DEALS</a>
            <div class="header__link_box">
              <div class="header__link_list">
                <h3 class="header__link_title">Women</h3>
                <a href="single_page.html" class="header__link_link">Dresses</a>
                <a href="single_page.html" class="header__link_link">Tops</a>
                <a href="single_page.html" class="header__link_link">Sweaters/Knits</a>
                <a href="single_page.html" class="header__link_link">Jackets/Coats</a>
                <a href="single_page.html" class="header__link_link">Blazers</a>
                <a href="single_page.html" class="header__link_link">Denim</a>
                <a href="single_page.html" class="header__link_link">Leggings/Pants</a>
                <a href="single_page.html" class="header__link_link">Skirts/Shorts</a>
                <a href="single_page.html" class="header__link_link">Accessories</a>
              </div>
              <div class="header__link_list">
                <h3 class="header__link_title">Women</h3>
                <a href="single_page.html" class="header__link_link">Dresses</a>
                <a href="single_page.html" class="header__link_link">Tops</a>
                <a href="single_page.html" class="header__link_link">Sweaters/Knits</a>
                <a href="single_page.html" class="header__link_link">Jackets/Coats</a>
                <h3 class="header__link_title header__link_title_mt">Women</h3>
                <a href="single_page.html" class="header__link_link">Dresses</a>
                <a href="single_page.html" class="header__link_link">Tops</a>
                <a href="single_page.html" class="header__link_link">Sweaters/Knits</a>
              </div>
              <div class="header__link_list no_m-r">
                <h3 class="header__link_title">Women</h3>
                <a href="single_page.html" class="header__link_link">Dresses</a>
                <a href="single_page.html" class="header__link_link">Tops</a>
                <a href="single_page.html" class="header__link_link">Sweaters/Knits</a>
                <a href="single_page.html" class="header__link_link">Jackets/Coats</a>
                <a href="single_page.html" class="header__link_link">
                  <img class="header__link-img" src="@/assets/img/sale.jpg" alt="распродажа">
                  <img class="header__link-offer" src="@/assets/img/super__sale.png"
                       alt="супер распродажа"></a>
              </div>
            </div>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
import Cart from "@/components/Cart";
import HeaderSearch from "@/components/HeaderSearch";

export default {
  name: "HeaderApp",
  components: {
    Cart,
    HeaderSearch,
  }
}
</script>

<style scoped>

</style>