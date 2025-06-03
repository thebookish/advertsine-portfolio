"use client";

import BoxReveal from "@/components/magicui/box-reveal";
import Link from "next/link";
import { PiArrowRight, PiUsers, PiRocket, PiTrendUp } from "react-icons/pi";

const BoxRevealDemo = () => {
  return (
    <div className="w-full max-w-lg mx-auto space-y-6 p-8">
      <BoxReveal boxColor="#3b82f6" duration={0.5}>
        <div className="flex items-center space-x-3 mb-4">
          <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center">
            <PiUsers className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900">1. Discovery</h3>
        </div>
      </BoxReveal>

      <BoxReveal boxColor="#3b82f6" duration={0.5}>
        <p className="text-gray-600 mb-6 leading-relaxed">
          We start by understanding your business goals, target audience, and
          current challenges through detailed consultation.
        </p>
      </BoxReveal>

      <BoxReveal boxColor="#3b82f6" duration={0.5}>
        <div className="flex items-center space-x-3 mb-4">
          <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center">
            <PiRocket className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900">2. Strategy</h3>
        </div>
      </BoxReveal>

      <BoxReveal boxColor="#3b82f6" duration={0.5}>
        <p className="text-gray-600 mb-6 leading-relaxed">
          Our team develops a comprehensive digital strategy tailored to your
          specific needs and market opportunities.
        </p>
      </BoxReveal>

      <BoxReveal boxColor="#3b82f6" duration={0.5}>
        <div className="flex items-center space-x-3 mb-4">
          <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center">
            <PiTrendUp className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900">
            3. Execute & Optimize
          </h3>
        </div>
      </BoxReveal>

      <BoxReveal boxColor="#3b82f6" duration={0.5}>
        <p className="text-gray-600 mb-6 leading-relaxed">
          We implement the strategy with precision and continuously optimize
          based on performance data and market feedback.
        </p>
      </BoxReveal>

      <BoxReveal boxColor="#3b82f6" duration={0.5}>
        <Link
          href="/meeting"
          className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-semibold transition-all duration-200 hover:shadow-lg hover:scale-105"
        >
          Start Your Project
          <PiArrowRight className="ml-2 w-4 h-4" />
        </Link>
      </BoxReveal>
    </div>
  );
};

export default BoxRevealDemo;
