<script setup lang="ts">
defineProps({
  msg: String,
})
</script>

<template>
  <div class="mb-4">
    <button
      class="mx-2 px-2 py-1 text-xs rounded text-gray-800 border focus:outline-none hover:bg-gray-100"
    >
      <slot></slot>
    </button>
  </div>
</template>
