import "./styles.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Routes/Home";
import Contact from "./components/Routes/Contact";
import Service from "./components/Routes/Service";
import About from "./components/Routes/About";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Service" element={<Service />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </div>
  );
}
