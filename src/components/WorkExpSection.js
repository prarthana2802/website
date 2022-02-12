import './WorkExpSection.css'
import {Chrono} from 'react-chrono';
import silcarb from '../images/silcarb.jpeg';
import silcarblogo from '../images/silcarblogo.png';
import arctech from '../images/arctech.png';
import iml from '../images/iml.jpeg';
import imllogo from '../images/imllogo.png';
import ace from '../images/ace.png';
import acelogo from '../images/acelogo.jpeg';
import hgs from '../images/hgs.png';
import salesforce from '../images/salesforce.png';
import eny from '../images/eny.png';
import React from 'react';


const data = [


  {
    title: "Oct 2021 - Present",
    cardTitle: "Ernst and Young",
    cardSubtitle:
      "Bangalore, India",
    cardDetailedText: `Generating and analysing debtor reviews of the companies. Taking part in client engagements in the areas of business risk services.`
  },

  {
    title: "Jul - Oct 2021",
    cardTitle: "Business Analyst Intern at Salesforce",
    cardSubtitle:
      "Singapore",
    cardDetailedText: `Helped built analytical excel models to drill into Ad hoc analysis which sped up the decision-making and response times to business queries by 10%.`
  },

  {
    title: "Nov 2020 - Jun 2021",
    cardTitle: "Business Strategist at Intelligent Mobility Labs (IML)",
    cardSubtitle:
      "India",
    cardDetailedText: `Intelligent Mobility Labs (IML) is a research lab that focuses on Self Driving Technology and Autonomous Mobile Robots. 

    During my time at IML, I designed, simulated, and implemented a business model for the self-driven robot product.I Interacted with startups and corporate managers from Spain,Germany, the U.K and the US.
    `
  },

  {
    title: "Nov 2020",
    cardTitle: "Founder at ArcTech App-Dev Solutions",
    cardSubtitle:
      "Bangalore, India",
    cardDetailedText: `Recruited 8 developers and UI/UX designers from universities across the country.Negotiated with the customer on pricing and ensured deadlines were met. Coordinated the conceptualization, design, development, of the mental-health application.`
  },

  {
  title: "Aug - Nov 2020",
  cardTitle: "Business Transformation Consultant at Hinduja Global Solutions ",
  cardSubtitle: "Bangalore, India",
  cardDetailedText: `As part of my internship, I headed a 3-member team that designed and automated a text and data extraction solution for invoice processing using ML, AI, and RPA. I collaborated with senior cross-functional counterparts across multiple divisions, based on the requirements of a major supply chain solution provider.`
},

{
  title: "Jul - Aug 2019",
  cardTitle: "Summer Intern at AceMicromatic Manufacturing Intelligence Technologies",
  cardSubtitle:
    "Bangalore, India",
  cardDetailedText: `During my internship, I Interned at several departments, participated in cross-functional team meetings, and undertook multiple surveys to get insights on the deployment of the Business Excellence Model and functioning of the company.`
},

{title: "Jan 2019 - Present",
cardTitle: "Market Research Intern at Silcarb",
cardSubtitle:
  "Dusseldorf, Germany",
cardDetailedText: `Silcarb Recrystallized Pvt. Ltd. is India's only manufacturer of Silicon Carbide Heating elements. I collaborated with the marketing and engineering teams at the GIFA trade fair in Germany, that ensured the success of the push marketing strategy, as opposed to the previously followed pull marketing strategy, thereby increasing call-backs from prospective clients by 50%.
Improved the pre-existing SEO strategy by modifying budget allocations of adverts to potential customers in targeted countries. Increased conversion rates in sales by 25% and cut down digital marketing costs by $1500 a year.

https://www.silcarb.com/`
}

]

const WorkExpSection = () => {
    return(
    <div id="work" className="work-section">
        <h1>Work Experience</h1>
        <div style={{ height: "100%", overflow: "auto" }}>
        <Chrono
          items={data}
          mode="VERTICAL"
          theme={{ primary: "black", secondary: "white", titleColor:"black" }}
          scrollable={false}
          borderLessCards>
          <div className="chrono-icons">
              <img
              src={eny}
              alt="twitter"
            />
            <img
              src={salesforce}
              alt="twitter"
            />
            <img
              src={imllogo}
              alt="twitter"
            />
            <img
              src={arctech}
              alt="twitter"
            />
            <img
              src={hgs}
              alt="twitter"
            />
            <img
              src={acelogo}
              alt="twitter"
            />
            <img
              src={silcarblogo}
              alt="twitter"
            />
          </div>
        </Chrono>
        </div>
    </div>
    );
}

export default WorkExpSection;