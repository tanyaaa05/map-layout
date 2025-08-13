import { Facebook, Twitter, Linkedin, Instagram, Youtube } from "lucide-react"

export default function Footer() {
  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Youtube, href: "#", label: "YouTube" },
  ]

  const footerLinks = [
    { text: "Terms and Conditions", href: "#" },
    { text: "Privacy Policy", href: "#" },
    { text: "Refund Policy", href: "#" },
  ]

  return (
    <footer className="bg-slate-900 text-white py-8 mt-12">
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Left side - Links */}
          <div className="flex flex-wrap gap-6 text-sm">
            {footerLinks.map((link, index) => (
              <a key={index} href={link.href} className="text-gray-300 hover:text-white transition-colors">
                {link.text}
              </a>
            ))}
          </div>

          {/* Right side - Social Icons */}
          <div className="flex gap-4">
            {socialLinks.map((social, index) => {
              const IconComponent = social.icon
              return (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="text-gray-400 hover:text-white transition-colors p-2 hover:bg-slate-800 rounded-lg"
                >
                  <IconComponent className="w-5 h-5" />
                </a>
              )
            })}
          </div>
        </div>

        {/* Bottom section */}
        <div className="mt-6 pt-6 border-t border-slate-700 text-center text-sm text-gray-400">
          <p>&copy; 2024 Your Company Name. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
