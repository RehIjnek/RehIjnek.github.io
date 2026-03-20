import resumePdf   from '../../resources/Resume.pdf'
import PageLayout  from '../components/PageLayout.jsx'

export default function Resume() {
  return (
    <PageLayout className="flex flex-col flex-1">

      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold text-dk-primary">
          Resume
        </h1>
        <a
          href={resumePdf}
          download="Kenji_Her_Resume.pdf"
          className="flex items-center gap-2 px-6 py-2 rounded-full text-sm font-semibold border-2 border-dk-primary text-dk-primary hover:bg-dk-primary hover:text-dk-bg transition-colors duration-150"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V4" />
          </svg>
          Download PDF
        </a>
      </div>

      {/* PDF viewer — desktop only */}
      <div className="hidden md:block w-full rounded-lg overflow-hidden shadow-md border border-dk-border">
        <iframe
          src={`${resumePdf}#navpanes=0`}
          title="Kenji Her Resume"
          className="w-full border-0"
          style={{ height: 'calc(100vh - 180px)', minHeight: '700px' }}
        />
      </div>

      {/* Mobile fallback */}
      <div className="md:hidden flex flex-col items-center justify-center gap-4 py-16 rounded-lg border border-dk-border text-center px-6">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="#52668d" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 4H7a2 2 0 01-2-2V6a2 2 0 012-2h5l5 5v13a2 2 0 01-2 2z" />
        </svg>
        <p className="text-dk-muted text-sm">PDF preview isn't available on mobile.</p>
        <a
          href={resumePdf}
          download="Kenji_Her_Resume.pdf"
          className="px-6 py-2 rounded-full text-sm font-semibold border-2 border-dk-primary text-dk-primary hover:bg-dk-primary hover:text-dk-bg transition-colors duration-150"
        >
          Download Resume
        </a>
      </div>

    </PageLayout>
  )
}
