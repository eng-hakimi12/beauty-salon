import {Link} from "react-router-dom"

function Header() {
  return (
    <nav className="flex justify-between items-center px-10 py-4 bg-white shadow">
      <h1 className="text-2xl font-bold text-pink-600">
        Beauty Salon
      </h1>

      <ul className="flex gap-6 text-gray-700 font-medium">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/service">Service</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
