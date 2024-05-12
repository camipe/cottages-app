<script setup lang="ts">
import type { Cottage } from '@/types/cottage.ts'

defineProps<{
  cottage: Cottage
}>()
</script>

<template>
  <PCard>
    <template #header>
      <img :src="cottage.image" class="object-cover w-full h-60" alt="">
    </template>
    <template #title>
      <h2>{{ cottage.title }}</h2>
    </template>
    <template #subtitle>
      {{ cottage.address }}, {{ cottage.postalCode }} {{ cottage.city }}
    </template>
    <template #content>
      <div class="flex gap-4">
        <p class="flex-grow p-3 border rounded-lg border-secondary">
          Sängar:
          {{ cottage.beds }}
        </p>
        <p class="flex flex-grow p-3 border rounded-lg border-secondary">
          Rum:
          {{ cottage.rooms }}
        </p>
      </div>
    </template>
    <template #footer>
      <NuxtLink :to="{ name: 'booking-cottageId', params: { cottageId: cottage.id } }" class="inline-flex items-center justify-center w-full px-4 py-3 text-center align-bottom border text-primary-inverse bg-primary border-primary">
        Boka stuga <span class="sr-only">{{ cottage.title }}</span>
      </NuxtLink>
    </template>
  </PCard>
</template>
