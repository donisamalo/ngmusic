<template>
  <div class="homepage">
    <el-container direction="vertical">
      <LayoutHeader
        @menu-clicked="menuDrawer = true"
        @search-clicked="searchDrawer = true"
      />
      <el-main class="homepage__content">
        <p v-if="searchInput">
          Search result for : <span>{{ searchInput }}</span>
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

    <!-- Menu Drawer -->
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
        <el-button
          type="primary"
          size="large"
          :disabled="!searchInput"
          :loading="isFetching"
          @click="search"
        >
          Search
        </el-button>
      </div>
    </el-drawer>

    <!-- Search Drawer -->
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
        <el-button
          type="primary"
          size="large"
          :disabled="!searchInput"
          :loading="isFetching"
          @click="search"
        >
          Search
        </el-button>
      </div>
    </el-drawer>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import useApi from '~/composables/useApi'
import logo from '~/assets/image/logo.png'

const { getData } = useApi()

const menuDrawer = ref<boolean>(false)
const searchDrawer = ref<boolean>(false)
const searchInput = ref<string | null>(null)
const isFetching = ref<boolean>(false)
const isLoadMore = ref<boolean>(false)
const musicList = ref<any[]>([])
const limit = ref<number>(10)

const fetchMusic = async () => {
  try {
    isFetching.value = true
    const params = {
      term: searchInput.value,
      limit: limit.value,
    }
    const data = await getData('/search', params)
    musicList.value = data?.results || []
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
    const params = {
      term: searchInput.value,
      limit: limit.value,
    }
    const data = await getData('/search', params)
    musicList.value = data?.results || []
  } catch (error) {
    console.error(error)
    ElMessage.error('Load More Error!')
  } finally {
    isLoadMore.value = false
  }
}

const search = () => {
  menuDrawer.value = false
  searchDrawer.value = false
  fetchMusic()
}

onMounted(() => {
  fetchMusic()
})
</script>

<style lang="scss" scoped>
@import 'style';
</style>
