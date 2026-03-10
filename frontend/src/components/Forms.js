// Inside your handleSubmit function in Forms.js
const handleSubmit = async (e) => {
  e.preventDefault();
  
  try {
    // REPLACE THIS URL WITH YOUR RAILWAY ONE:
    const response = await fetch('https://YOUR-RAILWAY-URL-HERE.up.railway.app/api/apply', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      alert("Application successfully submitted!");
      setFormData({ founder_name: '', startup_name: '', email: '', category: '', pitch_deck_link: '' });
    } else {
      alert("Submission failed. Server error.");
    }
  } catch (error) {
    console.error("Error submitting form:", error);
    alert("Connection to server failed.");
  }
};
