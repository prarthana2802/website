import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import './NavigationBar.css'
import { useEffect, useRef, useState } from 'react'
import React from 'react';
import ReactDOM from 'react-dom';


const NavigationBar = () => {

  const [navBackground, setNavBackground] = useState(false)
  const navRef = useRef()
  navRef.current = navBackground
  useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY > 50
      if (navRef.current !== show) {
        setNavBackground(show)
      }
    }
    document.addEventListener('scroll', handleScroll)
    return () => {
      document.removeEventListener('scroll', handleScroll)
    }
  }, [])

    return(
        <>
  <Navbar collapseOnSelect expand="xl"  sticky="top" style={{ transition: '1s ease',backgroundColor: navBackground ? 'black' : '#e1dfdb', }}>
  <Container>
      <Navbar.Brand href="#home" style={{color: navBackground ? '#e1dfdb' : 'black'}}>Prarthana Anand</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="ms-auto">
        <Nav.Link style={{color: navBackground ? '#e1dfdb' : 'black'}} href="#home"><b>Home</b></Nav.Link>
        <Nav.Link style={{color: navBackground ? '#e1dfdb' : 'black'}} href="#work">Work Experience</Nav.Link>
        <Nav.Link style={{color: navBackground ? '#e1dfdb' : 'black'}} href="#projects">Projects</Nav.Link>
        <Nav.Link style={{color: navBackground ? '#e1dfdb' : 'black'}} href="#yfd">YouthForDementia</Nav.Link>
        <Nav.Link style={{color: navBackground ? '#e1dfdb' : 'black'}} href="#outreach">Social Outreach</Nav.Link>
        <Nav.Link style={{color: navBackground ? '#e1dfdb' : 'black'}} href="#extra">Extra Curriculars</Nav.Link>
        <Nav.Link style={{color: navBackground ? '#e1dfdb' : 'black'}} href="#more">More</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
        </>
    )
}

export default NavigationBar;