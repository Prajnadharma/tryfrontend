<template>
  <div class="container py-4">
    <h3 class="fw-bold text-success mb-3">Model Forest Tree Usada Bali 🌿</h3>
    <p class="text-muted mb-4">
      Visualisasi hubungan antara penyakit, tanaman obat, dan khasiatnya.
    </p>

    <div class="bg-white p-3 rounded shadow-sm" style="height: 650px; overflow: hidden;">
      <Vue3D3Tree
        :data="usadaTree"
        orientation="vertical"
        :zoomable="true"
        :collapsible="true"
        node-text="name"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Vue3D3Tree from 'vue3-d3-tree'

/*
  🌿 Struktur hierarki model Usada:
  Usada Bali
   ├─ Sariawan
   │   └─ Daun Sirih
   │        ├─ Antiseptik alami
   │        └─ Menyembuhkan luka di mulut
   ├─ Demam
   │   ├─ Temulawak
   │   │    ├─ Meningkatkan daya tahan tubuh
   │   │    └─ Menurunkan panas tubuh
   │   └─ Kunyit
   │        └─ Anti-inflamasi alami
   ├─ Nyeri Otot
   │   ├─ Jahe
   │   │    ├─ Menghangatkan tubuh
   │   │    └─ Melancarkan peredaran darah
   │   └─ Boreh Minyak Kelapa
   │        └─ Meredakan pegal dan nyeri sendi
   └─ Batuk Berdahak
        ├─ Jeruk Nipis
        │    ├─ Meluruhkan dahak
        │    └─ Menyegarkan tenggorokan
        └─ Madu
             └─ Melembutkan tenggorokan
*/

const usadaTree = ref({
  name: 'Usada Bali',
  children: [
    {
      name: 'Sariawan',
      children: [
        {
          name: 'Daun Sirih',
          children: [
            { name: 'Antiseptik alami' },
            { name: 'Menyembuhkan luka di mulut' }
          ]
        }
      ]
    },
    {
      name: 'Demam',
      children: [
        {
          name: 'Temulawak',
          children: [
            { name: 'Meningkatkan daya tahan tubuh' },
            { name: 'Menurunkan panas tubuh' }
          ]
        },
        {
          name: 'Kunyit',
          children: [{ name: 'Anti-inflamasi alami' }]
        }
      ]
    },
    {
      name: 'Nyeri Otot',
      children: [
        {
          name: 'Jahe',
          children: [
            { name: 'Menghangatkan tubuh' },
            { name: 'Melancarkan peredaran darah' }
          ]
        },
        {
          name: 'Boreh Minyak Kelapa',
          children: [{ name: 'Meredakan pegal dan nyeri sendi' }]
        }
      ]
    },
    {
      name: 'Batuk Berdahak',
      children: [
        {
          name: 'Jeruk Nipis',
          children: [
            { name: 'Meluruhkan dahak' },
            { name: 'Menyegarkan tenggorokan' }
          ]
        },
        {
          name: 'Madu',
          children: [{ name: 'Melembutkan tenggorokan' }]
        }
      ]
    }
  ]
})
</script>

<style scoped>
svg text {
  fill: #198754;
  font-weight: 600;
  font-size: 13px;
}
.node circle {
  fill: #e9f8ef;
  stroke: #198754;
  stroke-width: 2;
}
.container {
  max-width: 1100px;
}
</style>
