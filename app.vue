<script setup lang="ts">
import { ref } from 'vue'
const modalStatus = ref(false)
const closeModal2 = () => {
  modalStatus.value = false
}


</script>
<template>
  <section class="flex flex-col justify-evenly min-h-screen background-color w-100">
    <h5 class="color-text title text-6xl uppercase text-center">
      <p>hola. Soy johnny</p>
      <p class="text-xl">Bienvenido</p>
    </h5>
    <article
      class="min-h-max my-12 flex flex-col items-center justify-center space-y-14 md:flex-row md:space-x-32 md:space-y-0 w-100">
      <button class="circle" @click="modalStatus = true">
        <span class="color-text">
          Proyectos
        </span>
      </button>
      <!-- <button class="circle">
        <span class="color-text">
          Proyectos
        </span>
      </button> -->
    </article>
    <article class="color-text">
      <p class="subtitle text-justify">
        Soy una persona apasionada por las computadoras, considerándolas una herramienta excelente que nos permite crear y
        resolver numerosos problemas, especialmente en el ámbito de la web.
        En la actualidad, se presentan muchos desafíos para desarrollar una interfaz de usuario eficaz y me entusiasma
        encontrar soluciones a estos problemas.
        Me caracterizo por estar en constante aprendizaje y mantenerme al día con las últimas tecnologías en torno al
        desarrollo front end.
        Además, disfruto creando prototipos con sistemas embebidos como Arduino y ESP8266.
        En mi tiempo libre, practico skateboarding y me creo música con sintetizadores e instrumentos musicales.
        Creo firmemente que la combinación de tecnología, deporte y arte enriquece mi espiritu y potencia mi creatividad
      </p>
      <div class="subtitle flex align-center items-center justify-around flex-row">
        <p>Habilidades:</p>
        <HtmlIcon />
        <CssIcon />
        <JavaScriptIcon />
        <TypeScriptIcon />
        <JsonIcon />
        <VueIcon />
      </div>
      <div class="flex justify-center">
        <p class="subtitle color-text">
          linkeding, github, gmail,
        </p>
      </div>
    </article>
  </section>
  <!-- modal -->
  <Modal :modalStatus="modalStatus" :closeModal="closeModal2" />
</template>
