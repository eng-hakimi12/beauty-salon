function ValuesSection() {
  return (
    <section className="bg-white px-6 md:px-10 py-20">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
        Why Choose Us
      </h2>

      <div className="grid md:grid-cols-3 gap-8 text-center">
        
        <div className="p-6 rounded-lg shadow">
          <h3 className="text-xl font-semibold text-pink-600 mb-2">
            Women Only
          </h3>
          <p className="text-gray-600">
            A safe and private space designed exclusively for women.
          </p>
        </div>

        <div className="p-6 rounded-lg shadow">
          <h3 className="text-xl font-semibold text-pink-600 mb-2">
            Professional Team
          </h3>
          <p className="text-gray-600">
            Skilled and experienced beauty professionals you can trust.
          </p>
        </div>

        <div className="p-6 rounded-lg shadow">
          <h3 className="text-xl font-semibold text-pink-600 mb-2">
            Quality Service
          </h3>
          <p className="text-gray-600">
            Premium products and modern techniques for the best results.
          </p>
        </div>

      </div>
    </section>
  );
}

export default ValuesSection;
