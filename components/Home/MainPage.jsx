import React from 'react'
import { Container } from 'react-bootstrap';
import Slider from './Slider/Slider';
import BadgeBrand from './BadgeBrand/BadgeBrand';

function MainPageComponent() {
  return (
    <Container>
      <Slider/>
      <BadgeBrand />
    </Container>
  )
}

export default MainPageComponent;
