import React from "react";
import Link from "next/link";
import { Instagram, Facebook, X } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 mt-16">
      <div className="max-w-6xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-10">
        
        {/* Brand Section */}
        {/* <div>
          <p className="text-sm leading-relaxed">
            Simplifying skincare with science-backed, minimalist products that actually work. 
            Your skin deserves better — and we’re here to deliver it.
          </p>
        </div> */}

        {/* Company Overview */}

        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Company Overview </h3>
          <ul className="space-y-2">
            <li><Link href="/" className="hover:text-white transition">About</Link></li>
            <li><Link href="/about" className="hover:text-white transition">Media Outreach</Link></li>
            <li><Link href="/about" className="hover:text-white transition">Distributor Queries</Link></li>
            <li><Link href="/about" className="hover:text-white transition">Privacy policy</Link></li>
            <li><Link href="/about" className="hover:text-white transition">Terms & conditions</Link></li>
            <li><Link href="/about" className="hover:text-white transition">Payment Policy</Link></li>
            <li><Link href="/about" className="hover:text-white transition">Our values</Link></li>

            <li><Link href="/about" className="hover:text-white transition">Distributor Queries</Link></li>
            <li><Link href="/products" className="hover:text-white transition">Corporate Information</Link></li>
            <li><Link href="/contact" className="hover:text-white transition">Grievance Redressal</Link></li>
          </ul>
        </div>



        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link href="/" className="hover:text-white transition">Home</Link></li>
            <li><Link href="/about" className="hover:text-white transition">Knowledge</Link></li>
            <li><Link href="/about" className="hover:text-white transition">Payment Policy</Link></li>
            <li><Link href="/about" className="hover:text-white transition">Track order</Link></li>
            <li><Link href="/about" className="hover:text-white transition">Return & refund policy</Link></li>
            <li><Link href="/about" className="hover:text-white transition">Shipping Policy</Link></li>
            <li><Link href="/about" className="hover:text-white transition">Help Center</Link></li>

            <li><Link href="/products" className="hover:text-white transition">Download App</Link></li>
            <li><Link href="/contact" className="hover:text-white transition">FAQs</Link></li>
          </ul>
        </div>

        {/* Brand Section */}
        {/* Social Links */} 
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Contact Us</h3>
          <h4 className="text-2xl font-semibold text-white mb-4"><Link href="/" className="hover:text-purple-400">Skinflow</Link></h4>

          <p className="text-sm leading-relaxed">
            Simplifying skincare with science-backed, minimalist products that actually work. 
            Your skin deserves better — and we’re here to deliver it.
          </p>
          <div className="flex space-x-4 mt-6">
            <a href="https://instagram.com" target="_blank" className="hover:text-pink-400 transition">
              <Instagram size={22} />
            </a>
            <a href="https://facebook.com" target="_blank" className="hover:text-blue-500 transition">
              <Facebook size={22} />
            </a>
            <a href="https://twitter.com" target="_blank" className="hover:text-sky-400 transition">
              <X size={22} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-10 border-t border-gray-700 pt-4 text-center text-sm">
        <p>© {new Date().getFullYear()} <Link href="/" className="underline">Skinflow</Link>. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
