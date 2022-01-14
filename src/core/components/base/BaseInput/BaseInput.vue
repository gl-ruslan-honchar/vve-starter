<script setup lang="ts">
defineProps({
  msg: String,
})

const innerValue = ref(0)
</script>

<template>
  <div class="mb-4 px-2 w-full">
    <label class="block mb-1 text-sm" for="input1">Full name:</label>

    <input
      id="input1"
      v-model="innerValue"
      class="w-full border px-4 py-2 rounded focus:border-blue-500 focus:shadow-outline outline-none"
      type="text"
      autofocus
      placeholder="Full name..."
    /> </div
></template>
