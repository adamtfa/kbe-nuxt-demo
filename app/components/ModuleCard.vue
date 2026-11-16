<script setup lang="ts">
defineProps<{
  id: number
  title: string
  ects: number
  lecturer: string
}>()
</script>

<template>
  <article class="card">
    <div class="card-header">
      <h3>{{ title }}</h3>
      <span class="badge">{{ ects }} ECTS</span>
    </div>
    <p class="lecturer">Dozent: {{ lecturer }}</p>
    <NuxtLink :to="`/modules/${id}`" class="link">Details ansehen →</NuxtLink>
  </article>
</template>

<style scoped>
.card {
  border: 1px solid #d1d5db;
  border-radius: 8px;
  padding: 1rem;
  margin-bottom: 1rem;
  background: #ffffff;
}
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.badge {
  background: #76b900;
  color: #fff;
  padding: 0.2rem 0.6rem;
  border-radius: 999px;
  font-size: 0.85rem;
  font-weight: bold;
}
.lecturer {
  color: #4b5563;
  margin: 0.5rem 0;
}
.link {
  color: #111827;
  font-weight: 600;
  text-decoration: none;
}
</style>