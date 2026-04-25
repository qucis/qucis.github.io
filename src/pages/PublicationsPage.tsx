import Navbar from '../sections/Navbar'
import Publications from '../sections/Publications'
import Footer from '../sections/Footer'
import PageWrapper from '../components/PageWrapper'

export default function PublicationsPage() {
  return (
    <PageWrapper>
      <div className="min-h-screen bg-[#0a0e17] text-white">
        <Navbar />
        <div className="pt-24">
          <Publications />
        </div>
        <Footer />
      </div>
    </PageWrapper>
  )
}
