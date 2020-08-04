import React from "react";
import Home from "../pages/Home"
import About from "../pages/About"
import Blog from "../pages/Blog"
import Contact from "../pages/Contact"
import Gallery from "../pages/Gallery"
import Pricing from "../pages/Pricing"
import Services from "../pages/Services"
import Vetenarian from "../pages/Vetenarian"
import { Route } from "react-router-dom";
import NavBar from "./NavBar";

const App = () => {
  return (
    <section className="container-all">
      <switch>
        <NavBar />
        <Route path="/" component={Home} exact />
        <Route path="/about" component={About} />
        <Route path="/blog" component={Blog} />
        <Route path="/contact" component={Contact} />
        <Route path="/gallery" component={Gallery} />
        <Route path="/pricing" component={Pricing} />
        <Route path="/services" component={Services} />
        <Route path="/vetenarian" component={Vetenarian} />

        {/* <Nav /> */}
        
      </switch>
    </section>
  );
};

export default App;
