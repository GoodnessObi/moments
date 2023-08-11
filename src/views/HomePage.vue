<script setup lang="ts">
import { useNews } from '@/composables/useNewsStore'
import type { article } from '@/types'
import { computed, ref } from 'vue'

const { fetchNews, newsList, getPopularNews } = useNews()

// const latestNews = ref<article[]>([])

fetchNews()

const latestNews = computed(() => {
  return newsList.value.slice(0, 4)
})

const popularNews = getPopularNews

console.log(popularNews, 'bvvvv')
</script>

<template>
  <div>
    <section class="section-header">
      <h2>Latest</h2>
    </section>

    <section v-if="latestNews.length > 0">
      <div class="card-highlight">
        <div class="content">
          <span>{{ latestNews[0].category }}</span>
          <h3>{{ latestNews[0].title }}</h3>
          <span>{{ latestNews[0].author.name }}</span>
          <p>{{ latestNews[0].story_content.slice(0, 300) }} ...</p>
        </div>
        <div class="img">
          <img src="https://picsum.photos/300" />
        </div>
      </div>

      <div class="card-grid">
        <div v-for="article in latestNews.slice(1)" :key="`article-${article._id}`">
          <router-link to="`/articles/${article._id}`">
            <div class="block">
              <img src="https://picsum.photos/300" />
            </div>
            <div>
              <span class="block">{{ article.category }}</span>
              <h3 class="block">{{ article.title }}</h3>
              <span class="block">{{ article.author.name }}</span>
              <p class="block">{{ article.excerpt }} ...</p>
            </div>
          </router-link>
        </div>
      </div>
    </section>

    <section class="section-header">
      <h2>Popular</h2>
    </section>

    <div class="card-grid">
      <div v-for="article in popularNews" :key="`article-${article._id}`">
        <router-link to="`/articles/${article._id}`">
          <div class="block">
            <img src="https://picsum.photos/300" />
          </div>
          <div>
            <span class="block">{{ article.category }}</span>
            <h3 class="block">{{ article.title }}</h3>
            <span class="block">{{ article.author.name }}</span>
            <p class="block">{{ article.excerpt }} ...</p>
          </div>
        </router-link>
      </div>
    </div>
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
