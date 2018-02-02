import React from 'react';
import Paper from 'paper';


import PaperContainer, { Circle, Layer } from '@psychobolt/react-paperjs';

const Shapes = () => <Circle center = {[120, 50]} radius = {35} fillColor = "white" />;

const Icon = (props) => (

    <div>

        <PaperContainer {...props}>

            <Circle center = {[80, 50]} radius = {35} fillColor = "red" />

            <Layer>

                <Shapes />

            </Layer>
          </PaperContainer>
    </div>

);

export default Icon;
