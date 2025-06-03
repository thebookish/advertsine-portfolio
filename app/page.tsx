"use client";

import { AnimatedBeamMultipleOutputDemo } from "@/components/demos/animated-beam-demo";
import { AnimatedShinyTextDemo } from "@/components/demos/animated-shiny-text-demo";
import BoxRevealDemo from "@/components/demos/box-reveal-demo";
import { CoverDemo } from "@/components/demos/cover-demo";
import { ScrollBasedVelocityDemo } from "@/components/demos/scroll-based-velocity-demo";
import { WordPullUpDemo } from "@/components/demos/word-pull-up-demo";
import BoxReveal from "@/components/magicui/box-reveal";
import BlurFade from "@/components/magicui/blur-fade";
import NumberTicker from "@/components/magicui/number-ticker";
import { InfiniteMovingLogos } from "@/components/ui/infinite-moving-logos";
import Image from "next/image";
import Link from "next/link";
import {
  PiCheckBold,
  PiArrowRight,
  PiStar,
  PiUsers,
  PiTrendUp,
  PiRocket,
} from "react-icons/pi";
import { Link as ScrollLink, Element } from "react-scroll";
import { IconStarFilled } from "@tabler/icons-react";
import { ShootingStarsAndStarsBackgroundDemo } from "@/components/demos/shooting-stars-demo";
import LetsMakeThingsHappenSection from "@/components/ui/lets-make-things-happen";

const services = [
  {
    icon: "/images/s_1.png",
    title: "Social Media Marketing",
    description:
      "Strategic social media campaigns that build brand awareness, engage your audience, and drive conversions across all major platforms.",
    features: [
      "Content Strategy",
      "Community Management",
      "Paid Advertising",
      "Analytics & Reporting",
    ],
  },
  {
    icon: "/images/s_2.png",
    title: "Web Development",
    description:
      "Custom websites and web applications built with cutting-edge technologies to deliver exceptional user experiences and drive business growth.",
    features: [
      "Responsive Design",
      "E-commerce Solutions",
      "CMS Integration",
      "Performance Optimization",
    ],
  },
  {
    icon: "/images/s_3.png",
    title: "Mobile App Development",
    description:
      "Native and cross-platform mobile applications that engage users and provide seamless experiences across iOS and Android devices.",
    features: [
      "iOS & Android",
      "Cross-Platform",
      "UI/UX Design",
      "App Store Optimization",
    ],
  },
  {
    icon: "/images/s_4.png",
    title: "Brand Strategy",
    description:
      "Comprehensive brand development and positioning strategies that differentiate your business and resonate with your target audience.",
    features: [
      "Brand Identity",
      "Logo Design",
      "Brand Guidelines",
      "Market Positioning",
    ],
  },
  {
    icon: "/images/s_5.png",
    title: "Digital Marketing",
    description:
      "Data-driven digital marketing campaigns that maximize ROI through SEO, PPC, email marketing, and conversion optimization.",
    features: [
      "SEO Optimization",
      "PPC Campaigns",
      "Email Marketing",
      "Conversion Tracking",
    ],
  },
  {
    icon: "/images/s_6.png",
    title: "Analytics & Insights",
    description:
      "Advanced analytics and reporting solutions that provide actionable insights to optimize your marketing performance and business growth.",
    features: [
      "Performance Tracking",
      "Custom Dashboards",
      "ROI Analysis",
      "Growth Insights",
    ],
  },
];

