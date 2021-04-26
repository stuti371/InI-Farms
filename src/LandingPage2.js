import React from "react";

// reactstrap components
import {
  Container,
  Row,
  Col,
} from "reactstrap";

export default function LandingPage2(){
    return(
        <div
          className="features-5 section-image"
          style={{
            backgroundImage:
              "url(" +
              "https://res.cloudinary.com/ini-farms/image/upload/v1618863946/media/kimaye/BG2_cpea02.jpg" +
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
                    <img src = "https://res.cloudinary.com/ini-farms/image/upload/v1618863948/media/kimaye/care_w3gkjx.jpg"/>
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
                  <img src = {"https://res.cloudinary.com/ini-farms/image/upload/v1618863948/media/kimaye/brand5_ataxki.png"}/>
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
                    <img src = "https://res.cloudinary.com/ini-farms/image/upload/v1618863954/media/kimaye/fruits_slvxnj.jpg"/>
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
                    <img src = {"https://res.cloudinary.com/ini-farms/image/upload/v1618863953/media/kimaye/farmerlogo_ufmxcx.jpg"}/>
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