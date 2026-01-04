<template>
  <div class="card">
    <h3>{{ nama }}</h3>
    <p>{{ khasiat }}</p>
  </div>
</template>

<script setup>
defineProps({
  nama: String,
  khasiat: String,
})
</script>

<style scoped>
.card {
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 16px;
  background-color: #f9fff9;
  transition: all 0.3s;
}
.card:hover {
  transform: scale(1.03);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}
</style>
