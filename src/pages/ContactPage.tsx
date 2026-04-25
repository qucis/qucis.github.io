import Navbar from '../sections/Navbar'
import Contact from '../sections/Contact'
import Footer from '../sections/Footer'
import PageWrapper from '../components/PageWrapper'

export default function ContactPage() {
  return (
    <PageWrapper>
      <div className="min-h-screen bg-[#0a0e17] text-white">
        <Navbar />
        <div className="pt-24">
          <Contact />
        </div>
        <Footer />
      </div>
    </PageWrapper>
  )
}
