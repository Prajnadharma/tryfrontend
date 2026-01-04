<template>
  <div v-if="usada" class="bg-usadaCream min-h-screen p-6">
    <div class="max-w-5xl mx-auto bg-white rounded-2xl shadow-xl p-6">

      <!-- ✅ JUDUL -->
      <h1 class="text-3xl font-bold text-usadaGreen mb-4">
        {{ usada.nama }}
      </h1>

      <!-- ✅ GAMBAR -->
      <img
        :src="usada.gambar"
        class="w-full h-[400px] object-cover rounded-xl shadow mb-6"
        alt="Gambar Usada"
      />

      <!-- ✅ DESKRIPSI -->
      <p class="text-gray-700 leading-relaxed mb-6">
        {{ usada.deskripsi }}
      </p>

      <!-- ✅ DIGUNAKAN UNTUK -->
      <div class="mb-8">
        <h3 class="text-xl font-semibold text-usadaBrown mb-2">
          Digunakan Untuk Penyakit
        </h3>
        <ul class="list-disc list-inside space-y-1 text-gray-700">
          <li v-for="(p, i) in usada.penyakit" :key="i">{{ p }}</li>
        </ul>
      </div>

      <!-- ✅ GRID BAHAN & CARA MENGOLAH -->
      <div class="grid md:grid-cols-2 gap-6 mb-10">

        <!-- ✅ BAHAN -->
        <div>
          <h3 class="text-xl font-semibold text-usadaBrown mb-3">Bahan</h3>
          <div class="overflow-x-auto">
            <table class="w-full border border-usadaSoft rounded-lg overflow-hidden">
              <thead class="bg-usadaSoft text-white">
                <tr>
                  <th class="p-2 text-left">Nama</th>
                  <th class="p-2 text-left">Takaran</th>
                  <th class="p-2 text-left">Satuan</th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="(b, i) in usada.bahan"
                  :key="i"
                  class="border-t hover:bg-usadaCream"
                >
                  <td class="p-2">{{ b.nama }}</td>
                  <td class="p-2">{{ b.takaran }}</td>
                  <td class="p-2">{{ b.satuan }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <!-- ✅ CARA MENGOLAH -->
        <div>
          <h3 class="text-xl font-semibold text-usadaBrown mb-3">
            Cara Mengolah
          </h3>

          <ol class="space-y-3">
            <li
              v-for="(c, i) in usada.cara"
              :key="i"
              class="bg-usadaCream border-l-4 border-usadaGreen p-3 rounded"
            >
              <span class="font-semibold text-usadaGreen">
                Langkah {{ c.langkah }}:
              </span>
              <span class="text-gray-700 ml-1">
                {{ c.deskripsi }}
              </span>
            </li>
          </ol>

          <!-- ✅ TOMBOL -->
          <router-link
            :to="`/cara-mengolah/${usada.id}/1`"
            class="block mt-6 text-center bg-usadaGreen hover:bg-usadaSoft text-white font-semibold py-3 rounded-xl transition"
          >
            Lihat Selengkapnya →
          </router-link>
        </div>
      </div>

      <!-- ✅ VIDEO -->
      <div class="mb-10">
        <h3 class="text-xl font-semibold text-usadaBrown mb-4">
          Tutorial Video
        </h3>

        <!-- YouTube -->
        <div v-if="usada.youtube" class="aspect-video mb-6">
          <iframe
            :src="formatYoutubeEmbed(usada.youtube)"
            class="w-full h-full rounded-xl shadow"
            frameborder="0"
            allowfullscreen
          ></iframe>
        </div>

        <!-- TikTok -->
        <div v-if="usada.tiktok">
          <blockquote
            v-show="showTikTokEmbed"
            class="tiktok-embed"
            :cite="usada.tiktok"
            :data-video-id="extractTikTokId(usada.tiktok)"
          >
            <section></section>
          </blockquote>

          <div
            v-if="!showTikTokEmbed"
            class="bg-yellow-100 text-yellow-800 p-4 rounded-lg"
          >
            Video TikTok tidak dapat ditampilkan.
            <a
              :href="usada.tiktok"
              target="_blank"
              class="font-bold underline ml-1"
            >
              Buka di TikTok
            </a>
          </div>
        </div>
      </div>

      <!-- ✅ CARA PENGGUNAAN -->
      <div>
        <h3 class="text-xl font-semibold text-usadaBrown mb-2">
          Cara Penggunaan
        </h3>
        <p class="text-gray-700 leading-relaxed">
          {{ usada.penggunaan }}
        </p>
      </div>
    </div>
  </div>

  <!-- ✅ JIKA DATA TIDAK ADA -->
  <div v-else class="min-h-screen flex justify-center items-center text-gray-400">
    <h3>Data tidak ditemukan</h3>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const usada = ref(null)
const showTikTokEmbed = ref(true)

const semuaData = [
  {
    id: 1,
    nama: 'Loloh Don Temen',
    gambar:
      'https://budayabali.com/uploads/images/202309/image_870x_64fc1e9731e8e.jpg',
    deskripsi:
      'Loloh Don Temen adalah minuman herbal khas Bali yang dibuat dari daun temen dan rempah alami.',
    penyakit: [
      'Panas dalam',
      'Sariawan',
      'Melancarkan pencernaan',
      'Detoksifikasi tubuh'
    ],
    bahan: [
      { nama: 'Daun Temen', takaran: 5, satuan: 'lembar' },
      { nama: 'Asam Jawa', takaran: 1, satuan: 'biji' },
      { nama: 'Garam', takaran: '1/2', satuan: 'sdt' },
      { nama: 'Air', takaran: 500, satuan: 'ml' }
    ],
    cara: [
      { langkah: 1, deskripsi: 'Cuci bersih semua bahan.' },
      { langkah: 2, deskripsi: 'Rebus dengan air hingga mendidih.' },
      { langkah: 3, deskripsi: 'Saring air rebusan.' },
      { langkah: 4, deskripsi: 'Sajikan selagi hangat.' }
    ],
    penggunaan: 'Diminum 1 gelas setiap pagi dan sore hari.',
    tiktok: 'https://www.tiktok.com/@gekwann/video/7217063285047282971'
  }
]

function formatYoutubeEmbed(url) {
  if (!url) return ''
  return url
    .replace('watch?v=', 'embed/')
    .replace('youtu.be/', 'www.youtube.com/embed/')
}

function extractTikTokId(url) {
  const match = url.match(/video\/(\d+)/)
  return match ? match[1] : ''
}

onMounted(() => {
  const id = Number(route.params.id)
  usada.value = semuaData.find((item) => item.id === id)

  if (usada.value?.tiktok) {
    const script = document.createElement('script')
    script.src = 'https://www.tiktok.com/embed.js'
    document.body.appendChild(script)
  }
})
</script>
