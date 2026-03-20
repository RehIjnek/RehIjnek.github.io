import { HashRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Resume from './pages/Resume.jsx'
import Blog from './pages/Blog.jsx'
import BlogPostPage from './pages/BlogPostPage.jsx'

export default function App() {
  return (
    <HashRouter>
      <div className="flex flex-col min-h-screen bg-dk-bg">
        <Navbar />
        <main className="flex-1 flex flex-col">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<BlogPostPage />} />
          </Routes>
        </main>
      </div>
    </HashRouter>
  )
}
