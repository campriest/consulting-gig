import React, { Component } from 'react';
import './App.css';
import Home from './Home.js';
import Work from './Work.js';
import About from './About.js';
import Contact from './Contact.js';
import Client from './Client.js';
import Strategy from './Strategy.js';
import Insights from './Insights.js';
import Menu from './Menu.js';

import { BrowserRouter,Router, Route, Switch, Link } from 'react-router-dom';


class App extends Component {


  render() {
    return (

      <div>

          <Switch>
            <Route exact path = "/" component = {Home}/>
            <Route exact path = "/work" component = {Work}/>
            <Route exact path = "/about" component = {About}/>
            <Route exact path = "/contact" component = {Contact}/>
            <Route exact path = "/client" component = {Client}/>
            <Route exact path = "/strategy" component = {Strategy}/>
            <Route exact path = "/insights" component = {Insights}/>
        </Switch>
        <Menu/>
      </div>

    );
  }
}

export default App;
