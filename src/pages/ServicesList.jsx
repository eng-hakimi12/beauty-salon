import ServiceCard from "../components/Services/ServiceCard";

function ServicesList() {
  const services = [
    {
      title: "Hair Cut & Styling",
      description: "Professional hair cutting and modern styling.",
      price: "$30",
      location: "Salon A, Main Street",
      image: "https://i.pinimg.com/1200x/d7/ce/22/d7ce225a3bbf8cb81ac20857ce6372a6.jpg",
      details: "We use premium scissors and styling products. Duration: 45 mins."
    },
    {
      title: "Hair Coloring",
      description: "Transform your hair with premium coloring techniques.",
      price: "$50",
      location: "Salon A, Main Street",
      image: "https://i.pinimg.com/736x/67/15/fe/6715fe4bfd7c4505d84454c8f7bebbd1.jpg",
      details: "Includes consultation and premium hair color. Duration: 60 mins."
    },
    {
      title: "Hair Treatment",
      description: "Repair and nourish your hair with our treatments.",
      price: "$40",
      location: "Salon B, Downtown",
      image: "https://i.pinimg.com/1200x/4e/f4/a8/4ef4a87c4da99edefc6c7b97d173a5cc.jpg",
      details: "Deep conditioning treatment. Duration: 50 mins."
    },
  ];

  // Show only first 2 for homepage summary
  const topTwoServices = services.slice(0, 2);

  return (
    <div>
      <section className="bg-pink-50 py-20 text-center px-6">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Our Services</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Explore our top beauty services. Click "View Details" for more information.
        </p>
      </section>

      <section className="px-6 md:px-10 py-20 grid grid-cols-1 md:grid-cols-2 gap-8">
        {topTwoServices.map((service, index) => (
          <ServiceCard
            key={index}
            title={service.title}
            description={service.description}
            price={service.price}
            image={service.image}
            details={service.details}
            location={service.location}
          />
        ))}
      </section>
    </div>
  );
}

export default ServicesList;
