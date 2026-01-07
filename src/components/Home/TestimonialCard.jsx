function TestimonialCard() {
  return (
    <section className="bg-pink-50 px-6 md:px-10 py-20">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
        What Our Clients Say
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* Testimonial 1 */}
        <div className="bg-white p-6 rounded-xl shadow text-center">
          <img
            src="https://i.pinimg.com/736x/aa/7d/48/aa7d48d2b205e1684a5796f0ac4f727c.jpg"
            alt="Client Amina"
            className="w-24 h-24 mx-auto rounded-full object-cover border-4 border-pink-200"
          />
          <p className="text-gray-600 italic mt-4">
            "Amazing service! The staff is very professional and friendly."
          </p>
          <h4 className="mt-4 font-semibold text-pink-600">
            Amina
          </h4>
        </div>

        {/* Testimonial 2 */}
        <div className="bg-white p-6 rounded-xl shadow text-center">
          <img
            src="https://i.pinimg.com/1200x/3a/82/a0/3a82a04c7e1c88e08a36950e07cd3949.jpg"
            alt="Client Hodan"
            className="w-24 h-24 mx-auto rounded-full object-cover border-4 border-pink-200"
          />
          <p className="text-gray-600 italic mt-4">
            "Best women-only salon experience. Highly recommended!"
          </p>
          <h4 className="mt-4 font-semibold text-pink-600">
            Hodan
          </h4>
        </div>

        {/* Testimonial 3 */}
        <div className="bg-white p-6 rounded-xl shadow text-center">
          <img
            src="https://i.pinimg.com/736x/f6/ae/42/f6ae42ef81519950915e98b2de4952de.jpg"
            alt="Client Fadumo"
            className="w-24 h-24 mx-auto rounded-full object-cover border-4 border-pink-200"
          />
          <p className="text-gray-600 italic mt-4">
            "Clean environment and beautiful results every time."
          </p>
          <h4 className="mt-4 font-semibold text-pink-600">
            Fadumo
          </h4>
        </div>

      </div>
    </section>
  );
}

export default TestimonialCard;
