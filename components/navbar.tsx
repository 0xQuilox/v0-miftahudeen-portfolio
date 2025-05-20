"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, FileText } from "lucide-react"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="fixed w-full bg-amber-900/95 text-amber-50 z-50 shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-xl font-bold">
            MT | Blockchain Security
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="hover:text-amber-300 transition-colors">
              Home
            </Link>
            <Link href="#about" className="hover:text-amber-300 transition-colors">
              About
            </Link>
            <Link href="#services" className="hover:text-amber-300 transition-colors">
              Services
            </Link>
            <Link href="#projects" className="hover:text-amber-300 transition-colors">
              Projects
            </Link>
            <Link href="#contributions" className="hover:text-amber-300 transition-colors">
              Contributions
            </Link>
            <Link href="#contact" className="hover:text-amber-300 transition-colors">
              Contact
            </Link>
          </nav>

          <Button className="hidden md:flex bg-amber-600 hover:bg-amber-700 text-white" asChild>
            <Link
              href="https://drive.google.com/file/d/19qlK1pFIBOGsCJ7Z4C89P1OXPUdH790X/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FileText className="mr-2 h-4 w-4" />
              Download CV
            </Link>
          </Button>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-amber-50 focus:outline-none" onClick={toggleMenu} aria-label="Toggle menu">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden bg-amber-800 py-4">
          <div className="container mx-auto px-4 flex flex-col space-y-4">
            <Link href="/" className="block py-2 hover:bg-amber-700 px-4 rounded" onClick={toggleMenu}>
              Home
            </Link>
            <Link href="#about" className="block py-2 hover:bg-amber-700 px-4 rounded" onClick={toggleMenu}>
              About
            </Link>
            <Link href="#services" className="block py-2 hover:bg-amber-700 px-4 rounded" onClick={toggleMenu}>
              Services
            </Link>
            <Link href="#projects" className="block py-2 hover:bg-amber-700 px-4 rounded" onClick={toggleMenu}>
              Projects
            </Link>
            <Link href="#contributions" className="block py-2 hover:bg-amber-700 px-4 rounded" onClick={toggleMenu}>
              Contributions
            </Link>
            <Link href="#contact" className="block py-2 hover:bg-amber-700 px-4 rounded" onClick={toggleMenu}>
              Contact
            </Link>
            <Button className="bg-amber-600 hover:bg-amber-700 text-white w-full" asChild>
              <Link
                href="https://drive.google.com/file/d/19qlK1pFIBOGsCJ7Z4C89P1OXPUdH790X/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FileText className="mr-2 h-4 w-4" />
                Download CV
              </Link>
            </Button>
          </div>
        </nav>
      )}
    </header>
  )
}
