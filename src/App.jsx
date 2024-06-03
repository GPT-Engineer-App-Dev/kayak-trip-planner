import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import Map from "./pages/Map.jsx";
import Social from "./pages/Social.jsx";
import Navbar from "./components/Navbar.jsx";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route exact path="/map" element={<Map />} />
        <Route exact path="/social" element={<Social />} />
      </Routes>
    </Router>
  );
}

export default App;