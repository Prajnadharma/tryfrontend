<template>
  <aside
    class="w-[250px] min-h-screen bg-[#f5f1e8] border-r shadow-sm px-5 py-6 flex flex-col"
  >
    <!-- LOGO -->
    <h1 class="text-2xl font-extrabold text-green-800 mb-8 tracking-wide">
      USADA
    </h1>

    <!-- MENU UMUM -->
    <div class="mb-6">
      <p class="text-xs font-bold text-gray-500 mb-3 tracking-widest">
        UMUM
      </p>

      <nav class="space-y-2">
        <router-link
          to="/"
          class="menu-item"
          active-class="menu-active"
        >
          Dashboard
        </router-link>

        <router-link
          to="/master"
          class="menu-item"
          active-class="menu-active"
        >
          Penyakit
        </router-link>

        <router-link
          to="/master"
          class="menu-item"
          active-class="menu-active"
        >
          Tumbuhan
        </router-link>

        <router-link
          to="/master"
          class="menu-item"
          active-class="menu-active"
        >
          Ramuan
        </router-link>

        <router-link
          to="/master"
          class="menu-item"
          active-class="menu-active"
        >
          Bagian Tanaman
        </router-link>
      </nav>
    </div>

    <!-- MENU PENDUKUNG -->
    <div>
      <p class="text-xs font-bold text-gray-500 mb-3 tracking-widest">
        PENDUKUNG
      </p>

      <nav class="space-y-2">
        <router-link
          to="/relasi"
          class="menu-item"
          active-class="menu-active"
        >
          Relasi Usada (Forest Tree)
        </router-link>

        <router-link
          to="/bantuan"
          class="menu-item"
          active-class="menu-active"
        >
          Pusat Bantuan
        </router-link>

        <router-link
          to="/pengaturan"
          class="menu-item"
          active-class="menu-active"
        >
          Pengaturan
        </router-link>
      </nav>
    </div>
  </aside>
</template>

<style scoped>
.menu-item {
  @apply block px-4 py-2 rounded-lg font-bold text-gray-700 no-underline transition;
}

.menu-item:hover {
  @apply bg-green-200 text-green-900;
}

.menu-active {
  @apply bg-green-600 text-white;
}
</style>
