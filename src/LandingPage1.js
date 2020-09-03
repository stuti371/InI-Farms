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

export default function LandingPage1(){
    return(
        <div className="wrapper">
        <div className="section text-center landing-section" style = {{backgroundColor: '#fffaef'}}>
          <Container>
            <Row style = {{justifyContent: 'center'}}>
                    <img src = {require("assets/kimaye/pomologo.jpeg")} width="100px" height="70px"/>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                    <img src = {require("assets/kimaye/bananalogo.jpeg")} width="100px" height="70px"/>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                    <img src = {require("assets/kimaye/arilslogo.jpeg")} width="100px" height="70px"/>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                    <img src = {require("assets/kimaye/cocologo.jpeg")} width="100px" height="70px"/>
            </Row><br /><br />
            <Row >
              <Col  md="5" style ={{justifyItems: 'start', marginTop: 55}}>
                
                  <img src = {require("assets/kimaye/talk2.jpg")} width = '400' height = '400'/>
                
               </Col> <br />
               <Col md="7" style ={{alignItems: 'center'}}>
                    
                      <h2 className="title" style = {{fontWeight: '500', textAlign: 'center', marginTop: '8%', color: '#800000'}}>The Divine World of Kimaye</h2>
                      <h6 style = {{textAlign: 'center'}}>At InI Farms we are changing the horticulture landscape of India</h6><br />
                      <p style = {{textAlign: 'center'}}>
                        <span style = {{fontSize: 18, fontWeight: 400}}> Reducing post-harvest losses </span> <span style = {{color: "red", fontSize: 20, fontWeight: 400}}>&</span><br /> 
                        <span style = {{fontSize: 18, fontWeight: 400}}> Leveraging Ag-Tech to drive scale </span> <br /> <br />
                        <span style ={{fontSize: 18, fontWeight: 400}}> Growing-Delivering worldwide </span><span style = {{color: "red", fontSize: 20, fontWeight: 400}}>&</span><br />
                        <span style ={{fontSize: 18, fontWeight: 400}}> Meeting global food safety standards </span><br /><br />
                        <span style = {{fontSize: 18, fontWeight: 400}}> Improving fruit quality</span> <span style = {{color: "red", fontSize: 20, fontWeight: 400}}>&</span> <br />
                        <span style = {{fontSize: 18, fontWeight: 400, marginLeft: 12}}>  Bringing smiles to thousands of farmers </span><br /><br />
                        <span style = {{fontSize: 18, fontWeight: 400}}> Increasing farm productivity</span> <span style = {{color: "red", fontSize: 20, fontWeight: 400}}>&</span> <br />
                        <span style = {{fontSize: 18, fontWeight: 400}}> Making agriculture gender neutral </span>
                      </p>

                {/* <br /> */}
                {/* <Button
                  className="btn-fill btn-round"
                  color="danger"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                >
                  See Details
                </Button> */}
              </Col>
            </Row>
            <br />
            <Row>
              <Col md="3">
                <div className="info">
                  <div className="icon icon-default">
                    <i className="nc-icon nc-world-2" />
                  </div>
                  <div className="description">
                    <h4 className="info-title" style = {{color: '#800000', fontWeight: 500}}>35 Countries</h4>
                    <p className="description" style = {{ fontWeight: 500}}>
                      North America, Europe, India, Middle-East, South-East Asia, <br /> New Zealand
                    </p>
                    {/* <Button
                      className="btn-link"
                      color="danger"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      See more
                    </Button> */}
                  </div>
                </div>
              </Col>
              <Col md="3">
                <div className="info">
                  <div className="icon icon-default">
                    <i className="nc-icon nc-chart-bar-32" />
                  </div>
                  <div className="description" >
                    <h4 className="info-title" style = {{color: '#800000', fontWeight: 500}}>40,000 Tons</h4>
                    <p className="description" style = {{ fontWeight: 500}}>
                      Amongst Top 3 exporters <br /> from India by volume
                    </p>
                    {/* <Button
                      className="btn-link"
                      color="danger"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      See more
                    </Button> */}
                  </div>
                </div>
              </Col>
              <Col md="3">
                <div className="info">
                  <div className="icon icon-default">
                    <i className="nc-icon nc-satisfied" />
                  </div>
                  <div className="description" >
                    <h4 className="info-title" style = {{color: '#800000', fontWeight: 500}}>5000+ Farmers</h4>
                    <p className="description" style = {{ fontWeight: 500}}>
                      Premium for quality <br /> Improving Farmer profits by 40%
                    </p>
                    {/* <Button
                      className="btn-link"
                      color="danger"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      See more
                    </Button> */}
                  </div>
                </div>
              </Col>
              <Col md="3">
                <div className="info">
                  <div className="icon icon-default">
                    <i className="nc-icon nc-pin-3" />
                  </div>
                  <div className="description" >
                  <h4 className="info-title" style = {{color: '#800000', fontWeight: 500}}>8 States</h4>
                    <p className="description" style = {{ fontWeight: 500}}>
                      Maharashtra, Andhra Pradesh, Gujarat, Kerala,  Madhya Pradesh, Tamil Nadu, Karnataka, Rajasthan
                    </p>
                    {/* <Button
                      className="btn-link"
                      color="danger"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      See more
                    </Button> */}
                  {/* </div>
                </div>
                <div className="info">
                  <div className="icon icon-danger">
                    <i className="nc-icon nc-bulb-63" />
                  </div>
                  <div className="description">
                    <h4 className="info-title">{">"}50% Women</h4>
                    <p>
                      In all direct jobs created <br />
                      management, supervisor, labour
                    </p> */}
                    {/* <Button
                      className="btn-link"
                      color="danger"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      See more
                    </Button> */}
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        </div>
    );
}
