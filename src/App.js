import React, { Component } from 'react';
import Navbar from './Components/Navbar/Navbar.js';
import About from './Components/About/About.js';
import Projects from './Components/Projects/Projects.js';
import Resume from './Components/Resume/Resume.js';
import Experience from './Components/Experience/Experience.js';
import Achievements from './Components/Achievements/Achievements.js';
import Comments from './Components/Comments/Comments.js';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';

class App extends Component {
  render() {
    return (
    <Router onUpdate={() => window.scrollTo(0, 0)}>
      <div className="container">
        	 {/* <Navbar/> */}
        	  <Switch>
               <Route exact name="index" path="/" component={About} />
              {/*<Route name="about" path="/about" component={About} />
              <Route name="about" path="/about" component={Experience} />
              <Route name="projects" path="/projects" component={Projects} />
              <Route name="achievements" path="/achievements" component={Achievements} />
              <Route name="resume" path="/resume" component={Resume} />
              <Route name="comments" path="/comments" component={Comments} /> */}
        	  </Switch>
    </div>
   </Router>
    );
  }
}

export default App;