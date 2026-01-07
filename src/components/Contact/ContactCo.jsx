function ContactCo() {
  return (
    <div>
      

      {/* Hero Section */}
      <section className="bg-pink-50 py-20 text-center px-6">
        <h1 className="text-4xl font-bold text-gray-800">Contact Us</h1>
        <p className="mt-4 text-gray-600 max-w-xl mx-auto">
          Get in touch with our women-only beauty salon. We’re happy to hear from you.
        </p>
      </section>

      {/* Contact Form + Info */}
      <section className="px-6 md:px-10 py-20 grid md:grid-cols-2 gap-12">
        {/* Contact Form */}
        <form className="bg-white shadow-lg rounded-xl p-8 space-y-5">
          <h2 className="text-2xl font-bold text-gray-800 text-center">Send Us a Message</h2>
          <input
            type="text"
            placeholder="Your Name"
            className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-400"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-400"
          />
          <textarea
            rows="4"
            placeholder="Your Message"
            className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-400"
          />
          <button
            type="button"
            className="w-full bg-pink-600 text-white py-3 rounded-lg hover:bg-pink-700 transition"
          >
            Send Message
          </button>
        </form>

        {/* Contact Info */}
        <div className="space-y-6">
          <div className="p-6 shadow rounded-lg text-center">
            <h3 className="text-xl font-semibold text-pink-600 mb-2">Location</h3>
            <p className="text-gray-600">Mogadishu, Somalia</p>
          </div>

          <div className="p-6 shadow rounded-lg text-center">
            <h3 className="text-xl font-semibold text-pink-600 mb-2">Phone</h3>
            <p className="text-gray-600">+252 61 234 5678</p>
          </div>

          <div className="p-6 shadow rounded-lg text-center">
            <h3 className="text-xl font-semibold text-pink-600 mb-2">Email</h3>
            <p className="text-gray-600">info@beautysalon.com</p>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="px-6 md:px-10 py-20">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Our Location</h2>
        <img
          src="/images/map.jpg"
          alt="Salon Location Map"
          className="rounded-xl shadow-lg mx-auto"
        />
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 text-center py-4 text-gray-600">
        © 2026 Beauty Salon. All rights reserved.
      </footer>
    </div>
  );
}

export default ContactCo;
