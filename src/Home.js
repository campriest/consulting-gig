import React, { Component } from 'react';
import ReactDom from 'react-dom';
import Menu from './Menu.js';
import Page from './Page.js';
import './Home.css';
import { easeExpOut } from 'd3-ease';
import Animate from 'react-move/Animate';
import Graph from './Graph';


//import Animate from 'react-move/Animate';
//import { easeExpOut } from 'd3-ease';


//import { CSSTransitionGroup } from 'react-transition-group';
//var CSSTransitionGroup = require('react-transition-group/CSSTransitionGroup');

const homeBackground = {
position: 'absolute',
width: '100%',
height: '100%',
backgroundColor: 'rgb(0,0,0)'
}


class Home extends Component{

  constructor(props){
    super(props);
      this.state = {
        open: false
      }
  }


//call back for parent to child
    getState = (state) => {
        this.setState({

            open: !state

        })
    }


  render(){
      return(
        <div>
            <div style = {homeBackground}>
              {!this.state.open && <Graph/>}
            </div>
              <Menu setState = {this.getState}/>
        </div>
      );
  }
}


export default Home;
