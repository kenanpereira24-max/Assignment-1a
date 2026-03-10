import React from "react";

const WhoCanApply = () => {
  const categories = [
    "D2C Brands",
    "Consumer Startups",
    "MSMEs",
    "SaaS Startups",
    "Manufacturing Businesses",
    "Bharat-focused Startups",
  ];

  return (
    <section className="py-20 bg-slate-900 text-white px-6 text-center">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">Who Can Apply?</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {categories.map((category, index) => (
            <span
              key={index}
              className="bg-slate-800 px-6 py-3 rounded-full font-medium border border-slate-700"
            >
              {category}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoCanApply;
