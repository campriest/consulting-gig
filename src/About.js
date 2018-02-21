import React, {Component} from 'react';
const boxOne = {
  position: 'absolute',
  width: '84%',
  height: 400

  //backgroundColor: 'rgba(50,50,50, .6)'

}
const boxOneTitle = {
  textAlign:'center',
  top: '200px',
  fontFamily: 'Montserrat',
  fontSize: '56px',
  letterSpacing: '1px',
  color: 'rgb(255,255,255)'
}
const bar = {
  position: 'absolute',
  width: '25%',
  height: '1px'

}
class About extends Component {

  render(){
      return(
        <div>
          <div style = {boxOne}>
            <h1 style = {boxOneTitle}>Grid is a solutions company.</h1>
              <div style = {bar}></div>
          </div>
        </div>
    );
  }
}

export default About;
