<script setup lang="ts"></script>
<template>
  <section class="mx-4 md:mx-60 flex flex-col justify-evenly min-h-screen w-100">
    <h5 class="color-text title text-6xl uppercase text-center md:text-left">
      <p class="text-xl mt-4 md:-mt-2 tracking-wider">Bienvenido 👋 🍰 🎮 🛹 🌀 </p>
      <p class="capitalize">soy johnny</p>
    </h5>
    <article class="h-64 max-h-72 md:h-56 md:max-h-64 flex justify-center">
      <div class="flex flex-col items-center justify-center space-y-14 md:flex-row md:space-x-32 md:space-y-0 w-100">
        <button class="circle pointer-events-none">
          <span class="title text-md uppercase tracking-wider">hola</span>
        </button>
      </div>
    </article>
    <article class="color-text text-base md:text-lg">
      <div class="flex justify-end my-4">
        <a href="https://github.com/kaziuz" target="_blank">
          <IconGithub class="cursor-pointer" size="35px" />
        </a>
        <a href="mailto:johnnysepulveda988@gmail.com">
          <IconGmail class="cursor-pointer" size="35px" />
        </a>
      </div>
      <p class="subtitle text-justify">
        Soy una persona apasionada por las computadoras, considerándolas una herramienta excelente que nos permite crear y
        resolver numerosos problemas, especialmente en el ámbito de la web.En la actualidad, se presentan muchos desafíos para
        desarrollar una interfaz de usuario eficaz y me entusiasma encontrar soluciones a estos problemas.Me caracterizo por estar
        en constante aprendizaje y mantenerme al día con las últimas tecnologías en torno al desarrollo front end y la web en general.
        Además, disfruto prototipando y creando sistemas embebidos con Arduino y ESP8266.
        En mi tiempo libre, practico skateboarding y me gusta crear música con sintetizadores e instrumentos musicales.
        Creo firmemente que la combinación de tecnología, deporte y arte enriquece mi espiritu y potencia mi creatividad.
      </p>
      <div class="subtitle flex items-center mt-4 md:mt-6 space-x-3">
        <p class="subtitle text-sm">Habilidades:</p>
        <IconHtml
          class="transition-all duration-500 ease-in-out transform hover:scale-125"
          size="30px"
        />
        <IconCss
          class="transition-all duration-500 ease-in-out transform hover:scale-125"
          size="30px"
        />
        <IconJavaScript
          class="transition-all duration-500 ease-in-out transform hover:scale-125"
          size="30px"
        />
        <IconTypeScript
          class="transition-all duration-500 ease-in-out transform hover:scale-125"
          size="30px"
        />
        <IconJson
          class="transition-all duration-500 ease-in-out transform hover:scale-125"
          size="30px"
        />
        <IconFrameWork
          class="transition-all duration-500 ease-in-out transform hover:scale-125"
          size="30px"
        />
      </div>
      <div class="subtitle flex items-center mt-4 md:mt-6 space-x-3">
        <p class="subtitle text-sm">Proyectos:</p>
        <a class="hover:text-sky-600 italic" target="_blank" href="https://www.malahierbatropical.com/radio/">
         * MalaHierba *
        </a>
      </div>
      <p class="color-text text-center subtitle text-sm">Medellín - 2023</p>
    </article>
  </section>
</template>
