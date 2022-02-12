import React from 'react';
import Carousel from 'react-bootstrap/Carousel'
import './Outreach.css'
import pic1 from '../images/1st.png'
import pic2 from '../images/2nd.png'
import pic3 from '../images/3rd.png'
import pic4 from '../images/4th.png'


const Outreach = () => {
    return (
<div id="yfd" className='yfd'>
        <h1>Social Outreach</h1>
        
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



    </div>)

    
    
    
//     <div id="outreach" className='carousel-wrapper-outreach so'>
//         <h1>Social Outreach</h1>
// <Carousel fade>
//   <Carousel.Item interval={3000}>
//     <img
//       className="d-block w-100 max-vh-100"
//       src={pic1}
//       alt="First slide"
//     />

//   </Carousel.Item>
//   <Carousel.Item interval={3000}>
//     <a href='https://www.nightingaleseldercare.com/'><img
//       className="d-block w-100 max-vh-100"
//       src={pic2}
//       alt="Second slide"
//     /></a>

//   </Carousel.Item>

//   <Carousel.Item interval={3000}>
//     <img
//       className="d-block w-100 max-vh-100"
//       src={pic3}
//       alt="Third slide"
//     />
//   </Carousel.Item>
// </Carousel>
//     </div>)
}

export default Outreach;