<template>
  <div class="list-page">
    <el-container direction="vertical">
      <LayoutHeader
        @menu-clicked="router.push({ name: 'index' })"
        @search-clicked="musicStore.isShowSearchDrawer = true"
      />
      <el-main class="list-page__content">
        <p v-if="musicStore.searchInput">
          Search result for : <span>{{ musicStore.searchInput }}</span>
        </p>

        <el-skeleton v-if="isFetching" animated class="card-wrapper">
          <template #template>
            <div v-for="n in 5" :key="n">
              <el-skeleton-item style="width: 100%; height: 123px" />
            </div>
          </template>
        </el-skeleton>
        <template v-else>
          <template v-if="musicList.length">
            <div class="card-wrapper">
              <MusicCard
                v-for="(music, idx) in musicList"
                :key="idx"
                :detail="music"
              />
            </div>
          </template>

          <el-empty v-else description="Result not found" />
        </template>

        <el-button
          v-if="musicList.length"
          :loading="isLoadMore"
          @click="loadMore"
          >Load More</el-button
        >
      </el-main>
    </el-container>

    <!-- Search Drawer -->
    <SearchDrawer :isFetching="isFetching" @search="search" />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

import { useMusicStore } from '~/store/musicStore'
import useApi from '~/composables/useApi'

const { getData } = useApi()
const musicStore = useMusicStore()
const router = useRouter()

const isFetching = ref<boolean>(false)
const isLoadMore = ref<boolean>(false)
const musicList = ref<any[]>([])
const limit = ref<number>(10)

const fetch = async () => {
  const params = {
    term: musicStore.searchInput,
    limit: limit.value,
  }
  const data = await getData('/search', params)
  musicList.value = data?.results || []
}

const fetchMusic = async () => {
  try {
    isFetching.value = true
    await fetch()
  } catch (error) {
    console.error(error)
    ElMessage.error('Fetching Error!')
  } finally {
    isFetching.value = false
  }
}

const loadMore = async () => {
  try {
    isLoadMore.value = true
    limit.value += 10
    await fetch()
  } catch (error) {
    console.error(error)
    ElMessage.error('Load More Error!')
  } finally {
    isLoadMore.value = false
  }
}

const search = () => {
  musicStore.isShowSearchDrawer = false
  fetchMusic()
}

onMounted(() => {
  fetchMusic()
})
</script>

<style lang="scss" scoped>
@import 'style';
</style>
