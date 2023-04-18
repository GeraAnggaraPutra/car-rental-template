import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Services } from "./pages/Services";
import { Pricing } from "./pages/Pricing";
import { Cars } from "./pages/Cars";
import { Blog } from "./pages/Blog";
import { Contact } from "./pages/Contact";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/about" element={<About />}></Route>
        <Route exact path="/services" element={<Services />}></Route>
        <Route exact path="/pricing" element={<Pricing />}></Route>
        <Route exact path="/cars" element={<Cars />}></Route>
        <Route exact path="/blog" element={<Blog />}></Route>
        <Route exact path="/contact" element={<Contact />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
