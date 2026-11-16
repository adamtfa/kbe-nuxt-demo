<script setup lang="ts">
const { data: modules } = await useFetch('/api/modules')
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