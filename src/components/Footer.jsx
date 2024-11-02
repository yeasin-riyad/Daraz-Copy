import React from 'react';
import Image from 'next/image';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';
import { MdOutlineLanguage } from 'react-icons/md';
import { FiExternalLink } from 'react-icons/fi';
import { bangladesh, myanmar, nepal, pakistan, srilanka } from '@/assets/assets';
import Container from './header/Container';

const Footer = () => {
  return (
    <footer className="bg-themeWhite text-gray-600 py-10">
      <Container className="container mx-auto px-5 md:px-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 text-center md:text-left">
          
          {/* Column 1 - International Sites */}
          <div>
            <h3 className="text-lg font-semibold mb-4 flex items-center justify-center md:justify-start gap-2">
              <MdOutlineLanguage className="text-xl" /> Daraz International
            </h3>
            <ul className="flex flex-wrap gap-x-6 justify-center md:justify-start items-center">
              <li className="flex items-center gap-2">
                <Image src={pakistan} alt="Pakistan Flag" width={20} height={20} />
                <span>Pakistan</span>
              </li>
              <li className="flex items-center gap-2">
                <Image src={bangladesh} alt="Bangladesh Flag" width={20} height={20} />
                <span>Bangladesh</span>
              </li>
              <li className="flex items-center gap-2">
                <Image src={srilanka} alt="Sri Lanka Flag" width={20} height={20} />
                <span>Sri Lanka</span>
              </li>
              <li className="flex items-center gap-2">
                <Image src={myanmar} alt="Myanmar Flag" width={20} height={20} />
                <span>Myanmar</span>
              </li>
              <li className="flex items-center gap-2">
                <Image src={nepal} alt="Nepal Flag" width={20} height={20} />
                <span>Nepal</span>
              </li>
            </ul>
          </div>

          {/* Column 2 - Social Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <ul className="flex justify-center md:justify-start space-x-5">
              <li>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-xl text-gray-400 hover:text-blue-500 transition duration-200">
                  <FaFacebook />
                </a>
              </li>
              <li>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-xl text-gray-400 hover:text-blue-400 transition duration-200">
                  <FaTwitter />
                </a>
              </li>
              <li>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-xl text-gray-400 hover:text-pink-500 transition duration-200">
                  <FaInstagram />
                </a>
              </li>
              <li>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-xl text-gray-400 hover:text-red-500 transition duration-200">
                  <FaYoutube />
                </a>
              </li>
            </ul>
           
          </div>

          {/* Column 3 - Copyright */}
          <div>
            <p className="text-gray-500 text-sm">© Daraz 2024</p>
            <p className="mt-2 text-xs text-gray-400">
              All rights reserved. Daraz is the leading online marketplace in South Asia, connecting millions of consumers and sellers.
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
