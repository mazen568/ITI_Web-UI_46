<template>
  <div class="dashboard">
    <header class="dashboard-header">
      <div class="header-text">
        <h1>Product Dashboard</h1>
        <p>Explore and manage your inventory with professional tools.</p>
      </div>
      <router-link to="/products/create" class="btn btn-primary">
        <i class="fas fa-plus"></i> Add New Product
      </router-link>
    </header>

    <div class="dashboard-grid">
      <div v-for="product in products" :key="product.id" class="dashboard-card">
        <div class="card-image">
          <img :src="product.imageUrl || 'https://via.placeholder.com/300x200?text=No+Image'" :alt="product.name">
          <span class="category-badge">{{ product.category }}</span>
        </div>
        <div class="card-details">
          <h3>{{ product.name }}</h3>
          <p class="description">{{ product.description }}</p>
          <div class="card-footer">
            <span class="card-price">${{ product.price }}</span>
            <div class="card-actions">
              <router-link :to="'/products/' + product.id" class="action-btn view" title="View Details">
                <i class="fas fa-eye"></i>
              </router-link>
              <router-link :to="'/products/edit/' + product.id" class="action-btn edit" title="Edit Product">
                <i class="fas fa-edit"></i>
              </router-link>
              <button @click="handleDelete(product.id)" class="action-btn delete" title="Delete Product">
                <i class="fas fa-trash"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <ConfirmModal 
      :show="showDeleteModal" 
      @confirm="confirmDelete" 
      @cancel="showDeleteModal = false" 
    />

    <div v-if="products.length === 0" class="empty-state">
      <i class="fas fa-box-open"></i>
      <p>Your inventory is empty. Start adding products to populate the dashboard.</p>
    </div>
  </div>
</template>

<script>
import ConfirmModal from '@/components/ConfirmModal.vue'

export default {
  name: 'ProductsView',
  components: {
    ConfirmModal
  },
  data() {
    return {
      showDeleteModal: false,
      productToDelete: null
    }
  },
  computed: {
    products() {
      return this.$store.state.products
    }
  },
  mounted() {
    this.$store.dispatch('fetchProducts');
  },
  methods: {
    handleDelete(id) {
      this.productToDelete = id
      this.showDeleteModal = true
    },
    async confirmDelete() {
      if (!this.productToDelete) return
      
      this.showDeleteModal = false 
      await this.$store.dispatch('deleteProduct', this.productToDelete)
      this.productToDelete = null
    },
  }
}
</script>

<style scoped>
.dashboard {
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
}

.dashboard-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 60px;
  padding-bottom: 30px;
}

.header-text h1 {
  font-size: 2.8rem;
  color: #1a2a6c;
  margin: 0 0 5px 0;
}

.header-text p {
  color: #666;
  font-size: 1.1rem;
  margin: 0;
}

.dashboard-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 40px;
}

.dashboard-card {
  background: white;
  border-radius: 24px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.dashboard-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.1);
}

.card-image {
  position: relative;
  height: 240px;
}

.card-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.category-badge {
  position: absolute;
  top: 20px;
  right: 20px;
  background: rgba(255, 255, 255, 0.95);
  padding: 6px 14px;
  border-radius: 50px;
  font-size: 0.8rem;
  font-weight: 800;
  color: #1a2a6c;
  text-transform: uppercase;
  backdrop-filter: blur(8px);
}

.card-details {
  padding: 30px;
}

.card-details h3 {
  margin: 0 0 15px 0;
  font-size: 1.5rem;
  color: #333;
}

.description {
  color: #777;
  font-size: 1rem;
  line-height: 1.7;
  height: 3.4rem;
  overflow: hidden;
  margin-bottom: 25px;
}

.card-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 25px;
  border-top: 1px solid #f0f0f0;
}

.card-price {
  font-size: 1.7rem;
  font-weight: 900;
  color: #b21f1f;
}

.card-actions {
  display: flex;
  gap: 12px;
}

.action-btn {
  width: 45px;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 14px;
  text-decoration: none;
  background: #f8f9fa;
  border: none;
  cursor: pointer;
  transition: all 0.3s;
  font-size: 1.2rem;
  color: #555;
}

.view:hover { background: #e8eaf6; color: #1a2a6c; transform: scale(1.1); }
.edit:hover { background: #fff8e1; color: #fdbb2d; transform: scale(1.1); }
.delete:hover { background: #ffebee; color: #b21f1f; transform: scale(1.1); }

.btn {
  padding: 14px 28px;
  border-radius: 14px;
  text-decoration: none;
  font-weight: 800;
  display: inline-flex;
  align-items: center;
  gap: 12px;
  transition: all 0.3s;
}

.btn-primary { 
  background: #1a2a6c; 
  color: white; 
  box-shadow: 0 4px 15px rgba(26, 42, 108, 0.2);
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(26, 42, 108, 0.3);
}

.empty-state {
  text-align: center;
  padding: 100px;
  color: #ccc;
  background: white;
  border-radius: 24px;
}

.empty-state i {
  font-size: 4rem;
  margin-bottom: 20px;
}

.loading-overlay {
  text-align: center;
  padding: 100px;
}

.loader {
  border: 4px solid #f3f3f3;
  border-top: 4px solid #1a2a6c;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: spin 1s linear infinite;
  margin: 0 auto 20px;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>
