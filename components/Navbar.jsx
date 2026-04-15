'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { IoCloseOutline } from 'react-icons/io5'

const desktopNavItems = [
  { href: '/about', label: 'About' },
  { href: '/team', label: 'Team' },
  { href: '/publications', label: 'Publications' },
  { href: '/funding', label: 'Funding' },
  { href: '/gallery', label: 'Moments' },
  { href: '/resources', label: 'Career & Opportunities' },
]

const mobileNavItems = [
  { href: '/about', label: 'About' },
  { href: '/publications', label: 'Publications' },
  { href: '/team', label: 'Team' },
  { href: '/funding', label: 'Funding' },
  { href: '/gallery', label: 'Moments' },
  { href: '/resources', label: 'Career and Opportunities' },
]

export default function Navbar() {
  const pathname = usePathname()
  const [showMenu, setShowMenu] = useState(false)

  const closeMenu = () => setShowMenu(false)

  return (
    <>
      <nav className="font-asans z-[100] top-0 absolute left-0 px-6 w-full h-[15vh] flex justify-center text-lg font-regular">
        <div className="w-full max-w-5xl flex justify-between items-center">
          <div className={`font-unbounded font-bold text-[28px] ${pathname === '/' ? 'text-cyan-600' : 'text-cyan-700'}`}>
            <Link href="/">QuCIS</Link>
          </div>
          <ul className="flex flex-col lg:flex-row gap-6 text-sm font-medium font-asans items-center lg:visible invisible">
            {desktopNavItems.map((item) => (
              <li
                key={item.href}
                className={pathname === item.href ? 'text-cyan-600' : 'text-slate-600 hover:text-cyan-500 transition-colors'}
              >
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
            <Link href="/contact">
              <li
                className={`contact_btn rounded-[12px] cursor-pointer transition-all text-sm ${
                  pathname === '/contact' ? 'bg-cyan-700 text-white' : 'text-white bg-cyan-600 hover:bg-cyan-700'
                }`}
              >
                Contact
              </li>
            </Link>
          </ul>
          <div className="lg:invisible visible absolute right-8">
            <GiHamburgerMenu className="text-cyan-600 text-2xl" onClick={() => setShowMenu((previous) => !previous)} />
          </div>
        </div>
      </nav>

      <div
        className={`bg-cyan-700 z-[100] px-6 py-6 absolute h-[100vh] left-0 w-full origin-top ${
          showMenu ? 'top-[0vh]' : 'top-[-100vh]'
        } transition-all z-10 ease-linear`}
      >
        <div className="p-4 flex items-center justify-between ">
          <h1 className={`font-asans font-bold text-[32px] drop-shadow-lg ${pathname === '/' ? 'text-white' : 'text-white/80'}`}>
            <Link onClick={closeMenu} href="/">
              QuCIS
            </Link>
          </h1>
          <IoCloseOutline className="text-[32px] text-white/80 " onClick={() => setShowMenu((previous) => !previous)} />
        </div>
        <div className="p-4 mt-6 ">
          <ul className="text-white/80 font-asans text-lg tracking-wide grid gap-2">
            {mobileNavItems.map((item) => (
              <li key={item.href} className={pathname === item.href ? 'text-cyan-200' : 'text-white/80'}>
                <Link onClick={closeMenu} href={item.href}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <Link onClick={closeMenu} href="/contact">
            <button
              className={`${pathname === '/contact' ? 'bg-white text-cyan-700' : 'text-white/80 bg-cyan-600'} mt-10 w-full py-3 rounded-[12px] text-lg font-bold font-asans`}
            >
              Contact Us
            </button>
          </Link>
        </div>
      </div>
    </>
  )
}
