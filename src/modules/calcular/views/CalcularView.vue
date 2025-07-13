<template>
  <h3>Propiedades Computadas</h3>
  <input type="text" v-model="valor" placeholder="Ingrese un valor" />
  <ResultadoSection :resultado="valorCalculado" />
</template>


<script setup>
import { ref,computed } from 'vue';
import ResultadoSection from '@/modules/calcular/components/ResultadoSection.vue'

const valor = ref('');
const valorCalculado =  computed(() => {
  return valor.value*3;
})

</script>


<style scoped></style>
