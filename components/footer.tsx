import { Mail, Phone, MapPin, MessageCircle, Instagram, Music } from "lucide-react"
import { Logo } from "./logo"

const footerLinks = {
  company: [
    { label: "About Us", href: "#profile" },
    { label: "Services", href: "#services" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Reviews", href: "#reviews" },
  ],
  resources: [
    { label: "Blog", href: "#" },
    { label: "FAQ", href: "#" },
    { label: "Sitemap", href: "/sitemap.xml" },
    { label: "Contact", href: "#contact" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
    { label: "Disclaimer", href: "/disclaimer" },
  ],
}

export function Footer() {
  return (
    <footer className="bg-teal-700 text-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 py-16">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Logo size="md" variant="white" />
              <div>
                <h3 className="font-serif font-bold text-lg">Nigah e Hussain</h3>
                <p className="text-sm text-cyan-200">Premium Construction & Renovation</p>
              </div>
            </div>
            <p className="text-sm text-white/80 mt-4 leading-relaxed">
              Transforming spaces with 7+ years of expertise in construction, renovation, and interior design.
            </p>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-white/80 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-white/80 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Phone size={16} className="flex-shrink-0 mt-0.5 text-cyan-300" />
                <a
                  href="tel:+923001234567"
                  className="text-sm text-white/80 hover:text-white transition-colors"
                >
                  +92 304 1199512
                </a>
              </li>

              <li className="flex items-start gap-3">
                <Mail size={16} className="flex-shrink-0 mt-0.5 text-cyan-300" />
                <a
                  href="mailto:info@nigahhussain.com"
                  className="text-sm text-white/80 hover:text-white transition-colors"
                >
                  nigahehussain514@gmail.com
                </a>
              </li>

              <li className="flex items-start gap-3">
                <MapPin size={16} className="flex-shrink-0 mt-0.5 text-cyan-300" />
                <span className="text-sm text-white/80">Multiple Locations</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Links */}
        <div className="py-8 border-t border-white/20 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex gap-4">
            {/* WhatsApp */}
            <a
              href="https://wa.me/923041199512"
              className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              title="Chat with us on WhatsApp"
            >
              <MessageCircle size={20} className="text-white" />
            </a>

            {/* Instagram */}
            <a
              href="https://instagram.com/nigahehussain514"
              className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              title="Follow us on Instagram"
            >
              <Instagram size={20} className="text-white" />
            </a>

            {/* TikTok */}
            <a
              href="https://tiktok.com/@nigahehussain514"
              className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok"
              title="Watch us on TikTok"
            >
              <Music size={20} className="text-white" />
            </a>
          </div>

          <p className="text-sm text-white/60">
            © {new Date().getFullYear()} Nigah e Hussain. All rights reserved.
          </p>
        </div>

        {/* Legal Links */}
        <div className="pt-6 border-t border-white/20 flex flex-wrap justify-center gap-4 text-xs text-white/60">
          {footerLinks.legal.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

      </div>
    </footer>
  )
}
