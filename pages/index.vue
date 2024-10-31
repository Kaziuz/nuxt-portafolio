<script setup lang="ts">
import { ref, onMounted } from 'vue'

interface HomeData {
  principal: string
  subPrincipal: string
  circle: string
  description: string
  habilities: string
  projects: string
  infoFooter: string
}
const homeDataView = ref<HomeData | null>(null)

const date = new Date()
const year = date.getFullYear()

onMounted(async () => {
  const fetchHomeData = await queryContent('/home').findOne()

  homeDataView.value = {
    principal: fetchHomeData.principal,
    subPrincipal: fetchHomeData.subPrincipal,
    circle: fetchHomeData.circle,
    description: fetchHomeData.description,
    habilities: fetchHomeData.habilities,
    projects: fetchHomeData.projects,
    infoFooter: fetchHomeData.infoFooter,
  }
})

</script>
<template>
  <!-- bg-green-500
  sm:bg-pink-600
  md:bg-yellow-500
  lg:bg-blue-800
  xl:bg-green-900
  2xl:bg-pink-900 -->
  <section class="bg-black mx-4 xl:mx-20 flex flex-col justify-evenly min-h-screen w-100">
    <h5 class="color-text title text-6xl uppercase text-center md:text-left">
      <p class="capitalize">
        {{ homeDataView?.circle }}
      </p>
      <p class="text-xl mt-4 md:mt-2 tracking-wider">
        {{ homeDataView?.principal }}
      </p>
    </h5>
    <article class="h-64 max-h-72 md:h-56 md:max-h-64 flex justify-center">
      <div class="flex flex-col items-center justify-center space-y-14 md:flex-row md:space-y-0 w-auto">
        <h2
          class="welcome title text-white text-7xl md:text-8xl text-center uppercase tracking-wider"
        >
        {{ homeDataView?.subPrincipal }}    
        </h2>
      </div>
    </article>
    <article class="color-text text-base md:text-lg">
      <div class="flex justify-center my-6 xl:my-4 xl:justify-end">
        <a href="https://github.com/kaziuz" target="_blank">
          <IconGithub class="cursor-pointer" size="35px" />
        </a>
        <a href="mailto:johnnysepulveda988@gmail.com">
          <IconGmail class="cursor-pointer" size="35px" />
        </a>
      </div>
      <!-- Projects -->
      <article class="flex items-center flex-col xl:flex-row xl:items-start gap-8 xl:gap-14 mt-4">
        <!-- Malahierba (2022) -->
        <div class="w-full xl:w-1/2 flex items-center align-center flex-col">
          <a class="hover:text-sky-600 text-center text-md"
            target="_blank"
            href="https://malahierbatropical.com/"
          >
            Toca <b class="italic text-orange-500">MalaHierba</b> para visitar la web
            <NuxtImg
              src="/img/malahierba.jpg"
              sizes="100vw sm:50vw md:400px"
            />
          </a>
          <div class="">
            <h6 class="text-sm font-semibold text-center">Tecnologías usadas en este proyecto:</h6>
            <div class="text-xs text-center mt-2 flex justify-center gap-2">
              <span class="p-1 border border-orange-500">Vue3</span>
              <span class="p-1 border border-orange-500">Leaflet</span>
              <span class="p-1 border border-orange-500">Vuex</span>
              <span class="p-1 border border-orange-500">TailWindCSS</span>
              <span class="p-1 border border-orange-500">Axios</span>
              <span class="p-1 border border-orange-500">Node.js</span>
            </div>
            <p class="mt-4 subtitle">Malahierba es un proyecto parecido a un Netlabel, la diferencia es que todo el contenido musical proporcionado solo se hace con fines de divulgación.</p>
            <p class="subtitle">En este proyecto en especifico aprendí a utilizar el <a href="https://vuejs.org/guide/built-ins/teleport.html" target="_blank" class="underline">teleport</a> de vue para sacar los iframes de youtube y hacer que se muestren en el sitio web.</p>
          </div>
        </div>
        <!-- Circulo de quintas (2024) -->
        <div class="w-full xl:w-1/2 flex items-center align-center flex-col">
          <a class="hover:text-sky-600 text-center text-md"
            target="_blank"
            href="https://circulo-de-quintas.netlify.app/"
          >
            Toca <b class="italic text-orange-500">Quintas</b> para visitar la web
            <NuxtImg
              src="/img/circulo-de-quintas.jpg"
              sizes="100vw sm:50vw md:400px"
            />
          </a>
          <div class="">
            <h6 class="text-sm font-semibold text-center">Tecnologías usadas en este proyecto:</h6>
            <div class="text-xs text-center mt-2 flex justify-center gap-2">
              <span class="p-1 border border-orange-500">Html</span>
              <span class="p-1 border border-orange-500">CSS</span>
              <span class="p-1 border border-orange-500">JS</span>
              <span class="p-1 border border-orange-500">D3.js</span>
            </div>
            <p class="mt-4 subtitle">Circulo de Quintas es un proyecto que utiliza la biblioteca D3.js para crear un gráfico de torta que al presionarse un segmento, se muestra su escala y sus acordes relacionados.</p>
            <p class="subtitle">En este proyecto aprendí a utilizar la biblioteca D3.js para crear gráficos svg interactivos, ademas de una herramienta que me sirve personalmente para la creación musical.</p>
          </div>
        </div>
        <!-- Bestlook (2020) -->
        <div class="w-full xl:w-1/2 flex items-center align-center flex-col">
          <a class="hover:text-sky-600 text-center text-md"
            target="_blank"
            href="https://bestllook.netlify.app/"
          >
            Toca <b class="italic text-orange-500">BestLook</b> para visitar la web
            <NuxtImg
              src="/img/bestlook.jpg"
              sizes="100vw sm:50vw md:400px"
            />
          </a>
          <div class="">
            <h6 class="text-sm font-semibold text-center">Tecnologías usadas en este proyecto:</h6>
            <div class="text-xs text-center mt-2 flex justify-center gap-2">
              <span class="p-1 border border-orange-500">Html</span>
              <span class="p-1 border border-orange-500">CSS</span>
            </div>
            <p class="mt-4 subtitle">BestLook is a simple layout that combine html, css3 and flexbox to create a simple web page.</p>
            <p class="subtitle">Was a great experience learning how to use css in the professional form to create a responsive layout.</p>
          </div>
        </div>
        <!-- Luwica (2016)-->
        <div class="w-full xl:w-1/2 flex items-center align-center flex-col">
          <a class="hover:text-sky-600 text-center text-md"
            target="_blank"
            href="https://luwica.netlify.app/"
          >
            Toca <b class="italic text-orange-500">LuWica</b> para visitar la web
            <NuxtImg
              src="/img/luwica.jpg"
              sizes="100vw sm:50vw md:400px"
            />
          </a>
          <div class="">
            <h6 class="text-sm font-semibold text-center">Tecnologías usadas en este proyecto:</h6>
            <div class="text-xs text-center mt-2 flex justify-center gap-2">
              <span class="p-1 border border-orange-500">Html</span>
              <span class="p-1 border border-orange-500">CSS</span>
            </div>
            <p class="mt-4 subtitle">Luwica fue un dispositivo con arquitectura digital y funcionamiento sencillo; una lámpara que puede ser encendida y apagada por medio de una interfaz de usuario que se accede por medio de wifi y que se manipula en el celular.</p>
            <p class="subtitle">Finalmente fue un aparato para su momento de salida, 2016.</p>
          </div>
        </div>
      </article>
      <!-- Projects -->
      <!-- <article class="flex items-start flex-col xl:flex-row gap-8 xl:gap-14 mt-12"> -->
        <!-- Luwica -->
        <!-- <div class="w-full xl:w-1/2 flex items-center align-center flex-col">
          <a class="hover:text-sky-600 text-center text-md"
            target="_blank"
            href="https://luwica.netlify.app/"
          >
            Toca <b class="italic text-md text-orange-500">LuWica</b> para visitar la web
            <NuxtImg
              src="/img/luwica.jpg"
              sizes="100vw sm:50vw md:400px"
            />
          </a>
          <div class="">
            <h6 class="text-sm font-semibold text-center">Tecnologías usadas en este proyecto:</h6>
            <div class="text-base text-center mt-2 flex justify-center gap-2">
              <span class="p-1 border border-orange-500">Html</span>
              <span class="p-1 border border-orange-500">CSS</span>
            </div>
            <p class="mt-4 subtitle">Luwica fue un dispositivo con arquitectura digital y funcionamiento sencillo; una lámpara que puede ser encendida y apagada por medio de una interfaz de usuario que se accede por medio de wifi y que se manipula en el celular.</p>
            <p class="subtitle">Finalmente fue un aparato para su momento de salida, 2016.</p>
          </div>
        </div> -->
        <!-- other project -->
        <!-- <div class="w-full xl:w-1/2 flex items-center align-center flex-col">
          <a class="hover:text-sky-600 text-center text-md"
            target="_blank"
            href="https://luwica.netlify.app/"
          >
            Toca <b class="italic text-md text-orange-500">LuWica</b> para visitar la web
            <NuxtImg
              src="/img/luwica.jpg"
              sizes="100vw sm:50vw md:400px"
            />
          </a>
          <div class="">
            <h6 class="text-sm font-semibold text-center">Tecnologías usadas en este proyecto:</h6>
            <div class="text-base text-center mt-2 flex justify-center gap-2">
              <span class="p-1 border border-orange-500">Html</span>
              <span class="p-1 border border-orange-500">CSS</span>
            </div>
            <p class="mt-4 subtitle">Luwica fue un dispositivo con arquitectura digital y funcionamiento sencillo; una lámpara que puede ser encendida y apagada por medio de una interfaz de usuario que se accede por medio de wifi y que se manipula en el celular.</p>
            <p class="subtitle">Finalmente fue un aparato para su momento de salida, 2016.</p>
          </div>
        </div> -->
      <!-- </article> -->
      <p class="subtitle text-justify mt-4 xl:mt-12">
        Bienvenido a mi web, Me llamo Johnny y soy un desarrollador web que utiliza tecnologías como VueJS,TailwindCSS, JavaScript, HTML, CSS, entre otras para crear sitios web y aplicaciones de alta calidad.
        Me gusta explorar nuevas tecnologías y trabajar en equipo, esto me ha permitido aprender de los desarrolladores más experimentados y conocer otras herramientas y metodologías de desarrollo.

        Ademas de la web, me gusta el mundo de las criptomonedas y las tecnologías que se utilizan para su
        funcionamiento, me parece que son el futuro del dinero. Por otra parte, disfruto prototipando y creando sistemas embebidos con Arduino y ESP8266.

        En mi tiempo libre, practico skateboarding, creo <a href="https://soundcloud.com/radionoiselab" target="_blank" class="underline hover:text-sky-600">
          música con sintetizadores e instrumentos musicales</a>, hago parte del colectivo 
          <a href="https://unloquer.org/" target="_blank" class="underline hover:text-sky-600">Unloquer</a> 
          donde realizamos actividades en torno al software y el hardware libre y finalmente me dedico a crear contenido para un canal de videojuegos llamado <a href="https://www.youtube.com/@EstadoBit" target="_blank" class="underline hover:text-sky-600">EstadoBit</a>

        Creo firmemente que la combinación de tecnología, deporte y arte enriquece mi espíritu y potencia mi creatividad.
      </p>
      <div class="subtitle flex items-center mt-12 md:mt-6 space-x-3">
        <p class="subtitle text-md">{{ homeDataView?.habilities }}</p>
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
      <p class="color-text text-center subtitle text-sm mt-12">
        {{ homeDataView?.infoFooter }} - {{ year }}
      </p>
    </article>
  </section>
</template>

