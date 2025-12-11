"use client"

import { motion } from "framer-motion"
import { Phone, Mail } from "lucide-react"
import Image from "next/image"

export function AboutOwner() {
  return (
    <section id="owner" className="py-20 px-6 sm:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif font-bold text-4xl sm:text-5xl text-teal-primary mb-4">Meet the Owner</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            The visionary behind Nigah e Hussain's success and commitment to excellence
          </p>
        </motion.div>

        {/* Owner Profile */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          {/* Owner Image */}
          <div className="flex justify-center md:justify-start">
            <motion.div whileHover={{ y: -8 }} className="relative w-full max-w-sm">
              <div className="absolute inset-0 bg-gradient-to-br from-teal-100 to-cyan-100 rounded-2xl blur-xl opacity-60"></div>
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <div className="aspect-square relative">
                  <Image
                    src="/owner.png"
                    alt="Mr. Ahmed Malik - Founder & CEO"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </motion.div>
          </div>

          {/* Owner Bio */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="mb-6">
              <h3 className="font-serif font-bold text-3xl sm:text-4xl text-teal-primary mb-2">Mr. Ahmed Malik</h3>
              <p className="text-lg font-semibold text-cyan-600 mb-2">Founder & Chief Executive Officer</p>
              <p className="text-base font-medium text-teal-700">
                7 Years of Excellence in Construction & Renovation
              </p>
            </div>

            <p className="text-gray-700 leading-relaxed mb-8 text-base">
              Our mission is simple — to turn your dream space into reality with integrity, precision, and style. At
              Nigah e Hussain, we believe every structure should reflect craftsmanship, trust, and timeless quality.
              With over 7 years of industry experience, Mr. Ahmed Malik has led our company to become a beacon of
              excellence in construction and renovation services across the region.
            </p>

            {/* Digital Signature */}
            <div className="mb-8 flex items-center">
              <div className="w-32 h-16 relative">
                <Image src="/signature.jpg" alt="Hussain Raza Signature" fill className="object-contain" />
              </div>
            </div>

            {/* Contact Icons */}
            <div className="flex gap-6">
              <motion.a
                href="tel:+923001234567"
                whileHover={{ scale: 1.1, y: -4 }}
                className="flex items-center gap-3 px-6 py-3 rounded-lg bg-gradient-to-r from-teal-50 to-cyan-50 hover:from-teal-100 hover:to-cyan-100 transition-all group"
              >
                <div className="p-2 rounded-lg bg-teal-600 text-white group-hover:bg-teal-700 transition-colors">
                  <Phone size={18} />
                </div>
                <span className="font-semibold text-teal-primary">+92 304 1199512</span>
              </motion.a>

              <motion.a
                href="mailto:info@nigahhussain.com"
                whileHover={{ scale: 1.1, y: -4 }}
                className="flex items-center gap-3 px-6 py-3 rounded-lg bg-gradient-to-r from-teal-50 to-cyan-50 hover:from-teal-100 hover:to-cyan-100 transition-all group"
              >
                <div className="p-2 rounded-lg bg-teal-600 text-white group-hover:bg-teal-700 transition-colors">
                  <Mail size={18} />
                </div>
                <span className="font-semibold text-teal-primary">nigahehussain514@gmail.com</span>
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
