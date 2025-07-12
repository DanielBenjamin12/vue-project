<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="header">
    {{ mensajeRecibido }}<weather></weather>
</div>
</template>

<script setup>
import Weather from './weather.vue';
import {defineProps,ref, watch} from 'vue'

const props = defineProps(['mensaje']);
const mensajeRecibido = ref(props.mensaje)
watch(() => props.mensaje, (newValue) => {
  mensajeRecibido.value = newValue;
})

</script>

<style scoped>
.header{
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 20px;
  top : 0;
  left: 0;
  right: 0;
  background-color: #333;
  color: white;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}

h3{
 margin: 0;
}

</style>
