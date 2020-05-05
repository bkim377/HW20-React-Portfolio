import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavTabs from "./components/NavTabs";
import Portfolio from "./components/pages/Portfolio";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div>
        <NavTabs />
        <Route exact path="/" component={About} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Route path="/contact" component={Contact} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
