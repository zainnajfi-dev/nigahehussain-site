"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

const reviews = [
  {
    id: 1,
    name: "Ahmed Hassan",
    role: "Property Developer",
    project: "Residential Complex Project",
    image: "/placeholder.svg?key=review1",
    rating: 5,
    quote:
      "Nigah e Hussain exceeded our expectations in every way. Their attention to detail, professional team, and commitment to deadlines made this project a tremendous success. Highly recommended!",
  },
  {
    id: 2,
    name: "Fatima Khan",
    role: "Homeowner",
    project: "Home Renovation Project",
    image: "/placeholder.svg?key=review2",
    rating: 5,
    quote:
      "We were amazed by the transformation of our home. The team was courteous, professional, and kept us updated throughout the process. The quality of work is exceptional.",
  },
  {
    id: 3,
    name: "Muhammad Ali",
    role: "Business Owner",
    project: "Commercial Office Redesign",
    image: "/placeholder.svg?key=review3",
    rating: 5,
    quote:
      "The interior design team created the perfect workspace for our company. Their vision, creativity, and execution were flawless. We cannot thank them enough!",
  },
]

export function Reviews() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlay, setIsAutoPlay] = useState(true)

  useEffect(() => {
    if (!isAutoPlay) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % reviews.length)
    }, 6000)

    return () => clearInterval(interval)
  }, [isAutoPlay])

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length)
    setIsAutoPlay(false)
  }

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length)
    setIsAutoPlay(false)
  }

  const currentReview = reviews[currentIndex]

  return (
    <section
      id="reviews"
      className="py-20 px-6 sm:px-12 bg-teal-25"
      onMouseEnter={() => setIsAutoPlay(false)}
      onMouseLeave={() => setIsAutoPlay(true)}
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="font-serif font-bold text-4xl sm:text-5xl text-text-default mb-4">Client Testimonials</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Hear what our satisfied clients have to say about their experience working with us.
          </p>
        </motion.div>

        {/* Testimonials Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="relative"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentReview.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-xl shadow-lg p-8 sm:p-12"
            >
              {/* Quote Mark */}
              <div className="text-6xl text-teal-200 mb-4">"</div>

              {/* Quote Text */}
              <p className="text-lg sm:text-xl text-gray-700 italic mb-8 leading-relaxed">{currentReview.quote}</p>

              {/* Rating Stars */}
              <div className="flex gap-1 mb-6">
                {Array.from({ length: currentReview.rating }).map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <Star size={20} className="fill-gold text-gold" />
                  </motion.div>
                ))}
              </div>

              {/* Client Info */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                {/* Avatar */}
                <div className="flex-shrink-0">
                  <img
                    src={currentReview.image || "/placeholder.svg"}
                    alt={currentReview.name}
                    className="w-16 h-16 rounded-full object-cover border-2 border-teal-200"
                  />
                </div>

                {/* Name and Details */}
                <div>
                  <h4 className="font-serif font-bold text-lg text-text-default">{currentReview.name}</h4>
                  <p className="text-sm text-gray-600">{currentReview.role}</p>
                  <p className="text-xs text-teal-600 font-semibold">Project: {currentReview.project}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <div className="flex items-center justify-between mt-8">
            <button
              onClick={handlePrev}
              className="p-3 rounded-full bg-white shadow-md hover:shadow-lg text-teal-600 hover:bg-teal-50 transition-all"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={24} />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {reviews.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => {
                    setCurrentIndex(index)
                    setIsAutoPlay(false)
                  }}
                  className={`h-2 rounded-full transition-all ${
                    index === currentIndex ? "bg-teal-600 w-8" : "bg-teal-200 w-2 hover:bg-teal-300"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                  aria-current={index === currentIndex}
                  whileHover={{ scale: 1.2 }}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              className="p-3 rounded-full bg-white shadow-md hover:shadow-lg text-teal-600 hover:bg-teal-50 transition-all"
              aria-label="Next testimonial"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          {/* Accessibility Announcement */}
          <div className="sr-only" role="status" aria-live="polite" aria-atomic="true">
            Testimonial {currentIndex + 1} of {reviews.length} from {currentReview.name}
          </div>
        </motion.div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-16 pt-12 border-t border-teal-200 grid grid-cols-1 md:grid-cols-3 gap-6 text-center"
        >
          <div>
            <p className="text-4xl font-bold text-teal-600 mb-2">4.9/5</p>
            <p className="text-gray-600">Average Rating</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-teal-600 mb-2">150+</p>
            <p className="text-gray-600">Happy Clients</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-teal-600 mb-2">98%</p>
            <p className="text-gray-600">Satisfaction Rate</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
