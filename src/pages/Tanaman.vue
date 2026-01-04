<script setup>
import CardTanaman from '../components/CardTanaman.vue'

const tanamanList = [
  { nama: 'Daun Sirih', khasiat: 'Antiseptik alami' },
  { nama: 'Kunyit', khasiat: 'Mengurangi peradangan' },
  { nama: 'Temulawak', khasiat: 'Meningkatkan daya tahan tubuh' },
]
</script>

<template>
  <div class="tanaman-page">
    <h2>🌿 Daftar Tanaman Usada Bali</h2>
    <div class="grid">
      <CardTanaman v-for="t in tanamanList" :key="t.nama" :nama="t.nama" :khasiat="t.khasiat" />
    </div>
  </div>
</template>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 20px;
  padding: 20px;
}
</style>
