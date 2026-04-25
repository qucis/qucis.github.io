import Navbar from '../sections/Navbar'
import Funding from '../sections/Funding'
import Footer from '../sections/Footer'
import PageWrapper from '../components/PageWrapper'

export default function FundingPage() {
  return (
    <PageWrapper>
      <div className="min-h-screen bg-[#0a0e17] text-white">
        <Navbar />
        <div className="pt-24">
          <Funding />
        </div>
        <Footer />
      </div>
    </PageWrapper>
  )
}
