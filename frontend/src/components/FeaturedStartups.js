import React from "react";

const FeaturedStartups = () => {
  const startups = [
    {
      name: "EcoSip",
      category: "D2C Brand",
      desc: "Sustainable, biodegradable packaging for the fast-moving beverage industry.",
    },
    {
      name: "VyaparSync",
      category: "SaaS Startup",
      desc: "Cloud-based inventory management and accounting specifically built for MSMEs.",
    },
    {
      name: "IndicCrafts",
      category: "Manufacturing",
      desc: "Direct-from-artisan home decor manufacturing unit scaling traditional crafts.",
    },
  ];

  return (
    <section id="startups" className="py-20 bg-white px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center text-slate-900">
          Featured Startups
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {startups.map((startup, index) => (
            <div
              key={index}
              className="p-8 border border-slate-200 rounded-2xl shadow-sm hover:shadow-xl transition"
            >
              <span className="text-xs font-bold text-blue-600 uppercase tracking-wider bg-blue-50 px-3 py-1 rounded-full">
                {startup.category}
              </span>
              <h3 className="text-2xl font-bold mt-4 mb-3 text-slate-900">
                {startup.name}
              </h3>
              <p className="text-slate-600 leading-relaxed">{startup.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedStartups;
