import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import QuantumGraph from '@/components/QuantumGraph'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'QuCIS – Quantum Computing & Information Systems Lab',
  description: 'Quantum Computing and Information Systems Lab at IISER Bhopal, headed by Dr. Ankur Raina.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* Sitewide canvas animation — fixed, behind everything */}
        <QuantumGraph />
        <div className="relative z-10">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  )
}
