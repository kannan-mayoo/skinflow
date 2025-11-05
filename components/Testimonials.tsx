"use client";

import { motion } from "framer-motion";
import { Link, Quote, Star } from "lucide-react";
import Image from "next/image";

type Testimonial = {
  id: number;
  name: string;
  quote: string;
  image: string;
  role: string;
  rating: number;
  linkedin?: string;

};

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Ananya Sharma",
    role: "Skincare Enthusiast",
    quote:
      "Skinflow changed my daily routine... my skin feels smoother and more radiant than ever!",
    image: "/review1.png",
    rating: 5,
  },
  {
    id: 2,
    name: "Rhea Kapoor",
    role: "Beauty Blogger",
    quote:
      "I love how minimal and effective the products are. The ingredients feel genuinely clean.",
    image: "/review2.png",
    rating: 4,
  },
  {
    id: 3,
    name: "Jitul Vora",
    role: "Model & Influencer",
    quote:
      "A brand that truly understands what your skin needs - - - I’m obsessed with their serum!",
    image: "/review4.png",
    rating: 5,
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
              <Quote className="text-yellow-500 w-8 h-8 " />
              <div className="relative w-20 h-20 mb-4" key={item.id}>
                {/* {item.rating && (
                <div className="flex justify-center mb-4">
                  {Array.from({ length: item.rating }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
              )} */}
                {/* <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover rounded-full"
                /> */}
                {/* <p>{item.name}</p> */}
              </div>
              <p className="text-gray-600 italic border-b border-gray-300 py-6 mb-6">“{item.quote}”</p>
              <div className="flex items-center space-x-3 mt-4">
                
                <Image
                  src={item.image}
                  alt={item.name}
                  width={70}
                  height={70}
                  className="object-cover rounded-full"
                />
              <div>             <h4 className="text-lg font-semibold text-gray-800">
                {item.name}
              </h4>
              <p className="text-sm text-gray-500">{item.role}</p>
              </div>
 
              </div>

              {/* <Link
                  href={item.linkedin}
                  target="_blank"
                  className="ml-auto text-gray-400 hover:text-blue-600 transition"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  ><path d="M19 0H5C2.24 0 0 2.24 0 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5V5c0-2.76-2.24-5-5-5zm-1 20H6v-2h12v2zm0-4H6v-2h12v2zm0-4H6V8h12v2z"/></svg>
              </Link> */}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
