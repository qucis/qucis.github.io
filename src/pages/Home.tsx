import Navbar from '../sections/Navbar'
import Hero from '../sections/Hero'
// import CTA from '../sections/CTA'
import Footer from '../sections/Footer'

import PageWrapper from '../components/PageWrapper'

export default function Home() {
  return (
    <PageWrapper showSpheres={false}>
      <div className="min-h-screen bg-[#0a0e17] text-white">
        <Navbar />
        <Hero />
        {/* <CTA /> */}
        <Footer />
      </div>
    </PageWrapper>
  )
}
