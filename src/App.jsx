import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Home from "./React/Home";
import About from "./React/About";
import Contact from "./React/Contact";

function App() {
  return (
    <BrowserRouter>
      <div>
        <h1>My React Application</h1>

        {/* Navigation Links */}
        <nav>
          <Link to="/">Home</Link>{" | "}
          <Link to="/about">About</Link>{" | "}
          <Link to="/contact">Contact</Link>
        </nav>

        <hr />

        {/* Page Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;