<template>
  <div class="container">
    <header class="navbar">
      <strong>HTW Berlin – KBE Nuxt Demo</strong>
      <nav>
        <NuxtLink to="/">Übersicht</NuxtLink>
      </nav>
    </header>
    <main>
      <NuxtPage />
    </main>
  </div>
</template>

<style>
body {
  font-family: system-ui, sans-serif;
  background: #f9fafb;
  color: #111827;
  margin: 0;
}
.container {
  max-width: 720px;
  margin: 0 auto;
  padding: 1.5rem;
}
.navbar {
  display: flex;
  justify-content: space-between;
  padding-bottom: 1rem;
  margin-bottom: 1.5rem;
  border-bottom: 2px solid #76b900;
}
.navbar a {
  margin-left: 1rem;
  color: #111827;
  text-decoration: none;
  font-weight: 500;
}
</style>