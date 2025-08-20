"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, ChevronDown, ExternalLink } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import Image from "next/image"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { name: "Home", href: "#home" },
    {
      name: "About Us",
      href: "#about",
      submenu: [
        { name: "Our History", href: "#history" },
        { name: "Vision & Mission", href: "#vision" },
        { name: "Leadership", href: "#leadership" },
      ],
    },
    {
      name: "Academics",
      href: "#academics",
      submenu: [
        { name: "Undergraduate Programs", href: "#ug" },
        { name: "Postgraduate Programs", href: "#pg" },
        { name: "Research Programs", href: "#research" },
      ],
    },
    { name: "Admissions", href: "#admissions" },
    { name: "Campus Life", href: "#campus" },
    { name: "Contact", href: "#contact" },
  ]

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 relative">
              <Image src="/images/college-logo.png" alt="BLDE ASPCC Logo" fill className="object-contain" />
            </div>
            <div>
              <h1 className="text-sm sm:text-lg font-bold text-foreground">
                A S Patil College of Commerce [Autonomous]
              </h1>
              <p className="text-xs text-muted-foreground">Excellence in Education</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) =>
              item.submenu ? (
                <DropdownMenu key={item.name}>
                  <DropdownMenuTrigger className="flex items-center space-x-1 text-foreground hover:text-accent transition-colors">
                    <span>{item.name}</span>
                    <ChevronDown className="w-4 h-4" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    {item.submenu.map((subItem) => (
                      <DropdownMenuItem key={subItem.name}>
                        <a href={subItem.href}>{subItem.name}</a>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <a key={item.name} href={item.href} className="text-foreground hover:text-accent transition-colors">
                  {item.name}
                </a>
              ),
            )}
            <Button
              variant="outline"
              size="sm"
              className="border-accent text-accent hover:bg-accent hover:text-accent-foreground bg-transparent"
              onClick={() => window.open("https://uucms.karnataka.gov.in/", "_blank")}
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              UUCMS Portal
            </Button>
            <Button className="bg-accent hover:bg-accent/90">Apply Now</Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="sm" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-foreground hover:text-accent transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <Button
                variant="outline"
                size="sm"
                className="border-accent text-accent hover:bg-accent hover:text-accent-foreground w-fit bg-transparent"
                onClick={() => {
                  window.open("https://uucms.karnataka.gov.in/", "_blank")
                  setIsOpen(false)
                }}
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                UUCMS Portal
              </Button>
              <Button className="bg-accent hover:bg-accent/90 w-fit">Apply Now</Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
