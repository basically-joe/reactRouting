import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route} from "react-router-dom";
import About from "./About";
import Home from "./Home";
import Pricing from "./Pricing";
import Contact from "./Contact";

class Main extends Component {
  constructor() {
    super();
    this.state = { page: null };


  }

  render() {
    return (
      <Router>
          <Fragment>
            <Route exact path="/" component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/pricing" component={Pricing}/>
            <Route path="/contact" component={Contact}/>
          </Fragment>
      </Router>
    );
  }

 

  
}

export default Main;
