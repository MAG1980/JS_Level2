<template>
  <div class="products__header">
    <form class="products__select" oninput=" result.value=(price__range.value)" action="#">
      <fieldset class=" products__select_top">
        <nav class=" products__select_area">
          <h3 class="products__select_heading">Trending now</h3>
          <div class="products__select_parameters">
            <a href="#" class="products__select_link">Bohemian</a>
            <a href="#" class="products__select_link">Floral</a>
            <a href="#" class="products__select_link">Lace</a>
            <a href="#" class="products__select_link">Floral</a>
            <a href="#" class="products__select_link">Lace</a>
            <a href="#" class="products__select_link">Bohemian</a>
          </div>
        </nav>
        <div class="products__select_area">
          <h3 class="products__select_heading">Size</h3>
          <fieldset class="products__select_parameters">
            <label for="XXS">
              <input id="XXS" type="checkbox">XXS</label>
            <label for="XS">
              <input id="XS" type="checkbox">XS</label>
            <label for="S">
              <input id="S" type="checkbox">S</label>
            <label for="M">
              <input id="M" type="checkbox">M</label>
            <label for="L">
              <input id="L" type="checkbox">L</label>
            <label for="XL">
              <input id="XL" type="checkbox">XL</label>
            <label for="XXL">
              <input id="XXL" type="checkbox">XXL</label>
          </fieldset>
        </div>
        <div class="products__select_area">
          <h3 class="products__select_heading">pRICE</h3>
          <fieldset class="products__select_parameters">
            <label id="price__range_label" for="price__range"></label>
            <input id="price__range" type="range" min="0" max="400" step="1">
            <output id="price__range_output" name="result" for="price__range">52</output>
          </fieldset>
        </div>
      </fieldset>
      <fieldset class="products__select_bottom">
        <div class="products__sort">
          <p>Sort By</p>
          <select name="sort" id="products__sort_by">
            <option value="name">Name</option>
            <option value="size">Size</option>
            <option value="color">Color</option>
            <option value="gender">Gender</option>
          </select>
        </div>
        <div class="products__show">
          <p>Show</p>
          <select name="show" id="products__show_count">
            <option value="name">03</option>
            <option value="size">06</option>
            <option value="color">09</option>
            <option value="gender">12</option>
          </select>
        </div>
      </fieldset>
    </form>
  </div>
</template>

<script>
export default {
  name: "ProductsFilter"
}
</script>

<style scoped>

</style>