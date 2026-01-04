<template>
  <div class="card shadow-sm mb-4" style="width: 18rem;">
    <img
      :src="image"
      class="card-img-top"
      alt="gambar tanaman"
      style="height: 160px; object-fit: cover;"
    />
    <div class="card-body">
      <span class="badge bg-success mb-2">{{ kategori }}</span>
      <h5 class="card-title">{{ nama }}</h5>
      <p class="card-text small text-muted">{{ deskripsi }}</p>
      <router-link :to="`/detail/${id}`" class="btn btn-outline-success btn-sm">
        Baca Selengkapnya
      </router-link>
    </div>
  </div>
</template>

<script setup>
defineProps({
  id: Number,
  nama: String,
  deskripsi: String,
  kategori: String,
  image: String
})
</script>
