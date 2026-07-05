<template>
  <div class="product-form">
    <div class="form-container">
      <header class="form-header">
        <h1>{{ editMode ? 'Update Product' : 'Create New Product' }}</h1>
        <p class="subtitle">{{ editMode ? 'Refine your product details below.' : 'Add something amazing to your collection.' }}</p>
      </header>

      <form @submit.prevent="handleSubmit">
        <div class="form-grid">
          <div class="form-group">
            <label for="name">Product Name</label>
            <input type="text" id="name" v-model="formData.name" placeholder="e.g. Ergonomic Office Chair"
              :class="{ 'is-invalid': errors.name }">
            <span class="error-msg" v-if="errors.name">{{ errors.name }}</span>
          </div>

          <div class="form-group">
            <label for="category">Category</label>
            <select id="category" v-model="formData.category" :class="{ 'is-invalid': errors.category }">
              <option value="" disabled>Select a category</option>
              <option value="Electronics">Electronics</option>
              <option value="Accessories">Accessories</option>
              <option value="Furniture">Furniture</option>
              <option value="Clothing">Clothing</option>
              <option value="Other">Other</option>
            </select>
            <span class="error-msg" v-if="errors.category">{{ errors.category }}</span>
          </div>

          <div class="form-group">
            <label for="price">Price ($)</label>
            <input type="number" id="price" v-model.number="formData.price" placeholder="0.00" step="0.01"
              :class="{ 'is-invalid': errors.price }">
            <span class="error-msg" v-if="errors.price">{{ errors.price }}</span>
          </div>

          <div class="form-group">
            <label for="imageUrl">Image URL</label>
            <input type="url" id="imageUrl" v-model="formData.imageUrl" placeholder="https://images.unsplash.com/...">
          </div>
        </div>

        <div class="form-group">
          <label for="description">Description</label>
          <textarea id="description" v-model="formData.description"
            placeholder="Briefly describe the product features..." rows="4"
            :class="{ 'is-invalid': errors.description }"></textarea>
          <span class="error-msg" v-if="errors.description">{{ errors.description }}</span>
        </div>

        <div class="form-actions">
          <router-link to="/products" class="btn btn-outline">
            <i class="fas fa-times"></i> Cancel
          </router-link>
          <button type="submit" class="btn btn-primary" :disabled="submitting">
            <i class="fas fa-save"></i> {{ submitting ? 'Processing...' : (editMode ? 'Save Changes' : 'Create Product') }}
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'ProductFormView',
  data() {
    return {
      editMode: this.$route.params.id ? true : false,
      formData: {
        name: '',
        category: '',
        price: null,
        imageUrl: '',
        description: ''
      },
      submitting: false,
      errors: {
        name: '',
        category: '',
        price: '',
        description: ''
      }
    }
  },
  computed: {
    product() {
      return this.$store.state.currentProduct
    }
  },
  watch: {
    product: {
      handler(newVal) {
        if (newVal) {
          this.formData = { ...newVal }
        }
      },
    },
    'formData.name'() {
      if (this.errors.name) this.errors.name = ''
    },
    'formData.category'() {
      if (this.errors.category) this.errors.category = ''
    },
    'formData.price'() {
      if (this.errors.price) this.errors.price = ''
    },
    'formData.description'() {
      if (this.errors.description) this.errors.description = ''
    }
  },
  mounted() {
    if (this.editMode) {
      this.$store.dispatch('fetchProductById', this.$route.params.id)
    }
  },
  methods: {
    validateForm() {
      let isValid = true
      this.errors = {
        name: '',
        category: '',
        price: '',
        description: ''
      }

      if (!this.formData.name.trim()) {
        this.errors.name = 'Product name is required.'
        isValid = false
      } else if (this.formData.name.length < 3) {
        this.errors.name = 'Product name must be at least 3 characters.'
        isValid = false
      }

      if (!this.formData.category) {
        this.errors.category = 'Please select a category.'
        isValid = false
      }

      if (this.formData.price === null || this.formData.price === undefined || this.formData.price === '') {
        this.errors.price = 'Price is required.'
        isValid = false
      } else if (this.formData.price <= 0) {
        this.errors.price = 'Price must be greater than 0.'
        isValid = false
      }

      if (!this.formData.description.trim()) {
        this.errors.description = 'Description is required.'
        isValid = false
      } else if (this.formData.description.length < 10) {
        this.errors.description = 'Description must be at least 10 characters.'
        isValid = false
      }

      return isValid
    },
    async handleSubmit() {
      if (!this.validateForm()) return

      this.submitting = true
      const url = this.editMode
        ? `http://localhost:3000/products/${this.$route.params.id}`
        : 'http://localhost:3000/products'

      try {
        if (this.editMode) {
          await axios.put(url, this.formData)
        } else {
          await axios.post(url, this.formData)
        }
        this.$router.push('/products')
      } catch (err) {
        alert('Error: ' + err.message)
      } finally {
        this.submitting = false
      }
    },
  }
}
</script>

<style scoped>
.product-form {
  padding: 60px 20px;
  background: #f4f7f9;
  min-height: 100vh;
}

.form-container {
  max-width: 800px;
  margin: 0 auto;
  background: white;
  padding: 50px;
  border-radius: 24px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.05);
}

.form-header {
  text-align: center;
  margin-bottom: 40px;
}

.form-header h1 {
  color: #1a2a6c;
  margin-bottom: 10px;
  font-size: 2.2rem;
}

.subtitle {
  color: #777;
}

.form-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 25px;
  margin-bottom: 25px;
}

.form-group {
  margin-bottom: 20px;
}

.form-group label {
  display: block;
  font-weight: 700;
  margin-bottom: 8px;
  color: #444;
  font-size: 0.9rem;
}

input,
select,
textarea {
  width: 100%;
  padding: 12px 16px;
  border: 2px solid #edf2f7;
  border-radius: 12px;
  font-size: 1rem;
  transition: all 0.2s;
  box-sizing: border-box;
}

input:focus,
select:focus,
textarea:focus {
  outline: none;
  border-color: #1a2a6c;
  box-shadow: 0 0 0 4px rgba(26, 42, 108, 0.1);
}

.image-preview {
  margin: 20px 0;
  padding: 15px;
  background: #f8f9fa;
  border-radius: 12px;
  text-align: center;
}

.image-preview p {
  font-size: 0.8rem;
  color: #777;
  margin-bottom: 10px;
}

.image-preview img {
  max-height: 150px;
  border-radius: 8px;
}

.form-actions {
  display: flex;
  justify-content: flex-end;
  gap: 15px;
  margin-top: 40px;
}

.btn {
  padding: 14px 30px;
  border-radius: 12px;
  font-weight: 700;
  cursor: pointer;
  border: none;
  transition: all 0.2s;
  text-decoration: none;
}

.btn-primary {
  background: #1a2a6c;
  color: white;
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(26, 42, 108, 0.2);
}

.btn-primary:disabled {
  background: #ccc;
}

.btn-outline {
  background: transparent;
  border: 2px solid #edf2f7;
  color: #777;
}

.error-msg {
  color: #e53e3e;
  font-size: 0.8rem;
  margin-top: 5px;
  display: block;
}

.is-invalid {
  border-color: #e53e3e !important;
}

.is-invalid:focus {
  box-shadow: 0 0 0 4px rgba(229, 62, 62, 0.1) !important;
}
</style>
