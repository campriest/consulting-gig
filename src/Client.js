import React, {Component} from 'react';


class Client extends Component {

  constructor(props){
    super(props);

    this.state = {

      posts: []

    }



  }


  // componentWillMount(){
  //
  //   axios.get('')
  //
  //     .then(function(response){
  //
  //         console.log(response);
  //
  //         this.setState({
  //
  //           posts: response
  //
  //         });
  //
  //         console.log("current state: " + posts);
  //
  //
  //     })
  //     .catch(function (error){
  //
  //       console.log(error);2
  //     });
  //
  //
  // }





  render(){

    return(
      <div>


        <h1>Contact</h1>
      </div>


    );


  }



}
export default Client;
