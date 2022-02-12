import React from 'react';
import Col from 'react-bootstrap/esm/Col';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Card from './Card';
import './ProjectSection.css'
import aeroproj from '../images/aeroproj.jpg'
import ml from '../images/ml.jpeg'
import dbms from '../images/dbms.png'
import rpa from '../images/rpa.png'
import iot from '../images/iot.png'
import finalyear from '../images/finalyear.jpeg'

const data = [
    {
        title:"Aero-modelling  at SAE Aero design West (Los Angeles, California)",
        image: aeroproj ,
        desc:"In my first year, being the only girl recruited into the multidisciplinary aero-modelling team of our university, I worked on all aspects of the project including the fabrication of th...",
        detailedDesc:"In my first year, being the only girl recruited into the multidisciplinary aero-modelling team of our university, I worked on all aspects of the project including the fabrication of the plane, the budgeting and allocation of resources as well as the technical report and presentation.In my second year, I headed the team in non-technical areas, we implemented stricter deadlines and planned schedules.This helped us accomplish the 5th position in the world and the 1st position in Asia (the best rank in the history of the club) in the SAE Aero Design Competition. As a result of this we secured a funding of 3000 USD from our university."
    },

    {
        title:"Clustering Analysis of big data(CS63:Data Mining and MachineLearning )",
        image: ml,
        desc:"I made use of the DBSCAN clustering algorithm and a weather forecast dataset to understand data pre-processing as well as the implementation of the algorithm.First I pre-processed...",
        detailedDesc:"I made use of the DBSCAN clustering algorithm and a weather forecast dataset to understand data pre-processing as well as the implementation of the algorithm.First I pre-processed the dataset and then plotted weather stations using the base map matplotlib toolkit, which provided me with the facility to transform coordinates to a map projection.I made use of the the seaborn library to generate graphs to analyse the values in the dataset(violin plot, hexagonal bin etc..,built on matplotlib).The DBSCAN Algorithm successfully clustered the data into different clusters based on the value of epsilon and minimum points assigned."
    },

    {
        title:"Invoice Approval Prototype(CSE552: Robotic Process Automation)",
        image: rpa,
        desc:"The RPA course offered by my university had an industry alliance with the UiPath Automation Platform.I designed an invoice approval automation prototype, using the features of the...",
        detailedDesc:"The RPA course offered by my university had an industry alliance with the UiPath Automation Platform.I designed an invoice approval automation prototype, using the features of the UiPath community edition platform .Once an email from the vendor is received, the bot matches it with the appropriate purchase order, the irregularities and exceptions are flagged. Next the invoice gets approved and a notification to release the payment is sent. Lastly a record of the transaction is added to the organizations' logs.Further, I went on to clear the Industry Alliance Certification offered by UiPath."
    },

    {
        title:"(CSP: Final Year project )",
        image: finalyear,
        desc:"(ongoing)",
        detailedDesc:"Ongoing"
    },

    {
        title:"Inventory Management Web Application (CS52: Database Systems)",
        image: dbms,
        desc:"I designed a web application connected to a database that will help retailers keep track of e-commerce stores' transactions. The SQL database stores information about products sold,",
        detailedDesc:"I designed a web application connected to a database that will help retailers keep track of e-commerce stores' transactions. The SQL database stores information about products sold, the suppliers from which the products have been obtained, the various stores and the employees in each store. The database also stores the stock of each product in each store. It also keeps track of information regarding the sales made by each store and automatically deducts the number of units sold from the stock or inventory. The web app frontend was built using HTML, CSS and Javascript. The framework used is .NET version 4.5. and the database server used is Microsoft® SQL Server® 2017 Express."
    },

    {
        title:"IoT in a Security System(CS65 : Mini Project)",
        image: iot,
        desc:"The main objective of this project was the overall protection of an industry unit from security breaches. We made use of the ARDUINO (IDE) software to write on the ARDUINO microcont",
        detailedDesc:"The main objective of this project was the overall protection of an industry unit from security breaches. We made use of the ARDUINO (IDE) software to write on the ARDUINO microcontroller board, to program a temperature, motion and fingerprint sensor connected to a buzzer that would intimate concerned personnel via a GSM unit in the case of a fire or suspicious activity. "
    }

   
    
]

const ProjectSection = () => {
    return(
        <div className="project-section">
<h1 id="projects">Projects</h1>
<Container>
  <Row>
    <Col lg={true}><Card title={data[0].title} image={data[0].image} desc={data[0].desc} detailedDesc = {data[0].detailedDesc} /></Col>
    <Col lg={true}><Card title={data[1].title} image={data[1].image} desc={data[1].desc} detailedDesc = {data[1].detailedDesc}/></Col>
    <Col lg={true}><Card title={data[2].title} image={data[2].image} desc={data[2].desc} detailedDesc = {data[2].detailedDesc} /></Col> 
  </Row>

  <Row>
  <Col lg={true}><Card title={data[3].title} image={data[3].image} desc={data[3].desc} detailedDesc = {data[3].detailedDesc}/></Col> 
  <Col lg={true}><Card title={data[4].title} image={data[4].image} desc={data[4].desc} detailedDesc = {data[4].detailedDesc} /></Col>
    <Col lg={true}><Card title={data[5].title} image={data[5].image} desc={data[5].desc} detailedDesc = {data[5].detailedDesc}/></Col> 
  </Row>
</Container>
        </div>
    )
}

export default ProjectSection;
