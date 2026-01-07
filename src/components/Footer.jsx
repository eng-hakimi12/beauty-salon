import { FaFacebookF, FaInstagram, FaTiktok, FaPhone, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-200 pt-12 pb-6">
      {/* Top section: info + links */}
      <div className="max-w-6xl mx-auto px-6 md:flex md:justify-between md:items-start">
        {/* About / Logo */}
        <div className="mb-8 md:mb-0">
          <h2 className="text-2xl font-bold text-pink-600 mb-4">Beauty Salon</h2>
          <p className="text-gray-400 max-w-sm">
            Premium beauty services for modern women. Haircuts, styling, makeup, facials, and more.
          </p>
        </div>

        {/* Contact Info */}
        <div className="mb-8 md:mb-0">
          <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
          <ul className="space-y-2 text-gray-400">
            <li className="flex items-center"><FaMapMarkerAlt className="mr-2 text-pink-600"/> 123 Main Street, City</li>
            <li className="flex items-center"><FaPhone className="mr-2 text-pink-600"/> +252 61 234 5678</li>
            <li className="flex items-center"><FaEnvelope className="mr-2 text-pink-600"/> info@beautysalon.com</li>
          </ul>
        </div>

        {/* Quick Links */}
        <div className="mb-8 md:mb-0">
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-400">
            <li className="hover:text-pink-600 cursor-pointer">Home</li>
            <li className="hover:text-pink-600 cursor-pointer">Services</li>
            <li className="hover:text-pink-600 cursor-pointer">About</li>
            <li className="hover:text-pink-600 cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-pink-600 transition"><FaFacebookF /></a>
            <a href="#" className="hover:text-pink-600 transition"><FaInstagram /></a>
            <a href="#" className="hover:text-pink-600 transition"><FaTiktok /></a>
          </div>
        </div>
      </div>

      {/* Bottom copyright */}
      <div className="mt-12 border-t border-gray-700 pt-6 text-gray-400 text-sm">
        © 2026 Beauty Salon. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
