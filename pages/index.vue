<script setup lang="ts">
const { cottages } = useCottages()
</script>

<template>
  <div class="px-2 md:px-4 mt-4 2xl:container">
    <h1 class="mb-4 text-3xl font-bold">
      Våra stugor
    </h1>
    <ul class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <CottageCard v-for="cottage in cottages" :key="cottage.id" as="li" :cottage="cottage" />
    </ul>
  </div>
</template>
