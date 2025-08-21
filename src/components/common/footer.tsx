"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { FOOTER_LINKS, SOCIAL_LINKS } from "@/constants/links";

const Footer = () => {
  const [year, setYear] = useState<number>(new Date().getFullYear())
  useEffect(() => {
    setYear(new Date().getFullYear())
  }, [])

  return (
    <footer className="relative bg-black text-gray-300 overflow-hidden">
      <div className="relative z-20 px-6 md:px-16 py-16 grid grid-cols-2 md:grid-cols-3 gap-10">
        {FOOTER_LINKS.map((section) => (
          <div key={section.title}>
            <h4 className="text-white font-semibold mb-4">{section.title}</h4>
            <ul className="space-y-2 text-sm">
              {section.links.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="relative z-20 flex flex-col md:flex-row justify-between items-center px-6 md:px-16 py-6">
        <div className="flex space-x-6 mb-4 md:mb-0">
          {SOCIAL_LINKS.map((social) => (
            <Link
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors text-sm flex items-center gap-2"
            >
              <social.icon size={16} /> {social.name}
            </Link>
          ))}
        </div>

        <p className="text-xs text-neutral-400">© Prisly {year}.</p>
      </div>
    </footer>
  )
}

export default Footer;