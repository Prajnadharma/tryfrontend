<template>
  <nav class="navbar">
    <router-link to="/">Beranda</router-link>
    <router-link to="/tanaman">Tanaman</router-link>
    <router-link to="/tentang">Tentang</router-link>
  </nav>
</template>

<style scoped>
.navbar {
  background: #007b5e;
  padding: 10px 20px;
  display: flex;
  gap: 20px;
}
a {
  color: white;
  text-decoration: none;
}
a:hover {
  text-decoration: underline;
}
</style>
