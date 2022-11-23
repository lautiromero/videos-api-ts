export interface Video {
  title: string
  slug: string
  thumbnail: string
  source: string
  views: number
  category: string
  tags: [string]
  likes: [number, number]
}