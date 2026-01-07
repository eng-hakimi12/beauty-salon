import ServiceCard from "./ServiceCard";

function ServicesPreview() {
  return (
    <section className="px-10 py-20 bg-white">
      <h2 className="text-3xl font-bold text-center mb-10">
        Our Services
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <ServiceCard
          title="Hair Cut & Styling"
          description="Professional hair cutting and modern styling."
        />

        <ServiceCard
          title="Makeup"
          description="Bridal and event makeup services."
        />

        <ServiceCard
          title="Facial & Skin Care"
          description="Skin care and facial treatments."
        />
      </div>
    </section>
  );
}

export default ServicesPreview;
