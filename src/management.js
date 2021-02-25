import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardImg,
  CardTitle,
  Container,
  Row,
  Col,
  UncontrolledCollapse,
  FormGroup,
  Form,
  Input,
  NavbarBrand,
  Navbar,
  Nav,
  Carousel,
  CarouselItem,
  CarouselIndicators,
} from "reactstrap";

export default function Management(){
    return(
        <div className="section section-team cd-section" id="teams" style = {{
          backgroundImage:
          "url(" + require("assets/kimaye/BG3.jpg") + ")",}}>
          <Container >
            <Row>
              <Col className="ml-auto mr-auto text-center" md="8">
                <h2 className="title" style = {{color: '#800000', fontWeight: '450'}}>Management</h2>
                <h5 className="description" style = {{color: 'black', fontWeight: '450'}}>
                  Individually we are one drop, together we are an ocean
                </h5>
              </Col>
            </Row>
            <Row>
              <Col md="3">
                <Card className="card-profile card-category">
                  <div className="card-avatar">
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <img
                        alt="..."
                        src={require("assets/kimaye/ashwin.jpg")}
                      />
                    </a>
                  </div>
                  <CardBody>
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <div className="author">
                        <CardTitle tag="h5" style = {{fontWeight: '500'}}>Ashwin Raghuwanshi</CardTitle>
                        <h6 className="card-category" style = {{fontWeight: '450', color: '#800000'}}>
                          Chief Operating Officer
                        </h6>
                      </div>
                    </a>
                    <p className="card-description text-center" style = {{color: 'black'}}>
                      
                      MSc Agri <br />
                      FreshAcres, Moody 
                    </p>
                  </CardBody>
                  <CardFooter className="text-center">
                    <Button
                      className="btn-link btn-just-icon mr-1"
                      color="twitter"
                      href="https://twitter.com/raghuwanshiash?s=20"
                      // onClick={(e) => e.preventDefault()}
                    >
                      <i className="fa fa-twitter" />
                    </Button>
                    {/* <Button
                      className="btn-link btn-just-icon mr-1"
                      color="dribbble"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fa fa-dribbble" />
                    </Button> */}
                    <Button
                      className="btn-link btn-just-icon"
                      color="linkedin"
                      href="https://www.linkedin.com/in/ashwin-raghuwanshi-51b1416"
                      // onClick={(e) => e.preventDefault()}
                    >
                      <i className="fa fa-linkedin" />
                    </Button>
                  </CardFooter>
                </Card>
              </Col>
              <Col md="3">
              <Card className="card-profile card-category">
                  <div className="card-avatar">
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <img
                        alt="..."
                        src={require("assets/kimaye/Sushil.jpg")}
                      />
                    </a>
                  </div>
                  <CardBody>
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <div className="author">
                        <CardTitle tag="h5" style = {{fontWeight: '500'}}>Sushil Pareek</CardTitle>
                        <h6 className="card-category" style = {{fontWeight: '450', color: '#800000'}}>
                          Finance
                        </h6>
                      </div>
                    </a>
                    <p className="card-description text-center" style = {{color: 'black'}}>
                      Chartered Accountant <br />
                      Endurance, Garware
                    </p>
                  </CardBody>
                  <CardFooter className="text-center">
                    <Button
                      className="btn-link btn-just-icon mr-1"
                      color="twitter"
                      href="https://twitter.com/sushilparikh?s=20"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fa fa-twitter" />
                    </Button>
                    {/* <Button
                      className="btn-link btn-just-icon mr-1"
                      color="dribbble"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fa fa-dribbble" />
                    </Button> */}
                    <Button
                      className="btn-link btn-just-icon"
                      color="linkedin"
                      href="https://www.linkedin.com/in/sushil-parikh-pareek-6b8a9123"
                      // onClick={(e) => e.preventDefault()}
                    >
                      <i className="fa fa-linkedin" />
                    </Button>
                  </CardFooter>
                </Card>
              </Col>
              <Col md="3">
              <Card className="card-profile card-category">
                  <div className="card-avatar">
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <img
                        alt="..."
                        src={require("assets/kimaye/ajit-kumar.jpg")}
                      />
                    </a>
                  </div>
                  <CardBody>
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <div className="author">
                        <CardTitle tag="h5" style = {{fontWeight: '500'}}>Ajit Kumar</CardTitle>
                        <h6 className="card-category" style = {{fontWeight: '450', color: '#800000'}}>
                         CSR & PPP
                        </h6>
                      </div>
                    </a>
                    <p className="card-description text-center" style = {{color: 'black'}}>
                      PhD (GBPAU) <br />
                      World Bank, Mother Dairy
                    </p>
                  </CardBody>
                  <CardFooter className="text-center">
                    <Button
                      className="btn-link btn-just-icon mr-1"
                      color="twitter"
                      href="#pablo"
                      //onClick={(e) => e.preventDefault()}
                    >
                      <i className="fa fa-twitter" />
                    </Button>
                    {/* <Button
                      className="btn-link btn-just-icon mr-1"
                      color="dribbble"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fa fa-dribbble" />
                    </Button> */}
                    <Button
                      className="btn-link btn-just-icon"
                      color="linkedin"
                      href="https://www.linkedin.com/in/ajit-kumar-36ab8168"
                      // onClick={(e) => e.preventDefault()}
                    >
                      <i className="fa fa-linkedin" />
                    </Button>
                  </CardFooter>
                </Card>
              </Col>
              <Col md="3">
              <Card className="card-profile card-category">
                  <div className="card-avatar">
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <img
                        alt="..."
                        src={require("assets/kimaye/kalpesh.jpg")}
                      />
                    </a>
                  </div>
                  <CardBody>
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <div className="author">
                        <CardTitle tag="h5" style = {{fontWeight: '500'}}>Kalpesh Khivasara</CardTitle>
                        <h6 className="card-category" style = {{fontWeight: '450', color: '#800000'}}>
                         International Sales
                        </h6>
                      </div>
                    </a>
                    <p className="card-description text-center" style = {{color: 'black'}}>
                      B.Tech. (IITB) <br />
                      InI Consulting 
                    </p>
                  </CardBody>
                  <CardFooter className="text-center">
                    <Button
                      className="btn-link btn-just-icon mr-1"
                      color="twitter"
                      href="#pablo"
                      //onClick={(e) => e.preventDefault()}
                    >
                      <i className="fa fa-twitter" />
                    </Button>
                    {/* <Button
                      className="btn-link btn-just-icon mr-1"
                      color="dribbble"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fa fa-dribbble" />
                    </Button> */}
                    <Button
                      className="btn-link btn-just-icon"
                      color="linkedin"
                      href="https://www.linkedin.com/in/kalpeshk"
                      //onClick={(e) => e.preventDefault()}
                    >
                      <i className="fa fa-linkedin" />
                    </Button>
                  </CardFooter>
                </Card>
              </Col>
            </Row>
            <Row>
              {/* <Col className="ml-auto mr-auto text-center" md="8">
                <h2 className="title">Our Stunning Team 1</h2>
                <h5 className="description">
                  This is the paragraph where you can write more details about
                  your team. Keep you user engaged by providing meaningful
                  information.
                </h5>
              </Col>
            </Row>
            <Row> */}
              <Col md="3">
              <Card className="card-profile card-category">
                  <div className="card-avatar">
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <img
                        alt="..."
                        src={require("assets/kimaye/SARABJEET.jpg")}
                      />
                    </a>
                  </div>
                  <CardBody>
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <div className="author">
                        <CardTitle tag="h5" style = {{fontWeight: '500'}}>Sarabjeet Kohli</CardTitle>
                        <h6 className="card-category" style = {{fontWeight: '450', color: '#800000'}}>
                          Commercial & Analytics
                        </h6>
                      </div>
                    </a>
                    <p className="card-description text-center" style = {{color: 'black'}}>
                      B.Com, MBA (IIMA) <br />
                      DCM Shriram 
                    </p>
                  </CardBody>
                  <CardFooter className="text-center">
                    <Button
                      className="btn-link btn-just-icon mr-1"
                      color="twitter"
                      href="https://twitter.com/iamsarabjeetk"
                      // onClick={(e) => e.preventDefault()}
                    >
                      <i className="fa fa-twitter" />
                    </Button>
                    {/* <Button
                      className="btn-link btn-just-icon mr-1"
                      color="dribbble"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fa fa-dribbble" />
                    </Button> */}
                    <Button
                      className="btn-link btn-just-icon"
                      color="linkedin"
                      href="https://www.linkedin.com/in/sarabjeet-kaur-174a7420"
                      // onClick={(e) => e.preventDefault()}
                    >
                      <i className="fa fa-linkedin" />
                    </Button>
                  </CardFooter>
                </Card>
              </Col>
              <Col md="3">
              <Card className="card-profile card-category">
                  <div className="card-avatar">
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <img
                        alt="..."
                        src={require("assets/kimaye/prachi.jpg")}
                      />
                    </a>
                  </div>
                  <CardBody>
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <div className="author">
                        <CardTitle tag="h5" style = {{fontWeight: '500'}}>Prachi Singh</CardTitle>
                        <h6 className="card-category" style = {{fontWeight: '450', color: '#800000'}}>
                          HR & Admin
                        </h6>
                      </div>
                    </a>
                    <p className="card-description text-center" style = {{color: 'black'}}>
                      B.Tech, MBA (IMT) <br />
                      Advanz, Birlasoft
                    </p>
                  </CardBody>
                  <CardFooter className="text-center">
                    <Button
                      className="btn-link btn-just-icon mr-1"
                      color="twitter"
                      href="#pablo"
                      // onClick={(e) => e.preventDefault()}
                    >
                      <i className="fa fa-twitter" />
                    </Button>
                    {/* <Button
                      className="btn-link btn-just-icon mr-1"
                      color="dribbble"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fa fa-dribbble" />
                    </Button> */}
                    <Button
                      className="btn-link btn-just-icon"
                      color="linkedin"
                      href="https://www.linkedin.com/in/prachi-singh-5a691821"
                      // onClick={(e) => e.preventDefault()}
                    >
                      <i className="fa fa-linkedin" />
                    </Button>
                  </CardFooter>
                </Card>
              </Col>
              <Col md="3">
              <Card className="card-profile card-category">
                  <div className="card-avatar">
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <img
                        alt="..."
                        src={require("assets/kimaye/SHALABH.jpg")}
                      />
                    </a>
                  </div>
                  <CardBody>
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <div className="author">
                        <CardTitle tag="h5" style = {{fontWeight: '500'}}>Shalabh Agarwal</CardTitle>
                        <h6 className="card-category" style = {{fontWeight: '450', color: '#800000'}}>
                          Logistics & Planning
                        </h6>
                      </div>
                    </a>
                    <p className="card-description text-center" style = {{color: 'black'}}>
                      B.Tech (BIT), MBA (IMT)<br />
                      KPMG, Deloitte
                    </p>
                  </CardBody>
                  <CardFooter className="text-center">
                    <Button
                      className="btn-link btn-just-icon mr-1"
                      color="twitter"
                      href="https://mobile.twitter.com/ShalabhAgrawa14"
                      // onClick={(e) => e.preventDefault()}
                    >
                      <i className="fa fa-twitter" />
                    </Button>
                    {/* <Button
                      className="btn-link btn-just-icon mr-1"
                      color="dribbble"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fa fa-dribbble" />
                    </Button> */}
                    <Button
                      className="btn-link btn-just-icon"
                      color="linkedin"
                      href="https://www.linkedin.com/in/shalabh-agrawal-239300b"
                      // onClick={(e) => e.preventDefault()}
                    >
                      <i className="fa fa-linkedin" />
                    </Button>
                  </CardFooter>
                </Card>
              </Col>
              <Col md="3">
              <Card className="card-profile card-category">
                  <div className="card-avatar">
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <img
                        alt="..."
                        src={require("assets/kimaye/Indravadan.jpg")}
                      />
                    </a>
                  </div>
                  <CardBody>
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <div className="author">
                        <CardTitle tag="h5" style = {{fontWeight: '500'}}>Indravadan Jadhav</CardTitle>
                        <h6 className="card-category" style = {{fontWeight: '450', color: '#800000'}}>
                         Fruit Procurement
                        </h6>
                      </div>
                    </a>
                    <p className="card-description text-center" style = {{color: 'black'}}>
                      BHMS, MBA (IIMA) <br />
                      Accenture, Astron
                    </p>
                  </CardBody>
                  <CardFooter className="text-center">
                    <Button
                      className="btn-link btn-just-icon mr-1"
                      color="twitter"
                      href="#pablo"
                      // onClick={(e) => e.preventDefault()}
                    >
                      <i className="fa fa-twitter" />
                    </Button>
                    {/* <Button
                      className="btn-link btn-just-icon mr-1"
                      color="dribbble"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fa fa-dribbble" />
                    </Button> */}
                    <Button
                      className="btn-link btn-just-icon"
                      color="linkedin"
                      href="https://www.linkedin.com/in/indravadanjadav"
                      // onClick={(e) => e.preventDefault()}
                    >
                      <i className="fa fa-linkedin" />
                    </Button>
                  </CardFooter>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
    );
}