import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  ChevronRight,
  Code,
  Shield,
  FileCode,
  Search,
  Send,
  Github,
  Linkedin,
  Twitter,
  Music,
  CreditCard,
} from "lucide-react"
import Navbar from "@/components/navbar"

export default function Home() {
  return (
    <div className="min-h-screen bg-amber-50">
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-amber-800/90 to-amber-900/90 text-amber-50 pt-16">
        <div className="container mx-auto px-4 py-20 md:py-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Miftahudeen Tajudeen</h1>
              <div className="h-1 w-20 bg-amber-400 mb-6"></div>
              <h2 className="text-xl md:text-2xl mb-6 text-amber-200">
                Fullstack Blockchain Developer & Security Researcher
              </h2>
              <p className="text-lg mb-8 text-amber-100/90 max-w-lg">
                Specializing in EVM ecosystems and Solidity development, I design secure dApps while conducting smart
                contract audits and API penetration testing to ensure robust blockchain solutions.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button className="bg-amber-600 hover:bg-amber-700 text-white">
                  View Projects <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="outline" className="border-amber-400 text-amber-100 hover:bg-amber-800">
                  Contact Me
                </Button>
              </div>
            </div>
            <div className="order-1 md:order-2 flex justify-center md:justify-end">
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-amber-400 shadow-xl">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Snapchat-1336841524.jpg-RjD6c503Ur1155EtjMe9H8sVwGWOwS.jpeg"
                  alt="Miftahudeen Tajudeen"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-amber-50 clip-diagonal"></div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-amber-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-amber-900">About Me</h2>
            <div className="h-1 w-20 bg-amber-600 mx-auto mt-4 mb-8"></div>
            <p className="max-w-3xl mx-auto text-amber-800">
              I'm a passionate blockchain developer and security researcher with expertise in building secure
              decentralized applications and auditing smart contracts for vulnerabilities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold text-amber-800 mb-4">My Journey</h3>
              <p className="text-amber-700 mb-6">
                I design and deploy decentralized applications (dApps) and smart contracts, leveraging my deep
                understanding of Ethereum Virtual Machine (EVM) ecosystems, Solidity, and modern web3 frameworks. My
                fullstack proficiency spans front-end (React, TypeScript) and back-end (Node.js, Python, Go)
                development, ensuring seamless, user-centric solutions that bridge traditional web and blockchain
                technologies.
              </p>
              <p className="text-amber-700 mb-6">
                In my role as an EVM Smart Contract Auditor, I specialize in identifying vulnerabilities and ensuring
                the integrity of blockchain-based systems. By conducting rigorous code reviews and stress-testing smart
                contracts, I help organizations deploy secure, gas-optimized solutions that withstand sophisticated
                attacks. My audits are grounded in best practices and informed by the latest advancements in blockchain
                security.
              </p>
              <p className="text-amber-700 mb-6">
                As a Penetration Tester and API Security Specialist, I proactively uncover vulnerabilities in systems,
                networks, and APIs before they can be exploited. My approach combines manual testing, automated tools,
                and custom scripts to simulate real-world attacks, delivering actionable insights to fortify defenses. I
                am particularly adept at securing RESTful and GraphQL APIs, ensuring compliance with OWASP standards and
                mitigating risks in mission-critical applications.
              </p>
              <div className="flex gap-4 mt-8">
                <Button variant="outline" className="rounded-full border-amber-600 text-amber-800 hover:bg-amber-100">
                  <Github className="mr-2 h-4 w-4" />
                  <Link href="https://github.com/0xQuilox" target="_blank" rel="noopener noreferrer">
                    GitHub
                  </Link>
                </Button>
                <Button variant="outline" className="rounded-full border-amber-600 text-amber-800 hover:bg-amber-100">
                  <Linkedin className="mr-2 h-4 w-4" />
                  <Link
                    href="https://www.linkedin.com/in/miftahudeen-tajudeen-a18179366"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LinkedIn
                  </Link>
                </Button>
                <Button variant="outline" className="rounded-full border-amber-600 text-amber-800 hover:bg-amber-100">
                  <Twitter className="mr-2 h-4 w-4" />
                  <Link href="https://x.com/TrQuilox87" target="_blank" rel="noopener noreferrer">
                    Twitter
                  </Link>
                </Button>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md border border-amber-200">
                <h4 className="font-semibold text-amber-800 mb-2">Languages</h4>
                <ul className="text-amber-700 space-y-2">
                  <li>Solidity</li>
                  <li>JavaScript/TypeScript</li>
                  <li>Python</li>
                  <li>Rust</li>
                  <li>Go</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md border border-amber-200">
                <h4 className="font-semibold text-amber-800 mb-2">Frameworks</h4>
                <ul className="text-amber-700 space-y-2">
                  <li>Hardhat/Truffle</li>
                  <li>React/Next.js</li>
                  <li>Node.js/Express</li>
                  <li>ethers.js/web3.js</li>
                  <li>Foundry</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md border border-amber-200">
                <h4 className="font-semibold text-amber-800 mb-2">Blockchain</h4>
                <ul className="text-amber-700 space-y-2">
                  <li>Ethereum</li>
                  <li>Polygon</li>
                  <li>Binance Smart Chain</li>
                  <li>Solana</li>
                  <li>Layer 2 Solutions</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md border border-amber-200">
                <h4 className="font-semibold text-amber-800 mb-2">Security</h4>
                <ul className="text-amber-700 space-y-2">
                  <li>Smart Contract Auditing</li>
                  <li>Penetration Testing</li>
                  <li>Vulnerability Assessment</li>
                  <li>Security Research</li>
                  <li>Threat Modeling</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-amber-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-amber-900">My Services</h2>
            <div className="h-1 w-20 bg-amber-600 mx-auto mt-4 mb-8"></div>
            <p className="max-w-3xl mx-auto text-amber-800">
              I offer a range of specialized services in blockchain development and security, helping clients build
              secure and efficient decentralized solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md border border-amber-200 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-amber-700 rounded-lg flex items-center justify-center mb-6">
                <Code className="h-7 w-7 text-amber-50" />
              </div>
              <h3 className="text-xl font-semibold text-amber-800 mb-4">Blockchain Development</h3>
              <p className="text-amber-700">
                End-to-end development of decentralized applications (dApps) with deep expertise in EVM ecosystems,
                Solidity, and modern web3 frameworks, creating seamless user experiences.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md border border-amber-200 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-amber-700 rounded-lg flex items-center justify-center mb-6">
                <FileCode className="h-7 w-7 text-amber-50" />
              </div>
              <h3 className="text-xl font-semibold text-amber-800 mb-4">Smart Contract Development</h3>
              <p className="text-amber-700">
                Creation of secure, gas-optimized smart contracts leveraging Solidity and modern development frameworks,
                with a focus on EVM compatibility and efficiency.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md border border-amber-200 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-amber-700 rounded-lg flex items-center justify-center mb-6">
                <Shield className="h-7 w-7 text-amber-50" />
              </div>
              <h3 className="text-xl font-semibold text-amber-800 mb-4">Smart Contract Auditing</h3>
              <p className="text-amber-700">
                Comprehensive auditing of smart contracts through rigorous code reviews and stress-testing to identify
                vulnerabilities and ensure the integrity of blockchain-based systems.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md border border-amber-200 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-amber-700 rounded-lg flex items-center justify-center mb-6">
                <Search className="h-7 w-7 text-amber-50" />
              </div>
              <h3 className="text-xl font-semibold text-amber-800 mb-4">Penetration Testing</h3>
              <p className="text-amber-700">
                Thorough security assessment of systems, networks, and APIs using manual testing, automated tools, and
                custom scripts, with special focus on RESTful and GraphQL API security and OWASP compliance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-amber-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-amber-900">Featured Projects</h2>
            <div className="h-1 w-20 bg-amber-600 mx-auto mt-4 mb-8"></div>
            <p className="max-w-3xl mx-auto text-amber-800">
              A selection of my recent work in blockchain development and security research.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Nova3 Project */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md border border-amber-200 hover:shadow-lg transition-shadow">
              <div className="h-48 bg-amber-800 flex items-center justify-center">
                <CreditCard className="h-16 w-16 text-amber-100" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-amber-800 mb-2">Nova3</h3>
                <p className="text-amber-700 mb-4">
                  A blockchain platform empowering users to pay for streaming services like Netflix, Prime, X, Spotify,
                  and more, plus e-commerce purchases on Amazon, Walmart, and AliExpress, using USDC stablecoin. Fast,
                  secure, and seamless transactions, all in one place.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="text-xs bg-amber-100 text-amber-800 px-2 py-1 rounded-full">Blockchain</span>
                  <span className="text-xs bg-amber-100 text-amber-800 px-2 py-1 rounded-full">USDC</span>
                  <span className="text-xs bg-amber-100 text-amber-800 px-2 py-1 rounded-full">Payments</span>
                </div>
                <Button variant="outline" className="w-full border-amber-600 text-amber-800 hover:bg-amber-100">
                  <Link
                    href="https://v0-quillox-portfolio.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex justify-center"
                  >
                    View Project
                  </Link>
                </Button>
              </div>
            </div>

            {/* Playsion Project */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md border border-amber-200 hover:shadow-lg transition-shadow">
              <div className="h-48 bg-amber-800 flex items-center justify-center">
                <Music className="h-16 w-16 text-amber-100" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-amber-800 mb-2">Playsion</h3>
                <p className="text-amber-700 mb-4">
                  Seamlessly combine your favorite playlists from Spotify, Apple Music, and YouTube Music into one
                  unified listening experience. Merge tracks effortlessly, discover new vibes, and enjoy your music
                  across platforms without the hassle.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="text-xs bg-amber-100 text-amber-800 px-2 py-1 rounded-full">Next.js</span>
                  <span className="text-xs bg-amber-100 text-amber-800 px-2 py-1 rounded-full">React</span>
                  <span className="text-xs bg-amber-100 text-amber-800 px-2 py-1 rounded-full">API Integration</span>
                </div>
                <Button variant="outline" className="w-full border-amber-600 text-amber-800 hover:bg-amber-100">
                  <Link
                    href="https://v0-playsion.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex justify-center"
                  >
                    View Project
                  </Link>
                </Button>
              </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-md border border-amber-200 hover:shadow-lg transition-shadow">
              <div className="h-48 bg-amber-800 flex items-center justify-center">
                <FileCode className="h-16 w-16 text-amber-100" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-amber-800 mb-2">DeFi Lending Protocol</h3>
                <p className="text-amber-700 mb-4">
                  A secure and efficient decentralized lending platform with automated interest rate adjustments and
                  collateral management.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="text-xs bg-amber-100 text-amber-800 px-2 py-1 rounded-full">Solidity</span>
                  <span className="text-xs bg-amber-100 text-amber-800 px-2 py-1 rounded-full">React</span>
                  <span className="text-xs bg-amber-100 text-amber-800 px-2 py-1 rounded-full">Hardhat</span>
                </div>
                <Button variant="outline" className="w-full border-amber-600 text-amber-800 hover:bg-amber-100">
                  View Project
                </Button>
              </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-md border border-amber-200 hover:shadow-lg transition-shadow">
              <div className="h-48 bg-amber-800 flex items-center justify-center">
                <Shield className="h-16 w-16 text-amber-100" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-amber-800 mb-2">NFT Marketplace Security Audit</h3>
                <p className="text-amber-700 mb-4">
                  Comprehensive security audit of a high-profile NFT marketplace, identifying and addressing critical
                  vulnerabilities.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="text-xs bg-amber-100 text-amber-800 px-2 py-1 rounded-full">Security</span>
                  <span className="text-xs bg-amber-100 text-amber-800 px-2 py-1 rounded-full">Audit</span>
                  <span className="text-xs bg-amber-100 text-amber-800 px-2 py-1 rounded-full">NFT</span>
                </div>
                <Button variant="outline" className="w-full border-amber-600 text-amber-800 hover:bg-amber-100">
                  View Case Study
                </Button>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button className="bg-amber-700 hover:bg-amber-800 text-white">
              View All Projects <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-amber-800 text-amber-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold">Get In Touch</h2>
            <div className="h-1 w-20 bg-amber-400 mx-auto mt-4 mb-8"></div>
            <p className="max-w-3xl mx-auto text-amber-200">
              Interested in working together? Feel free to reach out for collaborations, consultations, or just to say
              hello!
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-amber-200 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 bg-amber-700 border border-amber-600 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-400 text-amber-50"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-amber-200 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 bg-amber-700 border border-amber-600 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-400 text-amber-50"
                    placeholder="Your Email"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-amber-200 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-3 bg-amber-700 border border-amber-600 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-400 text-amber-50"
                  placeholder="Subject"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-amber-200 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={6}
                  className="w-full px-4 py-3 bg-amber-700 border border-amber-600 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-400 text-amber-50"
                  placeholder="Your Message"
                ></textarea>
              </div>
              <div className="text-center">
                <Button className="bg-amber-600 hover:bg-amber-500 text-white px-8 py-3">
                  <Send className="mr-2 h-4 w-4" /> Send Message
                </Button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-amber-900 text-amber-200 py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h2 className="text-2xl font-bold text-amber-100">Miftahudeen Tajudeen</h2>
              <p className="mt-2">Blockchain Developer & Security Researcher</p>
            </div>
            <div className="flex space-x-6">
              <Link
                href="https://github.com/0xQuilox"
                className="hover:text-amber-400 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-6 w-6" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link
                href="https://www.linkedin.com/in/miftahudeen-tajudeen-a18179366"
                className="hover:text-amber-400 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="h-6 w-6" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link
                href="https://x.com/TrQuilox87"
                className="hover:text-amber-400 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Twitter className="h-6 w-6" />
                <span className="sr-only">Twitter</span>
              </Link>
            </div>
          </div>
          <div className="border-t border-amber-800 mt-8 pt-8 text-center">
            <p>&copy; {new Date().getFullYear()} Miftahudeen Tajudeen. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
