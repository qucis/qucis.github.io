import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="w-full border-t border-cyan-100 bg-transparent pt-12 pb-8 px-6">
      <div className="max-w-5xl mx-auto flex flex-col gap-8">

        {/* Top row */}
        <div className="flex flex-col md:flex-row justify-between gap-8">

          {/* Branding */}
          <div className="flex flex-col gap-3 max-w-sm">
            <h2 className="font-unbounded font-bold text-2xl text-cyan-700 tracking-tight">QuCIS</h2>
            <p className="font-asans text-slate-600 text-sm leading-relaxed">
              Quantum Computing and Information Systems Lab @{" "}
              <a href="https://www.iiserb.ac.in/" target="_blank" rel="noopener noreferrer"
                className="text-cyan-500 hover:underline font-medium">
                IISER Bhopal
              </a>
            </p>
            {/* Social Icons */}
            <div className="flex gap-4 items-center mt-1">
              <a href="https://github.com/qucis" target="_blank" rel="noopener noreferrer"
                className="text-slate-400 hover:text-cyan-600 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a href="https://www.linkedin.com/in/qucis-lab-6326403b3" target="_blank" rel="noopener noreferrer"
                className="text-slate-400 hover:text-cyan-600 transition-colors" title="Where you will find the perfect fit">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-2">
            <h3 className="font-unbounded text-xs tracking-widest uppercase text-cyan-400 mb-2">Quick Links</h3>
            {[
              { href: '/about', label: 'About' },
              { href: '/team', label: 'Team' },
              { href: '/publications', label: 'Publications' },
              { href: '/gallery', label: 'Moments' },
              { href: '/contact', label: 'Contact' },
            ].map(l => (
              <Link key={l.href} href={l.href}
                className="font-asans text-slate-500 text-sm hover:text-cyan-600 transition-colors">
                {l.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-cyan-200 to-transparent" />

        {/* Bottom row */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-3 text-xs font-asans text-slate-400">
          <p>© 2025 QuCIS. All Rights Reserved.</p>
          <p className="text-center">
            Maintained by{" "}
            <a href="https://github.com/mainak-bhattacharyya" target="_blank" rel="noopener noreferrer"
              className="text-cyan-500 hover:underline">Mainak Bhattacharyya</a>
            {" "}· Template by{" "}
            <a href="https://github.com/TanishqSharma2022" target="_blank" rel="noopener noreferrer"
              className="text-cyan-500 hover:underline">Tanishq Sharma</a>
          </p>
        </div>

      </div>
    </footer>
  )
}

export default Footer
