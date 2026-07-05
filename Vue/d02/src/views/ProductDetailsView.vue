<template>
  <div class="product-details">
    <div v-if="product" class="details-layout">
      <div class="details-image">
        <img :src="product.imageUrl"  :alt="product.name">
      </div>

      <div class="details-content">
        <header class="details-header">
          <span class="category-tag">{{ product.category }}</span>
          <h1>{{ product.name }}</h1>
        </header>

        <div class="details-body">
          <section class="info-group">
            <label>Price</label>
            <p class="price-value">${{ product.price }}</p>
          </section>

          <section class="info-group">
            <label>Description</label>
            <p class="description-text">{{ product.description }}</p>
          </section>

        </div>

        <footer class="details-footer">
          <router-link to="/products" class="btn btn-outline">
            <i class="fas fa-arrow-left"></i> Back to Dashboard
          </router-link>
          <router-link :to="'/products/edit/' + product.id" class="btn btn-primary">
            <i class="fas fa-edit"></i> Edit Details
          </router-link>
        </footer>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, onMounted } from 'vue'
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'

export default {
  name: 'ProductDetailsView',
  setup() {
    const store = useStore()
    const route = useRoute()

    const product = computed(() => store.state.currentProduct)

    onMounted(() => {
      store.dispatch('fetchProductById', route.params.id)
    })

    return {
      product
    }
  }
}
</script>

<style scoped>
.product-details {
  max-width: 1200px;
  margin: 60px auto;
  padding: 0 20px;
}

.details-layout {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  background: white;
  border-radius: 32px;
  overflow: hidden;
  box-shadow: 0 25px 70px rgba(0, 0, 0, 0.07);
}

.details-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  min-height: 500px;
}

.details-content {
  padding: 60px;
  display: flex;
  flex-direction: column;
}

.category-tag {
  display: inline-block;
  background: #f0f4f8;
  color: #1a2a6c;
  padding: 6px 16px;
  border-radius: 50px;
  font-weight: 700;
  font-size: 0.8rem;
  text-transform: uppercase;
  margin-bottom: 20px;
}

.details-header h1 {
  font-size: 3rem;
  margin: 0 0 30px 0;
  color: #1a2a6c;
}

.info-group {
  margin-bottom: 35px;
}

.info-group label {
  display: block;
  font-size: 0.8rem;
  text-transform: uppercase;
  color: #999;
  letter-spacing: 1px;
  font-weight: 700;
  margin-bottom: 10px;
}

.price-value {
  font-size: 2.5rem;
  font-weight: 900;
  color: #b21f1f;
  margin: 0;
}

.description-text {
  font-size: 1.15rem;
  line-height: 1.8;
  color: #555;
  margin: 0;
}

.product-meta {
  display: flex;
  gap: 30px;
  margin-top: 40px;
  padding-top: 30px;
  border-top: 1px solid #f0f0f0;
}

.meta-item {
  display: flex;
  align-items: center;
  gap: 10px;
  color: #777;
  font-size: 0.95rem;
  font-weight: 600;
}

.details-footer {
  margin-top: auto;
  display: flex;
  gap: 20px;
  padding-top: 40px;
}

.btn {
  padding: 12px 24px;
  border-radius: 12px;
  text-decoration: none;
  font-weight: 700;
  transition: all 0.3s;
  text-align: center;
}

.btn-primary { background: #1a2a6c; color: white; }
.btn-primary:hover { transform: translateY(-3px); box-shadow: 0 10px 20px rgba(26, 42, 108, 0.2); }

.btn-outline { border: 2px solid #edf2f7; color: #777; }
.btn-outline:hover { border-color: #1a2a6c; color: #1a2a6c; }

@media (max-width: 900px) {
  .details-layout { grid-template-columns: 1fr; }
  .details-image img { min-height: 300px; }
  .details-content { padding: 40px; }
}
</style>
