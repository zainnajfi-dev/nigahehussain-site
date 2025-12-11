"use client"

import { useState } from "react"
import { Hammer, Palette, Lightbulb, Briefcase, ClipboardList } from "lucide-react"
import { motion } from "framer-motion"

const services = [
  {
    id: 1,
    title: "Construction",
    description: "Expert structural construction and building projects with precision and quality.",
    icon: Hammer,
    process: ["Site Assessment", "Design Planning", "Material Sourcing", "Construction", "Quality Check"],
    timeline: "3-6 months",
  },
  {
    id: 2,
    title: "Renovation",
    description: "Complete renovation services to modernize and enhance existing spaces.",
    icon: Palette,
    process: ["Assessment", "Design", "Dismantling", "Reconstruction", "Finishing"],
    timeline: "2-4 months",
  },
  {
    id: 3,
    title: "Interior Design",
    description: "Bespoke interior design solutions that blend functionality with aesthetics.",
    icon: Lightbulb,
    process: ["Consultation", "Concept Design", "Material Selection", "Implementation", "Styling"],
    timeline: "1-3 months",
  },
  {
    id: 4,
    title: "AutoCAD Design",
    description: "Professional architectural drawings and technical designs for all projects.",
    icon: ClipboardList,
    process: ["Sketching", "2D Drawings", "3D Modeling", "Technical Details", "Delivery"],
    timeline: "1-2 weeks",
  },
  {
    id: 5,
    title: "Project Management",
    description: "End-to-end project coordination ensuring timely and budget-friendly completion.",
    icon: Briefcase,
    process: ["Planning", "Scheduling", "Resource Allocation", "Monitoring", "Delivery"],
    timeline: "Project dependent",
  },
]

export function Services() {
  const [selectedService, setSelectedService] = useState<number | null>(null)

  return (
    <section id="services" className="py-20 px-6 sm:px-12 bg-teal-25">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif font-bold text-4xl sm:text-5xl text-text-default mb-4">Our Services</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive construction and design solutions tailored to your needs.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-12">
          {services.map((service, index) => {
            const Icon = service.icon
            const isSelected = selectedService === service.id

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onClick={() => setSelectedService(isSelected ? null : service.id)}
                className="cursor-pointer"
              >
                <motion.div
                  whileHover={{ y: -8 }}
                  className={`p-6 rounded-xl transition-all duration-300 h-full ${
                    isSelected
                      ? "bg-white shadow-xl border-2 border-teal-600"
                      : "bg-white shadow-md hover:shadow-lg border border-teal-50"
                  }`}
                >
                  {/* Icon */}
                  <motion.div className="mb-4 p-3 rounded-lg bg-teal-50 w-fit" whileHover={{ scale: 1.1 }}>
                    <Icon className="w-6 h-6 text-teal-600" />
                  </motion.div>

                  {/* Title */}
                  <h3 className="font-serif font-bold text-lg text-text-default mb-2">{service.title}</h3>

                  {/* Description */}
                  <p className="text-sm text-gray-600 mb-4">{service.description}</p>

                  {/* Timeline Badge */}
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-semibold text-teal-600 bg-teal-100 px-3 py-1 rounded-full">
                      {service.timeline}
                    </span>
                  </div>

                  {/* Expanded Details */}
                  {isSelected && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="mt-4 pt-4 border-t border-teal-50"
                    >
                      <p className="text-xs font-semibold text-text-default mb-2">Process:</p>
                      <ul className="space-y-1">
                        {service.process.map((step, i) => (
                          <li key={i} className="text-sm text-gray-600 flex items-center gap-2">
                            <span className="text-teal-600">→</span>
                            {step}
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </motion.div>
              </motion.div>
            )
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center"
        >
          <a
            href="#contact"
            className="inline-block px-8 py-3 rounded-lg bg-gradient-to-r from-teal-600 to-cyan-500 text-white font-semibold hover:shadow-lg transition-shadow"
          >
            Explore Your Project
          </a>
        </motion.div>
      </div>
    </section>
  )
}
