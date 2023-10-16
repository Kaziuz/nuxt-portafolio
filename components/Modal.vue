<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    closeModal: (event: MouseEvent) => void,
    modalStatus: boolean
  }>
  (), {
    modalStatus: false
  }
)

</script>

<template>
  <div
    v-if="props.modalStatus"
    class="absolute inset-0 flex items-center justify-center bg-gray-700 bg-opacity-50"
  >
    <div class="max-w-2xl flex flex-col p-6 bg-white rounded-md shadow-xl bg-blue-900">
      <div>
        <div>
          <a href="https://www.malahierbatropical.com/radio/">MalaHierba</a>
        </div>
      </div>
      <button
        class="px-6 py-2 text-white border border-blue-600 rounded bg-red-500"
        @click="props.closeModal"
      >
        cerrar
      </button>
    </div>
    
  </div>
</template>