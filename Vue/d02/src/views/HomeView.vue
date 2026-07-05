<template>
  <div class="home">
    <header class="hero">
      <div class="hero-content">
        <span class="welcome-tag">Information Technology Institute</span>
        <h1>Welcome to ITI</h1>
        <p>The next generation of inventory management starts here. Streamlined, efficient, and built for professionals.</p>
        <div class="actions">
          <router-link to="/products" class="btn btn-primary">
            <i class="fas fa-th-large"></i> Explore Dashboard
          </router-link>
          <router-link to="/products/create" class="btn btn-outline">
            <i class="fas fa-plus"></i> New Product
          </router-link>
        </div>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  name: 'HomeView'
}
</script>

<style scoped>
.home {
  max-width: 1200px;
  margin: 0 auto;
  padding: 80px 20px;
}

.hero {
  text-align: center;
  background: white;
  padding: 120px 40px;
  border-radius: 32px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.04);
  border: 1px solid #f0f0f0;
  display: flex;
  justify-content: center;
  align-items: center;
}

.welcome-tag {
  display: inline-block;
  background: #f0f4f8;
  color: #1a2a6c;
  padding: 8px 20px;
  border-radius: 50px;
  font-weight: 700;
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 25px;
}

.hero h1 {
  font-size: 4.5rem;
  color: #1a2a6c;
  margin: 0 0 20px 0;
  font-weight: 900;
  letter-spacing: -2px;
}

.hero p {
  font-size: 1.4rem;
  color: #666;
  max-width: 600px;
  margin: 0 auto 50px auto;
  line-height: 1.6;
}

.actions {
  display: flex;
  justify-content: center;
  gap: 20px;
}

.btn {
  padding: 16px 36px;
  border-radius: 16px;
  text-decoration: none;
  font-weight: 700;
  font-size: 1.1rem;
  transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  display: inline-flex;
  align-items: center;
  gap: 12px;
}

.btn-primary {
  background: #1a2a6c;
  color: white;
  box-shadow: 0 10px 20px rgba(26, 42, 108, 0.2);
}

.btn-primary:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 30px rgba(26, 42, 108, 0.3);
}

.btn-outline {
  border: 2px solid #edf2f7;
  color: #777;
}

.btn-outline:hover {
  border-color: #1a2a6c;
  color: #1a2a6c;
  transform: translateY(-5px);
}

@media (max-width: 768px) {
  .hero h1 { font-size: 3rem; }
  .hero p { font-size: 1.1rem; }
  .actions { flex-direction: column; }
}
</style>
