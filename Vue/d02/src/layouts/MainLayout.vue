<template>
  <div class="main-layout">
    <nav class="navbar">
      <div class="nav-container">
        <ul class="nav-links">
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/products">Products</router-link></li>
          <li><router-link to="/products/create">Add Product</router-link></li>
        </ul>
      </div>
    </nav>

    <main class="content">
      <router-view />
    </main>

  </div>
</template>

<script>
export default {
  name: 'MainLayout'
}
</script>

<style scoped>
.main-layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.navbar {
  background: white;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  position: sticky;
  top: 0;
  z-index: 1000;
}

.nav-container {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 50px;
}

.nav-logo {
  font-size: 1.5rem;
  font-weight: 800;
  color: #1a2a6c;
  text-decoration: none;
}

.nav-links {
  list-style: none;
  display: flex;
  gap: 30px;
  margin: 0;
  padding: 0;
}

.nav-links a {
  text-decoration: none;
  color: #666;
  font-weight: 600;
  padding: 8px 12px;
  border-radius: 6px;
  transition: all 0.3s ease;
}

.nav-links a:hover {
  background: rgba(26, 42, 108, 0.05);
  color: #1a2a6c;
}


.content {
  flex: 1;
}

.app-footer {
  text-align: center;
  padding: 30px;
  background: white;
  border-top: 1px solid #eee;
  color: #999;
}
</style>
