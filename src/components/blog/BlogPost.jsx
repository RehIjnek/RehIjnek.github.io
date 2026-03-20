import { Link } from 'react-router-dom'
import PageLayout from '../PageLayout.jsx'

export default function BlogPost({ title, date, tags, content }) {
  const formattedDate = new Date(date + 'T00:00:00').toLocaleDateString('en-US', {
    year: 'numeric', month: 'long', day: 'numeric',
  })

  return (
    <PageLayout as="article">
      <Link
        to="/blog"
        className="inline-block mb-6 text-sm font-semibold hover:underline text-dk-primary"
      >
        &larr; Back to Blog
      </Link>

      <h1 className="text-3xl font-bold mb-2 text-dk-primary">
        {title}
      </h1>

      <p className="text-sm text-dk-muted mb-4">{formattedDate}</p>

      {tags && tags.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-6">
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-xs font-semibold px-2 py-0.5 rounded-full"
              style={{ backgroundColor: '#e6e0ba', color: '#52668d' }}
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      <hr className="border-dk-border mb-6" />

      <div
        className="text-gray-800 dark:text-dk-text leading-relaxed
          [&_p]:mb-4
          [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:mb-4
          [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:mb-4
          [&_li]:mb-1
          [&_h2]:text-xl [&_h2]:font-bold [&_h2]:mt-6 [&_h2]:mb-2 [&_h2]:text-primary dark:[&_h2]:text-dk-primary
          [&_h3]:text-lg [&_h3]:font-semibold [&_h3]:mt-4 [&_h3]:mb-2
          [&_a]:underline [&_a]:text-primary dark:[&_a]:text-dk-primary
          [&_blockquote]:border-l-4 [&_blockquote]:border-accent [&_blockquote]:pl-4 [&_blockquote]:italic"
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </PageLayout>
  )
}
