import React from 'react';
import {
  FaFacebookF,
  FaGithub,
  FaLinkedinIn,
  FaInstagram,
  FaArrowUp
} from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <footer className="bg-black text-white py-10 w-full relative">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-center sm:text-left">
          
          {/* Column 1: Copyright */}
          <div className="order-3 lg:order-1 space-y-1 flex flex-col justify-center items-center sm:items-start">
            <p className="text-white text-base">
              &copy; {currentYear} Antima Mishra. All rights reserved.
            </p>
            <p className="text-gray-400 text-xs ">Built with passion and purpose.</p>
          </div>

          {/* Column 2: Email - center aligned */}
          <div className="order-1 flex flex-col items-center sm:items-center">
            <p className="uppercase text-xs tracking-wider mb-1">Email</p>
            <a
              href="mailto:antimamishra279@gmail.com"
              className="text-cyan-400 text-base hover:underline break-all"
            >
              antimamishra277@gmail.com
            </a>
          </div>

          {/* Column 3: Social icons - center aligned */}
          <div className="order-2 flex flex-col items-center sm:items-center space-y-2">
            <p className="uppercase text-xs tracking-wider ">Follow</p>
            <div className="flex space-x-3">
              {[
                { icon: <FaFacebookF />, link: 'https://www.facebook.com/antima.mishra.5832', label: 'Facebook' },
                { icon: <FaGithub />, link: 'https://github.com/Antima2004', label: 'GitHub' },
                { icon: <FaLinkedinIn />, link: 'https://www.linkedin.com/in/antima-mishra-4aa626254/', label: 'LinkedIn' },
                { icon: <FaInstagram />, link: 'https://www.instagram.com/__antima.m_12.02/profilecard/?igsh=cTNjM3Rqbmp2MTE0', label: 'Instagram' },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-9 h-9 rounded-full bg-white text-black flex items-center justify-center transition-colors duration-300 hover:text-cyan-400 hover:ring-2 hover:ring-cyan-400"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>

      {/* Scroll-to-top button fixed to bottom-right */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 w-12 h-12 bg-cyan-400 text-black text-xl flex items-center justify-center rounded-md hover:bg-cyan-300 transition duration-300 shadow-md z-50"
        aria-label="Scroll to top"
      >
        <FaArrowUp />
      </button>
    </>
  );
};

export default Footer;
