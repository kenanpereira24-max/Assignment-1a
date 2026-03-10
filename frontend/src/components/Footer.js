import React from "react";

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-slate-400 py-16 text-center px-6">
      <div className="max-w-4xl mx-auto border-b border-slate-800 pb-12 mb-8">
        <h2 className="text-4xl font-bold text-white mb-8">
          Ready to Pitch Your Startup?
        </h2>
        <div className="flex justify-center gap-6">
          <a
            href="#apply"
            className="bg-blue-600 text-white hover:bg-blue-700 px-10 py-4 rounded-lg font-bold text-lg transition"
          >
            Apply Now
          </a>
          <button className="border border-slate-600 hover:bg-slate-800 text-white px-10 py-4 rounded-lg font-bold text-lg transition">
            Partner With Us
          </button>
        </div>
      </div>
      <p className="text-sm">© 2026 KaroStartup Media. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
