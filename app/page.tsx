"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  ExternalLink,
  Download,
  Code2,
  Database,
  Server,
  ArrowRight,
  MapPin,
  Star,
  Zap,
  Globe,
  Award,
  Users,
  TrendingUp,
  Palette,
  Earth,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Portfolio() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    setIsLoaded(true);

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleScroll = () => {
      const sections = ["hero", "about", "projects", "skills", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const projects = [
    {
      title: "Business management Saas Platform",
      description:
        "Deviso is a powerful SaaS solution built using the MERN stack (MongoDB, Express.js, React, Node.js) to streamline and simplify the management of business operations such as generating quotes (devis), invoices (factures), purchase orders (bons de commande), and delivery slips (bons de livraison). Tailored for businesses of all sizes, Deviso offers a robust and scalable platform for efficient financial and inventory management.",
      techStack: ["React js", "Express js", "Node js", "Mongodb"],
      liveUrl: "https://deviso.webitagency.com",
      githubUrl: "#",
      featured: true,
      metrics: { users: "500+", uptime: "99.9%", performance: "< 100ms" },
      image: "/deviso_1.png",
    },
    {
      title: "Properties Management System",
      description:
        "A comprehensive properties management system designed to streamline the management of real estate properties, including tenant management, lease tracking, and maintenance requests.",
      techStack: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true,
      metrics: { tps: "1k+", latency: "< 1ms", availability: "99.99%" },
      image: "/themehouse_1.png",
    },
    {
      title: "Temporary SMS Service",
      description:
        "This SMS temp service provides users with secure, disposable phone numbers for receiving messages anonymously. With an intuitive admin panel, it ensures efficient management and seamless user experience.",
      techStack: [
        "Next.js",
        "Tailwind CSS",
        "Node.js",
        "Express.js",
        "MongoDB",
      ],
      liveUrl: "#",
      githubUrl: "#",
      featured: false,
      metrics: { accuracy: "94%", reviews: "100K+", time_saved: "40%" },
      image: "/sms_1.png",
    },
    {
      title: "Mini Solution APPlication",
      description:
        "Mini Solution is a user-friendly platform designed to simplify content conversion across popular social media platforms. With quick and seamless tools, Mini Solution empowers users to effortlessly transform videos and reels into downloadable formats, catering to personal and professional needs.",
      techStack: [
        "React js",
        "Tailwind CSS",
        "Node.js",
        "Express.js",
        "MongoDB",
      ],
      liveUrl: "https://mini-solution.webitagency.com",
      githubUrl: "#",
      featured: false,
      metrics: { transactions: "10k+", nodes: "500+", gas_efficiency: "60%" },
      image: "/mini_solutions_1.png",
    },
    {
      title: "Auto Repair Business Management Desktop App",
      description:
        "This desktop application, developed using Java and JavaFX, is tailored for auto repair businesses to efficiently manage their day-to-day operations. The app features a sleek and interactive dashboard that allows businesses to handle quotes (devis), invoices (factures), and other essential tasks, providing a complete solution for financial and operational management.",
      techStack: ["Java", "JavaFX", "MySQL", "JDBC", "Maven", "FXML"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false,
      metrics: {
        deployments: "50K+",
        success_rate: "99.8%",
        time_reduction: "75%",
      },
      image: "/garagiste_1.png",
    },
    {
      title:
        "Water Monitoring System: IoT Solution for Real-Time Water Management",
      description:
        "This project is an IoT-based water monitoring system that provides real-time data on water quality and usage. It utilizes sensors to collect data, which is then processed and displayed through a user-friendly dashboard, enabling efficient water management.",
      techStack: [
        "C++",
        "Arduino",
        "MQTT",
        "Node.js",
        "React",
        "MongoDB",
        "flutter",
      ],
      liveUrl: "#",
      githubUrl: "#",
      featured: false,
      metrics: {
        performance: "10x faster",
        memory: "50% less",
        accuracy: "98.5%",
      },
      image: "/water_1.jpg",
    },
    {
      title:
        "IoT-Based Parking System: Smart Parking Management for Real-Time Availability",
      description:
        "This innovative IoT-based parking system is designed to help manage parking spaces efficiently by providing real-time data on available spots. The system uses sensors to detect the number of free parking spaces and displays this information on a Flutter mobile app for users. Built with IoT technology, this system ensures accurate and timely updates, making parking management easier for both administrators and drivers.",
      techStack: [
        "C++",
        "Arduino",
        "MQTT",
        "Node.js",
        "React",
        "MongoDB",
        "flutter",
      ],
      liveUrl: "#",
      githubUrl: "#",
      featured: false,
      metrics: {
        performance: "10x faster",
        memory: "50% less",
        accuracy: "98.5%",
      },
      image: "/parking_1.png",
    },
    {
      title:
        "Automated Newsletter System: Stay Updated with Scholarships and School Opening Dates",
      description:
        "This newsletter system is designed to automatically gather information from various scholarship websites and school opening dates, providing timely updates to subscribers. Built with a focus on automation, the system collects relevant data, generates concise newsletters, and sends them out regularly to ensure students and parents are always informed about important academic opportunities.",
      techStack: ["express js", "node js", "puppeteer", "mongodb"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false,
      metrics: {
        performance: "10x faster",
        memory: "50% less",
        accuracy: "98.5%",
      },
      image: "/newletter_1.png",
    },
  ];

  const skills = {
    "Frontend Development": {
      items: [
        "React.js",
        "Next.js",
        "Vue.js",
        "Angular",
        "Tailwind CSS",
        "Bootstrap",
      ],
      icon: <Palette className="w-8 h-8" />,
      color: "from-blue-500 to-indigo-500",
    },
    "Backend Engineering": {
      items: ["Node.js", "Express.js", "nest.js", "mongodb", "PostgreSQL"],
      icon: <Database className="w-8 h-8" />,
      color: "from-blue-600 to-blue-500",
    },
    "IOT and connectivity": {
      items: [
        "Arduino",
        "Raspberry Pi",
        "MQTT",
        "IoT Protocols",
        "Sensor Integration",
        "Embedded Systems",
      ],
      icon: <Earth className="w-8 h-8" />,
      color: "from-indigo-500 to-blue-600",
    },
    "Cloud & DevOps": {
      items: ["Nginx", "Docker", "Vps", "CI/CD"],
      icon: <Globe className="w-8 h-8" />,
      color: "from-blue-600 to-indigo-600",
    },
  };

  const achievements = [
    {
      icon: <Award className="w-6 h-6" />,
      label: "Software Development",
      value: "3+ Years",
    },
    {
      icon: <Users className="w-6 h-6" />,
      label: "Team Size",
      value: "7+ Devs",
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      label: "System Scale",
      value: "100k+ Users",
    },
    {
      icon: <Star className="w-6 h-6" />,
      label: "Open Source",
      value: "2K+ Stars",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-blue-950/20 to-indigo-950/20"></div>
        <div
          className="absolute inset-0 opacity-30"
          style={{
            background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.1), transparent 40%)`,
          }}
        ></div>
        {/* Animated particles */}
        <div className="absolute inset-0">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-blue-400/20 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 3}s`,
              }}
            ></div>
          ))}
        </div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-950/80 backdrop-blur-xl border-b border-slate-800/50 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
              Badreddine Aiz
            </div>
            <div className="hidden md:flex space-x-8">
              {["about", "projects", "skills", "contact"].map((section) => (
                <Link
                  key={section}
                  href={`#${section}`}
                  className={`relative text-slate-300 hover:text-white transition-all duration-300 capitalize ${
                    activeSection === section ? "text-blue-400" : ""
                  }`}
                >
                  {section}
                  {activeSection === section && (
                    <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full"></div>
                  )}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="hero"
        className="relative min-h-screen flex items-center px-6 pt-20"
      >
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div
              className={`space-y-8 transition-all duration-1000 ${
                isLoaded
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            >
              <div className="space-y-6">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-indigo-500/20 border border-blue-500/30 backdrop-blur-sm">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mr-3 animate-pulse"></div>
                  <span className="text-blue-300 text-sm font-medium">
                    Mid-Level Software Engineer • Available
                  </span>
                </div>

                <h1 className="text-6xl lg:text-7xl font-bold leading-tight">
                  <span className="block text-white">Hi, I'm</span>
                  <span className="block bg-gradient-to-r from-blue-400 via-indigo-400 to-blue-500 bg-clip-text text-transparent animate-gradient">
                    Badreddine Aiz
                  </span>
                </h1>

                <div className="space-y-2">
                  <h2 className="text-3xl lg:text-4xl text-slate-300 font-light">
                    Principal Software Engineer
                  </h2>
                  <div className="flex items-center space-x-4 text-slate-400">
                    <span>•</span>
                    <span>Software Developer</span>
                    <span>•</span>
                    <span>Open Source Contributor</span>
                    <span>•</span>
                    <span>Digital Entrepreneur</span>
                  </div>
                </div>

                <p className="text-xl text-slate-300 leading-relaxed max-w-2xl">
                  I architect and build{" "}
                  <span className="text-blue-400 font-semibold">
                    distributed systems
                  </span>{" "}
                  that scale to millions of users. Passionate about{" "}
                  <span className="text-indigo-400 font-semibold">
                    performance optimization
                  </span>
                  ,
                  <span className="text-blue-500 font-semibold">
                    {" "}
                    clean architecture
                  </span>
                  , and mentoring the next generation of engineers.
                </p>
              </div>

              {/* Achievement Stats */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                {achievements.map((achievement, index) => (
                  <div
                    key={index}
                    className="group p-4 rounded-xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 backdrop-blur-sm hover:border-blue-500/50 transition-all duration-300"
                  >
                    <div className="flex flex-col items-center text-center space-y-2">
                      <div className="text-blue-400 group-hover:scale-110 transition-transform duration-300">
                        {achievement.icon}
                      </div>
                      <div className="text-2xl font-bold text-white">
                        {achievement.value}
                      </div>
                      <div className="text-sm text-slate-400">
                        {achievement.label}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="mailto:badr.aiz@hotmail.com" target="_blank">
                  <Button
                    size="lg"
                    className="group bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25"
                  >
                    <Mail className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform duration-300" />
                    Let's Connect
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                </Link>
                <Link href="/resume.pdf" target="_blank">
                  <Button
                    variant="outline"
                    size="lg"
                    className="group border-slate-600 text-slate-300 hover:bg-slate-800 hover:border-blue-500 px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 bg-transparent"
                  >
                    <Download className="w-5 h-5 mr-2 group-hover:bounce transition-transform duration-300" />
                    Download Resume
                  </Button>
                </Link>
              </div>

              <div className="flex space-x-6">
                {[
                  {
                    icon: <Github className="w-6 h-6" />,
                    href: "https://github.com/BadreddineAiz",
                    color: "hover:text-white",
                  },
                  {
                    icon: <Linkedin className="w-6 h-6" />,
                    href: "https://www.linkedin.com/in/badreddine-aiz-939093224",
                    color: "hover:text-blue-400",
                  },
                  {
                    icon: <Mail className="w-6 h-6" />,
                    href: "mailto:badr.aiz@hotmail.com",
                    color: "hover:text-indigo-400",
                  },
                ].map((social, index) => (
                  <Link
                    key={index}
                    href={social.href}
                    className={`text-slate-400 ${social.color} transition-all duration-300 hover:scale-125 hover:-translate-y-1`}
                  >
                    {social.icon}
                  </Link>
                ))}
              </div>
            </div>

            <div
              className={`relative transition-all duration-1000 delay-300 ${
                isLoaded
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            >
              <div className="relative w-96 h-96 mx-auto">
                {/* Animated rings */}
                <div className="absolute inset-0 rounded-full border border-blue-500/20 animate-spin-slow"></div>
                <div className="absolute inset-4 rounded-full border border-indigo-500/20 animate-spin-reverse"></div>
                <div className="absolute inset-8 rounded-full border border-blue-600/20 animate-spin-slow"></div>

                {/* Gradient background */}
                <div className="absolute inset-12 bg-gradient-to-r from-blue-500/20 via-indigo-500/20 to-blue-600/20 rounded-full blur-3xl animate-pulse"></div>

                {/* Profile image */}
                <Image
                  src="/hero.jpg"
                  alt="Badreddine Aiz"
                  width={320}
                  height={320}
                  className="absolute inset-12 rounded-full object-cover border-2 border-slate-700 shadow-2xl hover:scale-105 transition-transform duration-500"
                />

                {/* Floating tech icons */}
                <div className="absolute top-0 right-0 w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center animate-float">
                  <Code2 className="w-6 h-6 text-white" />
                </div>
                <div className="absolute bottom-0 left-0 w-12 h-12 bg-gradient-to-r from-indigo-500 to-blue-600 rounded-full flex items-center justify-center animate-float-delayed">
                  <Zap className="w-6 h-6 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative py-32 px-6">
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 rounded-3xl blur-3xl group-hover:blur-2xl transition-all duration-500"></div>
              <div className="relative">
                <Image
                  src="/about.svg?height=500&width=500"
                  alt="Badreddine Aiz Professional"
                  width={500}
                  height={500}
                  className="relative z-10 rounded-3xl object-cover shadow-2xl border border-slate-700/50 group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center shadow-2xl">
                  <Award className="w-12 h-12 text-white" />
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="space-y-4">
                <div className="inline-block px-4 py-2 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 rounded-full border border-blue-500/30">
                  <span className="text-blue-300 text-sm font-medium">
                    About Me
                  </span>
                </div>
                <h2 className="text-5xl font-bold text-white leading-tight">
                  Building the{" "}
                  <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                    Future
                  </span>{" "}
                  of Software
                </h2>
                <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full"></div>
              </div>

              <div className="space-y-6 text-slate-300 leading-relaxed text-lg">
                <p>
                  With{" "}
                  <span className="text-blue-400 font-semibold">4+ years</span>{" "}
                  of experience developing systems, I've developed over{" "}
                  <span className="text-indigo-400 font-semibold">
                    + 20 production-grade applications
                  </span>{" "}
                  and
                  <span className="text-blue-500 font-semibold">
                    {" "}
                    highly scalable systems
                  </span>
                  . My expertise spans from low-level system optimization to
                  high-level architectural decisions.
                </p>
                <p>
                  I specialize in{" "}
                  <span className="text-blue-400 font-semibold">
                    distributed systems
                  </span>
                  , focusing on{" "}
                  <span className="text-indigo-400 font-semibold">
                    performance optimization
                  </span>
                  ,{" "}
                  <span className="text-blue-500 font-semibold">
                    clean architecture
                  </span>
                  , and{" "}
                  <span className="text-blue-400 font-semibold">
                    system reliability
                  </span>
                  . My goal is to create software that not only meets functional
                  requirements but also excels in performance and
                  maintainability.
                </p>
                <p>
                  Beyond coding, I'm passionate about{" "}
                  <span className="text-blue-400 font-semibold">
                    mentoring developers
                  </span>
                  , contributing to{" "}
                  <span className="text-indigo-400 font-semibold">
                    open source
                  </span>
                  , and speaking at
                  <span className="text-blue-500 font-semibold">
                    {" "}
                    international conferences
                  </span>
                  . I believe in building not just great software, but great
                  engineering cultures.
                </p>
              </div>

              <div className="flex items-center space-x-6 text-slate-400">
                <div className="flex items-center space-x-2">
                  <MapPin className="w-5 h-5 text-blue-400" />
                  <span>Morocco Sale</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Globe className="w-5 h-5 text-indigo-400" />
                  <span>Remote Friendly</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="relative py-32 px-6">
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="text-center space-y-6 mb-20">
            <div className="inline-block px-4 py-2 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 rounded-full border border-blue-500/30">
              <span className="text-blue-300 text-sm font-medium">
                Featured Work
              </span>
            </div>
            <h2 className="text-5xl font-bold text-white leading-tight">
              Enterprise-Scale{" "}
              <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                Solutions
              </span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Real world projects that demonstrate my expertise in building
              scalable, high-performance systems across various domains.
            </p>
          </div>

          <div className="grid gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className={`group relative overflow-hidden bg-gradient-to-br from-blue-950/50  to-slate-900/50 border border-slate-700/50 backdrop-blur-sm hover:border-blue-500/50 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-blue-500/10 ${
                  project.featured ? "lg:col-span-1" : ""
                }`}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div
                  className={`grid ${
                    project.featured ? "lg:grid-cols-2" : "md:grid-cols-2"
                  } gap-6`}
                >
                  {/* Project Image */}
                  <div className="relative overflow-hidden">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      width={project.featured ? 600 : 500}
                      height={project.featured ? 400 : 300}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>

                    {/* Featured Badge */}
                    {project.featured && (
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white border-0">
                          <Star className="w-3 h-3 mr-1" />
                          Featured
                        </Badge>
                      </div>
                    )}

                    {/* Overlay Buttons */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="flex space-x-4">
                        <Link href={project.liveUrl} target="_blank">
                          <Button
                            size="sm"
                            className="bg-blue-600 hover:bg-blue-500 text-white transition-all duration-300 hover:scale-105"
                          >
                            <ExternalLink className="w-4 h-4 mr-2" />
                            Live Demo
                          </Button>
                        </Link>
                        <Button
                          size="sm"
                          variant="outline"
                          className="border-slate-400 text-slate-200 hover:bg-slate-800 hover:border-blue-500 transition-all duration-300 hover:scale-105 bg-slate-900/80"
                        >
                          <Github className="w-4 h-4 mr-2" />
                          Code
                        </Button>
                      </div>
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="p-6 flex flex-col justify-between">
                    <div className="space-y-4">
                      <CardTitle className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
                        {project.title}
                      </CardTitle>
                      <CardDescription className="text-slate-300 leading-relaxed text-base">
                        {project.description}
                      </CardDescription>

                      {/* Metrics */}
                      <div className="grid grid-cols-3 gap-3">
                        {Object.entries(project.metrics).map(
                          ([key, value], metricIndex) => (
                            <div
                              key={metricIndex}
                              className="text-center p-3 rounded-lg bg-slate-800/50 border border-slate-700/50 hover:border-blue-500/30 transition-colors duration-300"
                            >
                              <div className="text-lg font-bold text-blue-400">
                                {value}
                              </div>
                              <div className="text-xs text-slate-400 capitalize">
                                {key.replace("_", " ")}
                              </div>
                            </div>
                          )
                        )}
                      </div>
                    </div>

                    {/* Tech Stack */}
                    <div className="mt-6">
                      <div className="flex flex-wrap gap-2">
                        {project.techStack.map((tech, techIndex) => (
                          <Badge
                            key={techIndex}
                            variant="outline"
                            className="border-slate-600 text-slate-300 hover:border-blue-500 hover:text-blue-400 transition-colors duration-300"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="relative py-32 px-6">
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="text-center space-y-6 mb-20">
            <div className="inline-block px-4 py-2 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 rounded-full border border-blue-500/30">
              <span className="text-blue-300 text-sm font-medium">
                Technical Expertise
              </span>
            </div>
            <h2 className="text-5xl font-bold text-white leading-tight">
              Senior-Level{" "}
              <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                Mastery
              </span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Deep expertise across the entire technology stack, from system
              design to implementation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {Object.entries(skills).map(([category, data], index) => (
              <Card
                key={index}
                className="group relative overflow-hidden bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 backdrop-blur-sm hover:border-blue-500/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${data.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                ></div>

                <CardHeader className="text-center space-y-4 relative z-10">
                  <div
                    className={`mx-auto w-20 h-20 bg-gradient-to-r ${data.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                  >
                    <div className="text-white">{data.icon}</div>
                  </div>
                  <CardTitle className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
                    {category}
                  </CardTitle>
                </CardHeader>

                <CardContent className="relative z-10">
                  <div className="flex flex-wrap gap-2 justify-center">
                    {data.items.map((skill, skillIndex) => (
                      <Badge
                        key={skillIndex}
                        variant="outline"
                        className="border-slate-600 text-slate-300 hover:border-blue-500 hover:text-blue-400 transition-all duration-300 hover:scale-105"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative py-32 px-6">
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center space-y-6 mb-20">
            <div className="inline-block px-4 py-2 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 rounded-full border border-blue-500/30">
              <span className="text-blue-300 text-sm font-medium">
                Let's Connect
              </span>
            </div>
            <h2 className="text-5xl font-bold text-white leading-tight">
              Ready to Build{" "}
              <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                Something Amazing?
              </span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Whether you have a project in mind or just want to say hello, I'm
              always open to new opportunities and collaborations. Let's create
              something extraordinary together!
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            <div className="space-y-8">
              <div className="space-y-6">
                {[
                  {
                    icon: <Mail className="w-6 h-6" />,
                    title: "Email",
                    value: "badr.aiz@hotmail.com",
                    color: "from-blue-500 to-indigo-500",
                  },
                  {
                    icon: <Phone className="w-6 h-6" />,
                    title: "Phone",
                    value: "+212 7.71.85.08.24",
                    color: "from-blue-600 to-blue-500",
                  },
                ].map((contact, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-4 group"
                  >
                    <div
                      className={`w-16 h-16 bg-gradient-to-r ${contact.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                    >
                      <div className="text-white">{contact.icon}</div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-white text-lg">
                        {contact.title}
                      </h3>
                      <p className="text-slate-300">{contact.value}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-white">
                  Connect with me
                </h3>
                <div className="flex space-x-4">
                  {[
                    {
                      icon: <Github className="w-6 h-6" />,
                      href: "https://github.com/BadreddineAiz",
                      color: "hover:bg-slate-600",
                    },
                    {
                      icon: <Linkedin className="w-6 h-6" />,
                      href: "https://www.linkedin.com/in/badreddine-aiz-939093224",
                      color: "hover:bg-blue-600",
                    },
                    {
                      icon: <Mail className="w-6 h-6" />,
                      href: "mailto:badr.aiz@hotmail.com",
                      color: "hover:bg-indigo-600",
                    },
                  ].map((social, index) => (
                    <Link
                      key={index}
                      href={social.href}
                      className={`w-16 h-16 bg-slate-800 ${social.color} rounded-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg group border border-slate-700`}
                    >
                      <div className="text-slate-300 group-hover:text-white transition-colors duration-300">
                        {social.icon}
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <form action="https://formspree.io/f/mldnyoje" method="POST">
              <Card className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 backdrop-blur-sm shadow-2xl">
                <CardHeader>
                  <CardTitle className="text-3xl font-bold text-white">
                    Send a Message
                  </CardTitle>
                  <CardDescription className="text-slate-300">
                    Let's discuss your next project or engineering challenge.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-slate-300">
                        Name
                      </label>
                      <Input
                        placeholder="Your name"
                        className="bg-slate-800/50 border-slate-600 text-white placeholder:text-slate-400 focus:border-blue-500 focus:ring-blue-500/20"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-slate-300">
                        Email
                      </label>
                      <Input
                        type="email"
                        name="email"
                        placeholder="your.email@example.com"
                        className="bg-slate-800/50 border-slate-600 text-white placeholder:text-slate-400 focus:border-blue-500 focus:ring-blue-500/20"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-300">
                      Message
                    </label>
                    <Textarea
                      placeholder="Tell me about your project or what you'd like to discuss..."
                      rows={5}
                      name="message"
                      className="bg-slate-800/50 border-slate-600 text-white placeholder:text-slate-400 focus:border-blue-500 focus:ring-blue-500/20 resize-none"
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25 group"
                  >
                    Send Message
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                </CardContent>
              </Card>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-16 px-6 border-t border-slate-800/50">
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">
            <div className="text-center md:text-left">
              <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent mb-2">
                Badreddine Aiz
              </div>
              <p className="text-slate-400">Principal Software Engineer</p>
              <p className="text-slate-500 text-sm mt-1">
                Building the future, one system at a time
              </p>
            </div>

            <div className="flex space-x-8">
              {["about", "projects", "skills", "contact"].map((link) => (
                <Link
                  key={link}
                  href={`#${link}`}
                  className="text-slate-400 hover:text-white transition-colors duration-300 capitalize hover:scale-105"
                >
                  {link}
                </Link>
              ))}
            </div>

            <div className="flex space-x-4">
              {[
                { icon: <Github className="w-5 h-5" />, href: "#" },
                { icon: <Linkedin className="w-5 h-5" />, href: "#" },
                { icon: <Mail className="w-5 h-5" />, href: "#" },
              ].map((social, index) => (
                <Link
                  key={index}
                  href={social.href}
                  className="text-slate-400 hover:text-white transition-all duration-300 hover:scale-125 hover:-translate-y-1"
                >
                  {social.icon}
                </Link>
              ))}
            </div>
          </div>

          <div className="border-t border-slate-800/50 mt-12 pt-8 text-center">
            <p className="text-slate-500">
              &copy; {new Date().getFullYear()} Badreddine Aiz. Crafted with
              precision and passion.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
