

import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function BookingForm() {
  const navigate = useNavigate();
  const location = useLocation();
  const service = location.state; // Haddii user ka yimaado ServiceDetails

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: service ? service.title : "",
    date: "",
    time: "",
  });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Booking Data:", formData);
    alert(`Thank you ${formData.name}, your appointment for ${formData.service} is booked!`);
    navigate("/"); // dib ugu laabo homepage
  };

  return (
    <div className="min-h-screen bg-pink-50 flex items-center justify-center px-6 py-20">
      <div className="bg-white shadow-xl rounded-3xl p-10 w-full max-w-lg">
        <h1 className="text-3xl font-bold text-pink-600 mb-6 text-center">Book Appointment</h1>

        {service && (
          <p className="text-gray-700 mb-4 text-center">
            You are booking: <span className="font-semibold">{service.title}</span>
          </p>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700 mb-1">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-600"
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-600"
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-1">Service</label>
            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-600"
            >
              {service ? (
                <option value={service.title}>{service.title}</option>
              ) : (
                <>
                  <option value="">Select Service</option>
                  <option value="Hair Cut & Styling">Hair Cut & Styling</option>
                  <option value="Hair Coloring">Hair Coloring</option>
                  <option value="Hair Treatment">Hair Treatment</option>
                  <option value="Makeup">Makeup</option>
                  <option value="Facial & Skin Care">Facial & Skin Care</option>
                  <option value="Manicure & Pedicure">Manicure & Pedicure</option>
                </>
              )}
            </select>
          </div>

          <div className="flex gap-4">
            <div className="w-1/2">
              <label className="block text-gray-700 mb-1">Date</label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-600"
              />
            </div>
            <div className="w-1/2">
              <label className="block text-gray-700 mb-1">Time</label>
              <input
                type="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-600"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-pink-600 text-white py-3 rounded-full font-semibold hover:bg-pink-700 transition"
          >
            Confirm Booking
          </button>
        </form>
      </div>
    </div>
  );
}

export default BookingForm;
