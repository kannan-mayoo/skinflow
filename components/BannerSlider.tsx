"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronsLeft, ChevronsRight } from "lucide-react";
// import Hero from "./Hero";
// import { ChevronsUpDown, Check } from "lucide-react";

const slides = [
  { id: 1, src: "/banner1.png", alt: "Pure natural ingredients" },
  { id: 2, src: "/banner3.png", alt: "Healthy glowing skin" },
  { id: 3, src: "/banner2.png", alt: "Sustainable beauty" },
];

export default function BannerSlider() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prevSlide = () =>
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  // Auto slide every 4 seconds
  useEffect(() => {
    if (paused) return;
    const interval = setInterval(nextSlide, 4000);
    return () => clearInterval(interval);
  }, [paused, current]);

  return (
    <section
      className="relative w-full h-[500px] overflow-hidden rounded-3xl shadow-lg"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={slide.src}
            alt={slide.alt}
            fill
            className="object-cover"
            priority={index === 0}
          />
        </div>
      ))}


      {/* Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/60 hover:bg-white text-gray-700 p-2 rounded-full transition"
      >
        <ChevronsLeft size={28} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/60 hover:bg-white text-gray-700 p-2 rounded-full transition"
      >
        <ChevronsRight size={28} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full transition ${
              index === current ? "bg-rose-500" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
