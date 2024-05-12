<script setup lang="ts">
const { bookings } = useBookings()
</script>

<template>
  <div class="px-2 mt-4 md:px-4 2xl:container">
    <h1 class="mb-4 text-3xl font-bold">
      Bokade stugor
    </h1>
    <BookingList :items="bookings" />
  </div>
</template>
