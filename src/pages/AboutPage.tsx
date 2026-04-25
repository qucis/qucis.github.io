import Navbar from '../sections/Navbar'
import About from '../sections/About'
import Footer from '../sections/Footer'
import PageWrapper from '../components/PageWrapper'

export default function AboutPage() {
  return (
    <PageWrapper>
      <div className="min-h-screen bg-[#0a0e17] text-white">
        <Navbar />
        <div className="pt-24">
          <About />
        </div>
        <Footer />
      </div>
    </PageWrapper>
  )
}
