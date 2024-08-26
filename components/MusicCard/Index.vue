<template>
  <el-card shadow="hover" class="music-card">
    <el-image :src="detail.artworkUrl100" fit="cover" />
    <div class="wrapper">
      <div class="wrapper-top">
        <h3>{{ detail.artistName || '-' }}</h3>
        <h4>{{ detail.trackName || '-' }}</h4>
      </div>
      <div class="wrapper-bottom">
        <el-tag>{{ detail.primaryGenreName || '-' }}</el-tag>
        <div class="price">
          <el-image :src="dollarImage" fit="contain" />
          <span>{{ detail.trackPrice || '-' }}</span>
        </div>
      </div>
    </div>
  </el-card>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
import dollarImage from '~/assets/image/currency-dollar.png'

const props = defineProps<{
  detail: {
    artistName: string
    trackName: string
    primaryGenreName: string
    trackPrice: number
    artworkUrl100: string
  }
}>()
</script>

<style lang="scss" scoped>
@import 'style';
</style>
