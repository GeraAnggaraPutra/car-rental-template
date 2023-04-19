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
import { BlogSingle } from "./pages/BlogSingle";
import { CarDetail } from "./pages/CarDetail";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route
          exact
          path="/about"
          element={<About page="About Us" title="About Us" />}
        ></Route>
        <Route
          exact
          path="/services"
          element={<Services page="Services" title="Our Services" />}
        ></Route>
        <Route
          exact
          path="/pricing"
          element={<Pricing page="Pricing" title="Pricing" />}
        ></Route>
        <Route
          exact
          path="/cars"
          element={<Cars page="Cars" title="Choose Your Car" />}
        ></Route>
        <Route exact path="/blog" element={<Blog page="Blog" title="Our Blog" />}></Route>
        <Route
          exact
          path="/contact"
          element={<Contact page="Contact" title="Contact Us" />}
        ></Route>
        <Route
          exact
          path="/blog-detail"
          element={<BlogSingle page="Blog" title="Read Our Blog" />}
        ></Route>
        <Route
          exact
          path="/car-details"
          element={<CarDetail page="Car Details" title="Car Details" />}
        ></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
