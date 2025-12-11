"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Award, Users, Clock, FileText } from "lucide-react"

const AnimatedCounter = ({ end, suffix = "" }: { end: number; suffix?: string }) => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let start = 0
    const duration = 2000
    const increment = end / (duration / 16)

    const timer = setInterval(() => {
      start += increment
      if (start >= end) {
        setCount(end)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, 16)

    return () => clearInterval(timer)
  }, [end])

  return (
    <>
      {count}
      {suffix}
    </>
  )
}

const stats = [
  {
    value: 7,
    label: "Years of Experience",
    icon: Award,
    suffix: "+",
  },
  {
    value: 82,
    label: "Projects Completed",
    icon: FileText,
    suffix: "+",
  },
  {
    value: 200,
    label: "Satisfied Clients",
    icon: Users,
    suffix: "+",
  },
  {
    value: 24,
    label: "Hour Support",
    icon: Clock,
    suffix: "/7",
  },
]

const visions = [
  {
    title: "Our Vision",
    description:
      "To be the leading construction and renovation company known for delivering exceptional quality, innovative designs, and customer satisfaction.",
    icon: "🎯",
  },
  {
    title: "Our Mission",
    description:
      "To provide premium construction and renovation services that transform spaces and exceed client expectations through expertise, reliability, and attention to detail.",
    icon: "🏢",
  },
]

export function CompanyProfile() {
  return (
    <section id="profile" className="py-20 px-6 sm:px-12 bg-gradient-to-br from-white to-teal-25">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif font-bold text-4xl sm:text-5xl text-text-default mb-4">About Nigah e Hussain</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            With over 7+ years in the construction industry, we've established ourselves as a trusted partner for
            premium construction and renovation services.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon

            return (
              <motion.div
                key={index}
                whileHover={{ y: -8 }}
                className="text-center p-6 rounded-xl bg-white shadow-md hover:shadow-lg transition-all"
              >
                <motion.div className="flex justify-center mb-4" whileHover={{ scale: 1.2 }}>
                  <div className="p-3 rounded-lg bg-teal-50">
                    <Icon className="w-8 h-8 text-teal-600" />
                  </div>
                </motion.div>

                <div className="font-serif font-bold text-3xl sm:text-4xl text-teal-600 mb-2">
                  <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                </div>

                <p className="text-sm text-gray-600 font-medium">{stat.label}</p>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Company Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white rounded-xl p-8 sm:p-12 shadow-lg mb-12"
        >
          <h3 className="font-serif font-bold text-2xl text-text-default mb-4">Our Process & Guarantees</h3>
          <p className="text-gray-600 mb-6 leading-relaxed">
            At Nigah e Hussain, we believe that quality construction and renovation services are built on trust,
            expertise, and attention to detail. Our process is designed to ensure seamless project execution from start
            to finish:
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <h4 className="font-semibold text-text-default mb-3">Our Process</h4>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li className="flex items-start gap-3">
                  <span className="text-teal-600 font-bold mt-0.5">1.</span>
                  <span>Initial consultation and site assessment</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-teal-600 font-bold mt-0.5">2.</span>
                  <span>Detailed design and budget planning</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-teal-600 font-bold mt-0.5">3.</span>
                  <span>Material sourcing and project setup</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-teal-600 font-bold mt-0.5">4.</span>
                  <span>Continuous monitoring and quality checks</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-teal-600 font-bold mt-0.5">5.</span>
                  <span>Final completion and handover</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-text-default mb-3">Our Guarantees</h4>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li className="flex items-start gap-3">
                  <span className="text-gold font-bold mt-0.5">✓</span>
                  <span>90 days post work maintenance support</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gold font-bold mt-0.5">✓</span>
                  <span>Permit and compliance handling included</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gold font-bold mt-0.5">✓</span>
                  <span>On-time and on-budget commitment</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gold font-bold mt-0.5">✓</span>
                  <span>24/7 customer support</span>
                </li>
              </ul>
            </div>
          </div>

          {/* PDF Download */}
          <div className="pt-6 border-t border-teal-50">
            <a
              href="/nigah-profile.pdf"
              className="inline-block px-6 py-3 rounded-lg bg-gradient-to-r from-teal-600 to-cyan-500 text-white font-semibold hover:shadow-lg transition-shadow"
            >
              <FileText className="inline mr-2" size={18} />
              Download Company Profile PDF
            </a>
          </div>
        </motion.div>

        {/* Vision & Mission */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="grid md:grid-cols-2 gap-6"
        >
          {visions.map((vision, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -8 }}
              className="p-8 rounded-xl bg-white shadow-md hover:shadow-lg transition-all border-l-4 border-teal-600"
            >
              <div className="text-4xl mb-4">{vision.icon}</div>
              <h3 className="font-serif font-bold text-2xl text-text-default mb-3">{vision.title}</h3>
              <p className="text-gray-600 leading-relaxed">{vision.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
