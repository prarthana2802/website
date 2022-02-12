import React from 'react';
import Carousel from 'react-bootstrap/Carousel'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './YouthForDementia.css'
import pic1 from '../images/1.png'
import pic2 from '../images/2.png'
import pic3 from '../images/3.png'


const YouthForDementia = () => {
    return (<div id="yfd" className='yfd'>
        <h1>Youth For Dementia</h1>
        
<div className='carousel-wrapper-div'>
<Carousel fade>
  <Carousel.Item interval={3000}>
    <img
      className="d-block w-100 max-vh-100"
      src={pic1}
      alt="First slide"
    />

  </Carousel.Item>
  <Carousel.Item interval={3000}>
    <img
      className="d-inline-block w-100 max-vh-100"
      src={pic2}
      alt="Second slide"
    />

  </Carousel.Item>
  <Carousel.Item interval={3000}>
    <img
      className="d-block w-100 max-vh-100"
      src={pic3}
      alt="Third slide"
    />

  </Carousel.Item>
</Carousel>
</div>
<div className='carousel-wrapper '>
<Row>
  <Col lg={true}><a href='https://www.instagram.com/p/B22L55FHAbM/'>Click here to watch the full U-25 summit video</a></Col>
  <Col lg={true}><a href='https://www.instagram.com/tv/CEL4jJZjWOr/'>Click here to watch the full Global Youth India's- International Youth Day video</a></Col>
</Row>
</div>



    </div>)
}

export default YouthForDementia;