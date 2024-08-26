<template>
  <el-header height="40px" class="layout-header">
    <el-icon class="icon-menu" @click="handleMenuClick" />
    <el-image :src="textLogo" fit="contain" />
    <el-icon class="icon-search" @click="handleSearchClick" />
  </el-header>
</template>

<script setup lang="ts">
import textLogo from '~/assets/image/text-logo.png'

const emit = defineEmits(['menu-clicked', 'search-clicked'])

const handleMenuClick = () => {
  emit('menu-clicked')
}

const handleSearchClick = () => {
  emit('search-clicked')
}
</script>

<style lang="scss" scoped>
@import 'style';
</style>
