"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, X, Download } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

const portfolioItems = [
  {
    id: 1,
    title: "Commercial Plaza",
    category: "Construction",
    image: "/construction1.jpg",
    beforeImage: "/before1.jpg",
    afterImage: "/after1.jpg",
    client: "ABC Development Corp",
    timeline: "4 months",
    budget: "PKR 80LAKH - PKR 85LAKH",
    description:
      "A large-scale commercial plaza built with modern materials and efficient space planning, delivering high-quality finishes and tenant-ready units.",
    caseStudyUrl: "#",
  },
  {
    id: 2,
    title: "Commercial Office Renovation",
    category: "Renovation",
    image: "/renovation2.jpg",
    beforeImage: "/before2.jpg",
    afterImage: "/after2.jpg",
    client: "Private Residence",
    timeline: "20 days",
    budget: "PKR 4LAKH - PKR 5LAKH",
    description:
      "A focused office renovation that updated interiors, improved lighting, and optimized layouts for better workflow and aesthetics.",
    caseStudyUrl: "#",
  },
  {
    id: 3,
    title: "Private Plaza",
    category: "Construction",
    image: "/construction3.jpg",
    beforeImage: "/before3.jpg",
    afterImage: "/after3.jpg",
    client: "Tech Startup Inc",
    timeline: "5 months",
    budget: "PKR 90LAKH - PKR 1CRORE",
    description:
      "Private plaza development tailored for a tech client with contemporary finishes and adaptable communal spaces for events and networking.",
    caseStudyUrl: "#",
  },
  {
    id: 4,
    title: "Bank ATM Interior Design",
    category: "Interior Designing",
    image: "/interior4.jpg",
    beforeImage: "/before4.jpg",
    afterImage: "/after4.jpg",
    client: "Real Estate Partners",
    timeline: "4 days",
    budget: "PKR 60000 - PKR 70000",
    description:
      "Quick interior redesign for ATM spaces focusing on security, accessibility, and a clean customer experience.",
    caseStudyUrl: "#",
  },
]

const categories = ["All", "Construction", "Renovation", "Interior"]

