import React, { Component } from "react";
import "./styles/landing.css";

class Landing extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="intro-wrapper">
        <div className="intro-name">
          <h1>Howdy, I'm Dustin!</h1>
        </div>
        <div className="intro-tagline">
          <h2>Full Stack Dev | Board Gamer | Cool Dude</h2>
        </div>
      </div>
    );
  }
}

export default Landing;
