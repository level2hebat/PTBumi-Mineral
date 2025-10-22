import Link from './Link';
import { Mountain, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import react from 'react'

export function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="bg-gradient-to-br from-amber-500 to-amber-600 p-2 rounded-lg">
                <Mountain className="w-5 h-5 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-white">PT Bumi Mineral</span>
                <span className="text-amber-500 text-xs">Nusantara</span>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Empowering Resources, Sustaining the Future. Leading mining company committed to excellence and sustainability.
            </p>
            <div className="flex gap-3">
              <a href="#" className="bg-slate-800 hover:bg-amber-600 p-2 rounded-lg transition-colors">
                <Facebook className="w-4 h-4 text-gray-300" />
              </a>
              <a href="#" className="bg-slate-800 hover:bg-amber-600 p-2 rounded-lg transition-colors">
                <Twitter className="w-4 h-4 text-gray-300" />
              </a>
              <a href="#" className="bg-slate-800 hover:bg-amber-600 p-2 rounded-lg transition-colors">
                <Linkedin className="w-4 h-4 text-gray-300" />
              </a>
              <a href="#" className="bg-slate-800 hover:bg-amber-600 p-2 rounded-lg transition-colors">
                <Instagram className="w-4 h-4 text-gray-300" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-amber-500 transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-amber-500 transition-colors text-sm">
                  Our Services
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-gray-400 hover:text-amber-500 transition-colors text-sm">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/sustainability" className="text-gray-400 hover:text-amber-500 transition-colors text-sm">
                  Sustainability
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li className="text-gray-400 text-sm">Mineral Exploration</li>
              <li className="text-gray-400 text-sm">Coal Mining</li>
              <li className="text-gray-400 text-sm">Processing & Logistics</li>
              <li className="text-gray-400 text-sm">Environmental Consulting</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-amber-500 mt-1 flex-shrink-0" />
                <span className="text-gray-400 text-sm">
                  Jl. Sudirman Kav. 52-53<br />
                  Jakarta Selatan 12190<br />
                  Indonesia
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-amber-500 flex-shrink-0" />
                <span className="text-gray-400 text-sm">+62 21 5000 1234</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-amber-500 flex-shrink-0" />
                <span className="text-gray-400 text-sm">info@bumimineralnusantara.co.id</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} PT Bumi Mineral Nusantara. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
