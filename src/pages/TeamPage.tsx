import Navbar from '../sections/Navbar'
import Team from '../sections/Team'
import Footer from '../sections/Footer'
import PageWrapper from '../components/PageWrapper'

export default function TeamPage() {
  return (
    <PageWrapper>
      <div className="min-h-screen bg-[#0a0e17] text-white">
        <Navbar />
        <div className="pt-24">
          <Team />
        </div>
        <Footer />
      </div>
    </PageWrapper>
  )
}
