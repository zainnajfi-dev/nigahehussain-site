"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

const slides = [
  {
    id: 1,
    image: "/modern-construction-project.jpg",
    title: "Nigah e Hussain",
    tagline: "Premium Construction & Renovation Services",
    usp: "Transforming spaces with 7+ years of expertise",
  },
  {
    id: 2,
    image: "/luxury-interior-design-renovation.jpg",
    title: "Nigah e Hussain",
    tagline: "Premium Construction & Renovation Services",
    usp: "Expert interior design and space planning",
  },
  {
    id: 3,
    image: "/contemporary-building-architecture.jpg",
    title: "Nigah e Hussain",
    tagline: "Premium Construction & Renovation Services",
    usp: "On-time and on-budget commitment",
  },
    {
    id: 4,
    image: "/card.jpg",
    title: "Nigah e Hussain",
    tagline: "Premium Construction & Renovation Services",
    usp: "Transforming spaces with 7+ years of expertise",
  },
    {
    id: 5,
    image: "/card2.jpg",
    title: "Nigah e Hussain",
    tagline: "Premium Construction & Renovation Services",
    usp: "Transforming spaces with 7+ years of expertise",
  },
]

export function Hero() {
  const [current, setCurrent] = useState(0)
  const [isAutoPlay, setIsAutoPlay] = useState(true)

  useEffect(() => {
    if (!isAutoPlay) return

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlay])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") handlePrev()
      if (e.key === "ArrowRight") handleNext()
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [])

  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % slides.length)
    setIsAutoPlay(false)
  }

  const handlePrev = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length)
    setIsAutoPlay(false)
  }

  return (
    <section
      id="home"
      className="relative w-full h-screen min-h-screen overflow-hidden pt-20"
      onMouseEnter={() => setIsAutoPlay(false)}
      onMouseLeave={() => setIsAutoPlay(true)}
    >
      {/* Slides */}
      <AnimatePresence>
        {slides.map(
          (slide, index) =>
            index === current && (
              <motion.div
                key={slide.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0"
              >
                {/* Background Image with Overlay */}
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage: `
                    linear-gradient(135deg, rgba(30, 90, 90, 0.7) 0%, rgba(19, 63, 63, 0.5) 100%),
                    url('${slide.image}')
                  `,
                  }}
                  role="img"
                  aria-label={`${slide.title} - ${slide.tagline}`}
                />

                {/* Content */}
                <div className="relative h-full flex flex-col justify-center px-6 sm:px-12 max-w-7xl mx-auto">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    className="max-w-2xl"
                  >
                    <h1 className="font-serif font-bold text-5xl sm:text-6xl lg:text-7xl text-white mb-3 text-balance">
                      {slide.title}
                    </h1>
                    <p className="text-xl sm:text-2xl text-cyan-200 mb-2 font-medium">{slide.tagline}</p>
                    <p className="text-base sm:text-lg text-white/90 mb-8">{slide.usp}</p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4">
                      <a
                        href="#contact"
                        className="px-8 py-3 rounded-lg bg-gradient-to-r from-cyan-400 to-teal-500 text-white font-semibold hover:shadow-2xl transition-shadow duration-300 text-center"
                      >
                        Get Started — Free Site Visit
                      </a>
                      <a
                        href="#portfolio"
                        className="px-8 py-3 rounded-lg border-2 border-white text-white font-semibold hover:bg-white/10 transition-colors duration-300 text-center"
                      >
                        View Portfolio
                      </a>
                    </div>

                    {/* Trust Line */}
                    <div className="mt-8 pt-6 border-t border-white/30 flex flex-wrap gap-4 text-sm text-white/80">
                      <div className="flex items-center gap-2">
                        <span className="text-gold">✓</span>
                        <span>Free site visit</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-gold">✓</span>
                        <span>90 days post work maintenance support</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-gold">✓</span>
                        <span>Licensed & Insured Team</span>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ),
        )}
      </AnimatePresence>

      {/* Controls */}
      <div className="absolute bottom-8 left-0 right-0 z-10 flex items-center justify-between px-6 sm:px-12 max-w-7xl mx-auto">
        {/* Left Arrow */}
        <button
          onClick={handlePrev}
          className="p-3 rounded-full bg-white/20 hover:bg-white/40 text-white transition-colors backdrop-blur-sm"
          aria-label="Previous slide"
        >
          <ChevronLeft size={24} />
        </button>

        {/* Dots */}
        <div className="flex gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrent(index)
                setIsAutoPlay(false)
              }}
              className={`h-2 rounded-full transition-all ${
                index === current ? "bg-white w-8" : "bg-white/50 w-2 hover:bg-white/70"
              }`}
              aria-label={`Go to slide ${index + 1}`}
              aria-current={index === current}
            />
          ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={handleNext}
          className="p-3 rounded-full bg-white/20 hover:bg-white/40 text-white transition-colors backdrop-blur-sm"
          aria-label="Next slide"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {/* Slide Counter for Accessibility */}
      <div className="sr-only" role="status" aria-live="polite" aria-atomic="true">
        Slide {current + 1} of {slides.length}
      </div>
    </section>
  )
}
