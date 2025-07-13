<template>
  <div class="resultado">
    {{  props.resultado }}
  </div>
</template>

<script setup>
import { defineProps } from 'vue'

const props = defineProps(
  [
    'resultado',

  ]
)

</script>

<style scoped>
.resultado {
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-top: 12px;
  width: 50%;
}
</style>
