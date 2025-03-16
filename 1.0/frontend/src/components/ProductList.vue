<template>
  <div class="product-list">
    <h2>Our Kombucha Products</h2>
    <div v-if="loading">Loading products...</div>
    <div v-else-if="error">Error loading products: {{ error }}</div>
    <div v-else-if="products.length === 0">No products available</div>
    <div v-else class="products-container">
      <div v-for="product in products" :key="product.id" class="product-item">
        <h3>{{ product.name }}</h3>
        <p>{{ product.description }}</p>
        <p><strong>Price:</strong> ${{ product.price }}</p>
        <div class="container-options">
          <h4>Container Options:</h4>
          <ul>
            <li v-for="(option, index) in product.containerOptions" :key="index">
              {{ option.type }} ({{ option.volume }}) - ${{ option.price }}
              <span v-if="!option.inStock" class="out-of-stock">Out of Stock</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex';

export default {
  name: 'ProductList',
  computed: {
    ...mapState('products', {
      loading: state => state.loading,
      error: state => state.error
    }),
    ...mapGetters('products', {
      products: 'allProducts'
    })
  }
}
</script>

<style scoped>
.product-list {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.products-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  margin-top: 20px;
}

.product-item {
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 15px;
  background-color: #f9f9f9;
}

.container-options {
  margin-top: 10px;
}

.container-options ul {
  list-style-type: none;
  padding-left: 0;
}

.container-options li {
  margin-bottom: 5px;
}

.out-of-stock {
  color: red;
  font-weight: bold;
  margin-left: 5px;
}
</style> 