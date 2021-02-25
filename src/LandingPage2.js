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
                    <img src = {require("assets/kimaye/care.jpg")}/>
                  </div>
                  <br />
                  <h4  style = {{fontWeight: '400', color: '#dbac00'}}>Farm To Home</h4>
                  <p style = {{color: 'white', fontWeight: '400'}}>
                  Our ability to own entire value chain leads to 100% disintermediation,
                  wastages below 2% and connects the consumers 
                  directly with farmers
                  </p>
                </div>
              </Col>
              <Col className="mr-auto" sm="5">
                <div className="info">
                  <div >
                  <img src = {require("assets/kimaye/brand5.png")}/>
                  </div>
                  <br />
                  <h4  style = {{fontWeight: '400', color: '#dbac00'}}>Branded Fruit</h4>
                  <p style = {{color: 'white', fontWeight: '400'}}>
                  Kimaye is a promise of consistently superior quality,
                  assured safety (hygienic and residue-free) and delivering
                  social good
                  </p>
                </div>
              </Col>
            </Row>
            <Row className="bottom-line">
              <Col className="ml-auto" sm="5">
                <div className="info">
                  <div >
                    <img src = {require("assets/kimaye/fruits.jpg")}/>
                  </div>
                  <br />
                  <h4 style = {{fontWeight: '400', color: '#dbac00'}}>Product Ownership</h4>
                  <p style = {{color: 'white', fontWeight: '400'}}>
                  Proven capability to own products, transforming 
                  categories & achieving leadership. After poms & banana,
                  berries & avocados are the chosen ones
                  </p>
                </div>
              </Col>
              <Col className="mr-auto" sm="5">
                <div className="info">
                  <div >
                    <img src = {require("assets/kimaye/farmerlogo.jpg")}/>
                  </div>
                  <br />
                  <h4 style = {{fontWeight: '400', color: '#dbac00'}}>Tech Driven</h4>
                  <p style = {{color: 'white',fontWeight: '400'}}>
                  Our technology suite enables farm interventions,
                  aggregation of thousands of farmers, standardized products,
                  efficient supply chain and traceability
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
    );
}