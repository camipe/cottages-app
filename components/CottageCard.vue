<script setup lang="ts">
import type { Cottage } from '@/types/cottage.ts'

const props = defineProps<{
  as: string
  cottage: Cottage
}>()
</script>

<template>
  <component :is="props.as" class="p-4 bg-white border-none rounded-lg">
    <h2 class="mb-1 text-xl font-semibold">
      {{ cottage.title }}
    </h2>
    <p class="mb-2 italic font-light 4text-sm text-stone-600">
      {{ cottage.address }}, {{ cottage.postalCode }} {{ cottage.city }}
    </p>
    <div class="flex gap-1 mb-4">
      <p>Sängar: {{ cottage.beds }}</p>
      <p>Rum{{ cottage.rooms }}</p>
    </div>
    <NuxtLink :to="{ name: 'booking-cottageId', params: { cottageId: cottage.id } }" class="w-full p-4 bg-stone-300 text-stone-800">
      Boka stuga
    </NuxtLink>
  </component>
</template>
