<script setup lang="ts">

</script>

<template>
  <div class="flex bg-white">
    <div class="p-4">
      <NuxtLink to="/">
        Stugbokning.se
      </NuxtLink>
    </div>
    <nav class="ml-auto">
      <ul class="p-4 flex items-center gap-4">
        <li>
          <nuxt-link to="/">
            Stugor
          </nuxt-link>
        </li>
        <li>
          <nuxt-link to="/admin">
            Admin
          </nuxt-link>
        </li>
      </ul>
    </nav>
  </div>
</template>
