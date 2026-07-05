import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    products: [],
    currentProduct: null
  },
  mutations: {
    setProducts(state, products) {
      state.products = products
    },
    setProduct(state, product) {
      state.currentProduct = product
    },
    removeProduct(state, id) {
      state.products = state.products.filter(p => p.id !== id)
    }
  },
  actions: {
    async fetchProducts({ commit }) {
      try {
        const response = await axios.get('http://localhost:3000/products')
        commit('setProducts', response.data)
      } catch (err) {
        console.error(err.message)
      }
    },
    async fetchProductById({ commit }, id) {
      try {
        const response = await axios.get(`http://localhost:3000/products/${id}`)
        commit('setProduct', response.data)
      } catch (err) {
        console.error(err.message)
        commit('setProduct', null)
      }
    },
    async deleteProduct({ commit }, id) {
      try {
        await axios.delete(`http://localhost:3000/products/${id}`)
        commit('removeProduct', id)
      } catch (err) {
        console.error(err.message)
      }
    }
  }
})
