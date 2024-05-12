<script setup lang="ts">
import type { Booking } from '~/types/booking'

const route = useRoute()

const { findCottageById } = useCottages()
const { addBooking, findOccupiedDates } = useBookings()

const showConfirmation = ref(false)
const hasErrors = ref(false)

const cottage = computed(() => {
  return findCottageById(route.params.cottageId as string)
})

const booking = ref<Booking>({
  id: generateId(),
  start: undefined,
  end: undefined,
  cottageId: cottage?.value?.id || '',
  guest: {
    name: '',
    email: '',
    phone: '',
  },
})

const minDateStart = computed(() => {
  return new Date()
})

const minDateEnd = computed(() => {
  return booking.value.start ? booking.value.start : new Date()
})

const disabledDates = computed(() => {
  const cottageId = cottage.value?.id || ''
  return findOccupiedDates(cottageId)
})

function validateForm() {
  return booking.value.start && booking.value.end && booking.value.guest.name && booking.value.guest.email && booking.value.guest.phone
}

function handleSubmit() {
  const isValid = validateForm()

  if (!isValid) {
    hasErrors.value = true
    return
  }

  hasErrors.value = false
  addBooking(booking.value)
  showConfirmation.value = true
}

function handleConfirmation() {
  showConfirmation.value = false
  navigateTo('/')
}
</script>

<template>
  <div class="px-3 my-4 space-y-4 md:px-4 lg:container">
    <h1 class="mb-4 text-3xl font-semibold">
      Boka {{ cottage?.title }}
    </h1>

    <div class="grid grid-cols-1 gap-8 md:grid-cols-2">
      <!-- Cottage information  -->
      <div>
        <PCard>
          <template #header>
            <img :src="cottage?.image" class="object-cover w-full mb-4 h-80" alt="">
          </template>
          <template #title>
            <h2 class="text-xl font-semibold">
              {{ cottage?.title }}
            </h2>
          </template>
          <template #subtitle>
            <p class="mb-4 italic font-light text-stone-600">
              {{ cottage?.address }}, {{ cottage?.postalCode }} {{ cottage?.city }}
            </p>
          </template>
          <template #content>
            <p class="mb-4">
              {{ cottage?.description }}
            </p>
            <div class="flex gap-4">
              <p class="flex-grow p-3 border rounded-lg border-secondary">
                Sängar:
                {{ cottage?.beds }}
              </p>
              <p class="flex flex-grow p-3 border rounded-lg border-secondary">
                Rum:
                {{ cottage?.rooms }}
              </p>
            </div>
          </template>
        </PCard>
      </div>
      <!-- Booking form  -->
      <div>
        <PCard>
          <template #title>
            <h2 class="text-xl font-semibold">
              Dina uppgifter
            </h2>
          </template>
          <template #content>
            <form class="space-y-3" @submit.prevent="handleSubmit">
              <div class="flex flex-col">
                <label for="start">Incheckning</label>
                <PCalendar id="start" v-model="booking.start" :min-date="minDateStart" show-icon date-format="yy-mm-dd" :disabled-dates="disabledDates" />
              </div>

              <div class="flex flex-col">
                <label for="end">Utcheckning</label>
                <PCalendar v-model="booking.end" :min-date="minDateEnd" show-icon date-format="yy-mm-dd" :disabled-dates="disabledDates" />
              </div>

              <div class="flex flex-col">
                <label for="name">Namn</label>
                <PInputText id="name" v-model="booking.guest.name" type="text" variant="filled" />
              </div>

              <div class="flex flex-col">
                <label for="email">Email</label>
                <PInputText id="email" v-model="booking.guest.email" type="text" variant="filled" />
              </div>

              <div class="flex flex-col">
                <label for="phone">Phone</label>
                <PInputText id="phone" v-model="booking.guest.phone" type="text" variant="filled" />
              </div>

              <PMessage v-if="hasErrors" severity="error">
                Alla fält måste vara ifyllda!
              </PMessage>

              <PButton type="submit">
                Boka
              </PButton>
            </form>
          </template>
        </PCard>
      </div>
    </div>

    <!-- Confirmation  -->
    <PDialog v-model:visible="showConfirmation" modal :closable="false">
      <template #header>
        <h2 class="text-xl font-semibold">
          Tack för din bokning.
        </h2>
      </template>

      <p>Vi har tagit emot din bokning av {{ cottage?.title }} </p>
      <p>{{ formatDate(booking?.start) }} till {{ formatDate(booking?.end) }}</p>
      <PButton class="mt-8" @click="handleConfirmation">
        Gå vidare
      </PButton>
    </PDialog>
  </div>
</template>

<style scoped>

</style>
