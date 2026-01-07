import { useNavigate } from "react-router-dom";

function ServiceCard({ title, description, image, price, location, details }) {
  const navigate = useNavigate();

  const handleViewDetails = () => {
    navigate("/service-details", {
      state: { title, description, image, price, location, details }
    });
  };

  return (
    <div className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden">
      <img 
        src={image}
        alt={title}
        className="w-full h-[300px] object-cover rounded-t-xl"
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold text-pink-600 mb-2">{title}</h3>
        <p className="text-gray-600 mb-2">{description}</p>
        <p className="text-gray-800 font-bold mb-4">{price}</p>
        <button
          onClick={handleViewDetails}
          className="bg-pink-600 text-white px-4 py-2 rounded hover:bg-pink-700 transition"
        >
          View Details
        </button>
      </div>
    </div>
  );
}

export default ServiceCard;
