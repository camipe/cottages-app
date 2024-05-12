<script setup lang="ts">
import type { Booking } from '~/types/booking'

const props = defineProps<{
  items: Booking[]
}>()

const { findCottageById } = useCottages()

const bookingsWithCottage = computed(() => {
  return props.items.map((booking) => {
    const cottage = findCottageById (booking.cottageId)

    return {
      ...booking,
      cottage,
    }
  })
})
</script>

<template>
  <PDataTable :value="bookingsWithCottage" table-style="min-width: 50rem">
    <PColumn field="cottage.title" header="Stuga" />
    <PColumn field="cottage.address" header="Adress" />
    <PColumn field="start" header="Startdatum" />
    <PColumn field="end" header="Slutdatum" />
    <PColumn field="guest.name" header="Name" />
    <PColumn field="guest.email" header="Email" />
    <PColumn field="guest.phone" header="Phone" />
  </PDataTable>
</template>

<style scoped>

</style>
