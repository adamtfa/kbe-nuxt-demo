<script setup lang="ts">
const { data: modules } = await useModules()

useSeoMeta({
  title: 'Module – KBE Nuxt Demo',
  description: 'Übersicht der verfügbaren Module'
})
</script>

<template>
  <div>
    <h1>Verfügbare Module</h1>
    <ModuleCard
      v-for="mod in modules"
      :key="mod.id"
      :id="mod.id"
      :title="mod.title"
      :ects="mod.ects"
      :lecturer="mod.lecturer"
    />
  </div>
</template>
