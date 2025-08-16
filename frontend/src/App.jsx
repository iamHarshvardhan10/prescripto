import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/core/Navbar";
import Home from "./pages/Home";
const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
