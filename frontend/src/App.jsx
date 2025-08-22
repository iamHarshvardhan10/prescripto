import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/core/Navbar";
import Home from "./pages/Home";
import Sign from "./pages/Sign";
import Footer from "./components/core/Footer";
const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sign" element={<Sign />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
