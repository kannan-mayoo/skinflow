"use client";

import Image from "next/image";
// import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="bg-linear-to-b from-rose-50 to-white py-24">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 border-t border-pink-300 mt-5 gap-16 items-center">
        {/* Left Content */}
        <div className="text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-6 leading-tight">
            Redefining Skincare, The Natural Way 
          </h2>
          <p className="text-gray-600 text-lg mb-8">
            At <span className="font-semibold text-rose-500">Skinflow</span>, we
            believe beauty begins with balance — between science, nature, and
            your skin’s natural rhythm. Every product is thoughtfully crafted to
            nourish, heal, and empower your glow from within.
          </p>
          <button className="bg-rose-500 hover:bg-rose-600 text-white font-medium py-3 px-8 rounded-full transition">
            Learn More
          </button>
        </div>

        {/* Right Image */}
        <div className="relative w-full h-[420px]">
          {/* <Image
            src="/about/skinflow-about.jpg"
            alt="Skinflow natural skincare"
            fill
            className="object-cover rounded-3xl shadow-md"
          /> */}
        </div>
      </div>
    </section>
  );
}
