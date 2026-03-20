/**
 * Blog posts data store.
 *
 * Each post object:
 * {
 *   id:      string  — URL-safe slug used in the route /blog/:id
 *   title:   string
 *   date:    string  — ISO date "YYYY-MM-DD"
 *   tags:    string[]
 *   excerpt: string  — Short preview shown on the listing card
 *   content: string  — Full HTML content rendered on the post page
 * }
 *
 * To add a new post, append an object to this array.
 */

const blogPosts = [
  {
    id: 'welcome-to-my-blog',
    title: 'Welcome to My Blog',
    date: '2025-01-01',
    tags: ['personal', 'intro'],
    excerpt:
      "Hello and welcome! I've finally set up a personal blog section on my site. Here I plan to share thoughts on data engineering, frisbee, and whatever else comes to mind.",
    content: `
      <p>Hello and welcome to my blog!</p>
      <p>
        I've finally carved out a corner of this site to share longer-form thoughts.
        I have a few topics in mind that I'd like to write about:
      </p>
      <ul>
        <li>Data engineering patterns and lessons learned on the job</li>
        <li>Ultimate frisbee strategy and the Grey Duck experience</li>
        <li>Books, math, and anything else that catches my attention</li>
      </ul>
      <p>
        I can't promise a posting schedule, but I'll do my best to keep things interesting.
        Thanks for stopping by — more posts coming soon!
      </p>
    `,
  },
  {
    id: 'why-i-love-dbt',
    title: 'Why I Love dbt',
    date: '2025-02-14',
    tags: ['data engineering', 'tools'],
    excerpt:
      'dbt changed how I think about the transformation layer. Here\'s why I think every data team should adopt it and what took me so long to come around.',
    content: `
      <p>
        I resisted dbt for longer than I'd like to admit. I was comfortable writing raw SQL in our warehouse
        and couldn't see why I needed another tool in the stack. Then a teammate finally dragged me into a project using it, and within a week I was sold.
      </p>
      <p>Here's what clicked for me:</p>
      <ul>
        <li><strong>Version control for SQL</strong> — treating transformations like code was the obvious missing piece.</li>
        <li><strong>Auto-generated docs</strong> — the lineage graph alone is worth the setup cost on any team larger than two people.</li>
        <li><strong>Tests as first-class citizens</strong> — not-null and unique tests on every key column have saved me embarrassment more than once.</li>
      </ul>
      <p>
        There are rough edges — the Jinja templating can get gnarly fast, and managing environments across dev/staging/prod still takes discipline.
        But overall, dbt is one of the few tools that actually delivered on its promise. Highly recommend.
      </p>
    `,
  },
  {
    id: 'ultimate-frisbee-stack-offense',
    title: 'Breaking Down Stack Offense in Ultimate',
    date: '2025-03-22',
    tags: ['ultimate frisbee', 'strategy'],
    excerpt:
      'Stack offense is the foundation of most recreational and competitive ultimate teams. Here\'s how I think about the cuts, the timing, and the common mistakes new players make.',
    content: `
      <p>
        If you've played ultimate for more than a month, someone has probably yelled "get in the stack!" at you.
        But what does that actually mean, and why does it work?
      </p>
      <p>
        The vertical stack puts six cutters in a line down the middle of the field, freeing up the sideline lanes for cuts.
        The basic idea is simple: create space, then attack it before the defense can recover.
      </p>
      <p>The two most common mistakes I see in new players:</p>
      <ul>
        <li><strong>Standing in the lane</strong> — if you're not the active cutter, get deep in the stack and stop clogging the throwing lanes.</li>
        <li><strong>Cutting at the same time</strong> — only one or two cutters should be live at once. Discipline beats athleticism here.</li>
      </ul>
      <p>
        Once the timing clicks, stack offense is beautiful to watch and even better to run.
        It rewards trust and communication more than any other system I've played in.
      </p>
    `,
  },
  {
    id: 'lessons-from-my-first-data-pipeline',
    title: 'Lessons from My First Production Data Pipeline',
    date: '2025-05-10',
    tags: ['data engineering', 'lessons learned'],
    excerpt:
      'My first real pipeline in production taught me more than a year of coursework. Here are the three things I wish someone had told me before I shipped it.',
    content: `
      <p>
        The first pipeline I shipped to production looked nothing like what I'd designed on paper.
        Not because I changed my mind — because reality got in the way, as it always does.
      </p>
      <p>Three things I'd tell myself before starting:</p>
      <ol>
        <li>
          <strong>Schema changes will happen.</strong> The upstream team will rename a column with no notice.
          Build your ingestion layer to be tolerant of this from day one.
        </li>
        <li>
          <strong>Idempotency is non-negotiable.</strong> Your pipeline will re-run. Make sure running it twice produces the same result as running it once.
        </li>
        <li>
          <strong>Alerting before optimization.</strong> I spent a week tuning query performance before I had a single alert in place.
          Monitoring should be the first thing you ship, not the last.
        </li>
      </ol>
      <p>
        None of this is novel advice — it's all in the literature. But there's a difference between reading it and learning it
        at 11pm on a Tuesday because something broke in prod.
      </p>
    `,
  },
  {
    id: 'reading-list-2025',
    title: 'My Reading List — 2025',
    date: '2025-07-04',
    tags: ['personal', 'books'],
    excerpt:
      "A running list of what I've read (and what I'm still working through) in 2025, with short takes on each.",
    content: `
      <p>I try to read a mix of technical and non-technical books each year. Here's where I'm at for 2025:</p>
      <p><strong>Finished:</strong></p>
      <ul>
        <li><em>Designing Data-Intensive Applications</em> — Kleppmann. Dense but essential. I keep coming back to the chapters on replication.</li>
        <li><em>The Pragmatic Programmer</em> — Hunt & Thomas. More relevant now than when it was written in some ways.</li>
        <li><em>A Mind for Numbers</em> — Oakley. Surprisingly practical for someone who thinks they already know how to study.</li>
      </ul>
      <p><strong>In progress:</strong></p>
      <ul>
        <li><em>Staff Engineer</em> — Larson. Good framework for thinking about scope and influence beyond the IC track.</li>
      </ul>
      <p>Always open to recommendations — especially anything at the intersection of math and systems thinking.</p>
    `,
  },
]

export default blogPosts
