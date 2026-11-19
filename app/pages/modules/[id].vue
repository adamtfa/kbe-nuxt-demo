<script setup lang="ts">
const route = useRoute()
const { data: currentModule, error } = await useModule(route.params.id as string)

if (error.value || !currentModule.value) {
  throw createError({ statusCode: 404, statusMessage: 'Modul nicht gefunden', fatal: true })
}

useSeoMeta({
  title: () => `${currentModule.value?.title} – KBE Nuxt Demo`,
  description: () => currentModule.value?.description
})
</script>

<template>
  <div v-if="currentModule">
    <NuxtLink to="/">← Zurück zur Übersicht</NuxtLink>
    <h1>{{ currentModule.title }}</h1>
    <p><strong>ECTS:</strong> {{ currentModule.ects }}</p>
    <p><strong>Dozent:</strong> {{ currentModule.lecturer }}</p>
    <p>{{ currentModule.description }}</p>
  </div>
</template>
