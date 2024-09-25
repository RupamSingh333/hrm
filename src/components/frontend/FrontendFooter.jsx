"use client"
import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-3xl font-bold">CodeLabs India</h2>
            <p className="mt-2 text-sm">Innovating for tomorrow, coding for today</p>
          </div>
          <div className="flex space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300 transition-colors duration-300">
              <FaFacebook size={24} aria-label="Facebook" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300 transition-colors duration-300">
              <FaTwitter size={24} aria-label="Twitter" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300 transition-colors duration-300">
              <FaInstagram size={24} aria-label="Instagram" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300 transition-colors duration-300">
              <FaLinkedin size={24} aria-label="LinkedIn" />
            </a>
          </div>
        </div>
        <div className="mt-8 border-t border-blue-500 pt-8 flex flex-col md:flex-row justify-between">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-semibold mb-2">Contact Us</h3>
            <p className="text-sm">123 Tech Patna, Bihar, India</p>
            <p className="text-sm">Email: rupamkumar333@gmail.com</p>
            <p className="text-sm">Phone: +91 8538945025</p>
          </div>
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-semibold mb-2">Quick Links</h3>
            <ul className="text-sm">
              <li><a href="#" className="hover:text-blue-300 transition-colors duration-300">Home</a></li>
              <li><a href="#" className="hover:text-blue-300 transition-colors duration-300">Services</a></li>
              <li><a href="#" className="hover:text-blue-300 transition-colors duration-300">About Us</a></li>
              <li><a href="#" className="hover:text-blue-300 transition-colors duration-300">Careers</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Newsletter</h3>
            <p className="text-sm mb-2">Stay updated with our latest news</p>
            <form className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 w-full rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-300 text-gray-900"
              />
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-r-md transition-colors duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="mt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} CodeLabs India. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;