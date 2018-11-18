import React, { Component } from "react";
import { render } from "react-dom";
import Navbar from "./components/navbar";
import Landing from "./components/landing";
import About from "./components/about";
import Portfolio from "./components/portfolio";
import Footer from "./components/footer";

//import "./styles.css";

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Navbar />
        <Landing />
        <About />
        <Portfolio />
        <Footer />
      </div>
    );
  }
}

render(<App />, document.getElementById("app"));
