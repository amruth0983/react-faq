import React, { Component } from "react";
import Faq from "./containers/Faq/Faq";

import "./App.css";
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h2>Vitafy</h2>
        </header>
        <Faq />
      </div>
    );
  }
}

export default App;
