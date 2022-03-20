import fetchPosts from '@/apis/fetchPosts'
import List from '@/components/List'
import useFetch from '@/hooks/useFetch'
import AppLayout from '@/layouts/AppLayout'

const Post = () => {
  const { isLoading, data: posts, error } = useFetch('posts', fetchPosts)

  if (isLoading) return <p>Loading...</p>
  if (error) return <p>Error</p>

  return (
    <AppLayout>
      <List>
        {posts?.map((post) => (
          <List.Row key={post.id}>
            <h2>{post.title}</h2>
            <article>{post.body}</article>
          </List.Row>
        ))}
      </List>
    </AppLayout>
  )
}

export default Post
