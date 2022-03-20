import apiClient from './config'

type Post = {
  userId: number
  id: number
  title: string
  body: string
}

const fetchPosts = async () => {
  const response = await apiClient.get<Post[]>('/posts')
  return response.data
}

export default fetchPosts
