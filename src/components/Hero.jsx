import React from "react";
import { Link } from "react-router-dom";
import heroImg from "../assets/hero4.png";
const Hero = () => {
  return (
    <section className="bg-zinc-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">
          {/* Left Content */}
          <div>
            <span className="inline-block bg-red-100 text-red-700 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-3">
              Two-Wheeler Workshop & Spare Parts
            </span>

            {/* Director Name positioned right here as requested */}
            <p className="text-md font-bold text-zinc-800 mb-4">
              Director: <span className="text-red-600">Gurdeep Singh</span>
            </p>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-zinc-900 tracking-tight leading-tight">
              Expert Scooty Repairs &{" "}
              <span className="text-red-600">Genuine Honda Parts</span>
            </h1>

            <p className="mt-4 text-base sm:text-lg text-zinc-600 leading-relaxed">
              At Hargun Automotives, we keep your daily ride smooth and
              reliable. From complete scooty servicing, engine tuning, and
              clutch work to 100% genuine Honda spare parts, get honest pricing
              and quick service under one roof.
            </p>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Link
                to="/contact"
                className="inline-flex justify-center items-center bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-md shadow-sm transition text-sm sm:text-base"
              >
                Visit Shop / Contact Us
              </Link>
              <Link
                to="/about"
                className="inline-flex justify-center items-center bg-white hover:bg-zinc-100 text-zinc-800 border border-zinc-300 font-semibold px-6 py-3 rounded-md transition text-sm sm:text-base"
              >
                Learn About Us
              </Link>
            </div>

            {/* Quick Trust Highlights */}
            <div className="mt-10 pt-6 border-t border-gray-200 grid grid-cols-3 gap-4">
              <div>
                <p className="text-xl sm:text-2xl font-extrabold text-zinc-900">
                  100%
                </p>
                <p className="text-xs sm:text-sm text-zinc-500">
                  Original Honda Parts
                </p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl font-extrabold text-zinc-900">
                  All Scooties
                </p>
                <p className="text-xs sm:text-sm text-zinc-500">
                  Service & Repair
                </p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl font-extrabold text-zinc-900">
                  Same-Day
                </p>
                <p className="text-xs sm:text-sm text-zinc-500">
                  Quick Servicing
                </p>
              </div>
            </div>
          </div>

          {/* Right Scooty/Workshop Image */}
          <div className="relative">
            <div className="rounded-xl overflow-hidden shadow-lg border border-gray-200 bg-zinc-200">
              <img
                src={heroImg}
                alt="Hargun Automobiles Scooty Repair and Honda Parts Shop"
                className="w-full h-[320px] sm:h-[400px] object-cover"
              />
            </div>

            {/* Floating Info Badge */}
            <div className="hidden sm:flex items-center gap-3 bg-white p-4 rounded-lg shadow-md border border-gray-100 absolute -bottom-5 left-6">
              <div className="bg-red-600 text-white p-2.5 rounded-md font-bold text-sm">
                OPEN
              </div>
              <div>
                <p className="text-sm font-bold text-zinc-900">
                  Mon – Sat: 9:30 AM – 7:30 PM
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
