import { Routes, Route } from 'react-router'
import Home from './pages/Home'
import TeamPage from './pages/TeamPage'
import PublicationsPage from './pages/PublicationsPage'
import FundingPage from './pages/FundingPage'
import ShowcasePage from './pages/ShowcasePage'
import ContactPage from './pages/ContactPage'
import CareersPage from './pages/CareersPage'
import AboutPage from './pages/AboutPage'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/team" element={<TeamPage />} />
      <Route path="/publications" element={<PublicationsPage />} />
      <Route path="/funding" element={<FundingPage />} />
      <Route path="/showcase" element={<ShowcasePage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/careers" element={<CareersPage />} />
    </Routes>
  )
}
