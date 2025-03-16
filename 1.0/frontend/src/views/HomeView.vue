<template>
  <div class="home">
    <img alt="booch" src="../../public/images/boochiest.jpg" class="hero-image">
    <h1>Welcome to {{ appName }}</h1>
    <p>Discover the finest kombucha in town!</p>
    <ProductList />
  </div>
</template>

<script>
// @ is an alias to /src
import { mapState } from 'vuex';
import ProductList from '@/components/ProductList.vue';

export default {
  name: 'HomeView',
  components: {
    ProductList
  },
  computed: {
    ...mapState({
      appName: state => state.appName
    })
  }
}
</script>

<style scoped>
.hero-image {
  height: 40vh; /* 20% of the viewport height */
  width: auto;
  object-fit: contain;
  margin: 1rem 0;
}
</style>
