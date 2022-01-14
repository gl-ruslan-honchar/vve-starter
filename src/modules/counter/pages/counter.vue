<script setup lang="ts">
import { useCounterStore } from "~~/counter/stores/counter";

const counter = useCounterStore();
</script>

<template>
  <div>
    <h1>Simple Counter Test</h1>
    <div>
      <!-- class="px-6 py-2 bg-gray-500 font-medium text-sm hover:bg-gray-600 text-gray-100 rounded" -->
      <button @click="counter.increment" class="btn">
        Click to update the count:
      </button>
      <div class="py-4">
        <span class="count">{{ counter.count }}</span>
      </div>
    </div>
  </div>
</template>
