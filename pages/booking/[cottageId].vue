<script setup lang="ts">
import type { Booking } from '~/types/booking'

const route = useRoute()

const { findCottageById } = useCottages()
const { addBooking } = useBookings()

const cottage = computed(() => {
  return findCottageById(route.params.cottageId as string)
})

const booking = ref<Booking>({
  id: generateId(),
  start: '',
  end: '',
  cottageId: cottage?.value.id,
  guest: {
    name: '',
    email: '',
    phone: '',
  },
})

function handleSubmit() {
  addBooking(booking.value)
}
</script>

<template>
  <div class="px-2 mt-4 md:px-4 md:container">
    <h1 class="text-2xl font-semibold">
      Boka {{ cottage?.title }}
    </h1>
    <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
      <div>
        <h2 class="text-xl font-semibold">
          {{ cottage?.title }}
        </h2>
        <p class="italic font-light text-stone-600">
          {{ cottage?.address }}, {{ cottage?.postalCode }} {{ cottage?.city }}
        </p>
        <div class="flex gap-1 mb-4">
          <p>Sängar: {{ cottage?.beds }}</p>
          <p>Rum: {{ cottage?.rooms }}</p>
        </div>
      </div>
      <div>
        <form class="flex flex-col" @submit.prevent="handleSubmit">
          <label for="start">Incheckning</label>
          <PCalendar id="start" v-model="booking.start" />
          <label for="end">Utcheckning</label>
          <PCalendar v-model="booking.end" />
          <label for="name">Namn</label>
          <PInputText id="name" v-model="booking.guest.name" type="text" variant="filled" />
          <label for="email">Email</label>
          <PInputText id="email" v-model="booking.guest.email" type="text" variant="filled" />
          <label for="phone">Phone</label>
          <PInputText id="phone" v-model="booking.guest.phone" type="text" variant="filled" />

          <button type="submit">
            Boka
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
