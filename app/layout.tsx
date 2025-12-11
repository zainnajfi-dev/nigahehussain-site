import type React from "react"
import { Inter, Playfair_Display } from "next/font/google"
import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
})

export const metadata: Metadata = {
  title: "Nigah e Hussain | Premium Construction & Renovation Services",
  description:
    "Premium construction and renovation services with 7+ years of expertise. 200+ completed projects. Free site visit.",
  keywords: "construction, renovation, interior design, AutoCAD design, project management",
  openGraph: {
    title: "Nigah e Hussain | Premium Construction & Renovation Services",
    description: "Premium construction and renovation services with 7+ years of expertise.",
    url: "https://nigahehussain.com",
    type: "website",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <meta name="theme-color" content="#1e5a5a" />
        <link rel="icon" href="/favicon.ico" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Nigah e Hussain",
              description: "Premium Construction & Renovation Services",
              url: "https://nigahehussain.com",
              telephone: "+92-304-1199512",
              email: "nigahehussain514@gmail.com",
              sameAs: ["https://www.instagram.com/nigahehussain514", "https://www.facebook.com/nigahehussain514"],
              address: {
                "@type": "PostalAddress",
                addressCountry: "PK",
              },
            }),
          }}
        />
      </head>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
