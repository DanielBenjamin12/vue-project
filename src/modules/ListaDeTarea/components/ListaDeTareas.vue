<template>
  <div>
    <h2>Lista de Tareas</h2>
    <input type="text" v-model="nuevaTarea" @keyup.enter="agregarTarea">
    <ul>
      <li v-for="(tarea,index) in tareas" :key="index">
        {{ tarea }}
        <button @click="tareas.splice(index, 1)">Eliminar</button>

      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const nuevaTarea = ref('');
const tareas = ref([]);

const agregarTarea = () => {
  if (nuevaTarea.value.trim()) {
    tareas.value.push(nuevaTarea.value);
    nuevaTarea.value = '';
  }
}
</script>

<style>

</style>
