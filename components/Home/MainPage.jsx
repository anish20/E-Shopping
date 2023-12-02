import React from 'react'
import { Container } from 'react-bootstrap';
import Slider from './Slider/Slider';
import BrandBadge from './BrandBadge/BrandBAdge';

function MainPageComponent() {
  return (
    <Container>
      <Slider/>
      <BrandBadge />
    </Container>
  )
}

export default MainPageComponent;
