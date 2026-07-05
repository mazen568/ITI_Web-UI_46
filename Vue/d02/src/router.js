import { createRouter, createWebHistory } from 'vue-router'

import MainLayout from '@/layouts/MainLayout.vue'
import HomeView from '@/views/HomeView.vue'
import ProductsView from '@/views/ProductsView.vue'
import ProductDetailsView from '@/views/ProductDetailsView.vue'
import ProductFormView from '@/views/ProductFormView.vue'
import NotFoundView from '@/views/NotFoundView.vue'

const routes = [
  {
    path: '/',
    component: MainLayout,
    children: [
      {
        path: '',
        name: 'Home',
        component: HomeView
      },
      {
        path: 'products',
        name: 'Products',
        component: ProductsView
      },
      {
        path: 'products/:id',
        name: 'ProductDetails',
        component: ProductDetailsView,
      },
      {
        path: 'products/create',
        name: 'CreateProduct',
        component: ProductFormView
      },
      {
        path: 'products/edit/:id',
        name: 'EditProduct',
        component: ProductFormView,
      }
    ]
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFoundView
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router