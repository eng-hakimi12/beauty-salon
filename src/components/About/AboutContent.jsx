
function AboutContent() {
  return (
    <section className="px-6 md:px-10 py-20 grid md:grid-cols-2 gap-10 items-center">
      
      <div>
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Who We Are
        </h2>
        <p className="text-gray-600 leading-relaxed">
          We are a professional women-only beauty salon offering high-quality
          services in a safe, clean, and comfortable environment. Our goal is
          to help women feel confident, relaxed, and beautiful.
        </p>

        <p className="text-gray-600 leading-relaxed mt-4">
          Our experienced team uses modern techniques and premium products
          to deliver excellent results every time.
        </p>
      </div>

      <div>
        <img
          src="https://i.pinimg.com/736x/59/a8/98/59a8982c3a444f5bb3f8199f6f7a29be.jpg"
          alt="About Salon"
          className="rounded-xl shadow-lg"
        />
      </div>

    </section>
  );
}

export default AboutContent;
