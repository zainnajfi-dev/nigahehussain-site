"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, Phone } from "lucide-react"
import { Logo } from "./logo"
import { motion, AnimatePresence } from "framer-motion"

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Profile", href: "#profile" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
]

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [hasScroll, setHasScroll] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setHasScroll(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          hasScroll ? "bg-white shadow-md py-3" : "bg-white/80 backdrop-blur-sm py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <Logo size="sm" />
              <span className="hidden sm:inline font-serif font-bold text-lg text-text-default">Nigah e Hussain</span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-sm font-medium text-text-default hover:text-teal-600 transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            {/* CTA and Mobile Menu */}
            <div className="flex items-center gap-4">
              <a
                href="tel:+923001234567"
                className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-teal-600 to-cyan-500 text-white text-sm font-medium hover:shadow-lg transition-shadow"
                aria-label="Call for free site visit"
              >
                <Phone size={16} />
                <span className="hidden md:inline">Get Started</span>
              </a>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden p-2 text-text-default hover:bg-teal-50 rounded-lg transition-colors"
                aria-label="Toggle menu"
                aria-expanded={isOpen}
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: 300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 300 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div className="fixed inset-0 bg-black/50" onClick={() => setIsOpen(false)} />
            <div className="fixed right-0 top-0 bottom-0 w-80 bg-white shadow-lg overflow-y-auto">
              <div className="p-6">
                <div className="flex items-center justify-between mb-8">
                  <h2 className="font-serif font-bold text-lg text-text-default">Menu</h2>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-2 hover:bg-teal-50 rounded-lg transition-colors"
                    aria-label="Close menu"
                  >
                    <X size={24} />
                  </button>
                </div>

                <nav className="flex flex-col gap-4">
                  {navItems.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="text-base font-medium text-text-default hover:text-teal-600 transition-colors py-2"
                    >
                      {item.label}
                    </a>
                  ))}
                </nav>

                <a
                  href="tel:+923001234567"
                  className="mt-8 w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-gradient-to-r from-teal-600 to-cyan-500 text-white font-medium hover:shadow-lg transition-shadow"
                >
                  <Phone size={18} />
                  Get Started — Free Site Visit
                </a>

                <div className="mt-8 pt-8 border-t border-teal-50">
                  <p className="text-sm text-gray-600 mb-2">Quick Links</p>
                  <a href="https://wa.me/923041199512" className="text-sm text-teal-600 hover:text-teal-700 mb-2 block">
                    WhatsApp
                  </a>
                  <a
                    href="https://instagram.com/nigahehussain514"
                    className="text-sm text-teal-600 hover:text-teal-700 block"
                  >
                    Instagram
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
