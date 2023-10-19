<script setup lang="ts">
const data = await queryContent('/home').findOne()
console.log('data', data)
</script>
<template>
  <section class="mx-4 md:mx-60 flex flex-col justify-evenly min-h-screen w-100">
    <h5 class="color-text title text-6xl uppercase text-center md:text-left">
      <p class="text-xl mt-4 md:-mt-2 tracking-wider">
        {{ data.title.principal ?? ''}}
      </p>
      <p class="capitalize">
        {{ data.title.subPrincipal ?? ''}}
      </p>
    </h5>
    <article class="h-64 max-h-72 md:h-56 md:max-h-64 flex justify-center">
      <div class="flex flex-col items-center justify-center space-y-14 md:flex-row md:space-x-32 md:space-y-0 w-100">
        <button class="circle pointer-events-none">
          <span class="title text-md uppercase tracking-wider">
            {{ data.circle }}
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
        {{ data.description }}
      </p>
      <div class="subtitle flex items-center mt-4 md:mt-6 space-x-3">
        <p class="subtitle text-sm">{{ data.habilities }}</p>
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
        <p class="subtitle text-sm">{{ data.projects }}</p>
        <a class="hover:text-sky-600 italic"
          target="_blank"
          href="https://www.malahierbatropical.com/radio/"
        >
         * MalaHierba *
        </a>
      </div>
      <p class="color-text text-center subtitle text-sm">
        {{ data.infoFooter }}
      </p>
    </article>
  </section>
</template>
