import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  GraduationCap,
  Globe,
  Users,
  Award,
  Phone,
  Mail,
  MapPin,
  BookOpen,
  Shield,
  Briefcase,
  Plane,
  Computer,
  Star,
  CheckCircle,
} from "lucide-react"
import Link from "next/link"

export default function ISMTWebsite() {
  const courses = [
    {
      title: "BSc (Hons) Computer Systems Engineering (IT)",
      description: "Comprehensive program covering modern IT systems, software engineering, and emerging technologies.",
      icon: Computer,
      duration: "4 Years",
      level: "Bachelor's",
    },
    {
      title: "BA (Hons) Business and Management (BBA)",
      description:
        "Strategic business education with focus on leadership, entrepreneurship, and global business practices.",
      icon: Briefcase,
      duration: "4 Years",
      level: "Bachelor's",
    },
    {
      title: "BSc (Hons) International Tourism and Hospitality Management (BHM)",
      description: "Industry-focused program preparing students for careers in tourism and hospitality sectors.",
      icon: Plane,
      duration: "4 Years",
      level: "Bachelor's",
    },
    {
      title: "BSc (Hons) Computer Science",
      description:
        "Advanced computer science curriculum covering algorithms, software development, and AI technologies.",
      icon: BookOpen,
      duration: "4 Years",
      level: "Bachelor's",
      badge: "Subject to Approval",
    },
    {
      title: "BSc (Hons) Cyber Security and Digital Forensics",
      description: "Cutting-edge program in cybersecurity, digital investigation, and information security management.",
      icon: Shield,
      duration: "4 Years",
      level: "Bachelor's",
      badge: "New",
    },
  ]

  const features = [
    {
      icon: Globe,
      title: "International Recognition",
      description: "Academic partnerships with University of Sunderland, UK, and Pearson Edexcel, UK",
    },
    {
      icon: Award,
      title: "UK Qualifications in Nepal",
      description: "Earn prestigious UK degrees without leaving Nepal, gaining global competitive advantage",
    },
    {
      icon: Users,
      title: "Holistic Learning Environment",
      description: "Project-based work, interactive discussions, and diverse assessment methodologies",
    },
    {
      icon: Star,
      title: "Industry-Relevant Education",
      description: "Bridging the gap between academia and industry with practical, applicable knowledge",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <div className="flex items-center space-x-2">
            <GraduationCap className="h-8 w-8 text-emerald-600" />
            <div>
              <h1 className="text-xl font-bold text-gray-900">ISMT College</h1>
              <p className="text-xs text-gray-600">Kathmandu</p>
            </div>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="#about" className="text-sm font-medium text-gray-700 hover:text-emerald-600 transition-colors">
              About
            </Link>
            <Link
              href="#courses"
              className="text-sm font-medium text-gray-700 hover:text-emerald-600 transition-colors"
            >
              Courses
            </Link>
            <Link
              href="#contact"
              className="text-sm font-medium text-gray-700 hover:text-emerald-600 transition-colors"
            >
              Contact
            </Link>
            <Button className="bg-emerald-600 hover:bg-emerald-700">Apply Now</Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-gradient-to-br from-emerald-50 to-teal-50">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-emerald-100 text-emerald-800 hover:bg-emerald-100">
              Established 2011 • UK Partnership
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Redefining Higher Education in <span className="text-emerald-600">Nepal</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Earn prestigious UK qualifications from University of Sunderland and Pearson Edexcel without leaving
              Nepal. Bridge the gap between academia and industry with internationally recognized, industry-relevant
              education.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700">
                Explore Courses
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-emerald-600 text-emerald-600 hover:bg-emerald-50 bg-transparent"
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-emerald-100 text-emerald-600 mb-4">
                  <feature.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 md:py-24 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">About ISMT College</h2>
              <p className="text-xl text-gray-600">
                Contributing to Nepal's higher education with internationally recognized qualifications
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="space-y-6">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-emerald-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Academic Excellence</h3>
                      <p className="text-gray-600 text-sm">
                        Inclusive and cost-effective educational approach delivering international standards while
                        adopting core local values.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-emerald-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Holistic Learning</h3>
                      <p className="text-gray-600 text-sm">
                        Active student engagement through project-based work, interactive discussions, presentations,
                        and diverse assessments.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-emerald-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Beyond Academics</h3>
                      <p className="text-gray-600 text-sm">
                        Sports clubs, workshops, bootcamps, and special interest groups developing technical expertise
                        and leadership skills.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Our Mission</h3>
                <p className="text-gray-600 mb-6">
                  ISMT is on a mission to contribute to Nepal's higher education by providing internationally recognized
                  and industry-relevant qualifications. We're redefining higher education with a bold vision—bridging
                  the gap between academia and industry.
                </p>
                <div className="flex items-center space-x-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-emerald-600">2011</div>
                    <div className="text-sm text-gray-600">Established</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-emerald-600">UK</div>
                    <div className="text-sm text-gray-600">Partnerships</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-emerald-600">5+</div>
                    <div className="text-sm text-gray-600">Programs</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section id="courses" className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Courses</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Internationally recognized programs designed to prepare you for global career opportunities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-emerald-100 rounded-lg">
                        <course.icon className="h-6 w-6 text-emerald-600" />
                      </div>
                      <div>
                        <div className="text-sm text-gray-600">{course.level}</div>
                        <div className="text-sm font-medium text-emerald-600">{course.duration}</div>
                      </div>
                    </div>
                    {course.badge && (
                      <Badge variant={course.badge === "New" ? "default" : "secondary"} className="text-xs">
                        {course.badge}
                      </Badge>
                    )}
                  </div>
                  <CardTitle className="text-lg leading-tight">{course.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 mb-4">{course.description}</CardDescription>
                  <Button
                    variant="outline"
                    className="w-full border-emerald-600 text-emerald-600 hover:bg-emerald-50 bg-transparent"
                  >
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 md:py-24 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Contact Us</h2>
              <p className="text-xl text-gray-600">Ready to start your journey? Get in touch with us today</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-6">Get in Touch</h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <MapPin className="h-5 w-5 text-emerald-600 mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-gray-900">ISMT College Kathmandu</p>
                        <p className="text-gray-600">Tinkune, Gairigaon, Kathmandu</p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3">
                      <Phone className="h-5 w-5 text-emerald-600 flex-shrink-0" />
                      <div>
                        <p className="text-gray-900">977-1-4112122 / 4112159</p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3">
                      <Mail className="h-5 w-5 text-emerald-600 flex-shrink-0" />
                      <div>
                        <Link
                          href="mailto:info@ismt.edu.np"
                          className="text-emerald-600 hover:text-emerald-700 transition-colors"
                        >
                          info@ismt.edu.np
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Office Hours</h4>
                  <div className="text-gray-600 space-y-1">
                    <p>Sunday - Friday: 9:00 AM - 5:00 PM</p>
                    <p>Saturday: Closed</p>
                  </div>
                </div>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Send us a Message</CardTitle>
                  <CardDescription>
                    Fill out the form below and we'll get back to you as soon as possible
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-gray-700 mb-1 block">First Name</label>
                      <input
                        type="text"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                        placeholder="Your first name"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-700 mb-1 block">Last Name</label>
                      <input
                        type="text"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                        placeholder="Your last name"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-1 block">Email</label>
                    <input
                      type="email"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-1 block">Phone</label>
                    <input
                      type="tel"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                      placeholder="Your phone number"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-1 block">Message</label>
                    <textarea
                      rows={4}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent resize-none"
                      placeholder="Tell us about your interest in ISMT programs..."
                    />
                  </div>

                  <Button className="w-full bg-emerald-600 hover:bg-emerald-700">Send Message</Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <GraduationCap className="h-8 w-8 text-emerald-400" />
                <div>
                  <h3 className="text-xl font-bold">ISMT College</h3>
                  <p className="text-sm text-gray-400">Kathmandu</p>
                </div>
              </div>
              <p className="text-gray-300 mb-4 max-w-md">
                Redefining higher education in Nepal with internationally recognized qualifications and
                industry-relevant programs in partnership with UK institutions.
              </p>
              <div className="flex space-x-4">
                <div className="text-sm">
                  <p className="text-emerald-400 font-medium">University Partners:</p>
                  <p className="text-gray-300">University of Sunderland, UK</p>
                  <p className="text-gray-300">Pearson Edexcel, UK</p>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>
                  <Link href="#about" className="hover:text-emerald-400 transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#courses" className="hover:text-emerald-400 transition-colors">
                    Courses
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-emerald-400 transition-colors">
                    Admissions
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-emerald-400 transition-colors">
                    Student Life
                  </Link>
                </li>
                <li>
                  <Link href="#contact" className="hover:text-emerald-400 transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Contact Info</h4>
              <div className="space-y-2 text-sm text-gray-300">
                <p>Tinkune, Gairigaon</p>
                <p>Kathmandu, Nepal</p>
                <p>977-1-4112122</p>
                <p>977-1-4112159</p>
                <Link
                  href="mailto:info@ismt.edu.np"
                  className="text-emerald-400 hover:text-emerald-300 transition-colors"
                >
                  info@ismt.edu.np
                </Link>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>&copy; {new Date().getFullYear()} ISMT College Kathmandu. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
