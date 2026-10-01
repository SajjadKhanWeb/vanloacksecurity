import { Routes, Route } from 'react-router-dom'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import VanDetail from './pages/VanDetail.jsx'
import ServiceDetail from './pages/ServiceDetail.jsx'

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <Header />
      <div id="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/van/:slug" element={<VanDetail />} />
          <Route path="/services/:slug" element={<ServiceDetail />} />
        </Routes>
      </div>
      <Footer />
    </>
  )
}
