import React, { useState } from "react";

const Forms = () => {
  const [formData, setFormData] = useState({
    founder_name: "",
    startup_name: "",
    email: "",
    category: "D2C Brands",
    pitch_deck_link: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/api/apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        alert("Application Submitted Successfully!");
        setFormData({
          founder_name: "",
          startup_name: "",
          email: "",
          category: "D2C Brands",
          pitch_deck_link: "",
        });
      }
    } catch (error) {
      console.error(error);
      alert("Failed to submit application.");
    }
  };

  return (
    <section id="apply" className="py-24 bg-white px-6">
      <div className="max-w-xl mx-auto border border-slate-200 p-10 rounded-2xl shadow-lg">
        <h2 className="text-3xl font-bold mb-8 text-center text-slate-900">
          Apply for Karo Pitch
        </h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1">
              Founder Name
            </label>
            <input
              required
              type="text"
              className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:outline-none"
              value={formData.founder_name}
              onChange={(e) =>
                setFormData({ ...formData, founder_name: e.target.value })
              }
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1">
              Startup Name
            </label>
            <input
              required
              type="text"
              className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:outline-none"
              value={formData.startup_name}
              onChange={(e) =>
                setFormData({ ...formData, startup_name: e.target.value })
              }
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1">
              Email Address
            </label>
            <input
              required
              type="email"
              className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:outline-none"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1">
              Startup Category
            </label>
            <select
              className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:outline-none bg-white"
              value={formData.category}
              onChange={(e) =>
                setFormData({ ...formData, category: e.target.value })
              }
            >
              <option>D2C Brands</option>
              <option>Consumer Startups</option>
              <option>MSMEs</option>
              <option>SaaS Startups</option>
              <option>Manufacturing Businesses</option>
              <option>Tech Startups</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1">
              Pitch Deck Link (Google Drive / Doc)
            </label>
            <input
              required
              type="url"
              className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:outline-none"
              value={formData.pitch_deck_link}
              onChange={(e) =>
                setFormData({ ...formData, pitch_deck_link: e.target.value })
              }
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-4 rounded-lg font-bold text-lg hover:bg-blue-700 transition mt-4"
          >
            Submit Application
          </button>
        </form>
      </div>
    </section>
  );
};

export default Forms;
