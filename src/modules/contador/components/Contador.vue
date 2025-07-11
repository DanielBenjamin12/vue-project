<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <p>{{contador }}</p>

  <button @click="incrementar()">
    incrementar
  </button>
    <button @click="decrementar()">
    decrementar
  </button>
</template>

<script setup>

  import { ref } from 'vue';

  const contador =  ref(0)
  console.log(contador)

  const incrementar = () =>{
    contador.value++
  }

  const decrementar = () => {
    contador.value--
  }

</script>

<style scoped>

p{
  color: lightblue;
}

</style>
