<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    closeModal: (event: MouseEvent) => void,
    statusModal: boolean
  }>
  (), {
    statusModal: false
  }
)

</script>

<template>
  <div
    v-if="props.statusModal"
    class="absolute inset-0 flex items-center justify-center bg-gray-700 bg-opacity-50"
  >
    <div
      class="max-w-2xl p-6 bg-white rounded-md shadow-xl bg-blue-900"
    >
      hola
      <button
        class="px-6 py-2 text-white border border-blue-600 rounded bg-red-500"
        @click="props.closeModal"
      >
        cerrar
      </button>
    </div>
    
  </div>
</template>