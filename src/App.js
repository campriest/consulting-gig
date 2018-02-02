import React, { Component } from 'react';
import './App.css';
import Home from './Home.js';
import Work from './Work.js';
import About from './About.js';
import Contact from './Contact.js';
import Client from './Client.js';
import Strategy from './Strategy.js';
import Insights from './Insights.js';

import { BrowserRouter,Router, Route, Switch, Link } from 'react-router-dom';


class App extends Component {


  render() {
    return (

      <BrowserRouter>

        <Switch>
          <Route exact path = "/" component = {Home}/>
          <Route path = "/work" component = {Work}/>
          <Route path = "/about" component = {About}/>
          <Route path = "/contact" component = {Contact}/>
          <Route path = "/client" component = {Client}/>
          <Route path = "/strategy" component = {Strategy}/>
          <Route path = "/insights" component = {Insights}/>
        </Switch>

      </BrowserRouter>




    );
  }
}

export default App;
