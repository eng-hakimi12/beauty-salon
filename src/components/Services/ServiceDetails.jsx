import { useLocation, useNavigate } from "react-router-dom";

function ServiceDetails() {
  const location = useLocation();
  const navigate = useNavigate();
  const service = location.state;

  if (!service) {
    return (
      <div className="text-center py-20">
        <h1 className="text-3xl font-bold text-gray-800">Service not found!</h1>
        <button
          onClick={() => navigate("/services")}
          className="mt-6 bg-pink-600 text-white px-4 py-2 rounded hover:bg-pink-700"
        >
          Back to Services
        </button>
      </div>
    );
  }

  return (
    <div className="px-6 md:px-10 py-20 max-w-4xl mx-auto">
      <button
        onClick={() => navigate("/service")}
        className="mb-6 bg-gray-200 px-4 py-2 rounded hover:bg-gray-300 transition"
      >
        ← Back to Services
      </button>
      <img
        src={service.image}
        alt={service.title}
        className="w-full h-96 object-cover rounded-xl shadow"
      />
      <h1 className="text-3xl font-bold text-pink-600 mt-6">{service.title}</h1>
      <p className="text-gray-700 mt-4">{service.details}</p>
      <p className="text-gray-800 font-bold mt-4">Price: {service.price}</p>
      <p className="text-gray-600 mt-2">Location: {service.location}</p>
      <button
        onClick={() => navigate("/booking-form", { state: service })}
        className="mt-6 bg-pink-600 text-white px-6 py-3 rounded hover:bg-pink-700 transition"
      >
        Book Appointment
      </button>
    </div>
  );
}

export default ServiceDetails;
