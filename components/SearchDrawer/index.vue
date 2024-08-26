<template>
  <div class="search-drawer">
    <el-drawer
      v-model="musicStore.isShowSearchDrawer"
      direction="rtl"
      size="100%"
      :with-header="false"
      modal-class="modal-search-drawer"
    >
      <el-icon class="icon-close" @click="closeDrawer" />
      <div class="wrapper">
        <h3>Search</h3>
        <el-input
          v-model="musicStore.searchInput"
          placeholder="Artist / Album / Title"
          @keyup.enter="search"
        />
        <el-button
          type="primary"
          size="large"
          :disabled="!musicStore.searchInput"
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
import { useMusicStore } from '~/store/musicStore'

const props = defineProps({
  isOpen: Boolean,
  isFetching: Boolean,
})

const emit = defineEmits(['update:isOpen', 'search'])

const musicStore = useMusicStore()

const closeDrawer = () => {
  musicStore.isShowSearchDrawer = false
}

const search = () => {
  closeDrawer()
  emit('search')
}
</script>

<style lang="scss" scoped>
@import 'style';
</style>
