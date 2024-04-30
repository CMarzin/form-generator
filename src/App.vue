<template>
  <h1>{{ $route.name }}</h1>
  <nav class="mt-2">
    <RouterLink to="/">Static schema</RouterLink>
    <RouterLink to="/dynamicSchema">Dynamic schema</RouterLink>
  </nav>
  <main>
    <RouterView />
  </main>
</template>

<style scoped>
main {
  margin-top: 2rem;
}

nav {
  display: flex;
  gap: 2rem;
  justify-content: space-between;
}
</style>

