<script setup lang="ts">
const { bookings } = useBookings()
</script>

<template>
  <div>
    <h1>admin</h1>
    <ul>
      <li v-for="booking in bookings" :key="booking.id">
        {{ booking }}
      </li>
    </ul>
  </div>
</template>
