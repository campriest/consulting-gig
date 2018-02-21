import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Paper from 'paper';
//import { CSSTransition } from 'react-transition-group';
import Animate from 'react-move/Animate';
import './Menu.css'
import { easeExpOut } from 'd3-ease';
//import { Circle} from 'react-paper-bindings';
//var CSSTransitionGroup = require('react-transition-group/CSSTransitionGroup');
import Page from './Page.js';
import Work  from './Work.js';
import Home from './Home.js';

//import Icon from './Icon.js';
// const menuBackground = {
//   position: 'absolute',
//   width: '100%',
//   height: '100%',
//   backgroundColor: 'rgb(0,0,0)'
// }

const boxStyle = {
  position: 'absolute',
  marginLeft: '85%',
  width: '200px',
  height: '200px'
}

const barOne = {
  position: 'absolute',
  top: '170px',
  marginLeft: '85%',
  height: '2px',
  width: '50px',
  backgroundColor: 'rgb(255,255,255)',

}

const barTwo = {
  position: 'absolute',
  top : '180px',
  marginLeft: '6px',
  height: '2px',
  width: '50px',
  backgroundColor: 'rgb(255,255,255)',
}
const barThree = {
  position: 'absolute',
  top : '190px',
  marginLeft: '6px',
  height: '2px',
  width: '300px',
  backgroundColor: 'rgb(255,255,255)'

}
const workMenu = {
  position: 'absolute',
  top: '160px',
  marginLeft: '10%' ,
  height: '200px',
  width: '200px',
  color: 'rgb(255,255,255)',
  fontFamily:'Montserrat'
}

const aboutMenu = {
  position: 'absolute',
  top: '160px',
  marginLeft: '33%',
  height: '200px',
  width: '200px',
  color: 'rgb(255, 255,255)',
  fontFamily: 'Montserrat',

}

const contactMenu = {
  position: 'absolute',
  top: '160px',
  marginLeft: '58%',
  height: '200px',
  width: '200px',
  color: 'rgb(255, 255,255)',
  fontFamily: 'Montserrat'


}

const clientMenu = {
  position: 'absolute',
  top: '460px',
  marginLeft: '10%',
  height: '200px',
  width: '200px',
  color: 'rgb(255, 255,255)',
  fontFamily: 'Montserrat'
}

const strategyMenu = {
  position: 'absolute',
  top: '460px',
  marginLeft: '33%',
  height: '200px',
  width: '200px',
  color: 'rgb(255, 255,255)',
  fontFamily: 'Montserrat'
}

const insightMenu = {
  position: 'absolute',
  top: '460px',
  marginLeft: '58%',
  height: '200px',
  width: '200px',
  color: 'rgb(255, 255,255)',
  fontFamily: 'Montserrat'
}

class Menu extends Component{
  constructor(props){
    super(props);

    this.state = {
        open: false,
        display: false

    }
    //this.onMove = this.onMove.bind(this);
  }


  onMove = () => {
    this.setState({
      open: !this.state.open,
      display: !this.state.display,

    });
    console.log('works');
    //console.log('works');
    //this.props.setState(this.state.open);

  }



