import { Link } from 'react-router-dom'

export default function BlogCard({ id, title, date, tags, excerpt }) {
  const formattedDate = new Date(date + 'T00:00:00').toLocaleDateString('en-US', {
    year: 'numeric', month: 'long', day: 'numeric',
  })

  return (
    <article className="border border-dk-border rounded-lg p-6 bg-dk-surface shadow-sm hover:shadow-md transition-shadow duration-200">
      <h2 className="text-xl font-bold mb-1 text-dk-primary">
        <Link to={`/blog/${id}`} className="hover:underline">
          {title}
        </Link>
      </h2>

      <p className="text-sm text-dk-muted mb-3">{formattedDate}</p>

      {tags && tags.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-3">
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

      <p className="text-dk-text leading-relaxed text-sm mb-4">{excerpt}</p>

      <Link
        to={`/blog/${id}`}
        className="text-sm font-semibold hover:underline text-dk-primary"
      >
        Read more &rarr;
      </Link>
    </article>
  )
}
