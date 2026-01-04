<template>
  <div class="home">
    <h1>🌿 Sistem Informasi Usada Bali</h1>
    <p>Menjelajahi pengetahuan tradisional pengobatan Bali.</p>
    <router-link to="/tanaman" class="btn">Lihat Tanaman</router-link>
  </div>
</template>

<style scoped>
.home {
  text-align: center;
  padding: 50px;
}
.btn {
  background-color: #007b5e;
  color: white;
  padding: 10px 20px;
  border-radius: 8px;
  text-decoration: none;
}
.btn:hover {
  background-color: #005f48;
}
</style>
