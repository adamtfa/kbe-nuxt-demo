<script setup lang="ts">
const route = useRoute()
const { data: modules } = await useFetch('/api/modules')

const currentModule = computed(() =>
    modules.value?.find((m) => m.id === Number(route.params.id))
)
</script>

<template>
  <div v-if="currentModule">
    <NuxtLink to="/">← Zurück zur Übersicht</NuxtLink>
    <h1>{{ currentModule.title }}</h1>
    <p><strong>ECTS:</strong> {{ currentModule.ects }}</p>
    <p><strong>Dozent:</strong> {{ currentModule.lecturer }}</p>
    <p>{{ currentModule.description }}</p>
  </div>
  <div v-else>
    <p>Modul nicht gefunden.</p>
  </div>
</template>