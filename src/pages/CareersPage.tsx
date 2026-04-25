import Navbar from '../sections/Navbar'
import Careers from '../sections/Careers'
import Footer from '../sections/Footer'
import PageWrapper from '../components/PageWrapper'

export default function CareersPage() {
  return (
    <PageWrapper>
      <div className="min-h-screen bg-[#0a0e17] text-white">
        <Navbar />
        <div className="pt-24">
          <Careers />
        </div>
        <Footer />
      </div>
    </PageWrapper>
  )
}
