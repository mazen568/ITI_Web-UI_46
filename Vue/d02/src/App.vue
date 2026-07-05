<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style>
:root {
  --primary-color: #1a2a6c;
  --secondary-color: #b21f1f;
  --accent-color: #fdbb2d;
  --text-color: #2c3e50;
  --bg-color: #f8f9fa;
}

body {
  margin: 0;
  font-family: 'Inter', sans-serif;
  background-color: var(--bg-color);
  color: var(--text-color);
}
</style>
