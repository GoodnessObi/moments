import { categoryList } from '@/constants'
export type article = {
  _id: string
  story_date: string
  image: string
  title: string
  excerpt: string
  story_content: string
  category: (typeof categoryList)[number]
  author: {
    name: string
    email: string
    phone: string
  }
  ratings: {
    upvotes: number
    downvotes: number
    rating: number
  }
}
