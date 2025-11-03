"use client";

import { motion } from "framer-motion";
import Image from "next/image";

type Testimonial = {
  id: number;
  name: string;
  quote: string;
  image: string;
  role: string;
};

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Ananya Sharma",
    role: "Skincare Enthusiast",
    quote:
      "Skinflow changed my daily routine... my skin feels smoother and more radiant than ever!",
    image: "/testimonials/ananya.jpg",
  },
  {
    id: 2,
    name: "Rhea Kapoor",
    role: "Beauty Blogger",
    quote:
      "I love how minimal and effective the products are. The ingredients feel genuinely clean.",
    image: "/testimonials/rhea.jpg",
  },
  {
    id: 3,
    name: "Priya Nair",
    role: "Model & Influencer",
    quote:
      "A brand that truly understands what your skin needs - - - I’m obsessed with their serum!",
    image: "/testimonials/priya.jpg",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-linear-to-b from-white to-rose-50 py-24">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-semibold text-gray-900 mb-4"
        >
          Loved by Thousands Worldwide
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-lg text-gray-600 mb-16"
        >
          See why people can’t stop talking about Skinflow
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {testimonials.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl shadow-sm hover:shadow-md hover:-translate-y-2 transition-all duration-300 p-8 flex flex-col items-center"
            >
              <div className="relative w-20 h-20 mb-4" key={item.id}>
                {/* <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover rounded-full"
                /> */}
                {/* <p>{item.name}</p> */}
              </div>
              <p className="text-gray-600 italic mb-6">“{item.quote}”</p>
              <h4 className="text-lg font-semibold text-gray-800">
                {item.name}
              </h4>
              <p className="text-sm text-gray-500">{item.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
