import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  ChevronRight,
  Code,
  Shield,
  FileCode,
  Search,
  Github,
  Linkedin,
  Twitter,
  Music,
  CreditCard,
  Heart,
  Smartphone,
  BarChart,
  Mail,
  DollarSign,
  CheckCircle,
  Clock,
  Bug,
  Globe,
  Award,
  ExternalLink,
  FileText,
  ShoppingBag,
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
                Fullstack web application, blockchain developer and security researcher
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
                <Button variant="outline" className="border-amber-400 text-amber-100 hover:bg-amber-800" asChild>
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
              <Button variant="solid" className="mt-6 bg-amber-700 hover:bg-amber-800 text-white" asChild>
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
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md border border-amber-200">
                <h4 className="font-semibold text-amber-800 mb-2">Languages</h4>
                <ul className="text-amber-700 space-y-2">
                  <li>Solidity</li>
                  <li>JavaScript/TypeScript</li>
                  <li>Python</li>
                  <li>Vyper</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md border border-amber-200">
                <h4 className="font-semibold text-amber-800 mb-2">Frameworks/Stacks</h4>
                <ul className="text-amber-700 space-y-2">
                  <li>MongoDB</li>
                  <li>SQL</li>
                  <li>React/Next.js</li>
                  <li>Next.js Tailwind CSS</li>
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
            {/* Stockfort Project */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md border border-amber-200 hover:shadow-lg transition-shadow relative">
              {/* Status Indicator */}
              <div className="absolute top-3 right-3 bg-green-500 text-white text-xs font-medium px-2.5 py-1 rounded-full flex items-center">
                <CheckCircle className="h-3.5 w-3.5 mr-1" />
                Completed
              </div>
              <div className="h-48 bg-amber-800 flex items-center justify-center">
                <ShoppingBag className="h-16 w-16 text-amber-100" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-amber-800 mb-2">Stockfort</h3>
                <p className="text-amber-700 mb-4">
                  A farm-to-door delivery app connecting you directly to fresh livestock and premium processed dairy
                  products. Sourced from trusted local farms, our app ensures quality, convenience, and doorstep
                  delivery, bringing the freshest meats and dairy straight to you.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="text-xs bg-amber-100 text-amber-800 px-2 py-1 rounded-full">Next.js</span>
                  <span className="text-xs bg-amber-100 text-amber-800 px-2 py-1 rounded-full">E-commerce</span>
                  <span className="text-xs bg-amber-100 text-amber-800 px-2 py-1 rounded-full">Food Delivery</span>
                </div>
                <Button variant="outline" className="w-full border-amber-600 text-amber-800 hover:bg-amber-100">
                  <Link
                    href="https://v0-webpage-clone-seven.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex justify-center"
                  >
                    View Project
                  </Link>
                </Button>
              </div>
            </div>

            {/* Aizen Project */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md border border-amber-200 hover:shadow-lg transition-shadow relative">
              {/* Status Indicator */}
              <div className="absolute top-3 right-3 bg-green-500 text-white text-xs font-medium px-2.5 py-1 rounded-full flex items-center">
                <CheckCircle className="h-3.5 w-3.5 mr-1" />
                Completed
              </div>
              <div className="h-48 bg-amber-800 flex items-center justify-center">
                <BarChart className="h-16 w-16 text-amber-100" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-amber-800 mb-2">Aizen</h3>
                <p className="text-amber-700 mb-4">
                  Python script designed to scrape memecoin data from Dexscreener and Solscan, providing real-time
                  details such as price and Fully Diluted Valuation (FDV). Streamline your crypto research with fast,
                  automated insights into trending tokens.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="text-xs bg-amber-100 text-amber-800 px-2 py-1 rounded-full">Python</span>
                  <span className="text-xs bg-amber-100 text-amber-800 px-2 py-1 rounded-full">Web Scraping</span>
                  <span className="text-xs bg-amber-100 text-amber-800 px-2 py-1 rounded-full">Crypto</span>
                </div>
                <Button variant="outline" className="w-full border-amber-600 text-amber-800 hover:bg-amber-100">
                  <Link
                    href="https://github.com/0xQuilox/Thirty-dias/blob/main/Aizen.py"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex justify-center"
                  >
                    View on GitHub
                  </Link>
                </Button>
              </div>
            </div>

            {/* Web2 Streaming Payments Project */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md border border-amber-200 hover:shadow-lg transition-shadow relative">
              {/* Status Indicator */}
              <div className="absolute top-3 right-3 bg-green-500 text-white text-xs font-medium px-2.5 py-1 rounded-full flex items-center">
                <CheckCircle className="h-3.5 w-3.5 mr-1" />
                Completed
              </div>
              <div className="h-48 bg-amber-800 flex items-center justify-center">
                <DollarSign className="h-16 w-16 text-amber-100" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-amber-800 mb-2">Web2 Streaming Payments</h3>
                <p className="text-amber-700 mb-4">
                  Smart contract for Web2 streaming payments using USDC enables secure, automated transactions. It
                  processes USDC payments, verifies transactions, and grants content access. Features include
                  subscription renewals, refunds and Web2 integration via oracles/APIs for a seamless user experience.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="text-xs bg-amber-100 text-amber-800 px-2 py-1 rounded-full">Solidity</span>
                  <span className="text-xs bg-amber-100 text-amber-800 px-2 py-1 rounded-full">USDC</span>
                  <span className="text-xs bg-amber-100 text-amber-800 px-2 py-1 rounded-full">Smart Contracts</span>
                </div>
                <Button variant="outline" className="w-full border-amber-600 text-amber-800 hover:bg-amber-100">
                  <Link
                    href="https://github.com/0xQuilox/n3-submanager"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex justify-center"
                  >
                    View on GitHub
                  </Link>
                </Button>
              </div>
            </div>

            {/* Nova3 Project */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md border border-amber-200 hover:shadow-lg transition-shadow relative">
              {/* Status Indicator */}
              <div className="absolute top-3 right-3 bg-amber-500 text-white text-xs font-medium px-2.5 py-1 rounded-full flex items-center">
                <Clock className="h-3.5 w-3.5 mr-1" />
                In development
              </div>
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

            {/* Medira Project */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md border border-amber-200 hover:shadow-lg transition-shadow relative">
              {/* Status Indicator */}
              <div className="absolute top-3 right-3 bg-amber-500 text-white text-xs font-medium px-2.5 py-1 rounded-full flex items-center">
                <Clock className="h-3.5 w-3.5 mr-1" />
                In development
              </div>
              <div className="h-48 bg-amber-800 flex items-center justify-center">
                <Smartphone className="h-16 w-16 text-amber-100" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-amber-800 mb-2">Medira</h3>
                <p className="text-amber-700 mb-4">
                  Easily repair your electronic devices with cost-effective, efficient solutions. Our website offers
                  real-time tracking of your repair progress and seamless logistic services, ensuring quick, reliable
                  fixes for your gadgets with maximum convenience.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="text-xs bg-amber-100 text-amber-800 px-2 py-1 rounded-full">Next.js</span>
                  <span className="text-xs bg-amber-100 text-amber-800 px-2 py-1 rounded-full">React</span>
                  <span className="text-xs bg-amber-100 text-amber-800 px-2 py-1 rounded-full">Tracking System</span>
                </div>
                <Button variant="outline" className="w-full border-amber-600 text-amber-800 hover:bg-amber-100">
                  <Link
                    href="https://v0-medira-alpha.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex justify-center"
                  >
                    View Project
                  </Link>
                </Button>
              </div>
            </div>

            {/* FLAMES Project */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md border border-amber-200 hover:shadow-lg transition-shadow relative">
              {/* Status Indicator */}
              <div className="absolute top-3 right-3 bg-green-500 text-white text-xs font-medium px-2.5 py-1 rounded-full flex items-center">
                <CheckCircle className="h-3.5 w-3.5 mr-1" />
                Completed
              </div>
              <div className="h-48 bg-amber-800 flex items-center justify-center">
                <Heart className="h-16 w-16 text-amber-100" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-amber-800 mb-2">FLAMES</h3>
                <p className="text-amber-700 mb-4">
                  Discover the relationship type between you and your crush with our fun, algorithm-based website! Based
                  on the classic FLAMES game, input your names to reveal if you're destined for Friendship, Love,
                  Affection, Marriage, Enmity, or Siblings. Quick, playful, and shareable!
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="text-xs bg-amber-100 text-amber-800 px-2 py-1 rounded-full">JavaScript</span>
                  <span className="text-xs bg-amber-100 text-amber-800 px-2 py-1 rounded-full">Next.js</span>
                  <span className="text-xs bg-amber-100 text-amber-800 px-2 py-1 rounded-full">Algorithm</span>
                </div>
                <Button variant="outline" className="w-full border-amber-600 text-amber-800 hover:bg-amber-100">
                  <Link
                    href="https://v0-flames-d.vercel.app/"
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
            <div className="bg-white rounded-lg overflow-hidden shadow-md border border-amber-200 hover:shadow-lg transition-shadow relative">
              {/* Status Indicator */}
              <div className="absolute top-3 right-3 bg-green-500 text-white text-xs font-medium px-2.5 py-1 rounded-full flex items-center">
                <CheckCircle className="h-3.5 w-3.5 mr-1" />
                Completed
              </div>
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
          </div>

          <div className="text-center mt-12">
            <Button className="bg-amber-700 hover:bg-amber-800 text-white">
              View All Projects <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Open Source Contributions Section */}
      <section id="contributions" className="py-20 bg-amber-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-amber-900">Open Source Contributions</h2>
            <div className="h-1 w-20 bg-amber-600 mx-auto mt-4 mb-8"></div>
            <p className="max-w-3xl mx-auto text-amber-800">
              My contributions to security research, vulnerability disclosure programs, and smart contract audits.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Chromium VDP */}
            <div className="bg-white p-6 rounded-lg shadow-md border border-amber-200 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-amber-700 rounded-lg flex items-center justify-center mr-4">
                  <Globe className="h-6 w-6 text-amber-50" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-amber-800">Chromium VDP</h3>
                  <p className="text-amber-600 text-sm">Vulnerability Disclosure Program</p>
                </div>
              </div>
              <p className="text-amber-700 mb-4">
                Contributed to the Chromium Vulnerability Disclosure Program by identifying and reporting security
                vulnerabilities in the Chrome browser, helping to improve the security of millions of users worldwide.
              </p>
              <div className="flex justify-between items-center">
                <span className="text-xs bg-amber-100 text-amber-800 px-2 py-1 rounded-full">Web Security</span>
                <Link
                  href="https://issues.chromium.org/issues/40885369#comment17"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-amber-700 hover:text-amber-900 flex items-center text-sm font-medium"
                >
                  View Contribution <ExternalLink className="ml-1 h-3.5 w-3.5" />
                </Link>
              </div>
            </div>

            {/* The Standard Contest */}
            <div className="bg-white p-6 rounded-lg shadow-md border border-amber-200 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-amber-700 rounded-lg flex items-center justify-center mr-4">
                  <Award className="h-6 w-6 text-amber-50" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-amber-800">The Standard Contest</h3>
                  <p className="text-amber-600 text-sm">CodeHawks Smart Contract Audit</p>
                </div>
              </div>
              <p className="text-amber-700 mb-4">
                Participated in the CodeHawks audit contest for The Standard protocol, identifying vulnerabilities and
                suggesting improvements to enhance the security and efficiency of the smart contracts.
              </p>
              <div className="flex justify-between items-center">
                <span className="text-xs bg-amber-100 text-amber-800 px-2 py-1 rounded-full">
                  Smart Contract Auditing
                </span>
                <Link
                  href="https://codehawks.cyfrin.io/c/2023-12-the-standard/s/113"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-amber-700 hover:text-amber-900 flex items-center text-sm font-medium"
                >
                  View Submission <ExternalLink className="ml-1 h-3.5 w-3.5" />
                </Link>
              </div>
            </div>

            {/* QuantAMM Contest */}
            <div className="bg-white p-6 rounded-lg shadow-md border border-amber-200 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-amber-700 rounded-lg flex items-center justify-center mr-4">
                  <Award className="h-6 w-6 text-amber-50" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-amber-800">QuantAMM Contest</h3>
                  <p className="text-amber-600 text-sm">CodeHawks Smart Contract Audit</p>
                </div>
              </div>
              <p className="text-amber-700 mb-4">
                Contributed to the security audit of the QuantAMM protocol through the CodeHawks platform, helping to
                secure this automated market maker by identifying potential vulnerabilities and optimization
                opportunities.
              </p>
              <div className="flex justify-between items-center">
                <span className="text-xs bg-amber-100 text-amber-800 px-2 py-1 rounded-full">DeFi Security</span>
                <Link
                  href="https://codehawks.cyfrin.io/c/2024-12-quantamm/s/159"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-amber-700 hover:text-amber-900 flex items-center text-sm font-medium"
                >
                  View Submission <ExternalLink className="ml-1 h-3.5 w-3.5" />
                </Link>
              </div>
            </div>

            {/* Bugcrowd BBP 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md border border-amber-200 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-amber-700 rounded-lg flex items-center justify-center mr-4">
                  <Bug className="h-6 w-6 text-amber-50" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-amber-800">Bugcrowd BBP</h3>
                  <p className="text-amber-600 text-sm">Bug Bounty Program Submission</p>
                </div>
              </div>
              <p className="text-amber-700 mb-4">
                Successfully identified and reported security vulnerabilities through the Bugcrowd Bug Bounty Program,
                helping organizations strengthen their security posture and protect user data.
              </p>
              <div className="flex justify-between items-center">
                <span className="text-xs bg-amber-100 text-amber-800 px-2 py-1 rounded-full">
                  Web Application Security
                </span>
                <Link
                  href="https://bugcrowd.com/submissions/f394bed8-bcfe-44f7-84ee-48d0087fed5c"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-amber-700 hover:text-amber-900 flex items-center text-sm font-medium"
                >
                  View Submission <ExternalLink className="ml-1 h-3.5 w-3.5" />
                </Link>
              </div>
            </div>

            {/* Bugcrowd BBP 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md border border-amber-200 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-amber-700 rounded-lg flex items-center justify-center mr-4">
                  <Bug className="h-6 w-6 text-amber-50" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-amber-800">Bugcrowd BBP</h3>
                  <p className="text-amber-600 text-sm">Bug Bounty Program Submission</p>
                </div>
              </div>
              <p className="text-amber-700 mb-4">
                Discovered and reported critical security vulnerabilities through Bugcrowd's platform, demonstrating
                expertise in penetration testing and security research while helping to secure digital assets.
              </p>
              <div className="flex justify-between items-center">
                <span className="text-xs bg-amber-100 text-amber-800 px-2 py-1 rounded-full">API Security</span>
                <Link
                  href="https://bugcrowd.com/submissions/40e58df0-8ae5-4c50-ae2b-b4ede7aa7b93"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-amber-700 hover:text-amber-900 flex items-center text-sm font-medium"
                >
                  View Submission <ExternalLink className="ml-1 h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section - Updated to show only social links and email */}
      <section id="contact" className="py-20 bg-amber-800 text-amber-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">Get In Touch</h2>
            <div className="h-1 w-20 bg-amber-400 mx-auto mt-4 mb-8"></div>
            <p className="max-w-3xl mx-auto text-amber-200">
              Interested in working together? Feel free to reach out through any of these channels.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <a
                href="https://github.com/0xQuilox"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-amber-700 hover:bg-amber-600 transition-colors p-6 rounded-lg text-center flex flex-col items-center"
              >
                <Github className="h-12 w-12 mb-4" />
                <h3 className="text-xl font-semibold mb-2">GitHub</h3>
                <p className="text-amber-200">0xQuilox</p>
              </a>

              <a
                href="https://www.linkedin.com/in/miftahudeen-tajudeen-a18179366"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-amber-700 hover:bg-amber-600 transition-colors p-6 rounded-lg text-center flex flex-col items-center"
              >
                <Linkedin className="h-12 w-12 mb-4" />
                <h3 className="text-xl font-semibold mb-2">LinkedIn</h3>
                <p className="text-amber-200">Miftahudeen Tajudeen</p>
              </a>

              <a
                href="https://x.com/TrQuilox87"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-amber-700 hover:bg-amber-600 transition-colors p-6 rounded-lg text-center flex flex-col items-center"
              >
                <Twitter className="h-12 w-12 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Twitter</h3>
                <p className="text-amber-200">@TrQuilox87</p>
              </a>

              <a
                href="mailto:miftahudeentajudeen@gmail.com"
                className="bg-amber-700 hover:bg-amber-600 transition-colors p-6 rounded-lg text-center flex flex-col items-center"
              >
                <Mail className="h-12 w-12 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Email</h3>
                <p className="text-amber-200 break-all">miftahudeentajudeen@gmail.com</p>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-amber-900 text-amber-200 py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h2 className="text-2xl font-bold text-amber-100">Miftahudeen Tajudeen</h2>
              <p className="mt-2">Fullstack web application, blockchain developer and security researcher</p>
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
