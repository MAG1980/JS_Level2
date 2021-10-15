<template>
  <div class="header__search">

    <form action="#" class="header__search_form" @submit.prevent="filter">
      <input class="header__search_text"
             type="text" placeholder="Search for Item..."
             v-model="userSearch">
      <button class="header__search_scope" type="submit" src="@/assets/img/scope.png"></button>
    </form>

  </div>
</template>

<script>
export default {
  name: "HeaderSearch",
  data() {
    return {
      userSearch: '',
    }
  },
  methods: {
    filter() {
      this.$store.commit('filter', this.userSearch);
      this.userSearch = '';
    }
  }
}

</script>

<style scoped>

</style>