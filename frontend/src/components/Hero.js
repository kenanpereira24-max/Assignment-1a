import React from "react";

const Hero = () => {
  return (
    <section className="bg-slate-900 text-white py-24 px-6 text-center">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-extrabold mb-6 tracking-tight">
          Pitch Your Startup to India’s Top Investors.
        </h1>
        <p className="text-xl text-slate-400 mb-10">
          Karo Pitch is a dedicated platform where early-stage founders from
          across India, Tier-2, Tier-3 cities, and Bharat, can pitch their
          startups directly to investors and raise funding.
        </p>
        <div className="flex justify-center gap-4">
          <a
            href="#apply"
            className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-lg font-bold text-lg transition"
          >
            Apply to Pitch
          </a>
          <a
            href="#startups"
            className="border border-slate-600 hover:bg-slate-800 px-8 py-4 rounded-lg font-bold text-lg transition"
          >
            Explore Startups
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
