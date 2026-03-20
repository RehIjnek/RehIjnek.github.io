/**
 * PageLayout — standard content wrapper for all content pages.
 * Enforces consistent top/bottom padding, horizontal padding, and max-width.
 */
export default function PageLayout({ children, className = '', as: Tag = 'div' }) {
  return (
    <Tag className={`mx-auto w-full max-w-4xl px-4 py-10 ${className}`}>
      {children}
    </Tag>
  )
}
