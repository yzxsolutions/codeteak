import React from "react";
import { Cover } from "./ui/Cover";
import { Link } from "react-router-dom";
import itServicesData from "./ui/data/serviceData";
import ServicesCard from "./ServicesCard"

export default function ServiceSection() {
  return (
    <div className="py-16 px-6 bg-white" id="service-section">
      <h1 className="text-4xl md:text-4xl lg:text-6xl font-semibold max-w-7xl mx-auto text-center mt-6 relative z-20 py-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white">
        <Cover>Services</Cover>
      </h1>

      <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto mb-10">
        {itServicesData.slice(0, 6).map((service) => (
          <ServicesCard
            key={service.id}
            title={service.title}
            description={service.description}
            benefits={service.benefits}
            icon={service.icon}
            image={service.image}
          />
        ))}
      </div>

      <div className="flex justify-center">
        <Link to="/services">
          <button className="px-6 py-3 rounded-full text-white bg-gradient-to-r from-red-500 to-rose-500 hover:from-rose-500 hover:to-red-500 transition duration-300 shadow-lg">
            Show All
          </button>
        </Link>
      </div>
    </div>
  );
}