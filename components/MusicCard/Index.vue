<template>
  <el-card shadow="hover" class="music-card">
    <el-image />
    <div class="wrapper">
      <div class="wrapper-top">
        <h3>Travie McCoy</h3>
        <h4>Rough Water (feat. Jason Mraz)</h4>
      </div>
      <div class="wrapper-bottom">
        <el-tag>Pop</el-tag>
        <div class="price">
          <el-image :src="dollarImage" fit="contain" />
          <span>1.9</span>
        </div>
      </div>
    </div>
  </el-card>
</template>

<script setup lang="ts">
import dollarImage from '~/assets/image/currency-dollar.png'
</script>

<style lang="scss" scoped>
@import 'style';
</style>
