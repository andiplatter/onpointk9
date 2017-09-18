import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './handlers/Home';
import Services from './handlers/Services';
import Contact from './handlers/Contact';
import Appointments from './handlers/Appointments';

import Login from './handlers/Login';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route path="/services" component={Services} />
          <Route path="/services" component={Services} />
          <Route path="/contact" component={Contact} />
          <Route path="/services" component={Services} />
          <Route path="/appointments" component={Appointments} />
          <Route path="/" component={Home} />
        </Switch>
      </div>
    );
  }
}

export default App;
