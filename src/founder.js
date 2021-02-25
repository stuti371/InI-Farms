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

export default function Founders(){
    return(
        <div className="team-3 section-image"
        style={{
          backgroundImage:
            "url(" + require("assets/kimaye/BGN2.jpg") + ")",
        }}>
          <Container>
            <Row>
              <Col className="ml-auto mr-auto text-center" md="8">
                <h2 className="title">Founders</h2>
                {<h5 className="description">
                  All our dreams can come true if we have the courage to pursue them
                </h5> }
              </Col>
            </Row>
            <Row>
              <Col md="6">
                <Card className="card-profile card-plain">
                  <Row>
                    <Col md="5">
                      <CardImg top tag="div">
                        <a href="#pablo" onClick={(e) => e.preventDefault()}>
                          <img
                            alt="..."
                            className="img"
                            src={require("assets/kimaye/pankaj.jpg")}
                          />
                        </a>
                      </CardImg>
                    </Col>
                    <Col md="7">
                      <CardBody className="text-center">
                        <CardTitle tag="h4">Pankaj Khandelwal</CardTitle>
                        <h6 className="card-category, text-center" style = {{fontWeight: '400', color: '#dbac00'}}>Chairman & Managing Director</h6><br />
                        <p style = {{color: 'white'}}>
                          IITK, IIMC, McKinsey <br/>
                          VeriFone, InI Consulting <br/>
                        </p>
                        <CardFooter className="text-center">
                          <Button
                            className="btn-just-icon btn-link mr-1"
                            color="twitter"
                            href="https://twitter.com/pankaj_ini?s=20"
                            // onClick={(e) => e.preventDefault()}
                          >
                            <i className="fa fa-twitter" />
                          </Button>
                          <Button
                            className="btn-just-icon btn-link mr-1"
                            color="linkedin"
                            href="https://www.linkedin.com/in/pakhandelwal"
                            // onClick={(e) => e.preventDefault()}
                          >
                            <i className="fa fa-linkedin" />
                          </Button>
                          {/* <Button
                            className="btn-just-icon btn-link mr-1"
                            color="facebook"
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            <i className="fa fa-facebook" />
                          </Button>
                          <Button
                            className="btn-just-icon btn-link"
                            color="google"
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            <i className="fa fa-google-plus" />
                          </Button> */}
                        </CardFooter>
                      </CardBody>
                    </Col>
                  </Row>
                </Card>
              </Col>
              {/* <Col md="6">
                <Card className="card-profile card-plain">
                  <Row>
                    <Col md="5">
                      <CardImg top tag="div">
                        <a href="#pablo" onClick={(e) => e.preventDefault()}>
                          <img
                            alt="..."
                            className="img"
                            src={require("assets/kimaye/prachi.jpg")}
                          />
                        </a>
                      </CardImg>
                    </Col>
                    <Col md="7">
                      <CardBody className="text-left">
                        <CardTitle tag="h4">Ethan Smith</CardTitle>
                        <h6 className="card-category">Founder</h6>
                        <p className="card-description">
                          Don't be scared of the truth because we need to
                          restart the human foundation in truth...
                        </p>
                        <CardFooter className="pull-left">
                          <Button
                            className="btn-just-icon btn-link mr-1"
                            color="linkedin"
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            <i className="fa fa-linkedin" />
                          </Button>
                          <Button
                            className="btn-just-icon btn-link mr-1"
                            color="dribbble"
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            <i className="fa fa-dribbble" />
                          </Button>
                          <Button
                            className="btn-just-icon btn-link"
                            color="pinterest"
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            <i className="fa fa-pinterest" />
                          </Button>
                        </CardFooter>
                      </CardBody>
                    </Col>
                  </Row>
                </Card>
              </Col> */}
              <Col md="6">
                <Card className="card-profile card-plain">
                  <Row>
                    <Col md="5">
                      <CardImg top tag="div">
                        <a href="#pablo" onClick={(e) => e.preventDefault()}>
                          <img
                            alt="..."
                            className="img"
                            src={require("assets/kimaye/purnima.jpg")}
                          />
                        </a>
                      </CardImg>
                    </Col>
                    <Col md="7">
                      <CardBody className="text-center">
                        <CardTitle tag="h4">Purnima Khandelwal</CardTitle>
                        <h6 className="card-category, text-center" style = {{color: '#dbac00', fontWeight: '400'}}>Chief Executive Officer</h6><br />
                        <p style ={{color: 'white'}}>
                          Economics (St Xaviers), MBA (TAPMI) <br/>
                          Rawatsons, InI Consulting <br/>
                        </p>
                        <CardFooter className="text-center">
                         <Button
                            className="btn-just-icon btn-link mr-1"
                            color="twitter"
                            href="https://twitter.com/purnimak2?s=20"
                            // onClick={(e) => e.preventDefault()}
                          >
                            <i className="fa fa-twitter" />
                          </Button>
                          <Button
                            className="btn-just-icon btn-link mr-1"
                            color="linkedin"
                            href="https://www.linkedin.com/in/purnima-khandelwal-05038526"
                            // onClick={(e) => e.preventDefault()}
                          >
                            <i className="fa fa-linkedin" />
                          </Button>
                          {/* <Button
                            className="btn-just-icon btn-link mr-1"
                            color="youtube"
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            <i className="fa fa-youtube" />
                          </Button>
                          <Button
                            className="btn-just-icon btn-link mr-1"
                            color="twitter"
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            <i className="fa fa-twitter" />
                          </Button>
                          <Button
                            className="btn-just-icon btn-link"
                            color="instagram"
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            <i className="fa fa-instagram" />
                          </Button> */}
                        </CardFooter>
                      </CardBody>
                    </Col>
                  </Row>
                </Card>
              </Col>
              {/* <Col md="6">
                <Card className="card-profile card-plain">
                  <Row>
                    <Col md="5">
                      <CardImg top tag="div">
                        <a href="#pablo" onClick={(e) => e.preventDefault()}>
                          <img
                            alt="..."
                            className="img"
                            src={require("assets/kimaye/Sushil.jpg")}
                          />
                        </a>
                      </CardImg>
                    </Col>
                    <Col md="7">
                      <CardBody className="text-left">
                        <CardTitle tag="h4">Sophie West</CardTitle>
                        <h6 className="card-category">Backend Hacker</h6>
                        <p className="card-description">
                          It is literally true that you can succeed best and
                          quickest by helping others to succeed because they
                          care about.
                        </p>
                        <CardFooter className="pull-left">
                          <Button
                            className="btn-just-icon btn-link mr-1"
                            color="linkedin"
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            <i className="fa fa-linkedin" />
                          </Button>
                          <Button
                            className="btn-just-icon btn-link mr-1"
                            color="instagram"
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            <i className="fa fa-instagram" />
                          </Button>
                          <Button
                            className="btn-just-icon btn-link"
                            color="dribbble"
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            <i className="fa fa-dribbble" />
                          </Button>
                        </CardFooter>
                      </CardBody>
                    </Col>
                  </Row>
                </Card>
              </Col> */}
            </Row>
          </Container>
        </div> 
    );
}