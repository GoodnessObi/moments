import type { article } from '@/types'
import { computed, onMounted, ref } from 'vue'

export function useNews() {
  const newsList = ref<article[]>([])
  const latestNews = ref<article[]>([])

  // fetch(url)
  //   .then((res) => res.json())
  //   .then((json) => (data.value = json))
  //   .catch((err) => (error.value = err))

  const fetchNews = async () => {
    newsList.value = await fetch(
      'https://run.mocky.io/v3/f2c3bd3a-06a4-4297-876d-f470bb8760b3'
    ).then((res) => res.json())
  }

  const getPopularNews = computed(() => {
    return newsList.value
      .sort((objA, objB) => {
        return Number(objB.ratings.upvotes) - Number(objA.ratings.upvotes)
      })
      .slice(0, 6)
  })
  return {
    newsList,
    fetchNews,
    getPopularNews
  }
}
