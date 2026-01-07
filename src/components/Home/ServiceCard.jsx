function ServiceCard({ title, description }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
      <h3 className="text-xl font-semibold text-pink-600">
        {title}
      </h3>
      <p className="text-gray-600 mt-2">
        {description}
      </p>
    </div>
  );
}

export default ServiceCard;
