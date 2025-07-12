<template>
  <div>
    <h2>Formulario de registro</h2>

    <Form :validation-schema="shema" @submit="onSubmit">
      <div class="form">
        <label for="nombre">Nombre: </label>
        <Field v-model="nombre" type="text" name="nombre" id="nombre" placeholder="Nombre"></Field>
        <ErrorMessage name="nombre"></ErrorMessage>
      </div>

      <div class="form">
        <label for="email">Email: </label>
        <Field v-model="email" type="email" name="email" id="email" placeholder="Email"></Field>
        <ErrorMessage name="email"></ErrorMessage>
      </div>

      <div class="form">
        <button type="submit">Registrate</button>

      </div>
    </form>

  </div>
</template>

<script setup>
import { Field, Form, ErrorMessage } from 'vee-validate'
import { shema } from '../schema/validationShema';
import { useRegistrarStore } from '../stores/registrarStore';
import {ref} from 'vue';

const registrarStore = useRegistrarStore();

const nombre = ref('');
const email = ref('')



const onSubmit = () => {
  registrarStore.guardarRegistro(nombre.value, email.value)
  console.log('Formulario enviado con los siguientes valores:');
};

</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
}

label {
  margin: 5px 0;
}

input {
  margin-bottom: 10px;
  padding: 5px;
  width: 200px;
}

button {
  padding: 5px;
  width: 100px;
  background-color: lightblue;
  border-radius: 5px;
  border: none;
  cursor: pointer;
}

button:hover {
  background-color: deepskyblue;
}
</style>
