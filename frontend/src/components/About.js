import React from "react";

const About = () => {
  return (
    <section className="py-20 bg-slate-50 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6 text-slate-900">
          About Karo Pitch
        </h2>
        <p className="text-lg text-slate-700 leading-relaxed mb-6">
          Thousands of founders are building amazing businesses but lack access
          to investors, mentorship, and visibility. Karo Pitch aims to bridge
          this gap by creating a structured pitch platform similar to a
          closed-room investor pitch event.
        </p>
        <p className="text-lg text-slate-700 leading-relaxed">
          Our long-term vision is to build India’s most accessible startup
          discovery and funding platform for Bharat entrepreneurs, connecting
          them with investors through curated pitch events.
        </p>
      </div>
    </section>
  );
};

export default About;
