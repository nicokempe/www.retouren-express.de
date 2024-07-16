<template>
  <div class="flex min-h-screen flex-col">
    <header class="sticky top-0 z-50 w-full bg-background">
      <div class="container flex h-16 items-center justify-between px-4 md:px-6 mx-auto">
        <NuxtLink to="/" class="flex items-center gap-2">
          <BoxIcon class="h-6 w-6" />
          <span class="text-lg font-bold">Retouren Express</span>
        </NuxtLink>
        <nav class="hidden items-center gap-4 md:flex">
          <NuxtLink :to="{ path: '/', hash: '#about' }" class="text-sm font-medium hover:underline">Über uns</NuxtLink>
          <NuxtLink :to="{ path: '/', hash: '#how-it-works' }" class="text-sm font-medium hover:underline">Wie es funktioniert</NuxtLink>
          <NuxtLink :to="{ path: '/', hash: '#services' }" class="text-sm font-medium hover:underline">Dienstleistungen</NuxtLink>
          <NuxtLink :to="{ path: '/', hash: '#faq' }" class="text-sm font-medium hover:underline">FAQ</NuxtLink>
        </nav>
        <NuxtLink
            to="https://www.google.com/maps/search/?api=1&query=48.83722243760949,9.178458121836819"
            target="_blank"
            class="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
        >
          Automaten finden
        </NuxtLink>
      </div>
    </header>
    
    <NuxtPage />

    <footer class="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
      <p class="text-xs text-muted-foreground">&copy; 2024 Elvis Ramadani & Lilly Kempe GbR. Alle Rechte vorbehalten.</p>
      <nav class="sm:ml-auto flex gap-4 sm:gap-6">
        <NuxtLink to="#" class="text-xs hover:underline underline-offset-4">Nutzungsbedingungen</NuxtLink>
        <NuxtLink to="#" class="text-xs hover:underline underline-offset-4">Datenschutz</NuxtLink>
        <NuxtLink to="#" class="text-xs hover:underline underline-offset-4">Facebook</NuxtLink>
        <NuxtLink to="#" class="text-xs hover:underline underline-offset-4">Twitter</NuxtLink>
        <NuxtLink to="#" class="text-xs hover:underline underline-offset-4">Instagram</NuxtLink>
      </nav>
    </footer>
  </div>
</template>

<script setup lang="ts">
import BoxIcon from "~/components/icons/BoxIcon.vue";
</script>
