<template>
  <div class="not-found">
    <h1>404</h1>
    <h2>Page Not Found</h2>
    <p>Oops! The page you're looking for doesn't exist or has been moved.</p>
    <router-link to="/" class="btn">Go Back Home</router-link>
  </div>
</template>

<script>
export default {
  name: 'NotFoundView'
}
</script>

<style scoped>
.not-found {
  text-align: center;
  padding: 100px 20px;
}

h1 {
  font-size: 8rem;
  margin: 0;
  color: #1a2a6c;
}

h2 {
  font-size: 2.5rem;
  color: #b21f1f;
  margin-bottom: 20px;
}

p {
  color: #666;
  font-size: 1.2rem;
  margin-bottom: 40px;
}

.btn {
  display: inline-block;
  padding: 15px 30px;
  background: #1a2a6c;
  color: white;
  text-decoration: none;
  border-radius: 10px;
  font-weight: 700;
  transition: background 0.2s;
}

.btn:hover {
  background: #253b9c;
}
</style>
