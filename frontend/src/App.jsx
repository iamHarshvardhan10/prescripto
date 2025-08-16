import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/core/Navbar";
import Home from "./pages/Home";
import Sign from "./pages/Sign";
const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sign" element={<Sign />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
