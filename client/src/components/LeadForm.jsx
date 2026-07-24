import { useState } from "react";
import api from "../services/api";

function LeadForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectName: "",
    budget: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      await api.post("/leads", formData);

      setSuccess(true);

      setFormData({
        name: "",
        email: "",
        projectName: "",
        budget: "",
        message: "",
      });

      setTimeout(() => {
        setSuccess(false);
      }, 3000);

    } catch (error) {
      console.error(error);
      alert("Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="lead-section">
      <div className="lead-container">
        <h2>Request a Consultation</h2>

        <p>
          Tell us about your project and we'll get back to you shortly.
        </p>

        {success && (
          <div className="success-message">
            ✅ Your consultation request has been submitted successfully.
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="projectName"
            placeholder="Project Name"
            value={formData.projectName}
            onChange={handleChange}
            required
          />

          <select
            name="budget"
            value={formData.budget}
            onChange={handleChange}
            required
          >
            <option value="">Select Budget</option>
            <option value="Below ₹50k">Below ₹50k</option>
            <option value="₹50k - ₹1L">₹50k - ₹1L</option>
            <option value="Above ₹1L">Above ₹1L</option>
          </select>

          <textarea
            rows="6"
            name="message"
            placeholder="Describe your project requirements..."
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>

          <button type="submit" disabled={loading}>
            {loading ? "Submitting..." : "Submit Request"}
          </button>
        </form>
      </div>
    </section>
  );
}

export default LeadForm;