    render(){
        return(

            <div>
              
              <Animate
                  start = {() => ({
                    x: 0,

                  })}
                  update = {() => ({
                    x: [this.state.display ? 100 : 0],
                    timing: {duration: 900, ease: easeExpOut}
                  })}
              >
              {(state) =>{
                  const { x } = state;

                  return (
                    <div style = {{
                      position: 'absolute',
                      width: '100%',
                      height: `${x}%`,
                      backgroundColor: 'rgb(0,0,0)'

                      }}
                      />
                  );
                }}
              </Animate>
              <Animate
                  start = {() => ({

                    x: 0,

                  })}

                  update = {() => ({

                    x: [this.state.display ? 100 : 0],
                    timing: {duration: 900, ease: easeExpOut}

                  })}

                >

                  {(state) => {
                    const { x } = state;

                      return(
                          <div style = {{
                            display: 'inline',
                            position: 'absolute',
                            marginLeft: '75%',
                            width: '1px',
                            height: `${x}%`,
                            backgroundColor: 'rgb(255,255,255)'


                            }}
                          />

                      );
                  }}

                </Animate>

                <div>

                </div>

                <Animate

                  start = {() => ({

                    x: 0,

                  })}

                  update = {() => ({

                    x: [this.state.display ? 100 : 0],
                    timing: {duration: 800, ease: easeExpOut}

                  })}

                  >
                    {(state) => {
                      const { x } = state;

                        return(
                            <div style = {{
                              display: 'inline',
                              position: 'absolute',
                              marginLeft: '50%',
                              width: '1px',
                              height: `${x}%`,
                              backgroundColor: 'rgb(255,255,255)'


                              }}
                            />
                        );
                    }}

                  </Animate>


                  <div>

                  </div>


                  <Animate

                    start = {() => ({

                      x: 0,

                    })}

                    update = {() => ({

                      x: [this.state.display ? 100 : 0],
                      timing: {duration: 700, ease: easeExpOut}

                    })}

                    >
                      {(state) => {
                        const { x } = state;

                          return(
                              <div style = {{
                                display: 'inline',
                                position: 'absolute',
                                marginLeft: '25%',
                                width: '1px',
                                height: `${x}%`,
                                backgroundColor: 'rgb(255,255,255)'


                                }}
                              />
                          );
                      }}

                    </Animate>


              {/* {this.state.display && <div className = "lineOne"></div>} */}



                                      {/* <div>

                                      </div> */}

                                  {/* {this.state.display && <div className = "lineTwo"></div>} */}



                                                {/* <div>

                                                </div>

                                        {this.state.display && <div className = "lineThree"></div>} */}




                                                        <div>

                                                        </div>
                                            <Animate

                                                start = {() => ({

                                                          x: 0 ,


                                                })}

                                                update = {() => ({

                                                  x: [this.state.display ? 100  : 0 ],
                                                  timing: { duration: 750, ease: easeExpOut}

                                                })}
                                            >
                                              {(state) => {

                                                  const { x } = state;

                                                  return (

                                                    <div style = {{
                                                      position: 'absolute',
                                                      top: '50%',
                                                      width: `${x}%`,
                                                      height: '1px',
                                                      backgroundColor: 'rgb(255,255,255)',



                                                      }}
                                                    />
                                                  );
                                              }}

                                          </Animate>


                                          {/* //{this.state.display &&  <div className = "middleLine"></div>} */}


                    <Animate

                        start = {() => ({
                              x: 6,

                        })}

                        update = {() => ({
                              x: [this.state.open ? 120 : 6],
                              timing: { duration: 750, ease: easeExpOut },

                        })}
                      >


                        {(state) => {
                            const { x } = state;

                            return (

                              <div style = {boxStyle} onClick = {this.onMove}>



                                  <div style = {{

                                    position: 'absolute',
                                    top: '170px',
                                    marginLeft:'-6px',
                                    height: '2px',
                                    width: '50px',
                                    backgroundColor: 'rgb(255,255,255)',
                                    WebkitTransform: `translate(${x}px, 0)`,
                                    transform: `translate(${x}px, 0)`,

                                    }}
                                  />

                                  <div className = "barTwo">
                                  </div>
                                  <div className = "barThree">
                                  </div>



                              </div>
                            );
                        }}

                   </Animate>







                                  {this.state.display && <div style = {workMenu} onClick = {this.onMove}><h1><Link to = "/work" style = {{textDecoration: 'none', color: 'rgb(255,255,255)' }}>Work</Link></h1></div>}
                                  {this.state.display && <div style = {aboutMenu} onClick = {this.onMove}><h1><Link to = "/about" style = {{textDecoration: 'none', color: 'rgb(255,255,255)' }}>About</Link></h1></div>}
                                  {this.state.display && <div style = {contactMenu} onClick = {this.onMove}><h1><Link to = "/contact" style = {{textDecoration: 'none', color: 'rgb(255,255,255)' }}>Contact</Link></h1></div>}
                                  {this.state.display && <div style = {clientMenu} onClick = {this.onMove}><h1><Link to = "/client" style = {{textDecoration: 'none', color: 'rgb(255,255,255)' }}>Client</Link></h1></div>}
                                  {this.state.display && <div style = {strategyMenu} onClick = {this.onMove}><h1><Link to = "/strategy" style = {{textDecoration: 'none', color: 'rgb(255,255,255)' }}>Strategy</Link></h1></div>}
                                  {this.state.display && <div style = {insightMenu} onClick = {this.onMove}><h1><Link to = "/insights" style = {{textDecoration: 'none', color: 'rgb(255,255,255)' }}>Insights</Link></h1></div>}

                                  {!this.state.display && <Page/>}




            </div>

        );
    }

}

export default Menu;
