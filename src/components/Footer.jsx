import React from "react";
import { Link } from "react-router-dom";
import { Phone, MapPin, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-zinc-900 text-gray-300 border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {/* Brand & About */}
          <div>
            <Link to="/" className="flex items-center space-x-2">
              <div className="bg-red-600 text-white font-black text-xl px-2.5 py-1 rounded">
                HA
              </div>
              <div>
                <span className="block text-xl font-extrabold tracking-tight text-white leading-none">
                  HARGUN
                </span>
                <span className="block text-[11px] font-semibold tracking-widest text-red-500 uppercase">
                  Automotives
                </span>
              </div>
            </Link>
            <p className="mt-4 text-sm text-gray-400 leading-relaxed">
              Your trusted neighborhood workshop for complete all-brand scooty
              repairs, servicing, and 100% genuine Honda two-wheeler spare
              parts.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  to="/"
                  className="text-gray-400 hover:text-white transition"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-gray-400 hover:text-white transition"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-400 hover:text-white transition"
                >
                  Contact & Location
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Timings */}
          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-4">
              Workshop Info
            </h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                <span>Karan Nagar, Shaheed Gunj, Srinagar</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                <div className="flex flex-col space-y-1">
                  <a
                    href="tel:+919596419724"
                    className="hover:text-white transition"
                  >
                    +91 9596419724
                  </a>
                  <a
                    href="tel:+917889303235"
                    className="hover:text-white transition"
                  >
                    +91 7889303235
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-red-500 shrink-0" />
                <span>Mon – Sat: 9:30 AM – 7:30 PM</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="mt-10 pt-6 border-t border-zinc-800 flex flex-col sm:flex-row justify-between items-center text-xs text-gray-500 gap-2">
          <p>
            © {new Date().getFullYear()} Hargun Automobiles. All rights
            reserved.
          </p>
          <p>Scooty Servicing & Genuine Honda Spare Parts</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
