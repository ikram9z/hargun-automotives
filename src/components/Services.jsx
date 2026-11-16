import React from "react";
import {
  Wrench,
  Settings,
  Search,
  Droplets,
  BatteryCharging,
} from "lucide-react";

const Services = () => {
  const primaryServices = [
    {
      icon: Wrench,
      title: "General Servicing",
      description:
        "Comprehensive multi-point inspection, oil change, and filter replacement for smooth performance.",
    },
    {
      icon: Settings,
      title: "Engine Tuning",
      description:
        "Expert adjustments and diagnostics to optimize fuel efficiency and power delivery.",
    },
    {
      icon: Search,
      title: "Brake & Suspension",
      description:
        "Complete brake pad, shoe, and suspension repair/replacement for reliable handling.",
    },
    {
      icon: Droplets,
      title: "Genuine Parts",
      description:
        "100% authentic Honda spare parts counter for retail and service use.",
    },
    {
      icon: BatteryCharging,
      title: "Electrical Diagnostics",
      description:
        "Accurate troubleshooting for battery, self-starter, and wiring issues.",
    },
  ];

  return (
    <section id="services" className="bg-white py-20 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-red-600 font-bold text-xs uppercase tracking-wider bg-red-50 px-3 py-1 rounded-full">
            OUR SPECIALIZATIONS
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl font-extrabold text-zinc-900 tracking-tight">
            Comprehensive Scooty Care & Genuine Honda Parts
          </h2>
          <p className="mt-4 text-base md:text-lg text-zinc-600 leading-relaxed">
            From quick oil changes to complete engine overhauls, Hargun
            Automobiles provides expert repair services for all major scooty
            brands, alongside a dedicated counter for original Honda two-wheeler
            spares.
          </p>
        </div>

        {/* Primary Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {primaryServices.map((service, index) => (
            <div
              key={index}
              className="bg-zinc-50 border border-gray-100 p-8 rounded-xl shadow-sm hover:shadow-md hover:border-red-100 transition duration-300"
            >
              <div className="bg-red-600 text-white w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                <service.icon className="w-6 h-6" strokeWidth={2.5} />
              </div>
              <h3 className="text-xl font-bold text-zinc-900 tracking-tight">
                {service.title}
              </h3>
              <p className="mt-3 text-sm text-zinc-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
