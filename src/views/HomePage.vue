<script setup lang="ts">
import { newsList } from '@/composables/useNewsStore'

async function fetchNews() {
  const response = await fetch('https://run.mocky.io/v3/f2c3bd3a-06a4-4297-876d-f470bb8760b3')

  return response.json()
}
newsList.value = await fetchNews()
</script>

<template>
  <div>
    <section class="section-header">
      <h2>Latest</h2>
    </section>

    <section>
      <div class="card-highlight">
        <div class="content"></div>
        <div class="img"></div>
      </div>
      <div class="card-grid">
        <div>! card</div>
        <div>! card</div>
        <div>! card</div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.section-header {
  padding: 1rem 0;
  border-bottom: 1px solid #eee;
}

.section-header h2 {
  font-size: 18px;
  font-weight: 500;
  text-transform: uppercase;
}

.card-highlight {
  border: 1px solid purple;
  min-height: auto;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
}

.card-highlight div {
  border: 1px solid green;
  width: 100%;
  min-height: 200px;
}

.card-grid {
  display: grid;
  gap: 1rem;
  padding: 1rem 0;
  border-top: 1px solid #eee;
  margin-top: 1rem;
}

.card-grid div {
  border: 1px solid purple;
  min-height: 200px;
}

@media (min-width: 1024px) {
  .section-header {
    /* padding: 2rem 0; */
  }
  .section-header h2 {
    font-size: 24px;
  }

  .card-grid {
    grid-template-columns: repeat(3, 1fr);
  }

  .card-highlight {
    flex-direction: row;
    min-height: 250px;
  }

  .card-highlight div {
    border: 1px solid green;
    width: 49%;
    min-height: 100%;
  }
}
</style>
