"use client"

import type React from "react"

import { useState } from "react"
import { MapPin, Phone, Mail, Clock, MessageSquare, Instagram } from "lucide-react"
import { motion } from "framer-motion"

const officeLocations = [
  {
    id: 1,
    name: "Main Office",
    address: "Islamabad / Rawalpindi, Pakistan",
    phone: "+92 304 1199512",
    email: "nigahehussain514@gmail.com",
    hours: "Monday - Friday: 9:00 AM - 5:00 PM\nSaturday & Sunday: Closed",
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3618.4738819644385!2d74.3587!3d31.5204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzHCsDMxJzEyLjIiTiA3NMKwMjEnMzEuMiJF!5e0!3m2!1sen!2spk",
  },
  {
    id: 2,
    name: "Secondary Office",
    address: "Sargodha, Pakistan",
    phone: "+92 304 1199512",
    email: "nigahehussain514@gmail.com",
    hours: "Saturday - Thursday: 9:00 AM - 5:00 PM\nFriday: Closed",
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3618.4738819644385!2d74.3587!3d31.5204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzHCsDMxJzEyLjIiTiA3NMKwMjEnMzEuMiJF!5e0!3m2!1sen!2spk",
  },
]

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
    projectType: "construction",
    consent: false,
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitStatus("success")
        setFormData({
          name: "",
          phone: "",
          email: "",
          message: "",
          projectType: "construction",
          consent: false,
        })
        setTimeout(() => setSubmitStatus("idle"), 5000)
      } else {
        setSubmitStatus("error")
      }
    } catch (error) {
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-20 px-6 sm:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif font-bold text-4xl sm:text-5xl text-text-default mb-4">Get In Touch</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Contact us today for a free site visit and consultation. Our team is ready to bring your vision to life.
          </p>
        </motion.div>

        {/* Office Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="grid md:grid-cols-2 gap-8 mb-16"
        >
          {officeLocations.map((office) => (
            <motion.div
              key={office.id}
              whileHover={{ y: -8 }}
              className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all"
            >
              {/* Map */}
              <div className="relative h-64 bg-gray-200">
                <iframe
                  src={office.mapEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`${office.name} location map`}
                />
              </div>

              {/* Info */}
              <div className="p-6 bg-white">
                <h3 className="font-serif font-bold text-xl text-text-default mb-4">{office.name}</h3>

                <div className="space-y-3">
                  {/* Address */}
                  <div className="flex gap-3">
                    <MapPin size={20} className="text-teal-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-semibold text-text-default">Address</p>
                      <p className="text-sm text-gray-600">{office.address}</p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex gap-3">
                    <Phone size={20} className="text-teal-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-semibold text-text-default">Phone</p>
                      <a
                        href={`tel:${office.phone.replace(/\s/g, "")}`}
                        className="text-sm text-teal-600 hover:text-teal-700"
                      >
                        {office.phone}
                      </a>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex gap-3">
                    <Mail size={20} className="text-teal-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-semibold text-text-default">Email</p>
                      <a href={`mailto:${office.email}`} className="text-sm text-teal-600 hover:text-teal-700">
                        {office.email}
                      </a>
                    </div>
                  </div>

                  {/* Hours */}
                  <div className="flex gap-3">
                    <Clock size={20} className="text-teal-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-semibold text-text-default">Hours</p>
                      <p className="text-sm text-gray-600 whitespace-pre-line">{office.hours}</p>
                    </div>
                  </div>
                </div>

                {/* Quick Links */}
                <div className="mt-6 pt-6 border-t border-teal-50 flex gap-3">
                  <a
                    href={`https://wa.me/923041199512`}
                    className="flex-1 px-4 py-2 rounded-lg bg-teal-50 text-teal-600 hover:bg-teal-100 transition-colors text-center text-sm font-semibold"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Contact via WhatsApp"
                  >
                    <MessageSquare size={16} className="inline mr-2" />
                    WhatsApp
                  </a>
                  <a
                    href="https://instagram.com/nigahehussain514"
                    className="flex-1 px-4 py-2 rounded-lg bg-teal-50 text-teal-600 hover:bg-teal-100 transition-colors text-center text-sm font-semibold"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Follow on Instagram"
                  >
                    <Instagram size={16} className="inline mr-2" />
                    Instagram
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-2xl mx-auto bg-teal-25 rounded-xl p-8 sm:p-12"
        >
          <h3 className="font-serif font-bold text-2xl text-text-default mb-6">Contact Form</h3>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name and Phone */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-text-default mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 rounded-lg border border-teal-200 focus:outline-none focus:ring-2 focus:ring-teal-600 bg-white"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-text-default mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 rounded-lg border border-teal-200 focus:outline-none focus:ring-2 focus:ring-teal-600 bg-white"
                  placeholder="+92 300 1234567"
                />
              </div>
            </div>

            {/* Email and Project Type */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-text-default mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 rounded-lg border border-teal-200 focus:outline-none focus:ring-2 focus:ring-teal-600 bg-white"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label htmlFor="projectType" className="block text-sm font-semibold text-text-default mb-2">
                  Project Type
                </label>
                <select
                  id="projectType"
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 rounded-lg border border-teal-200 focus:outline-none focus:ring-2 focus:ring-teal-600 bg-white"
                >
                  <option value="construction">Construction</option>
                  <option value="renovation">Renovation</option>
                  <option value="interior">Interior Design</option>
                  <option value="autocad">AutoCAD Design</option>
                  <option value="project-management">Project Management</option>
                </select>
              </div>
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-text-default mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                rows={5}
                className="w-full px-4 py-2 rounded-lg border border-teal-200 focus:outline-none focus:ring-2 focus:ring-teal-600 bg-white resize-none"
                placeholder="Tell us about your project..."
              />
            </div>

            {/* Consent */}
            <div className="flex items-start gap-3">
              <input
                type="checkbox"
                id="consent"
                name="consent"
                checked={formData.consent}
                onChange={handleInputChange}
                required
                className="mt-1 w-4 h-4 rounded cursor-pointer"
              />
              <label htmlFor="consent" className="text-sm text-gray-600">
                I agree to be contacted regarding my project inquiry and privacy policy.
              </label>
            </div>

            {/* Status Messages */}
            {submitStatus === "success" && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-4 rounded-lg bg-green-50 text-green-700 text-sm"
              >
                Thank you! We'll be in touch soon.
              </motion.div>
            )}
            {submitStatus === "error" && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-4 rounded-lg bg-red-50 text-red-700 text-sm"
              >
                Something went wrong. Please try again.
              </motion.div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full px-6 py-3 rounded-lg bg-gradient-to-r from-teal-600 to-cyan-500 text-white font-semibold hover:shadow-lg transition-shadow disabled:opacity-50"
            >
              {isSubmitting ? "Sending..." : "Send Inquiry"}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  )
}
