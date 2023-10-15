<script setup lang="ts">
import { ref } from 'vue'
const openModal1 = ref(false)
const openModal2 = ref(false)

const closeModal1 = () => {
  openModal1.value = false
}

const closeModal2 = () => {
  openModal2.value = false
}

</script>
<template>
  <div>
    <!-- <NuxtWelcome /> -->
    <div class="flex flex-col justify-between min-h-screen bg-gray-100 w-100">
      <div class="">Hola. Soy johnny, bienvenido!</div>
      <div class="flex flex-col items-center space-y-4 md:flex-row md:space-x-4 md:space-y-0 bg-yellow-200 w-100">
        <button
          class="w-32 h-32 bg-green-500"
          @click="openModal1 = true"
        >
          texto1
        </button>
        <button
          class="w-32 h-32 bg-green-500"
          @click="openModal2 = true"
        >
          texto 1
        </button>
      </div>
      <div>
          Soy una persona apasionada por las computadoras, considerándolas una herramienta excelente que nos permite crear y resolver numerosos problemas, especialmente en el ámbito de la web.
          En la actualidad, se presentan muchos desafíos para desarrollar una interfaz de usuario eficaz y me entusiasma encontrar soluciones a estos problemas.
          Me caracterizo por estar en constante aprendizaje y mantenerme al día con las últimas tecnologías en torno al desarrollo front end.
          Además, disfruto creando prototipos con sistemas embebidos como Arduino y ESP8266.
          En mi tiempo libre, practico skateboarding y me creo música con sintetizadores e instrumentos musicales.
          Creo firmemente que la combinación de tecnología, deporte y arte enriquece mi espiritu y potencia mi creatividad</div>
      </div>
    </div>
  <!-- modal -->
  <Modal :statusModal="openModal1" :closeModal="closeModal1" />
  <Modal :statusModal="openModal2" :closeModal="closeModal2" />
</template>
