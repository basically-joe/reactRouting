import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route} from "react-router-dom";
import About from "./About";
import Home from "./Home";
import Pricing from "./Pricing";
import Contact from "./Contact";
import NavBar from "./NavBar";

class Main extends Component {
  constructor() {
    super();
    this.state = { 
      
        pricing: [
          {level: "Hobby", cost: 0},
          {level: "Startup", cost: 10},
          {level: "Enterprise", cost: 100}
        ]
        
    };
  }

  render() {
    return (
      <Router>
          <Fragment>
            <NavBar />
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
