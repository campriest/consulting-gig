import React, {Component} from 'react';

const pageMenu = {
  position: 'absolute',
  marginTop: 400,
  marginLeft: '84%',
  color: 'rgb(255,255,255)',
  fontFamily: 'Montserrat',
  fontSize: '40px'
}



class Page extends Component{

    constructor(props){
        super(props);

            this.state = {

              page: 'Hi!'

            }

    }

  render(){

      return(


                <div>

                  <div style = {pageMenu}>

                    <h1>{this.state.page}</h1>

                  </div>



                </div>


      );
  }
}

export default Page;
