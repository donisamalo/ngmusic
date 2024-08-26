<template>
  <div class="home-page">
    <el-image :src="logo" fit="contain" />

    <div class="wrapper">
      <el-input
        v-model="musicStore.searchInput"
        placeholder="Artist / Album / Title"
      />
      <el-button
        type="primary"
        size="large"
        :disabled="!musicStore.searchInput"
        @click="goToListPage"
        @keyup.enter="goToListPage"
      >
        Search
      </el-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useMusicStore } from '~/store/musicStore'
import logo from '~/assets/image/logo.png'

const router = useRouter()
const musicStore = useMusicStore()

const goToListPage = () => {
  router.push({ name: 'list' })
}
</script>

<style lang="scss" scoped>
@import 'style';
</style>
