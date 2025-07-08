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
        <div className="container mx-auto px-3 sm:px-4 py-12 sm:py-16 md:py-20 lg:py-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
                Miftahudeen Tajudeen
              </h1>
              <div className="h-1 w-20 bg-amber-400 mb-6"></div>
              <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 text-amber-200 leading-relaxed">
                Fullstack web application, mobile app, AI/ML developer, blockchain developer and security researcher
              </h2>
              <p className="text-base sm:text-lg mb-8 text-amber-100/90 max-w-lg">
                Full-stack software developer specializing in web applications, mobile apps, and AI/ML models. Expert in
                EVM ecosystems and Solidity development, I design secure dApps while conducting smart contract audits
                and API penetration testing to ensure robust, scalable solutions across all platforms.
              </p>
              <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
                <Button className="bg-amber-600 hover:bg-amber-700 text-white">
                  View Projects <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
                <Button className="bg-amber-600 hover:bg-amber-700 text-white">Contact Me</Button>
                <Button className="bg-amber-600 hover:bg-amber-700 text-white" asChild>
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
              <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-amber-400 shadow-xl mx-auto">
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
      <section id="about" className="py-8 sm:py-12 md:py-16 lg:py-20 bg-amber-50">
        <div className="container mx-auto px-3 sm:px-4">
          <div className="text-center mb-16">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-amber-900">About Me</h2>
            <div className="h-1 w-20 bg-amber-600 mx-auto mt-4 mb-8"></div>
            <p className="max-w-3xl mx-auto text-sm sm:text-base text-amber-800">
              I'm a passionate full-stack software developer and security researcher with expertise in building web
              applications, mobile apps, AI/ML models, and secure decentralized applications while auditing smart
              contracts for vulnerabilities.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold text-amber-800 mb-4">My Journey</h3>
              <p className="text-amber-700 mb-6">
                As a full-stack software developer, I architect and deploy comprehensive solutions spanning web
                applications, cross-platform mobile apps, and intelligent AI/ML systems. My expertise encompasses modern
                web development using React, Next.js, Node.js, and TypeScript, alongside native-quality mobile
                development with React Native and Expo. I specialize in AI/ML model development and integration,
                creating intelligent systems for diagnostics, automation, predictive analytics, and business process
                optimization. Additionally, I maintain deep proficiency in blockchain technologies, Solidity, and EVM
                ecosystems while streamlining operations through workflow automation using Zapier and n8n.
              </p>
              <p className="text-amber-700 mb-6">
                My role as a Software Developer and AI/ML Engineer involves creating end-to-end solutions that bridge
                traditional application development with cutting-edge artificial intelligence. I develop and deploy
                machine learning models for device diagnostics, automated analysis, content generation, sports
                performance analytics, and business intelligence. My software development approach integrates AI
                capabilities seamlessly into web and mobile applications, ensuring scalable, intelligent systems.
                Simultaneously, as an EVM Smart Contract Auditor, I conduct rigorous security assessments, helping
                organizations deploy secure, gas-optimized blockchain solutions that complement their broader software
                ecosystem.
              </p>
              <p className="text-amber-700 mb-6">
                As a Penetration Tester, API Security Specialist, and Business Automation Expert, I proactively secure
                systems while optimizing operational workflows. My approach combines manual testing, automated tools,
                and custom scripts to simulate real-world attacks, delivering actionable insights to fortify defenses. I
                excel at securing RESTful and GraphQL APIs, ensuring OWASP compliance, while simultaneously implementing
                business workflow automation using Zapier and n8n to streamline operations, reduce manual tasks, and
                improve efficiency across organizations.
              </p>
              <div className="flex gap-4 mt-8">
                <Button
                  variant="outline"
                  className="rounded-full border-amber-600 text-amber-800 hover:bg-amber-100 bg-transparent"
                >
                  <Github className="mr-2 h-4 w-4" />
                  <Link href="https://github.com/0xQuilox" target="_blank" rel="noopener noreferrer">
                    GitHub
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  className="rounded-full border-amber-600 text-amber-800 hover:bg-amber-100 bg-transparent"
                >
                  <Linkedin className="mr-2 h-4 w-4" />
                  <Link
                    href="https://www.linkedin.com/in/miftahudeen-tajudeen-a18179366"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LinkedIn
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  className="rounded-full border-amber-600 text-amber-800 hover:bg-amber-100 bg-transparent"
                >
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
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 lg:gap-6">
              <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md border border-amber-200">
                <h4 className="font-semibold text-amber-800 mb-2 text-sm sm:text-base">Languages</h4>
                <ul className="text-amber-700 space-y-1 sm:space-y-2 text-xs sm:text-sm">
                  <li>JavaScript/TypeScript</li>
                  <li>Python</li>
                  <li>Solidity</li>
                  <li>Vyper</li>
                  <li>SQL</li>
                </ul>
              </div>
              <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md border border-amber-200">
                <h4 className="font-semibold text-amber-800 mb-2 text-sm sm:text-base">Frameworks & Tools</h4>
                <ul className="text-amber-700 space-y-1 sm:space-y-2 text-xs sm:text-sm">
                  <li>React/Next.js</li>
                  <li>React Native/Expo</li>
                  <li>Node.js/Express</li>
                  <li>TensorFlow/PyTorch</li>
                  <li>MongoDB/PostgreSQL</li>
                  <li>ethers.js/web3.js</li>
                  <li>Foundry/Hardhat</li>
                </ul>
              </div>
              <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md border border-amber-200">
                <h4 className="font-semibold text-amber-800 mb-2 text-sm sm:text-base">Blockchain</h4>
                <ul className="text-amber-700 space-y-1 sm:space-y-2 text-xs sm:text-sm">
                  <li>Ethereum</li>
                  <li>Polygon</li>
                  <li>Binance Smart Chain</li>
                  <li>Solana</li>
                  <li>Layer 2 Solutions</li>
                </ul>
              </div>
              <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md border border-amber-200">
                <h4 className="font-semibold text-amber-800 mb-2 text-sm sm:text-base">Security</h4>
                <ul className="text-amber-700 space-y-1 sm:space-y-2 text-xs sm:text-sm">
                  <li>Smart Contract Auditing</li>
                  <li>Penetration Testing</li>
                  <li>Vulnerability Assessment</li>
                  <li>Security Research</li>
                  <li>Threat Modeling</li>
                </ul>
              </div>
              <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md border border-amber-200">
                <h4 className="font-semibold text-amber-800 mb-2 text-sm sm:text-base">AI/ML & Mobile</h4>
                <ul className="text-amber-700 space-y-1 sm:space-y-2 text-xs sm:text-sm">
                  <li>Machine Learning</li>
                  <li>Gemini AI Integration</li>
                  <li>Content Generation</li>
                  <li>Sports Analytics</li>
                  <li>Mobile App Development</li>
                  <li>Cross-platform Solutions</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-8 sm:py-12 md:py-16 lg:py-20 bg-amber-100">
        <div className="container mx-auto px-3 sm:px-4">
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-amber-900">My Services</h2>
            <div className="h-1 w-20 bg-amber-600 mx-auto mt-4 mb-8"></div>
            <p className="max-w-3xl mx-auto text-sm sm:text-base text-amber-800">
              I offer a range of specialized services in blockchain development and security, helping clients build
              secure and efficient decentralized solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
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

            {/* New Service Cards */}
            <div className="bg-white p-8 rounded-lg shadow-md border border-amber-200 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-amber-700 rounded-lg flex items-center justify-center mb-6">
                <Globe className="h-7 w-7 text-amber-50" />
              </div>
              <h3 className="text-xl font-semibold text-amber-800 mb-4">Web Application Development</h3>
              <p className="text-amber-700">
                Full-stack web application development using modern frameworks like React, Next.js, Node.js, and
                Express. Creating responsive, scalable, and user-friendly applications with robust backend systems and
                seamless user experiences.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md border border-amber-200 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-amber-700 rounded-lg flex items-center justify-center mb-6">
                <BarChart className="h-7 w-7 text-amber-50" />
              </div>
              <h3 className="text-xl font-semibold text-amber-800 mb-4">AI/ML Development & Integration</h3>
              <p className="text-amber-700">
                Development and integration of AI/ML models for various applications including intelligent diagnostics,
                automated analysis, and predictive systems. Expertise in Python, machine learning frameworks, and
                AI-powered solutions.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md border border-amber-200 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-amber-700 rounded-lg flex items-center justify-center mb-6">
                <Code className="h-7 w-7 text-amber-50" />
              </div>
              <h3 className="text-xl font-semibold text-amber-800 mb-4">Business Workflow Automation</h3>
              <p className="text-amber-700">
                Streamlining business processes through automation using Zapier and n8n. Creating efficient workflows
                that connect different applications, automate repetitive tasks, and improve operational efficiency for
                businesses.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md border border-amber-200 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-amber-700 rounded-lg flex items-center justify-center mb-6">
                <Smartphone className="h-7 w-7 text-amber-50" />
              </div>
              <h3 className="text-xl font-semibold text-amber-800 mb-4">Mobile App Development</h3>
              <p className="text-amber-700">
                Cross-platform mobile application development using React Native and Expo. Building native-quality
                mobile apps for iOS and Android with shared codebases, ensuring consistent user experiences across
                platforms.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-8 sm:py-12 md:py-16 lg:py-20 bg-amber-50">
        <div className="container mx-auto px-3 sm:px-4">
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-amber-900">Featured Projects</h2>
            <div className="h-1 w-20 bg-amber-600 mx-auto mt-4 mb-8"></div>
            <p className="max-w-3xl mx-auto text-sm sm:text-base text-amber-800">
              A selection of my recent work in blockchain development and security research.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {/* Minaret Project */}
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
                <h3 className="text-xl font-semibold text-amber-800 mb-2">Minaret</h3>
                <p className="text-sm sm:text-base text-amber-700 mb-4">
                  A prototype of an Electronic Health Record System for a hospital. Streamlines patient data management,
                  medical history tracking, appointment scheduling, and healthcare workflow optimization. Designed to
                  enhance healthcare delivery through digital transformation and secure patient information management.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="text-xs bg-amber-100 text-amber-800 px-2 py-1 rounded-full">Next.js</span>
                  <span className="text-xs bg-amber-100 text-amber-800 px-2 py-1 rounded-full">Healthcare</span>
                  <span className="text-xs bg-amber-100 text-amber-800 px-2 py-1 rounded-full">EHR</span>
                  <span className="text-xs bg-amber-100 text-amber-800 px-2 py-1 rounded-full">
                    Hospital Management
                  </span>
                </div>
                <Button
                  variant="outline"
                  className="w-full border-amber-600 text-amber-800 hover:bg-amber-100 bg-transparent"
                >
                  <Link
                    href="https://mnrtehr.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex justify-center"
                  >
                    View Project
                  </Link>
                </Button>
              </div>
            </div>

            {/* Trivela Ace Project */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md border border-amber-200 hover:shadow-lg transition-shadow relative">
              {/* Status Indicator */}
              <div className="absolute top-3 right-3 bg-green-500 text-white text-xs font-medium px-2.5 py-1 rounded-full flex items-center">
                <CheckCircle className="h-3.5 w-3.5 mr-1" />
                Completed
              </div>
              <div className="h-48 bg-amber-800 flex items-center justify-center">
                <Award className="h-16 w-16 text-amber-100" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-amber-800 mb-2">Trivela Ace</h3>
                <p className="text-sm sm:text-base text-amber-700 mb-4">
                  Create Your Solo Trivia Quiz. Enter a topic, select difficulty, and test your knowledge! An
                  interactive quiz platform that generates personalized trivia questions based on user preferences,
                  offering an engaging way to learn and challenge yourself across various subjects and difficulty
                  levels.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="text-xs bg-amber-100 text-amber-800 px-2 py-1 rounded-full">Next.js</span>
                  <span className="text-xs bg-amber-100 text-amber-800 px-2 py-1 rounded-full">Quiz</span>
                  <span className="text-xs bg-amber-100 text-amber-800 px-2 py-1 rounded-full">Trivia</span>
                  <span className="text-xs bg-amber-100 text-amber-800 px-2 py-1 rounded-full">Education</span>
                </div>
                <Button
                  variant="outline"
                  className="w-full border-amber-600 text-amber-800 hover:bg-amber-100 bg-transparent"
                >
                  <Link
                    href="https://trivela-five.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex justify-center"
                  >
                    View Project
                  </Link>
                </Button>
              </div>
            </div>

            {/* Sports Analysis Pro Project */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md border border-amber-200 hover:shadow-lg transition-shadow relative">
              {/* Status Indicator */}
              <div className="absolute top-3 right-3 bg-amber-500 text-white text-xs font-medium px-2.5 py-1 rounded-full flex items-center">
                <Clock className="h-3.5 w-3.5 mr-1" />
                In development
              </div>
              <div className="h-48 bg-amber-800 flex items-center justify-center">
                <BarChart className="h-16 w-16 text-amber-100" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-amber-800 mb-2">Sports Analysis Pro</h3>
                <p className="text-sm sm:text-base text-amber-700 mb-4">
                  An advanced AI-powered sports performance analysis platform with Gemini integration. Supports
                  comprehensive analysis for soccer, American football, basketball, baseball, gym and fitness workouts.
                  Provides detailed performance insights, training recommendations, and progress tracking for athletes
                  and coaches.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="text-xs bg-amber-100 text-amber-800 px-2 py-1 rounded-full">AI</span>
                  <span className="text-xs bg-amber-100 text-amber-800 px-2 py-1 rounded-full">Gemini</span>
                  <span className="text-xs bg-amber-100 text-amber-800 px-2 py-1 rounded-full">Sports Analytics</span>
                  <span className="text-xs bg-amber-100 text-amber-800 px-2 py-1 rounded-full">
                    Performance Analysis
                  </span>
                </div>
                <Button
                  variant="outline"
                  className="w-full border-amber-600 text-amber-800 hover:bg-amber-100 bg-transparent"
                >
                  <Link
                    href="https://github.com/0xQuilox/coachmini"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex justify-center"
                  >
                    View on GitHub
                  </Link>
                </Button>
              </div>
            </div>

            {/* Vi-craft Project */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md border border-amber-200 hover:shadow-lg transition-shadow relative">
              {/* Status Indicator */}
              <div className="absolute top-3 right-3 bg-amber-500 text-white text-xs font-medium px-2.5 py-1 rounded-full flex items-center">
                <Clock className="h-3.5 w-3.5 mr-1" />
                In development
              </div>
              <div className="h-48 bg-amber-800 flex items-center justify-center">
                <FileText className="h-16 w-16 text-amber-100" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-amber-800 mb-2">Vi-craft</h3>
                <p className="text-sm sm:text-base text-amber-700 mb-4">
                  An AI-powered content generation platform designed for businesses, firms, and content creators.
                  Streamlines the creation of blogs, newsletters, content scripts, and post captions using advanced AI
                  algorithms. Empowers users to generate high-quality, engaging content efficiently and consistently.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="text-xs bg-amber-100 text-amber-800 px-2 py-1 rounded-full">AI</span>
                  <span className="text-xs bg-amber-100 text-amber-800 px-2 py-1 rounded-full">Content Generation</span>
                  <span className="text-xs bg-amber-100 text-amber-800 px-2 py-1 rounded-full">Business Tools</span>
                  <span className="text-xs bg-amber-100 text-amber-800 px-2 py-1 rounded-full">Content Creation</span>
                </div>
                <Button
                  variant="outline"
                  className="w-full border-amber-600 text-amber-800 hover:bg-amber-100 bg-transparent"
                >
                  <Link
                    href="https://github.com/0xQuilox/vi-craft"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex justify-center"
                  >
                    View on GitHub
                  </Link>
                </Button>
              </div>
            </div>
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
                <p className="text-sm sm:text-base text-amber-700 mb-4">
                  A farm-to-door delivery app connecting you directly to fresh livestock and premium processed dairy
                  products. Sourced from trusted local farms, our app ensures quality, convenience, and doorstep
                  delivery, bringing the freshest meats and dairy straight to you.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="text-xs bg-amber-100 text-amber-800 px-2 py-1 rounded-full">Next.js</span>
                  <span className="text-xs bg-amber-100 text-amber-800 px-2 py-1 rounded-full">E-commerce</span>
                  <span className="text-xs bg-amber-100 text-amber-800 px-2 py-1 rounded-full">Food Delivery</span>
                </div>
                <Button
                  variant="outline"
                  className="w-full border-amber-600 text-amber-800 hover:bg-amber-100 bg-transparent"
                >
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

            {/* Omicron Project */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md border border-amber-200 hover:shadow-lg transition-shadow relative">
              {/* Status Indicator */}
              <div className="absolute top-3 right-3 bg-green-500 text-white text-xs font-medium px-2.5 py-1 rounded-full flex items-center">
                <CheckCircle className="h-3.5 w-3.5 mr-1" />
                Completed
              </div>
              <div className="h-48 bg-amber-800 flex items-center justify-center">
                <Smartphone className="h-16 w-16 text-amber-100" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-amber-800 mb-2">Omicron</h3>
                <p className="text-sm sm:text-base text-amber-700 mb-4">
                  A user-friendly app designed for tech enthusiasts and shoppers, enabling seamless discovery of
                  detailed phone specifications. Users can search for comprehensive phone details, compare up to three
                  devices side-by-side, and filter phones based on similar hardware and software features, ensuring
                  informed decisions tailored to their needs.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="text-xs bg-amber-100 text-amber-800 px-2 py-1 rounded-full">Next.js</span>
                  <span className="text-xs bg-amber-100 text-amber-800 px-2 py-1 rounded-full">React</span>
                  <span className="text-xs bg-amber-100 text-amber-800 px-2 py-1 rounded-full">Tech Specs</span>
                  <span className="text-xs bg-amber-100 text-amber-800 px-2 py-1 rounded-full">Comparison Tool</span>
                </div>
                <Button
                  variant="outline"
                  className="w-full border-amber-600 text-amber-800 hover:bg-amber-100 bg-transparent"
                >
                  <Link
                    href="https://omicron-three.vercel.app/"
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
                <p className="text-sm sm:text-base text-amber-700 mb-4">
                  Python script designed to scrape memecoin data from Dexscreener and Solscan, providing real-time
                  details such as price and Fully Diluted Valuation (FDV). Streamline your crypto research with fast,
                  automated insights into trending tokens.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="text-xs bg-amber-100 text-amber-800 px-2 py-1 rounded-full">Python</span>
                  <span className="text-xs bg-amber-100 text-amber-800 px-2 py-1 rounded-full">Web Scraping</span>
                  <span className="text-xs bg-amber-100 text-amber-800 px-2 py-1 rounded-full">Crypto</span>
                </div>
                <Button
                  variant="outline"
                  className="w-full border-amber-600 text-amber-800 hover:bg-amber-100 bg-transparent"
                >
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
                <p className="text-sm sm:text-base text-amber-700 mb-4">
                  Smart contract for Web2 streaming payments using USDC enables secure, automated transactions. It
                  processes USDC payments, verifies transactions, and grants content access. Features include
                  subscription renewals, refunds and Web2 integration via oracles/APIs for a seamless user experience.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="text-xs bg-amber-100 text-amber-800 px-2 py-1 rounded-full">Solidity</span>
                  <span className="text-xs bg-amber-100 text-amber-800 px-2 py-1 rounded-full">USDC</span>
                  <span className="text-xs bg-amber-100 text-amber-800 px-2 py-1 rounded-full">Smart Contracts</span>
                </div>
                <Button
                  variant="outline"
                  className="w-full border-amber-600 text-amber-800 hover:bg-amber-100 bg-transparent"
                >
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
                <p className="text-sm sm:text-base text-amber-700 mb-4">
                  A blockchain platform empowering users to pay for streaming services like Netflix, Prime, X, Spotify,
                  and more, plus e-commerce purchases on Amazon, Walmart, and AliExpress, using USDC stablecoin. Fast,
                  secure, and seamless transactions, all in one place.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="text-xs bg-amber-100 text-amber-800 px-2 py-1 rounded-full">Blockchain</span>
                  <span className="text-xs bg-amber-100 text-amber-800 px-2 py-1 rounded-full">USDC</span>
                  <span className="text-xs bg-amber-100 text-amber-800 px-2 py-1 rounded-full">Payments</span>
                </div>
                <Button
                  variant="outline"
                  className="w-full border-amber-600 text-amber-800 hover:bg-amber-100 bg-transparent"
                >
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
                <p className="text-sm sm:text-base text-amber-700 mb-4">
                  Easily repair your electronic devices with cost-effective, efficient solutions. Our website offers
                  real-time tracking of your repair progress and seamless logistic services, ensuring quick, reliable
                  fixes for your gadgets with maximum convenience.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="text-xs bg-amber-100 text-amber-800 px-2 py-1 rounded-full">Next.js</span>
                  <span className="text-xs bg-amber-100 text-amber-800 px-2 py-1 rounded-full">React</span>
                  <span className="text-xs bg-amber-100 text-amber-800 px-2 py-1 rounded-full">Tracking System</span>
                </div>
                <Button
                  variant="outline"
                  className="w-full border-amber-600 text-amber-800 hover:bg-amber-100 bg-transparent"
                >
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
                <p className="text-sm sm:text-base text-amber-700 mb-4">
                  Discover the relationship type between you and your crush with our fun, algorithm-based website! Based
                  on the classic FLAMES game, input your names to reveal if you're destined for Friendship, Love,
                  Affection, Marriage, Enmity, or Siblings. Quick, playful, and shareable!
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="text-xs bg-amber-100 text-amber-800 px-2 py-1 rounded-full">JavaScript</span>
                  <span className="text-xs bg-amber-100 text-amber-800 px-2 py-1 rounded-full">Next.js</span>
                  <span className="text-xs bg-amber-100 text-amber-800 px-2 py-1 rounded-full">Algorithm</span>
                </div>
                <Button
                  variant="outline"
                  className="w-full border-amber-600 text-amber-800 hover:bg-amber-100 bg-transparent"
                >
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
                <p className="text-sm sm:text-base text-amber-700 mb-4">
                  Seamlessly combine your favorite playlists from Spotify, Apple Music, and YouTube Music into one
                  unified listening experience. Merge tracks effortlessly, discover new vibes, and enjoy your music
                  across platforms without the hassle.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="text-xs bg-amber-100 text-amber-800 px-2 py-1 rounded-full">Next.js</span>
                  <span className="text-xs bg-amber-100 text-amber-800 px-2 py-1 rounded-full">React</span>
                  <span className="text-xs bg-amber-100 text-amber-800 px-2 py-1 rounded-full">API Integration</span>
                </div>
                <Button
                  variant="outline"
                  className="w-full border-amber-600 text-amber-800 hover:bg-amber-100 bg-transparent"
                >
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

            {/* Ruggard Project */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md border border-amber-200 hover:shadow-lg transition-shadow relative">
              {/* Status Indicator */}
              <div className="absolute top-3 right-3 bg-green-500 text-white text-xs font-medium px-2.5 py-1 rounded-full flex items-center">
                <CheckCircle className="h-3.5 w-3.5 mr-1" />
                Completed
              </div>
              <div className="h-48 bg-amber-800 flex items-center justify-center">
                <Shield className="h-16 w-16 text-amber-100" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-amber-800 mb-2">Ruggard</h3>
                <p className="text-sm sm:text-base text-amber-700 mb-4">
                  A Twitter (X) bot that responds to replies containing "riddle me this" or mentions of the bot's handle
                  under a tweet. It analyzes the trustworthiness of the original tweet's author and posts a concise
                  summary. The bot evaluates account age, follower/following ratio, bio content, engagement patterns,
                  recent tweet sentiment, and checks if the author is followed by trusted accounts.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="text-xs bg-amber-100 text-amber-800 px-2 py-1 rounded-full">Python</span>
                  <span className="text-xs bg-amber-100 text-amber-800 px-2 py-1 rounded-full">Twitter Bot</span>
                  <span className="text-xs bg-amber-100 text-amber-800 px-2 py-1 rounded-full">AI Analysis</span>
                  <span className="text-xs bg-amber-100 text-amber-800 px-2 py-1 rounded-full">Security</span>
                </div>
                <Button
                  variant="outline"
                  className="w-full border-amber-600 text-amber-800 hover:bg-amber-100 bg-transparent"
                >
                  <Link
                    href="https://github.com/0xQuilox/ruggard-miftah"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex justify-center"
                  >
                    View on GitHub
                  </Link>
                </Button>
              </div>
            </div>

            {/* Ofi Project */}
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
                <h3 className="text-xl font-semibold text-amber-800 mb-2">Ofi</h3>
                <p className="text-sm sm:text-base text-amber-700 mb-4">
                  A cutting-edge web application that revolutionizes the Nigerian fashion industry by connecting
                  customers with skilled local tailors through AI-powered measurements, real-time communication, and
                  secure payment processing. Bridging the gap between traditional craftsmanship and modern technology.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="text-xs bg-amber-100 text-amber-800 px-2 py-1 rounded-full">Next.js</span>
                  <span className="text-xs bg-amber-100 text-amber-800 px-2 py-1 rounded-full">AI</span>
                  <span className="text-xs bg-amber-100 text-amber-800 px-2 py-1 rounded-full">Fashion</span>
                  <span className="text-xs bg-amber-100 text-amber-800 px-2 py-1 rounded-full">Payment Processing</span>
                </div>
                <Button
                  variant="outline"
                  className="w-full border-amber-600 text-amber-800 hover:bg-amber-100 bg-transparent"
                >
                  <Link
                    href="https://github.com/Abdullahi-200/ofi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex justify-center"
                  >
                    View on GitHub
                  </Link>
                </Button>
              </div>
            </div>

            {/* Layla Project */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md border border-amber-200 hover:shadow-lg transition-shadow relative">
              {/* Status Indicator */}
              <div className="absolute top-3 right-3 bg-green-500 text-white text-xs font-medium px-2.5 py-1 rounded-full flex items-center">
                <CheckCircle className="h-3.5 w-3.5 mr-1" />
                Completed
              </div>
              <div className="h-48 bg-amber-800 flex items-center justify-center">
                <Search className="h-16 w-16 text-amber-100" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-amber-800 mb-2">Layla</h3>
                <p className="text-sm sm:text-base text-amber-700 mb-4">
                  An AI/ML model built for offering repair solutions and tips for phones, laptops, gaming consoles and
                  other mobile accessories to users. Leverages machine learning algorithms to provide intelligent
                  diagnostics and step-by-step repair guidance for various electronic devices.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="text-xs bg-amber-100 text-amber-800 px-2 py-1 rounded-full">AI/ML</span>
                  <span className="text-xs bg-amber-100 text-amber-800 px-2 py-1 rounded-full">Python</span>
                  <span className="text-xs bg-amber-100 text-amber-800 px-2 py-1 rounded-full">Repair Solutions</span>
                  <span className="text-xs bg-amber-100 text-amber-800 px-2 py-1 rounded-full">Mobile Tech</span>
                </div>
                <Button
                  variant="outline"
                  className="w-full border-amber-600 text-amber-800 hover:bg-amber-100 bg-transparent"
                >
                  <Link
                    href="https://github.com/0xQuilox/Layla"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex justify-center"
                  >
                    View on GitHub
                  </Link>
                </Button>
              </div>
            </div>

            {/* Xentinel Solutions Project */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md border border-amber-200 hover:shadow-lg transition-shadow relative">
              {/* Status Indicator */}
              <div className="absolute top-3 right-3 bg-green-500 text-white text-xs font-medium px-2.5 py-1 rounded-full flex items-center">
                <CheckCircle className="h-3.5 w-3.5 mr-1" />
                Completed
              </div>
              <div className="h-48 bg-amber-800 flex items-center justify-center">
                <Globe className="h-16 w-16 text-amber-100" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-amber-800 mb-2">Xentinel Solutions</h3>
                <p className="text-sm sm:text-base text-amber-700 mb-4">
                  Bridges the digital divide in Nigeria and Africa by delivering affordable, innovative solutions in
                  mobile electronics, internet networking, and cybersecurity. A comprehensive platform showcasing
                  cutting-edge technology services designed to empower communities across the continent.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="text-xs bg-amber-100 text-amber-800 px-2 py-1 rounded-full">Next.js</span>
                  <span className="text-xs bg-amber-100 text-amber-800 px-2 py-1 rounded-full">Cybersecurity</span>
                  <span className="text-xs bg-amber-100 text-amber-800 px-2 py-1 rounded-full">Networking</span>
                  <span className="text-xs bg-amber-100 text-amber-800 px-2 py-1 rounded-full">Mobile Electronics</span>
                </div>
                <Button
                  variant="outline"
                  className="w-full border-amber-600 text-amber-800 hover:bg-amber-100 bg-transparent"
                >
                  <Link
                    href="https://xentinel-eight.vercel.app"
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
      <section id="contributions" className="py-12 sm:py-16 md:py-20 bg-amber-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-amber-900">Open Source Contributions</h2>
            <div className="h-1 w-20 bg-amber-600 mx-auto mt-4 mb-8"></div>
            <p className="max-w-3xl mx-auto text-sm sm:text-base text-amber-800">
              My contributions to security research, vulnerability disclosure programs, and smart contract audits.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
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
      <section id="contact" className="py-8 sm:py-12 md:py-16 lg:py-20 bg-amber-800 text-amber-50">
        <div className="container mx-auto px-3 sm:px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold">Get In Touch</h2>
            <div className="h-1 w-20 bg-amber-400 mx-auto mt-4 mb-8"></div>
            <p className="max-w-3xl mx-auto text-sm sm:text-base text-amber-200">
              Interested in working together? Feel free to reach out through any of these channels.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
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
      <footer className="bg-amber-900 text-amber-200 py-8 sm:py-12">
        <div className="container mx-auto px-3 sm:px-4">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-6">
            <div className="text-center sm:text-left mb-4 sm:mb-0">
              <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-amber-100">Miftahudeen Tajudeen</h2>
              <p className="mt-2 text-xs sm:text-sm lg:text-base">
                Fullstack web application, mobile app, AI/ML developer, blockchain developer and security researcher
              </p>
            </div>
            <div className="flex space-x-4 sm:space-x-6">
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
