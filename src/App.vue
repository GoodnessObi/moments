<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import VueFeather from 'vue-feather'

// const
</script>

<template>
  <header>
    <div class="wrapper">
      <h1 class="logo">moments</h1>

      <div class="navbar">
        <nav class="navbar-links">
          <RouterLink to="/" activeClass="active">Home</RouterLink>
          <RouterLink to="/articles/all" activeClass="active">Articles</RouterLink>
          <RouterLink to="/about" activeClass="active">About</RouterLink>
        </nav>
        <button class="btn-icon">
          <vue-feather type="search"></vue-feather>
        </button>
      </div>
    </div>
  </header>

  <main>
    <Suspense>
      <RouterView />

      <template #fallback> Loadinggggggggggg.............. </template>
    </Suspense>
  </main>
</template>

<style scoped>
header {
  border-bottom: 1px solid #eee;
}

.wrapper {
  max-width: 1200px;
  margin: 0 auto;
}
.logo {
  font-size: 48px;
  text-align: center;
}

.navbar {
  display: flex;
  width: 100%;
  justify-content: space-between;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
}

.navbar-links {
  display: flex;
  width: 50%;
  justify-content: space-between;
  align-items: center;
}

nav a {
  text-decoration: none;
  text-transform: uppercase;
  margin-right: 10px;
}

nav a.active {
  color: rgb(195, 10, 10);
}

.btn-icon {
  background: transparent;
  padding: 0;
  border: none;
}

main {
  max-width: 1200px;
  margin: 0 auto;
}

@media (min-width: 1024px) {
  .logo {
    font-size: 64px;
  }
}
</style>
