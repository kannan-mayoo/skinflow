"use client";

import Image from "next/image";
import { motion } from "framer-motion";

type Product = {
  id: number;
  name: string;
  tagline: string;
  image: string;
};

const products: Product[] = [
  {
    id: 1,
    name: "Hydrating Face Serum",
    tagline: "Infused with Vitamin C & Hyaluronic Acid",
    image: "/serum.png",
  },
  {
    id: 2,
    name: "Daily Moisturizer",
    tagline: "Lightweight hydration for all skin types",
    image: "/moisturizer.png",
  },
  {
    id: 3,
    name: "Gentle Foaming Cleanser",
    tagline: "Cleanses deeply without stripping moisture",
    image: "/cleanser.png",
  },
  
  {
    id: 4,
    name: "Sunscreen SPF 50+",
    tagline: "Broad spectrum protection with a matte finish",
    image: "/sunscreen.png",
  },
  {
    id: 5,
    name: "Cleansing Oil",
    tagline: "Infused with Vitamin C & Hyaluronic Acid",
    image: "/cleansing_oil.png",
  },
  {
    id: 6,
    name: "Vitamin B5 Moisturizer",
    tagline: "Lightweight hydration for all skin types",
    image: "/vitamin_b5_face_mosturizer.png",
  },
  {
    id: 7,
    name: "Niacinamide 10% Face Serum",
    tagline: "Brightening and smoothing serum",
    image: "/niacinamide_face_serum.png",
  },
  
  {
    id: 8,
    name: "Salicyclic Acid Cleanser",
    tagline: "Broad spectrum protection with a matte finish",
    image: "/salicyclic_acid_cleanser.png",
  },
];

export default function Products() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-semibold text-gray-900 mb-4"
        >
          Our Bestsellers
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-lg text-gray-600 mb-12"
        >
          Clean, effective, and crafted to bring out your natural glow
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-rose-50 rounded-3xl shadow-sm hover:shadow-md hover:-translate-y-2 transition-all duration-300 p-6 flex flex-col items-center"
            >
              <div className="relative w-48 h-48 mb-6">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-contain rounded-xl"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {product.name}
              </h3>
              <p className="text-gray-500 text-sm mb-4">{product.tagline}</p>
              <button className="bg-rose-400 hover:bg-rose-300 text-white font-medium py-2 px-6 rounded-full transition">
                Shop Now
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
