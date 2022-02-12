import Container from "react-bootstrap/esm/Container";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import homepic from '../images/home.jpg'
import './HomeSection.css'
import React from 'react'

const HomeSection = () => {
    return(
    <div id="home"  className="home-section">
        <Container>
            <Row >
                <Col lg={true}>
                    <div className="about">
                        <h1>
                        Hi,I'm Prarthana!
                        </h1>
                        <p>
                        A fourth-year Computer Science undergraduate student at Ramaiah Institute of Technology in Bangalore, the Silicon Valley of India. I'm an automation and business analytics enthusiast. I'm also a professional badminton player and fashion model,in my free time I enjoy learning new languages,mountaineering, boxing and working with various NGOs.
                        </p>
                        <p><span><a href="https://drive.google.com/file/d/11mFdhtGSvK2M4py4LeaaQw5QWhWd4gYH/view?usp=sharing"><Button variant="outline-dark">View Resume</Button></a></span><span><a href="mailto:prarthanaanand@outlook.com"><i class="fas fa-envelope"></i></a></span><span><a href="https://www.linkedin.com/in/prarthana-anand-/"><i class="fab fa-linkedin"></i></a></span></p>
                    </div>
                </Col>
                <Col lg={true}>
                    <div className="home-pic">
                       <img src={homepic} />
                    </div>
                </Col>
            </Row>
        </Container>
    </div>)
}

export default HomeSection;