import React from 'react'
import './ExCur.css'
import Col from 'react-bootstrap/esm/Col';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Card from './Card';
import modelling from '../images/modelling.png'
import badminton from '../images/badminton.png'
import writing from '../images/writing.png'
import spotify from '../images/spotify.png'
import upcycling from '../images/upcycling.jpg'
import mountain from '../images/mountain.jpeg'
import { motion } from 'framer-motion';

const data = [
    {
        title:"Badminton",
        image: badminton ,
        desc:"I started playing professional,competitive sport at the age of  6:when I was selected to train at the prestigious Prakash Padukone Badminton Academy. I began representing my...", 
        detailedDesc:"I started playing professional,competitive sport at the age of  6:when I was selected to train at the prestigious Prakash Padukone Badminton Academy. I began representing my state at the age of 10, and reached a career high ranking of number 3. I also captained my university team that won multiple tournaments. Rigorous disciplined training under an All-England champion along with dealing with the inevitability of failure has instilled a sense of focus and grit in me I'm not quite sure I could have found otherwise. "
    },
    
    {
        title:"Modelling ",
        image: modelling ,
        desc:"I began modelling at the age of 18 and have thoroughly enjoyed it ever since. Some of the brands I've modelled for include Marie Claire, Superkicks, Max Fashion and Masera...",
        detailedDesc:"I began modelling at the age of 18 and have thoroughly enjoyed it ever since. Some of the brands I've modelled for include Marie Claire, Superkicks, Max Fashion and Maserati-India. I've had 3 successful campaigns with the indian heritage designer brand Latha Putanna Silks. "
    },  

    {
        title:"Mountaineering ",
        image: mountain ,
        desc:"The combination of how fascinated I am with nature and a constant search for experiences that test and challenge my mind and body drew me to trekking and mountaineering. ...",
        detailedDesc:"The combination of how fascinated I am with nature and a constant search for experiences that test and challenge my mind and body drew me to trekking and mountaineering.I trained for and then trekked the ‘Kedarkantha’ peak of the Himalayas (3810 meters) during the peak winter season. I am currently training to trek to the Everest base camp, and hope to achieve that within the next 3 months."
    },  

    {
        title:"Building an Upcycling brand",
        image:  upcycling,
        desc:"The global fashion industry generates 92 million tonnes of waste a year.Having experienced the industry as a model, I understood that the need to constantly purchase item...",
        detailedDesc:"The global fashion industry generates 92 million tonnes of waste a year.Having experienced the industry as a model, I understood that the need to constantly purchase items to stay in 'vogue' isn't really going to change. Along with a friend I started an upcycling venture called adieu,focused on environmental sustainability. We'd pick up factory rejects ,old, discarded clothing and revamp them into fashionable outfits. Managing our funds, procuring the materials and resources needed, while also learning how to market our products posed to be a challenging experience where we learnt a lot."
    },  

    {
        title:"Podcasting ",
        image:  spotify,
        desc:"Listening. I find that that is one of the most important life skills. Through this podcast that I started with a friend, I hope to explore stories and lives'...",
        detailedDesc:"Listening. I find that that is one of the most important life skills. Through this podcast that I started with a friend, I hope to explore stories and lives' that are starkly different from mine. Navigating through the world of podcasting to find a niche subject-area that clicks has been a good learning experience."
    },

    {
        title:"Writing & Content Creation",
        image:  writing,
        desc:"Delving further into my quest of finding stories', I was one of the writers of a page called Humans of Msrit .Here's a link to my most successful post. Creating dig...",
        detailedDesc:"Delving further into my quest of finding stories', I was one of the writers of a page called Humans of Msrit .Here's a link to my most successful post. Creating digitally engaging content by understanding the target audience is something that continually piques my interest, I was a  content creator  @under25ramaiah, where I learnt a lot about digital marketing. I also have my own blog, where I post weekly"
    }
    
]

const ExCur = () => {
    return (<div className="extra-section">
    <h1 id="extra">Extra-curriculars</h1>
    <Container>
      <Row>
        <Col lg={true}><Card title={data[0].title} image={data[0].image} desc={data[0].desc} detailedDesc = {data[0].detailedDesc} /></Col>
        <Col lg={true}><Card title={data[1].title} image={data[1].image} desc={data[1].desc} detailedDesc = {data[1].detailedDesc}/></Col>
        <Col lg={true}><Card title={data[2].title} image={data[2].image} desc={data[2].desc} detailedDesc = {data[2].detailedDesc} /></Col> 
      </Row>
    
      <Row>
      <Col className='blog-link' lg={true}><Card title={data[3].title} image={data[3].image} desc={data[3].desc} detailedDesc = {data[3].detailedDesc}/><p><a href='https://www.instagram.com/theadieustore/'>@theadieustore </a></p></Col> 
      <Col lg={true}><Card title={data[4].title} image={data[4].image} desc={data[4].desc} detailedDesc = {data[4].detailedDesc} /></Col> 
      <Col className='blog-link' lg={true}><Card title={data[5].title} image={data[5].image} desc={data[5].desc} detailedDesc = {data[5].detailedDesc} /><p><a href='https://occhiolism.blog/'>https://occhiolism.blog/</a></p></Col>
      </Row>
    </Container>
            </div>)
}

export default ExCur;