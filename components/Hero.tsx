// =============================
// components/Hero.tsx
// =============================
// 'use client';

// import React from 'react';
// import { motion } from 'framer-motion';
// import Image from 'next/image';
// import Link from 'next/link';

// function Hero() {
//   return (
//     <section className="w-full bg-[#f9f9f7] py-20 md:py-28">
//       <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10 px-6 md:px-10">
//         {/* Left Text Section */}
//         <motion.div
//           initial={{ opacity: 0, x: -40 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.7 }}
//           className="flex-1 text-center md:text-left"
//         >
//           <h1 className="text-4xl md:text-6xl font-semibold leading-tight text-gray-900">
//             Minimal skincare, <br />
//             <span className="text-gray-700 italic">maximum glow.</span>
//           </h1>
//           <p className="mt-6 text-gray-600 text-base md:text-lg max-w-md mx-auto md:mx-0">
//             Discover the art of clean beauty with Skinflow. Simple, effective, and backed by science.
//           </p>

//           <Link href="/shop">
//             <motion.button
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.97 }}
//               className="mt-8 bg-gray-900 text-white px-8 py-3 rounded-full text-sm font-medium hover:bg-gray-700 transition"
//             >
//               Explore Products
//             </motion.button>
//           </Link>
//         </motion.div>

//         {/* Right Image Section */}
//         <motion.div
//           initial={{ opacity: 0, x: 40 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8 }}
//           className="flex-1 flex justify-center md:justify-end"
//         >
//           <div className="relative w-72 h-72 md:w-[400px] md:h-[400px] rounded-3xl overflow-hidden shadow-lg">
//             <Image
//               src="https://images.unsplash.com/photo-1601043695638-8904a6e4f3a0?auto=format&fit=crop&w=800&q=80"
//               alt="Skinflow hero image"
//               fill
//               className="object-cover"
//               priority
//             />
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default Hero;






// components/Hero.tsx
"use client";



import Image from "next/image";
// import BannerSlider from './BannerSlider';

export default function Hero() {
  return (
    <section className="relative flex flex-column items-center justify-center text-center bg-linear-to-r from-pink-200 to-white py-14 px-86 ">
      <div className="">
        <h1 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-6">
          Nourish Your Skin, Naturally 
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-8">
          <span className="italic">Discover Skinflow </span>- where timeless skincare meets modern science.  
          Clean, effective, and powered by nature.
        </p>
        <button className="bg-rose-500 hover:bg-rose-600 text-white font-medium py-3 px-8 rounded-full transition">
          Explore Products
        </button>
      </div>
       {/* Banner Slider below the hero content */}
      {/* <div className="mt-16 w-full max-w-5xl">
        <BannerSlider />
      </div> */}

      <div className="mt-12">
        <Image
          src="/hero-image1.png"  // update with your actual hero image
          alt="Natural skincare"
          width={400}
          height={200}
          className="rounded-3xl shadow-lg"
        />
      </div>
      
    </section>
  );
}