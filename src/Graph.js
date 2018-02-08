import React, {Component} from 'react';
import React3 from 'react-three-renderer';
import * as THREE from 'three';
import PropTypes from 'prop-types';


class Graph extends Component{

  // static propTypes = {
  //     width: React.PropTypes.number.isRequired,
  //     height: React.PropTypes.number.isRequired,
  // };

  constructor(props, context){
    super(props, context);

    this.cameraPosition = new THREE.Vector3(0, 0, 5);


    this.state = {

      boxRotation: new THREE.Euler(),

    }


  this.onAnimate = () => {

      this.setState({
          boxRotation: new THREE.Euler(
            this.state.boxRotation.x + 0.01,
            this.state.boxRotation.y + 0.01,
            0

          ),

      });
  };
}
  render(){

  const  width = window.innerWidth;
  const   height = window.innerHeight;


    return(
        <React3
          mainCamera = "camera"
          width = {width}
          height = {height}

          onAnimate = {this.onAnimate}

        >

          <scene>
              <perspectiveCamera
                name   = "camera"
                fov    = {75}
                aspect = {width / height}
                near   = {0.1}
                far    = {1000}

                position = {this.cameraPosition}

              />

            <mesh
              rotation = {this.state.boxRotation}
            >
              <boxGeometry
                width = {1}
                height = {1}
                depth = {1}
              />

            <meshBasicMaterial
              color = {'rgb(255,255,255)'}
            />

        </mesh>
      </scene>
    </React3>
    );
  }
}

export default Graph;