const testimonials = [
  {
    name: "Sarah Chen",
    role: "CEO, TechFlow Solutions",
    image: "/images/client.webp",
    content:
      "Advertsine transformed our digital presence completely. Their social media management increased our engagement by 300%, and the mobile app they developed has been a game-changer for our business.",
    rating: 5,
  },
  {
    name: "Michael Rodriguez",
    role: "Founder, GrowthLab",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    content:
      "The team at Advertsine delivered beyond our expectations. Our website conversion rate improved by 250% within the first month of launch.",
    rating: 5,
  },
  {
    name: "Emily Johnson",
    role: "Marketing Director, InnovateCorp",
    image:
      "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
    content:
      "Professional, creative, and results-driven. Advertsine helped us establish a strong brand presence and significantly boost our online visibility.",
    rating: 5,
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Navigation */}
      <Element
        name="top"
        className="sticky top-0 z-50 backdrop-blur-md bg-white/80 border-b border-gray-200/50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="/logo/navlogo.webp"
                alt="Advertsine Logo"
                width={120}
                height={40}
                className="h-8 w-auto"
              />
            </Link>

            <nav className="hidden md:flex items-center space-x-8">
              <ScrollLink
                to="services"
                smooth={true}
                className="text-gray-700 hover:text-blue-600 cursor-pointer transition-colors"
              >
                Services
              </ScrollLink>
              <ScrollLink
                to="about"
                smooth={true}
                className="text-gray-700 hover:text-blue-600 cursor-pointer transition-colors"
              >
                About
              </ScrollLink>
              <ScrollLink
                to="testimonials"
                smooth={true}
                className="text-gray-700 hover:text-blue-600 cursor-pointer transition-colors"
              >
                Testimonials
              </ScrollLink>
              <Link
                href="/showcase"
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                Portfolio
              </Link>
            </nav>

            <div className="flex items-center space-x-4">
              <a
                href="tel:+8801338219333"
                className="hidden lg:block text-sm text-gray-600"
              >
                +880-1338-219-333
              </a>
              <Link
                href="/meeting"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full font-medium transition-all duration-200 hover:shadow-lg hover:scale-105"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </Element>

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-32">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <BlurFade delay={0.1}>
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-800 text-sm font-medium mb-8">
                <PiStar className="w-4 h-4 mr-2" />
                Trusted by 500+ Growing Businesses
              </div>
            </BlurFade>

            <BlurFade delay={0.2}>
              <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
                Grow Your Business with
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  {" "}
                  Digital Excellence
                </span>
              </h1>
            </BlurFade>

            <BlurFade delay={0.3}>
              <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
                We're a full-service digital marketing agency specializing in
                social media management, web development, and mobile app
                solutions that drive real results for your business.
              </p>
            </BlurFade>

            <BlurFade delay={0.4}>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
                <Link
                  href="/meeting"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-200 hover:shadow-xl hover:scale-105 flex items-center"
                >
                  Start Your Project
                  <PiArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link
                  href="/showcase"
                  className="border-2 border-gray-300 hover:border-blue-600 text-gray-700 hover:text-blue-600 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-200 hover:shadow-lg"
                >
                  View Our Work
                </Link>
              </div>
            </BlurFade>

            {/* Stats */}
            <BlurFade delay={0.5}>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
                    <NumberTicker value={500} />+
                  </div>
                  <div className="text-gray-600">Happy Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
                    <NumberTicker value={1200} />+
                  </div>
                  <div className="text-gray-600">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
                    <NumberTicker value={98} />%
                  </div>
                  <div className="text-gray-600">Client Satisfaction</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
                    <NumberTicker value={5} />
                  </div>
                  <div className="text-gray-600">Years Experience</div>
                </div>
              </div>
            </BlurFade>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <Element name="services">
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <BlurFade delay={0.1}>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  Our <span className="text-blue-600">Services</span>
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Comprehensive digital solutions designed to elevate your brand
                  and accelerate your growth
                </p>
              </BlurFade>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <BlurFade key={service.title} delay={0.1 + index * 0.1}>
                  <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
                    <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors duration-300">
                      <Image
                        src={service.icon}
                        width={32}
                        height={32}
                        alt={service.title}
                        className="w-8 h-8 group-hover:brightness-0 group-hover:invert transition-all duration-300"
                      />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    <ul className="space-y-2">
                      {service.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-center text-sm text-gray-600"
                        >
                          <PiCheckBold className="w-4 h-4 text-blue-600 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </BlurFade>
              ))}
            </div>
          </div>
        </section>
      </Element>

      {/* About Section */}
      <Element name="about">
        <section className="py-24 bg-gradient-to-r from-blue-50 to-purple-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <BlurFade delay={0.1}>
                <div>
                  <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                    Why Choose{" "}
                    <span className="text-blue-600">Advertsine?</span>
                  </h2>
                  <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                    We're not just another digital agency. We're your strategic
                    partner in growth, combining creativity with data-driven
                    insights to deliver exceptional results.
                  </p>

                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                        <PiRocket className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">
                          Results-Driven Approach
                        </h3>
                        <p className="text-gray-600">
                          Every strategy is backed by data and focused on
                          achieving your specific business goals.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                        <PiUsers className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">
                          Expert Team
                        </h3>
                        <p className="text-gray-600">
                          Our team of specialists brings years of experience
                          across all digital marketing disciplines.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                        <PiTrendUp className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">
                          Proven Track Record
                        </h3>
                        <p className="text-gray-600">
                          500+ successful projects and a 98% client satisfaction
                          rate speak for themselves.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </BlurFade>

              <BlurFade delay={0.3}>
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl transform rotate-3"></div>
                  <div className="relative bg-white rounded-3xl p-8 shadow-2xl">
                    <AnimatedBeamMultipleOutputDemo />
                  </div>
                </div>
              </BlurFade>
            </div>
          </div>
        </section>
      </Element>

      {/* Testimonials Section */}
      <Element name="testimonials">
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <BlurFade delay={0.1}>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  What Our <span className="text-blue-600">Clients Say</span>
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Don't just take our word for it. Here's what our clients have
                  to say about working with us.
                </p>
              </BlurFade>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <BlurFade key={testimonial.name} delay={0.1 + index * 0.1}>
                  <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300">
                    <div className="flex items-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <IconStarFilled
                          key={i}
                          className="w-5 h-5 text-yellow-400"
                        />
                      ))}
                    </div>
                    <p className="text-gray-700 mb-6 leading-relaxed">
                      "{testimonial.content}"
                    </p>
                    <div className="flex items-center">
                      <Image
                        src={testimonial.image}
                        width={48}
                        height={48}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full mr-4"
                      />
                      <div>
                        <div className="font-semibold text-gray-900">
                          {testimonial.name}
                        </div>
                        <div className="text-sm text-gray-600">
                          {testimonial.role}
                        </div>
                      </div>
                    </div>
                  </div>
                </BlurFade>
              ))}
            </div>
          </div>
        </section>
      </Element>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <BlurFade delay={0.1}>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Let's discuss how we can help you achieve your digital marketing
              goals and drive real growth for your business.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/meeting"
                className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-200 hover:shadow-xl hover:scale-105 flex items-center"
              >
                Schedule a Free Consultation
                <PiArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <a
                href="tel:+8801338219333"
                className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-200"
              >
                Call Now: +880-1338-219-333
              </a>
            </div>
          </BlurFade>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <Image
                src="/logo/logo.webp"
                width={150}
                height={50}
                alt="Advertsine Logo"
                className="h-10 w-auto mb-4"
              />
              <p className="text-gray-400 mb-6 max-w-md">
                We're a full-service digital marketing agency helping businesses
                grow through strategic online presence and innovative solutions.
              </p>
              <div className="flex space-x-4">
                <a
                  href="mailto:support@advertsine.com"
                  className="text-blue-400 hover:text-blue-300"
                >
                  support@advertsine.com
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Social Media Marketing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Web Development
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Mobile App Development
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Brand Strategy
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <ul className="space-y-2 text-gray-400">
                <li>+880-1338-219-333</li>
                <li>support@advertsine.com</li>
                <li>Dhaka, Bangladesh</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between">
            <p className="text-gray-400 text-sm">
              © 2025 Advertsine. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link
                href="/"
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/"
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
