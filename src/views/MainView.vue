<template>
  <div class="container">
    <Sidebar></Sidebar>

    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script setup>

import Sidebar from '@/components/Sidebar.vue';



</script>

<style>
.container {
  display: flex;
}

.content {
  flex: 1;
  padding: 20px;
}
</style>
