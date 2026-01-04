<script setup>
import CardUsada from '../components/CardUsada.vue'

const dataUsada = [
  {
    id: 1,
    nama: 'Loloh Don Temen',
    kategori: 'Loloh',
    deskripsi: 'Minuman herbal tradisional khas Bali dengan daun temen.',
    image: 'https://budayabali.com/uploads/images/202309/image_870x_64fc1e9731e8e.jpg'
  },
  {
    id: 2,
    nama: 'Boreh Minyak Kelapa',
    kategori: 'Boreh',
    deskripsi: 'Ramuan tradisional Bali untuk perawatan tubuh alami.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKAQoixWtwFE0SAtMCSURFgLRtT-7Vk1cARg&s'
  }
]
</script>

<template>
  <div class="min-h-screen bg-usadaCream">

    <!-- ✅ Header -->
    <header class="bg-usadaGreen text-white py-6 shadow-lg">
      <div class="max-w-7xl mx-auto px-4 flex justify-between items-center">
        <h1 class="text-3xl font-bold tracking-wide">Usada Bali</h1>
        <p class="text-sm opacity-90">Tanaman Herbal Tradisional</p>
      </div>
    </header>

    <!-- ✅ Hero Section -->
    <section class="relative">
      <div
        class="absolute inset-0 bg-[url('https://budayabali.com/uploads/images/202309/image_870x_64fc1e9731e8e.jpg')] bg-cover bg-center brightness-75"
      ></div>

      <div class="relative max-w-7xl mx-auto px-4 py-24 text-center text-white">
        <h2 class="text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">
          Warisan Pengobatan Tradisional Bali
        </h2>
        <p class="max-w-2xl mx-auto text-lg opacity-95">
          Jelajahi kekayaan tanaman herbal dan ramuan Usada Bali yang diwariskan secara turun-temurun.
        </p>
      </div>
    </section>

    <!-- ✅ Content -->
    <section class="max-w-7xl mx-auto px-4 py-16">
      <h3 class="text-2xl font-bold text-usadaGreen mb-10 text-center">
        Daftar Tanaman & Ramuan Usada
      </h3>

      <!-- ✅ Grid Card -->
      <div class="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
        <CardUsada
          v-for="item in dataUsada"
          :key="item.id"
          v-bind="item"
        />
      </div>
    </section>

    <!-- ✅ Footer -->
    <footer class="bg-usadaGreen text-white text-center py-5 text-sm opacity-90">
      © 2025 Usada Bali · Warisan Herbal Nusantara
    </footer>

  </div>
</template>