export function Portfolio() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [selectedFilter, setSelectedFilter] = useState("All")
  const [selectedProject, setSelectedProject] = useState<
    (typeof portfolioItems)[0] | null
  >(null)
  const [showBeforeAfter, setShowBeforeAfter] = useState(false)
  const [sliderPosition, setSliderPosition] = useState(50)

  const filteredItems =
    selectedFilter === "All"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === selectedFilter)

  const currentItem = filteredItems[currentIndex]

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % filteredItems.length)
  }

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length)
  }

  return (
    <section id="portfolio" className="py-20 px-6 sm:px-12 bg-white">
      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="font-serif font-bold text-4xl sm:text-5xl text-text-default mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our diverse portfolio of completed projects spanningconstruction, renovation, and interior design.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap gap-3 justify-center mb-12"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setSelectedFilter(cat)
                setCurrentIndex(0)
              }}
              className={`px-6 py-2 rounded-full font-semibold transition-all ${
                selectedFilter === cat
                  ? "bg-teal-600 text-white shadow-lg"
                  : "bg-teal-50 text-teal-600 hover:bg-teal-100"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Main Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12"
        >
          {/* Large Featured Image */}
          <div className="lg:col-span-2">
            <div
              className="relative w-full aspect-video bg-gray-200 rounded-xl overflow-hidden cursor-pointer group"
              onClick={() => {
                setSelectedProject(currentItem)
                setShowBeforeAfter(false)
              }}
            >
              <img
                src={currentItem.image || "/placeholder.svg"}
                alt={currentItem.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all" />
              <button className="absolute inset-0 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="w-16 h-16 rounded-full bg-white/30 flex items-center justify-center backdrop-blur-sm">
                  <ChevronRight size={28} />
                </div>
              </button>
            </div>

            {/* Project Info */}
            <div className="mt-6">
              <h3 className="font-serif font-bold text-2xl text-text-default mb-2">
                {currentItem.title}
              </h3>

              <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-600">
                <span className="bg-teal-50 text-teal-700 px-3 py-1 rounded-full font-semibold">
                  {currentItem.category}
                </span>
                <span>Timeline: {currentItem.timeline}</span>
                <span>Budget: {currentItem.budget}</span>
              </div>

              <p className="text-gray-600 mb-4">{currentItem.description}</p>

              {/* Action Buttons */}
              <div className="flex gap-3">
                <button
                  onClick={() => {
                    setSelectedProject(currentItem)
                    setShowBeforeAfter(true)
                  }}
                  className="px-4 py-2 rounded-lg bg-teal-600 text-white font-semibold hover:shadow-lg transition-shadow"
                >
                  Before & After
                </button>

                <a
                  href={currentItem.caseStudyUrl}
                  className="px-4 py-2 rounded-lg border-2 border-teal-600 text-teal-600 font-semibold hover:bg-teal-50 transition-colors flex items-center gap-2"
                >
                  <Download size={16} />
                  Case Study
                </a>
              </div>
            </div>
          </div>

          {/* Thumbnails */}
          <div className="flex flex-col gap-3">
            {filteredItems.map((item, index) => (
              <motion.button
                key={item.id}
                onClick={() => setCurrentIndex(index)}
                whileHover={{ scale: 1.05 }}
                className={`relative h-24 rounded-lg overflow-hidden transition-all ${
                  currentIndex === index ? "ring-2 ring-teal-600" : ""
                }`}
              >
                <img
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
                {currentIndex === index && (
                  <div className="absolute inset-0 bg-teal-600/30" />
                )}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Carousel Controls */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex items-center justify-between"
        >
          <button
            onClick={handlePrev}
            className="p-3 rounded-full bg-teal-50 hover:bg-teal-100 text-teal-600 transition-colors"
            aria-label="Previous project"
          >
            <ChevronLeft size={24} />
          </button>

          <div className="text-center text-sm text-gray-600">
            {currentIndex + 1} / {filteredItems.length}
          </div>

          <button
            onClick={handleNext}
            className="p-3 rounded-full bg-teal-50 hover:bg-teal-100 text-teal-600 transition-colors"
            aria-label="Next project"
          >
            <ChevronRight size={24} />
          </button>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedProject && !showBeforeAfter && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <img
                  src={selectedProject.image || "/placeholder.svg"}
                  alt={selectedProject.title}
                  className="w-full h-auto"
                />

                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 p-2 bg-white rounded-full hover:bg-gray-100 transition-colors"
                >
                  <X size={24} />
                </button>
              </div>

              <div className="p-8">
                <h3 className="font-serif font-bold text-3xl text-text-default mb-4">
                  {selectedProject.title}
                </h3>

                <div className="grid grid-cols-3 gap-4 mb-6 text-center">
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Client</p>
                    <p className="font-semibold text-text-default">
                      {selectedProject.client}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Timeline</p>
                    <p className="font-semibold text-text-default">
                      {selectedProject.timeline}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Budget</p>
                    <p className="font-semibold text-text-default">
                      {selectedProject.budget}
                    </p>
                  </div>
                </div>

                <p className="text-gray-600 mb-6">{selectedProject.description}</p>

                <a
                  href={selectedProject.caseStudyUrl}
                  className="inline-block px-6 py-2 rounded-lg bg-teal-600 text-white font-semibold hover:shadow-lg transition-shadow"
                >
                  Download Full Case Study
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}

        {/* Before & After Modal */}
        {selectedProject && showBeforeAfter && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4"
            onClick={() => setShowBeforeAfter(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-xl max-w-3xl w-full overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative bg-gray-200 aspect-video overflow-hidden">
                
                {/* After Image */}
                <img
                  src={selectedProject.afterImage || "/placeholder.svg"}
                  alt="After"
                  className="absolute inset-0 w-full h-full object-cover"
                />

                {/* Before Image */}
                <div
                  style={{ width: `${sliderPosition}%` }}
                  className="absolute inset-0 overflow-hidden"
                >
                  <img
                    src={selectedProject.beforeImage || "/placeholder.svg"}
                    alt="Before"
                    className="w-screen h-full object-cover"
                  />
                </div>

                {/* Slider Input */}
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={sliderPosition}
                  onChange={(e) =>
                    setSliderPosition(Number(e.target.value))
                  }
                  className="absolute inset-0 w-full h-full cursor-pointer opacity-0 z-10"
                />

                {/* Slider Line */}
                <div
                  style={{ left: `${sliderPosition}%` }}
                  className="absolute top-0 bottom-0 w-1 bg-white"
                >
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center">
                    <div className="flex gap-1">
                      <ChevronLeft size={16} className="text-gray-800" />
                      <ChevronRight size={16} className="text-gray-800" />
                    </div>
                  </div>
                </div>

                {/* Labels */}
                <div className="absolute top-4 left-4 bg-black/50 text-white px-3 py-1 rounded text-sm font-semibold">
                  Before
                </div>
                <div className="absolute top-4 right-4 bg-black/50 text-white px-3 py-1 rounded text-sm font-semibold">
                  After
                </div>

                {/* FIXED Close Button (z-20 added) */}
                <button
                  onClick={() => setShowBeforeAfter(false)}
                  className="absolute top-4 left-1/2 -translate-x-1/2 p-2 bg-white rounded-full hover:bg-gray-100 transition-colors z-20"
                >
                  <X size={24} />
                </button>
              </div>

              <div className="p-6 text-center">
                <p className="text-gray-600">
                  Drag the slider to compare before and after
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
