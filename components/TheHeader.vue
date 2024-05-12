<template>
  <div class="flex bg-white">
    <div class="p-4">
      <NuxtLink to="/">
        Stugbokning.se
      </NuxtLink>
    </div>
    <nav class="ml-auto">
      <ul class="flex items-center gap-4 p-4">
        <li>
          <nuxt-link to="/" exact-active-class="underline">
            Stugor
          </nuxt-link>
        </li>
        <li>
          <nuxt-link to="/admin" exact-active-class="underline">
            Admin
          </nuxt-link>
        </li>
      </ul>
    </nav>
  </div>
</template>
