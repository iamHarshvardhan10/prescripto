import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/core/Navbar";
import Home from "./pages/Home";
import Sign from "./pages/Sign";
import Footer from "./components/core/Footer";
import AllDoctors from "./pages/AllDoctors";
const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sign" element={<Sign />} />

          <Route path="/all-doctors" element={<AllDoctors />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
