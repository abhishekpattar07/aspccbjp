import { Facebook, Twitter, Instagram, Linkedin, Youtube, Mail, Phone } from "lucide-react"

export function Footer() {
  const quickLinks = [
    { name: "About Us", href: "#about" },
    { name: "Academics", href: "#academics" },
    { name: "Admissions", href: "#admissions" },
    { name: "Campus Life", href: "#campus" },
    { name: "Contact", href: "#contact" },
  ]

  const programs = [
    { name: "B.Com", href: "#" },
    { name: "BBA", href: "#" },
    { name: "BCA", href: "#" },
    { name: "M.Com", href: "#" },
    { name: "MBA", href: "#" },
    { name: "MCA", href: "#" },
  ]

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* College Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
                <span className="text-accent-foreground font-bold text-lg">B</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">A S Patil college of Commerce vijayapura(Autonomous)</h3>
                <p className="text-sm opacity-80">Excellence in Education</p>
              </div>
            </div>
            <p className="text-primary-foreground/80 mb-6 max-w-md">
              A S Patil college of Commerce vijayapura(Autonomous) has been nurturing future leaders through quality
              education and holistic development for over 25 years.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-accent transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-accent transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-accent transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-accent transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-accent transition-colors"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-primary-foreground/80 hover:text-accent transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Programs</h4>
            <ul className="space-y-2">
              {programs.map((program) => (
                <li key={program.name}>
                  <a href={program.href} className="text-primary-foreground/80 hover:text-accent transition-colors">
                    {program.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-12 pt-8">
          <div className="text-center mb-6">
            <h4 className="text-lg font-semibold mb-4">Developer Contact</h4>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-primary-foreground/80">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <a href="mailto:abhishekpattar@gmail.com" className="hover:text-accent transition-colors">
                  abhishekpattar@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <a href="tel:9120272963" className="hover:text-accent transition-colors">
                  9120272963
                </a>
              </div>
            </div>
          </div>

          <div className="text-center">
            <p className="text-primary-foreground/60 text-sm">
              Developed by © 2025 Abhishek Pattar - All rights reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
