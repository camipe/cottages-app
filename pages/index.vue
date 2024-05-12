<script setup lang="ts">
const { cottages } = useCottages()
</script>

<template>
  <div>
    <ul>
      <li v-for="cottage in cottages" :key="cottage.id">
        {{ cottage }}
      </li>
    </ul>
  </div>
</template>
