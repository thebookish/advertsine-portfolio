import React from "react";
import Image from "next/image";
import Link from "next/link";
import { PiArrowRight, PiRocket } from "react-icons/pi";

function LetsMakeThingsHappenSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl mx-4 md:mx-8 my-16">
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="relative px-8 md:px-16 py-16 md:py-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-2xl mb-8">
            <PiRocket className="w-8 h-8 text-white" />
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Ready to Transform Your Business?
          </h2>

          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto leading-relaxed">
            Let's discuss how we can help you achieve your digital marketing
            goals and drive real growth for your business. Get started with a
            free consultation today.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/meeting"
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-200 hover:shadow-xl hover:scale-105 flex items-center"
            >
              Schedule Free Consultation
              <PiArrowRight className="ml-2 w-5 h-5" />
            </Link>

            <a
              href="tel:+8801338219333"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-200"
            >
              Call: +880-1338-219-333
            </a>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-white mb-2">500+</div>
              <div className="text-blue-100">Happy Clients</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-2">98%</div>
              <div className="text-blue-100">Success Rate</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-2">24/7</div>
              <div className="text-blue-100">Support</div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-32 translate-x-32"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-24 -translate-x-24"></div>
    </section>
  );
}

export default LetsMakeThingsHappenSection;
