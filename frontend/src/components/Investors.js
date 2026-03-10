import React from "react";

const Investors = () => {
  return (
    <section className="py-20 bg-blue-50 px-6 text-center">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">
          Meet Investors Looking for the Next Big Startup
        </h2>
        <p className="text-lg text-slate-700 mb-8">
          Top angel investors, micro-VCs, and syndicates are actively looking to
          back strong businesses from Tier-2 and Tier-3 cities.
        </p>
        <div className="flex justify-center gap-8 opacity-60 grayscale flex-wrap">
          <div className="text-2xl font-bold">Venture Capital A</div>
          <div className="text-2xl font-bold">Angel Network B</div>
          <div className="text-2xl font-bold">Bharat Fund C</div>
        </div>
      </div>
    </section>
  );
};

export default Investors;
