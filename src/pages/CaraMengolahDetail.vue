<template>
  <div v-if="langkah" class="min-h-screen bg-usadaCream py-8">
    <div class="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
      <!-- Header -->
      <div class="px-6 py-5 border-b">
        <h2 class="text-xl font-semibold text-usadaGreen">Cara Mengolah: {{ usada.nama }}</h2>
        <p class="text-sm text-gray-600 mt-1">Langkah {{ langkah.langkah }} dari {{ totalSteps }}</p>
      </div>

      <!-- Progress -->
      <div class="px-6 pt-4">
        <div class="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
          <div
            class="h-2 bg-usadaGreen rounded-full transition-all"
            :style="{ width: progress + '%' }"
          ></div>
        </div>
        <div class="flex justify-between items-center mt-3 text-sm text-gray-500">
          <div>Langkah {{ langkah.langkah }}</div>
          <div>{{ Math.round(progress) }}%</div>
        </div>
      </div>

      <!-- Image -->
      <div class="px-6 pt-6">
        <img
          :src="langkah.gambar"
          alt="Langkah Mengolah"
          class="w-full h-64 object-cover rounded-lg shadow-sm"
        />
      </div>

      <!-- Content -->
      <div class="px-6 py-6">
        <h3 class="text-lg font-bold text-usadaBrown mb-2">{{ langkah.judul || (`Langkah ${langkah.langkah}`) }}</h3>
        <p class="text-gray-700 leading-relaxed mb-6">{{ langkah.deskripsi }}</p>

        <!-- Optional notes area -->
        <div v-if="langkah.catatan" class="mb-4 p-3 bg-yellow-50 border border-yellow-100 text-yellow-800 rounded">
          {{ langkah.catatan }}
        </div>

        <!-- Navigation -->
        <div class="flex gap-3">
          <button
            @click="prev()"
            :disabled="!prevStep"
            class="flex-1 py-3 rounded-lg border text-usadaGreen font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
          >
            ← Prev
          </button>

          <router-link
            v-if="nextStep"
            :to="`/cara-mengolah/${usada.id}/${nextStep}`"
            class="flex-1 text-center bg-usadaGreen hover:bg-usadaSoft text-white font-semibold py-3 rounded-lg transition"
          >
            Next →
          </router-link>

          <router-link
            v-else
            :to="`/detail/${usada.id}`"
            class="flex-1 text-center bg-gray-500 hover:bg-gray-600 text-white font-semibold py-3 rounded-lg transition"
          >
            Selesai
          </router-link>
        </div>
      </div>

      <!-- Footer small -->
      <div class="px-6 pb-6 text-sm text-gray-500">
        Tip: Ikuti tiap langkah dengan teliti untuk hasil terbaik.
      </div>
    </div>
  </div>

  <div v-else class="min-h-screen flex items-center justify-center text-gray-400">
    <h4>Langkah tidak ditemukan</h4>
  </div>
</template>

<script setup>
import { ref, onMounted, watch, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()
const usada = ref(null)
const langkah = ref(null)
const nextStep = ref(null)
const prevStep = ref(null)

// Gunakan gambar yang kamu minta:
const IMG_CUCI = 'https://www.justmaikacooking.com/wp-content/uploads/2025/04/Washing-Herbs-AdobeStock_1065260644.jpg'
const IMG_REBUS = 'https://cdn.shopify.com/s/files/1/0573/2037/4390/files/camille_67988_herbal_tea_simmering_in_a_pot_on_a_stove_releas_354a6663-f3b9-4169-89fd-4f2fde3d960f_0_1000x.png?v=1742005080'
const IMG_SARING = 'https://artfultea.com/cdn/shop/products/Folding_2BHandle_2BInfuser_2B-_2Bin_2Bglass_2Bw_3A_2Bspoon_2B_287948_29.jpg?v=1664245920&width=533'
const IMG_LOLOH = 'https://budayabali.com/uploads/images/202309/image_870x_64fc1e9731e8e.jpg'

// Data langkah spesifik untuk Loloh Don Temen
const semuaData = [
  {
    id: 1,
    nama: 'Loloh Don Temen',
    cara: [
      {
        langkah: 1,
        judul: 'Cuci Bahan',
        gambar: IMG_CUCI,
        deskripsi: 'Cuci bersih semua bahan menggunakan air mengalir. Pastikan daun temen dan rempah dibersihkan dari kotoran atau tanah.',
        catatan: 'Gunakan air dingin/bersih dan bilas beberapa kali bila perlu.'
      },
      {
        langkah: 2,
        judul: 'Rebus Bahan',
        gambar: IMG_REBUS,
        deskripsi: 'Masukkan semua bahan ke dalam panci, tambahkan air secukupnya lalu rebus hingga mendidih dan aroma rempah keluar.',
        catatan: 'Gunakan panci tertutup untuk menjaga uap dan aroma.'
      },
      {
        langkah: 3,
        judul: 'Saring Rebusan',
        gambar: IMG_SARING,
        deskripsi: 'Gunakan saringan halus untuk memisahkan ampas dari air rebusan. Tuangkan ke wadah bersih.',
        catatan: 'Tekan ampas perlahan agar sari tercampur tetapi jangan sampai keruh.'
      },
      {
        langkah: 4,
        judul: 'Sajikan Loloh',
        gambar: IMG_LOLOH,
        deskripsi: 'Sajikan loloh selagi hangat atau hangat-suam, tambahkan pemanis alami jika diinginkan.',
        catatan: 'Simpan sisa di lemari es maksimal 1–2 hari.'
      }
    ]
  }
]

function loadData() {
  const id = Number(route.params.id)
  const step = Number(route.params.step)

  usada.value = semuaData.find(u => u.id === id)
  langkah.value = usada.value?.cara.find(c => c.langkah === step) || null

  if (usada.value) {
    const idx = usada.value.cara.findIndex(c => c.langkah === step)
    nextStep.value = idx >= 0 && idx < usada.value.cara.length - 1 ? usada.value.cara[idx + 1].langkah : null
    prevStep.value = idx > 0 ? usada.value.cara[idx - 1].langkah : null
  } else {
    nextStep.value = null
    prevStep.value = null
  }
}

// navigasi prev (agar tetap memakai router-link untuk next)
function prev() {
  if (prevStep.value) {
    router.push(`/cara-mengolah/${usada.value.id}/${prevStep.value}`)
  }
}

onMounted(() => {
  loadData()
})

watch(() => route.params.step, () => {
  loadData()
})

const totalSteps = computed(() => usada.value ? usada.value.cara.length : 0)
const progress = computed(() => {
  if (!langkah.value || !usada.value) return 0
  const idx = usada.value.cara.findIndex(c => c.langkah === langkah.value.langkah)
  return ((idx + 1) / usada.value.cara.length) * 100
})
</script>

<style scoped>
/* nothing custom — Tailwind handles styling */
</style>
