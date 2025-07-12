<template>
  <Header :mensaje="texto"></Header>
  <div class="container">
    <Sidebar></Sidebar>

    <div class="content">
      <input type="text" v-model="texto">
      <router-view></router-view>
    </div>
  </div>
</template>

<script setup>

import Header from '@/components/Header.vue';
import Sidebar from '@/components/Sidebar.vue';
import {ref} from 'vue';

const texto = ref('');

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
