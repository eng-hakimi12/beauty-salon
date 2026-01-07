import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ServicesList from "./pages/ServicesList";
import ServiceDetails from "./components/Services/ServiceDetails"; // NEW
import BookingForm from "./pages/BookingForm";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/service" element={<ServicesList />} /> {/* note plural */}
        <Route path="/service-details" element={<ServiceDetails />} />
        <Route path="/booking-form" element={<BookingForm />} />

      </Routes>
      <Footer />
    </div>
  );
}

export default App;
