"use client"

import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { Portfolio } from "@/components/portfolio"
import { CompanyProfile } from "@/components/company-profile"
import { AboutOwner } from "@/components/about-owner"
import { Reviews } from "@/components/reviews"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Services />
      <Portfolio />
      <CompanyProfile />
      <AboutOwner />
      <Reviews />
      <Contact />
      <Footer />
    </main>
  )
}
