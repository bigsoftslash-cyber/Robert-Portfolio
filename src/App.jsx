import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { AppLayout } from './components/AppLayout.jsx'
import Awards from './pages/Awards.jsx'
import Blog from './pages/Blog.jsx'
import Contact from './pages/Contact.jsx'
import Experience from './pages/Experience.jsx'
import Home from './pages/Home.jsx'
import Projects from './pages/Projects.jsx'
import Testimonials from './pages/Testimonials.jsx'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/awwards" element={<Awards />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
