import blogPosts  from '../data/blogPosts.js'
import BlogCard   from '../components/blog/BlogCard.jsx'
import PageLayout from '../components/PageLayout.jsx'

export default function Blog() {
  const hasPosts = blogPosts.length > 0

  if (!hasPosts) {
    return (
      <PageLayout>
        <p className="text-3xl font-bold text-dk-primary">Coming soon!</p>
      </PageLayout>
    )
  }

  const sortedPosts = [...blogPosts].sort((a, b) => new Date(b.date) - new Date(a.date))

  return (
    <PageLayout>
      <h1 className="text-3xl font-bold mb-8 text-dk-primary">
        Blog
      </h1>
      <div className="flex flex-col gap-6">
        {sortedPosts.map((post) => (
          <BlogCard key={post.id} {...post} />
        ))}
      </div>
    </PageLayout>
  )
}
