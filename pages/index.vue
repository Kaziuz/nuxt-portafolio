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
  <section class="mx-4 md:mx-60 flex flex-col justify-evenly min-h-screen w-100">
    <h5 class="color-text title text-6xl uppercase text-center md:text-left">
      <p class="text-xl mt-4 md:-mt-2 tracking-wider">
        {{ homeDataView?.principal }}
      </p>
      <p class="capitalize">
        {{ homeDataView?.subPrincipal }}
      </p>
    </h5>
    <article class="h-64 max-h-72 md:h-56 md:max-h-64 flex justify-center">
      <div class="flex flex-col items-center justify-center space-y-14 md:flex-row md:space-x-32 md:space-y-0 w-100">
        <button class="circle pointer-events-none">
          <span class="title text-md uppercase tracking-wider">
            {{ homeDataView?.circle }}
          </span>
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
        {{ homeDataView?.description }}
      </p>
      <div class="subtitle flex items-center mt-4 md:mt-6 space-x-3">
        <p class="subtitle text-sm">{{ homeDataView?.habilities }}</p>
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
        <p class="subtitle text-sm">{{ homeDataView?.projects }}</p>
        <div class="flex items-center align-center flex-col">
          <a class="hover:text-sky-600 italic"
            target="_blank"
            href="https://www.malahierbatropical.com/radio/"
          >
           * MalaHierba *
          </a>
          <div class="text-sm">Vue3, Leaflet, Vuex, TailwindCSS</div>
        </div>
        <div class="flex items-center align-center flex-col">
          <a class="hover:text-sky-600 italic"
            target="_blank"
            href="https://bestllook.netlify.app/"
          >
           * Bestllook *
          </a>
          <div class="text-sm">Html, Css</div>
        </div>
      </div>
      <p class="color-text text-center subtitle text-sm">
        {{ homeDataView?.infoFooter }}
      </p>
    </article>
  </section>
</template>
