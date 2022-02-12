import React from "react";
import Card from "react-bootstrap/Card";
import CardGroup from 'react-bootstrap/CardGroup'
import './More.css'

const More = () => {
    return(<div id="more" className="more-wrapper">
        <h1>Additional Information</h1>
    <CardGroup>
        <Card border="secondary">
        <Card.Header><h3>Certifications</h3></Card.Header>
          <Card.Body>
            
            <Card.Text>
            <b>UiPath Industry Alliance Certification</b> <a href="https://www.certmetrics.com/uipath/public/badge.aspx?i=1&t=c&d=2021-05-03&ci=UIP00180125">[Certification badge link]</a>
            </Card.Text>
            <Card.Text>
            <b>Spanish Language</b> [European Council of Foreign Languages Certification]
            </Card.Text>
          </Card.Body>

        </Card>
        <Card border="secondary">
        <Card.Header><h3>Paper Publication</h3></Card.Header>
          <Card.Body>
            
            <Card.Text>
            IEEE International Conference 2021<a href="https://ieeexplore.ieee.org/document/9532902"><b>“Robotic Process Automation to improve Business processes.”</b></a>
             </Card.Text>
            
          </Card.Body>

        </Card>
        <Card border="secondary">
        <Card.Header><h3>Memberships</h3></Card.Header>
          <Card.Body>
            
            <Card.Text>
            <b>Student Member @ Institute of Electrical and Electronics Engineers (IEEE):</b> Member of the IEEE Computer Society.            </Card.Text>
            <Card.Text>
            Student Member, <a href="https://www.sae.org/participate/membership">SAE International</a></Card.Text>

            <Card.Text>
            <b>UNICEF INDIA:</b> Member and monthly donor. 
            </Card.Text>
          </Card.Body>

        </Card>
      </CardGroup>
      </div>)
}

export default More;