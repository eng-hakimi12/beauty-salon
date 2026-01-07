function HeroSection() {
  return (
    <section className="flex flex-col md:flex-row items-center px-10 py-20 bg-pink-50">
      
      <div className="md:w-1/2 space-y-6">
        <h2 className="text-4xl font-bold text-gray-800">
          Women Only <span className="text-pink-600">Beauty Salon</span>
        </h2>

        <p className="text-gray-600">
          Experience beauty, comfort, and professional care in a safe
          women-only environment.
        </p>

        <button className="bg-pink-600 text-white px-6 py-3 rounded hover:bg-pink-700">
          Book Appointment
        </button>
      </div>

      <div className="md:w-1/2 mt-10 md:mt-0">
        <img
          src="https://i.pinimg.com/1200x/a2/7f/d0/a27fd0f39a3ee1dd963c3cdbf7b081aa.jpg"
          alt="Beauty Salon"
          className="rounded-lg shadow-lg"
        />
      </div>

    </section>
  );
}

export default HeroSection;
