import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import {Link} from 'react-router-dom'
import {Button} from 'react-bootstrap'

const Slider = () => {
  return (
    <div>
    <Carousel >
    <Carousel.Item interval={3000}>
      <img width={'10%'} height={650}
        className=" w-100 rounded mx-auto d-block"
        src="./img/first.jpeg"
        alt="First slide"
      />
     
    </Carousel.Item>
    <Carousel.Item interval={3000}>
    <img width={'50%'} height={650}
        className="d-block w-100"
        src="./img/second.jpeg"
        alt="Second slide"
      />
      <Carousel.Caption>
        
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item interval={3000}>
    <img width={'50%'} height={650}
        className="d-block w-100"
        src="./img/three.jpeg"
        alt="Third slide"
      />
      <Carousel.Caption>
        
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
  </div>
  )
}

export default Slider