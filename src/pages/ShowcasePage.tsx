import Navbar from '../sections/Navbar'
import Showcase from '../sections/Showcase'
import Footer from '../sections/Footer'
import PageWrapper from '../components/PageWrapper'

export default function ShowcasePage() {
  return (
    <PageWrapper>
      <div className="min-h-screen bg-[#0a0e17] text-white">
        <Navbar />
        <div className="pt-24">
          <Showcase />
        </div>
        <Footer />
      </div>
    </PageWrapper>
  )
}
