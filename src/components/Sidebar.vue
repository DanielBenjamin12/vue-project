<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="sidebar">
    <h2>Barra lateral</h2>
    <h5>Nombre: {{ registrarStore.nombre }}</h5>
    <h5>Email: {{ registrarStore.email }}</h5>
    <ul>
      <li>
        <router-link to="/contador">Contador</router-link>
      </li>
      <li>
        <router-link to="/lista-de-tareas">Lista de tareas</router-link>
      </li>
      <li>
        <router-link to="/registar">Registrar</router-link>
      </li>
    </ul>

  </div>
</template>

<script setup>
import { useRegistrarStore } from '@/modules/registro/stores/registrarStore';


const registrarStore = useRegistrarStore();


</script>

<style>
.sidebar {
  width: 200px;
  background-color: lightcoral;
  padding: 20px;
}
</style>
