<template>
  <div class="homepage">
    <el-container direction="vertical">
      <LayoutHeader
        @menu-clicked="menuDrawer = true"
        @search-clicked="searchDrawer = true"
      />
      <el-main class="homepage__content">
        <p>Search result for : <span>Json Mraz</span></p>

        <div class="card-wrapper">
          <MusicCard v-for="n in 20" :key="n" />
        </div>

        <el-button>Load More</el-button>
      </el-main>
    </el-container>

    <el-drawer
      v-model="menuDrawer"
      direction="ltr"
      size="100%"
      :with-header="false"
      modal-class="menu-drawer"
    >
      <el-image :src="logo" fit="contain" />

      <div class="wrapper">
        <el-input v-model="searchInput" placeholder="Artist / Album / Title" />
        <el-button type="primary" size="large">Search</el-button>
      </div>
    </el-drawer>

    <el-drawer
      v-model="searchDrawer"
      direction="rtl"
      size="100%"
      :with-header="false"
      modal-class="search-drawer"
    >
      <el-icon class="icon-close" @click="searchDrawer = false" />
      <div class="wrapper">
        <h3>Search</h3>
        <el-input v-model="searchInput" placeholder="Artist / Album / Title" />
        <el-button type="primary" size="large">Search</el-button>
      </div>
    </el-drawer>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import logo from '~/assets/image/logo.png'

const menuDrawer = ref(false)
const searchDrawer = ref(false)
const searchInput = ref('')
</script>

<style lang="scss" scoped>
@import 'style';
</style>
