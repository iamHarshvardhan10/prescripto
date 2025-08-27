import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/core/Navbar";
import Home from "./pages/Home";
import Sign from "./pages/Sign";
import Footer from "./components/core/Footer";
import AllDoctors from "./pages/AllDoctors";
import About from "./pages/About";
import Contact from "./pages/Contact";
import VerifyOtp from "./pages/VerifyOtp";
import Login from "./pages/Login";
const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sign" element={<Sign />} />
          <Route path="/login" element={<Login />} />

          <Route path="/all-doctors" element={<AllDoctors />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />

          {/* VERIFY OTP */}
          <Route path="/verify-otp" element={<VerifyOtp />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
