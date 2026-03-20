import { useParams, Link } from 'react-router-dom'
import blogPosts from '../data/blogPosts.js'
import BlogPost from '../components/blog/BlogPost.jsx'

export default function BlogPostPage() {
  const { id } = useParams()
  const post = blogPosts.find((p) => p.id === id)

  if (!post) {
    return (
      <div className="flex-1 flex flex-col items-center justify-center px-4 py-12 gap-4">
        <p className="text-2xl font-bold text-dk-primary">
          Post not found.
        </p>
        <Link
          to="/blog"
          className="text-sm font-semibold hover:underline"
          style={{ color: '#52668d' }}
        >
          &larr; Back to Blog
        </Link>
      </div>
    )
  }

  return (
    <BlogPost
      title={post.title}
      date={post.date}
      tags={post.tags}
      content={post.content}
    />
  )
}
