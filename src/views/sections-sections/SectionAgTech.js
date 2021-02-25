import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Container,
  Row,
  Col,
} from "reactstrap";
import WhiteNavbar from 'components/Navbars/WhiteNavbar';
import FooterFinal from "FooterFinal";
export default function SectionAgTech(){
    return(
        <div>
            <WhiteNavbar />
            <div className="header-1">
          {/* <Navbar className="navbar-transparent navbar-absolute" expand="lg">
            <Container>
              <NavbarBrand className="mb-0" href="www.creative-tim.com">
                Creative Tim
              </NavbarBrand>
              <button
                className="navbar-toggler"
                id="navbarSupportedContent1"
                type="button"
              >
                <span className="navbar-toggler-bar" />
                <span className="navbar-toggler-bar" />
                <span className="navbar-toggler-bar" />
              </button>
              <UncontrolledCollapse navbar toggler="#navbarSupportedContent1">
                <Nav className="ml-auto" navbar>
                  <Button
                    className="btn-neutral"
                    color="link"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    Components
                  </Button>
                  <Button
                    className="btn-neutral"
                    color="link"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    Tutorial
                  </Button>
                  <Button
                    className="btn-neutral"
                    color="link"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                    target="_blank"
                  >
                    <i className="fa fa-twitter" />
                  </Button>
                  <Button
                    className="btn-neutral"
                    color="link"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                    target="_blank"
                  >
                    <i className="fa fa-facebook" />
                  </Button>
                </Nav>
              </UncontrolledCollapse>
            </Container>
          </Navbar> */}
          <div
            className="page-header"
            style={{
              backgroundImage:
                "url(" + require("assets/kimaye/AgTechH.png") + ")",
            }}
          >
            {/* <div className="filter" /> */}
        </div>
        </div>
        <div className="features-3 section-image" style = {{
            backgroundImage:
            "url(" + require("assets/kimaye/BGN2.jpg") + ")",
        }}>
          <Container>
            <Row>
              <Col md="6">
                <Row>
                  <Container>
                    <h2  style = {{color: '#dbac00', textAlign: 'center'}}>Digital Farmer Aggregation</h2><br />
                    <h5 style = {{color: 'white', textAlign: 'center'}}>Tech solutions for improving crop productivity/
                    quality and large scale aggregation</h5>
                  </Container>
                </Row>
                <Row>
                  <Col md="6">
                    <div className="info info-horizontal">
                      <div className="icon icon-success">
                        <i className="nc-icon nc-layout-11" />
                      </div>
                      <div className="description">
                        <h4 style = {{fontWeight:'500', color: 'white'}}>Creating a Community</h4>
                        <p style ={{color:'white'}}>
                        An app-based farming community of all growers engaged with InI leading to
                        farmer education and problem resolution
                        </p>
                        {/* <Button
                          color="link"
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          See more
                        </Button> */}
                      </div>
                    </div>
                    <div className="info info-horizontal">
                      <div className="icon icon-warning">
                        <i className="nc-icon nc-palette" />
                      </div>
                      <div className="description">
                        <h4 style = {{fontWeight:'500', color: 'white'}}>Quality Standardization</h4>
                        <p style ={{color:'white'}}>
                        Tracking and monitering pre-harvest implementation of SoP<br />
                        Farm level traceability
                        </p>
                        {/* <Button
                          color="link"
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          See more
                        </Button> */}
                      </div>
                    </div>
                  </Col>
                  <Col md="6">
                    <div className="info info-horizontal">
                      <div className="icon icon-danger">
                        <i className="nc-icon nc-touch-id" />
                      </div>
                      <div className="description">
                        <h4 style = {{fontWeight:'500', color: 'white'}}>Transaction Control</h4>
                        <p style ={{color:'white'}}>
                        Real time pricing system for parity across large number of farmers<br/>
                        Analytics based Supply Prediction
                        </p>
                        {/* <Button
                          color="link"
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          See more
                        </Button> */}
                      </div>
                    </div>
                    <div className="info info-horizontal">
                      <div className="icon icon-primary">
                        <i className="nc-icon nc-delivery-fast" />
                      </div>
                      <div className="description">
                        <h4  style = {{fontWeight:'500', color: 'white'}}>Frontline Team Performance</h4>
                        <p style ={{color:'white'}}>
                        Beat Planning for supervisors<br />
                        Real-time performance monitoring
                        </p>
                        {/* <Button
                          color="link"
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          See more
                        </Button> */}
                      </div>
                    </div>
                  </Col>
                </Row>
              </Col>
              <Col className="ml-auto" md="4">
                <div  style = {{marginTop: '20%'}}>
                  <img
                    alt="..."
                    src={require("assets/kimaye/agtech0.png")}
                    style = {{width: '95%', height: '95%'}}
                  /><br /><br />
                  <img
                    alt="..."
                    src={require("assets/kimaye/agtech1.png")}
                    style = {{width: '60%', height: '60%', marginLeft: '15%'}}
                  />
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="features-3 " style = {{
            backgroundColor: '#fffaef',
        }}>
          <Container>
            <Row>
              <Col md="6">
                <Row>
                  <Container>
                    <h2  style = {{color: '#800000', fontWeight: '400', textAlign: 'center'}}>Supply Chain Automation</h2><br />
                    <h5 style = {{color: 'black', fontWeight:'400', textAlign: 'center'}}>Improving post harvest efficiency and reducing wastage</h5>
                  </Container>
                </Row>
                <Row>
                  <Col md="6">
                    <div className="info info-horizontal">
                      <div className="icon icon-success">
                        <i className="nc-icon nc-layout-11" />
                      </div>
                      <div className="description">
                        <h4 style = {{fontWeight:'500', color: 'black'}}>Wastage Reduction</h4>
                        <p style ={{fontWeight:'400', color:'black'}}>
                        Transaction level multi-stage wastage monitoring against benchmarks leading to reduction below 2%
                        </p>
                        {/* <Button
                          color="link"
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          See more
                        </Button> */}
                      </div>
                    </div>
                    <div className="info info-horizontal">
                      <div className="icon icon-warning">
                        <i className="nc-icon nc-palette" />
                      </div>
                      <div className="description">
                        <h4 style = {{fontWeight:'500', color: 'black'}}>Quality Management</h4>
                        <p style ={{fontWeight:'400', color:'black'}}>
                        Identifying source of problem within 2 hours;
                        Corrective steps and customer response within 24-48 hours
                        </p>
                        {/* <Button
                          color="link"
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          See more
                        </Button> */}
                      </div>
                    </div>
                  </Col>
                  <Col md="6">
                    <div className="info info-horizontal">
                      <div className="icon icon-danger">
                        <i className="nc-icon nc-touch-id" />
                      </div>
                      <div className="description">
                        <h4 style = {{fontWeight:'500', color: 'black'}}>Real Time Vehicle Tracking</h4>
                        <p style ={{fontWeight:'400', color:'black'}}>
                        GPS based vehicle movement tracking across all locations and
                        In-transit temperature monitoring
                        </p>
                        {/* <Button
                          color="link"
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          See more
                        </Button> */}
                      </div>
                    </div>
                    <div className="info info-horizontal">
                      <div className="icon icon-primary">
                        <i className="nc-icon nc-delivery-fast" />
                      </div>
                      <div className="description">
                        <h4  style = {{fontWeight:'500', color: 'black'}}>Process Automation</h4>
                        <p style ={{fontWeight:'400', color:'black'}}>
                        Smart tools for automated sorting, grading and packaging to
                        deliver consistent and superior quality of fruits
                        </p>
                        {/* <Button
                          color="link"
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          See more
                        </Button> */}
                      </div>
                    </div>
                  </Col>
                </Row>
              </Col>
              <Col className="ml-auto" md="4">
                <div  style = {{marginTop: '20%'}}>
                  <img
                    alt="..."
                    src={require("assets/kimaye/agtech11.png")}
                    style = {{width: '95%', height: '95%'}}
                  /><br /><br />
                  <img
                    alt="..."
                    src={require("assets/kimaye/agtech00.png")}
                    style = {{width: '90%', height: '90%', marginLeft: '5%', }}
                  />
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="features-4 section-image" style={{
                backgroundImage:
                    "url(" + require("assets/kimaye/BGN2.jpg") + ")",
                }}>
          <Container>
            <Row >
              <Col className="ml-auto mr-auto text-center" md="10">
                <h2 style = {{color: '#dbac00'}}>Digital Marketing & Consumer Engagement</h2><br />
                <h5 style = {{color: 'white'}}>
                 Online Platform connecting consumers with farmers driven by traceability 
                </h5>
              </Col>
            </Row>
            <Row >
              <Col md="6">
                <div style = {{marginTop: '8%'}}>
                  <img
                    alt="..."
                    src={require("assets/kimaye/agtech15.png")}
                    style = {{width: '65%', height: '65%', marginLeft: '20%'}}
                  /><br /><br />
                  <img
                    alt="..."
                    src={require("assets/kimaye/agtech12.jpg")}
                    style = {{width: '45%', height: '45%', marginLeft: '28%', borderRadius: '2%'}}
                  />
                </div>
              </Col>
              <Col className="offset-1" md="4">
                <div className="info info-horizontal">
                  <div className="icon icon-info">
                    <i aria-hidden={true} className="nc-icon nc-atom" />
                  </div>
                  <div className="description">
                    <h4 style = {{color:'white', fontWeight: '500'}}>Global Brand built on Transparency </h4>
                    <p style = {{color:'white', fontWeight: '300'}}>
                        Each fruit affixed with an identity thorugh a dynamic QR-code providing
                        transparency on the journey from farm to home
                    </p>
                  </div>
                </div>
                <div className="info info-horizontal">
                  <div className="icon icon-success">
                    <i aria-hidden={true} className="nc-icon nc-ruler-pencil" />
                  </div>
                  <div className="description">
                    <h4 style = {{color:'white', fontWeight: '500'}}>Direct 2 Consumer</h4>
                    <p style = {{color:'white', fontWeight: '300'}}>
                    E-Commerce Platform providing global quality fruit to Indian consumers<br />
                    <a href = 'http://www.kimaye.com/' style = {{color: '#dbac00', fontWeight: '400'}}>www.kimaye.com</a>
                    </p>
                  </div>
                </div>
                <div className="info info-horizontal">
                  <div className="icon icon-danger">
                    <i aria-hidden={true} className="nc-icon nc-tie-bow" />
                  </div>
                  <div className="description">
                    <h4 style = {{color:'white', fontWeight: '500'}}>Experience-oriented Consumer Engagement</h4>
                    <p style = {{color:'white', fontWeight: '300'}}>
                    Comprehensive platform offering safe and hygienic products, recipes and nutritional information
                    </p>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <FooterFinal />
        </div>
    );
}