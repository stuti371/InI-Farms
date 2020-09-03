import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardTitle,
  Form,
  Input,
  Container,
  Row,
  Col,
  CardColumns,
} from "reactstrap";

export default function LandingPage2(){
    return(
        <div
          className="features-5 section-image"
          style={{
            backgroundImage:
              "url(" +
              require("assets/kimaye/BG2.jpg") +
              ")",
          }}
        >
          <Container>
            <Row>
              <div className="ml-auto mr-auto">
                <h2 style = {{fontWeight: '500', color: 'white'}}>
                  Advantage InI
                </h2><br /><br /><br />
              </div>
            </Row>
            <Row>
              <Col className="ml-auto" sm="5">
                <div className="info">
                  <div >
                    <img src = {require("assets/kimaye/farmerlogo.jpg")}/>
                  </div>
                  <br />
                  <h4 style = {{fontWeight: '400', color: '#dbac00'}}>Tech Driven</h4>
                  <p style = {{color: 'white',fontWeight: '400'}}>
                  Our comprehensive technology suite enables farm interventions,
                  aggregation of thousands of farmers, standardized processes
                  & supply chain efficiency
                  </p>
                </div>
              </Col>
              <Col className="mr-auto" sm="5">
                <div className="info">
                  <div >
                    <img src = {require("assets/kimaye/care.jpg")}/>
                  </div>
                  <br />
                  <h4  style = {{fontWeight: '400', color: '#dbac00'}}>Direct To Consumer</h4>
                  <p style = {{color: 'white', fontWeight: '400'}}>
                  Our direct consumer connect delivers an unparalled fruit
                  consumption experience: assured quality, utmost convenience and
                  wide assortment
                  </p>
                </div>
              </Col>
            </Row>
            <Row className="bottom-line">
              <Col className="ml-auto" sm="5">
                <div className="info">
                  <div >
                  <img src = {require("assets/kimaye/brand5.png")}/>
                  </div>
                  <br />
                  <h4  style = {{fontWeight: '400', color: '#dbac00'}}>Branded Fruit</h4>
                  <p style = {{color: 'white', fontWeight: '400'}}>
                  Kimaye is a promise of consistently superior quality;
                  assured safety (hygienic and residue-free) and delivering
                  social good
                  </p>
                </div>
              </Col>
              <Col className="mr-auto" sm="5">
                <div className="info">
                  <div >
                    <img src = {require("assets/kimaye/fruits.jpg")}/>
                  </div>
                  <br />
                  <h4 style = {{fontWeight: '400', color: '#dbac00'}}>Product Expansion</h4>
                  <p style = {{color: 'white', fontWeight: '400'}}>
                  Expanding our core product portfolio - berries and
                  avocado are the chosen fruits! We will continue to deliver
                  the world of goodness with a wider basket
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
    );
}