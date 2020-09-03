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

export default function TeamTypes(){
    return(
        {/* ********* END TEAM 2 ********* */}
        <div className="team-3">
        <div>
          <Container>
            <Row>
              <Col className="ml-auto mr-auto text-center" md="8">
                <h2 className="title">The Executive Team 3</h2>
                <h5 className="description">
                  Institutions
                </h5>
              </Col>
            </Row>
            <div className="space-top" />
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
                            src={require("assets/kimaye/kalpesh.jpg")}
                          />
                        </a>
                      </CardImg>
                    </Col>
                    <Col md="7">
                      <CardBody className="text-left">
                        <CardTitle tag="h4">Alec Thompson</CardTitle>
                        <h6 className="card-category">Founder</h6>
                        <p className="card-description">
                          Individual commitment to a group effort – that’s what
                          makes a team work, a society work...
                        </p>
                        <CardFooter className="pull-left">
                          <Button
                            className="btn-just-icon btn-link mr-1"
                            color="twitter"
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            <i className="fa fa-twitter" />
                          </Button>
                          <Button
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
                          </Button>
                        </CardFooter>
                      </CardBody>
                    </Col>
                  </Row>
                </Card>
              </Col>
              <Col md="6">
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
              </Col>
              <Col md="6">
                <Card className="card-profile card-plain">
                  <Row>
                    <Col md="5">
                      <CardImg top tag="div">
                        <a href="#pablo" onClick={(e) => e.preventDefault()}>
                          <img
                            alt="..."
                            className="img"
                            src={require("assets/kimaye/SARABJEET.jpg")}
                          />
                        </a>
                      </CardImg>
                    </Col>
                    <Col md="7">
                      <CardBody className="text-left">
                        <CardTitle tag="h4">Lucas Andrew</CardTitle>
                        <h6 className="card-category">Web Designer</h6>
                        <p className="card-description">
                          I love you like Kanye loves Kanye. Don't be scared of
                          the truth. Kanye loves himself like Kanye loves Kanye.
                        </p>
                        <CardFooter className="pull-left">
                          <Button
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
                          </Button>
                        </CardFooter>
                      </CardBody>
                    </Col>
                  </Row>
                </Card>
              </Col>
              <Col md="6">
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
              </Col>
            </Row>
            <Row>
              <Col className="ml-auto mr-auto text-center" md="8">
                <h2 className="title">The Executive Team 3</h2>
                <h5 className="description">
                  This is the paragraph where you can write more details about
                  your team. Keep you user engaged by providing meaningful
                  information.
                </h5>
              </Col>
            </Row>
            <div className="space-top" />
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
                            src={require("assets/kimaye/AJIT.jpg")}
                          />
                        </a>
                      </CardImg>
                    </Col>
                    <Col md="7">
                      <CardBody className="text-left">
                        <CardTitle tag="h4">Alec Thompson</CardTitle>
                        <h6 className="card-category">Founder</h6>
                        <p className="card-description">
                          Individual commitment to a group effort – that’s what
                          makes a team work, a society work...
                        </p>
                        <CardFooter className="pull-left">
                          <Button
                            className="btn-just-icon btn-link mr-1"
                            color="twitter"
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            <i className="fa fa-twitter" />
                          </Button>
                          <Button
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
                          </Button>
                        </CardFooter>
                      </CardBody>
                    </Col>
                  </Row>
                </Card>
              </Col>
              <Col md="6">
                <Card className="card-profile card-plain">
                  <Row>
                    <Col md="5">
                      <CardImg top tag="div">
                        <a href="#pablo" onClick={(e) => e.preventDefault()}>
                          <img
                            alt="..."
                            className="img"
                            src={require("assets/kimaye/ajit-kumar.jpg")}
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
              </Col>
              <Col md="6">
                <Card className="card-profile card-plain">
                  <Row>
                    <Col md="5">
                      <CardImg top tag="div">
                        <a href="#pablo" onClick={(e) => e.preventDefault()}>
                          <img
                            alt="..."
                            className="img"
                            src={require("assets/kimaye/SHALABH.jpg")}
                          />
                        </a>
                      </CardImg>
                    </Col>
                    <Col md="7">
                      <CardBody className="text-left">
                        <CardTitle tag="h4">Lucas Andrew</CardTitle>
                        <h6 className="card-category">Web Designer</h6>
                        <p className="card-description">
                          I love you like Kanye loves Kanye. Don't be scared of
                          the truth. Kanye loves himself like Kanye loves Kanye.
                        </p>
                        <CardFooter className="pull-left">
                          <Button
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
                          </Button>
                        </CardFooter>
                      </CardBody>
                    </Col>
                  </Row>
                </Card>
              </Col>
              <Col md="6">
                <Card className="card-profile card-plain">
                  <Row>
                    <Col md="5">
                      <CardImg top tag="div">
                        <a href="#pablo" onClick={(e) => e.preventDefault()}>
                          <img
                            alt="..."
                            className="img"
                            src={require("assets/kimaye/ashwin.jpg")}
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
              </Col>
            </Row>
          </Container>
        </div> 
        {/* ********* END TEAM 3 ********* */}
        {/* ********* TEAM 4 ********* */}
        <div
          className="team-4 section-image"
          style={{
            backgroundImage:
              "url(" + require("assets/img/sections/fabio-mangione.jpg") + ")",
          }}
        >
          <Container>
            <Row>
              <Col className="ml-auto mr-auto text-center" md="8">
                <h2 className="title">The Executive Team 4</h2>
                <h5 className="description">
                  This is the paragraph where you can write more details about
                  your team. Keep you user engaged by providing meaningful
                  information.
                </h5>
                <br />
              </Col>
            </Row>
            <Row>
              <Col md="4">
                <Card className="card-profile">
                  <CardBody>
                    <div className="card-avatar">
                      <a href="#pablo" onClick={(e) => e.preventDefault()}>
                        <img
                          alt="..."
                          src={require("assets/img/faces/ayo-ogunseinde-2.jpg")}
                        />
                        <CardTitle tag="h4">Eric Thomson</CardTitle>
                      </a>
                    </div>
                    <p className="card-description text-center">
                      A group becomes a team when each member is sure enough of
                      himself and his contribution to praise the skill of the
                      others. No one can whistle a symphony. It takes an
                      orchestra to play it.
                    </p>
                  </CardBody>
                  <CardFooter className="text-center">
                    <Button
                      className="btn-just-icon mr-1"
                      color="linkedin"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fa fa-linkedin" />
                    </Button>
                    <Button
                      className="btn-just-icon mr-1"
                      color="dribbble"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fa fa-dribbble" />
                    </Button>
                    <Button
                      className="btn-just-icon"
                      color="instagram"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fa fa-instagram" />
                    </Button>
                  </CardFooter>
                </Card>
              </Col>
              <Col md="4">
                <Card className="card-profile">
                  <CardBody>
                    <div className="card-avatar">
                      <a href="#pablo" onClick={(e) => e.preventDefault()}>
                        <img
                          alt="..."
                          src={require("assets/img/faces/joe-gardner-2.jpg")}
                        />
                        <CardTitle tag="h4">Sophia West</CardTitle>
                      </a>
                    </div>
                    <p className="card-description text-center">
                      The strength of the team is each individual member. The
                      strength of each member is the team. If you can laugh
                      together, you can work together, silence isn’t golden,
                      it’s deadly.
                    </p>
                  </CardBody>
                  <CardFooter className="text-center">
                    <Button
                      className="btn-just-icon mr-1"
                      color="linkedin"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fa fa-linkedin" />
                    </Button>
                    <Button
                      className="btn-just-icon mr-1"
                      color="dribbble"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fa fa-dribbble" />
                    </Button>
                    <Button
                      className="btn-just-icon"
                      color="pinterest"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fa fa-pinterest" />
                    </Button>
                  </CardFooter>
                </Card>
              </Col>
              <Col md="4">
                <Card className="card-profile">
                  <CardBody>
                    <div className="card-avatar">
                      <a href="#pablo" onClick={(e) => e.preventDefault()}>
                        <img
                          alt="..."
                          src={require("assets/img/faces/clem-onojeghuo-2.jpg")}
                        />
                        <CardTitle tag="h4">Lucas Andrew</CardTitle>
                      </a>
                    </div>
                    <p className="card-description text-center">
                      Great teams do not hold back with one another. They are
                      unafraid to air their dirty laundry. They admit their
                      mistakes, their weaknesses and their concerns without fear
                      of reprisal.
                    </p>
                  </CardBody>
                  <CardFooter className="text-center">
                    <Button
                      className="btn-just-icon mr-1"
                      color="youtube"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fa fa-youtube" />
                    </Button>
                    <Button
                      className="btn-just-icon mr-1"
                      color="twitter"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fa fa-twitter" />
                    </Button>
                    <Button
                      className="btn-just-icon"
                      color="instagram"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fa fa-instagram" />
                    </Button>
                  </CardFooter>
                </Card>
              </Col>
            </Row>
          </Container>
        </div> 
        {/* ********* END TEAM 4 ********* */}
        {/* ********* TEAM 5 ********* */}
        <div
          className="team-5 section-dark"
        >
          <Container>
            <Row>
              <Col className="ml-auto mr-auto text-center" md="8">
                <h2 className="title">Add Life to Food</h2>
                <h5 className="description"> 
                  This is the paragraph where you can write more details about
                  your team. Keep you user engaged by providing meaningful
                  information. 
                  Social Good can be created by a simple act of eating a fruit. <br /> Every Kimaye fruit <span style = {{fontWeight: 500}}>Adds Life </span>to 4 Beings that it touches 
                  while ensuring gender parity. <br /> #AllSafeAllGood
                </h5>
              </Col>
            </Row>
            <Row>
              <Col md="6">
                <Card className="card-profile card-plain">
                  <Row>
                    <Col md="7">
                      <CardBody className="text-left">
                        <CardTitle tag="h4">Farmer</CardTitle>
                         <h6 className="card-category" style = {{color: "#20c997"}}>Entrepreneur</h6> 
                         <p className="card-description">
                          Kimaye ADDS up to 40% to his annual profits by improving product quality, market access {"&"} disintermediation
                        </p>
                        <Button className="btn-link" color="primary" type="button"
                          // href="#pablo"
                          onClick={(e) => e.preventDefault()} >
                            Know More
                            <i className="nc-icon nc-minimal-right"></i>
                          </Button>  
                         <CardFooter>
                          <Button
                            className="btn-just-icon btn-neutral mr-1"
                            color="link"
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            <i className="fa fa-twitter" />
                          </Button>
                          <Button
                            className="btn-just-icon btn-neutral mr-1"
                            color="link"
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            <i className="fa fa-facebook" />
                          </Button>
                          <Button
                            className="btn-just-icon btn-neutral"
                            color="link"
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            <i className="fa fa-google-plus" />
                          </Button>
                        </CardFooter> 
                      </CardBody>
                    </Col>
                    <Col md="5">
                      <CardImg top tag="div">
                        <a href="#pablo" onClick={(e) => e.preventDefault()}>
                          <img
                            alt="..."
                            className="img"
                            src={require("assets/kimaye/farmer2.jpg")}
                            height = "800px"
                          />
                        </a>
                      </CardImg>
                    </Col>
                  </Row>
                </Card>
              </Col>
              <Col md="6">
                <Card className="card-profile card-plain">
                  <Row>
                    <Col md="5">
                      <CardImg top tag="div" >
                        <a href="#pablo" onClick={(e) => e.preventDefault()}>
                          <img
                            alt="..."
                            className="img"
                            src={require("assets/kimaye/banana8.jpg")}
                          />
                        </a>
                      </CardImg>
                    </Col>
                    <Col md="7">
                      <CardBody className="text-left">
                        <CardTitle tag="h4">Mr. Fruit</CardTitle>
                        <h6 className="card-category">Doctor</h6>
                        <p className="card-description">
                          He's sad as no one treats him with respect. <br />
                          Kimaye ADDS Life to him by keeping him fresh for 50-70% longer and reducing supply chain wastage to 2%
                        </p>
                        <Button className="btn-link" color="primary" type="button"
                          // href="#pablo"
                          onClick={(e) => e.preventDefault()} >
                            Know More
                            <i className="nc-icon nc-minimal-right"></i>
                          </Button> 
                        <CardFooter>
                          <Button
                            className="btn-just-icon btn-neutral mr-1"
                            color="link"
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            <i className="fa fa-linkedin" />
                          </Button>
                          <Button
                            className="btn-just-icon btn-neutral mr-1"
                            color="link"
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            <i className="fa fa-dribbble" />
                          </Button>
                          <Button
                            className="btn-just-icon btn-neutral"
                            color="link"
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
              </Col>
              <Col md="6">
                <Card className="card-profile card-plain">
                  <Row>
                    <Col md="7">
                      <CardBody className="text-left">
                        <CardTitle tag="h4">Ms. Environment</CardTitle>
                        <h6 className="card-category">Mother</h6>
                        <p className="card-description">
                          She's extrememly agitated by her continuous degradation. <br />
                          Kimaye ADDS to her life by reducing usage of harmful chemicals, water {"&"} waste
                        </p>
                        <Button className="btn-link" color="primary" type="button"
                          // href="#pablo"
                          onClick={(e) => e.preventDefault()} >
                            Know More
                            <i className="nc-icon nc-minimal-right"></i>
                          </Button> 
                        <CardFooter>
                          <Button
                            className="btn-just-icon btn-neutral mr-1"
                            color="link"
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            <i className="fa fa-youtube" />
                          </Button>
                          <Button
                            className="btn-just-icon btn-neutral mr-1"
                            color="link"
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            <i className="fa fa-twitter" />
                          </Button>
                          <Button
                            className="btn-just-icon btn-neutral"
                            color="link"
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            <i className="fa fa-instagram" />
                          </Button>
                        </CardFooter> 
                      </CardBody>
                    </Col>
                    <Col md="5">
                      <CardImg top tag="div">
                        <a href="#pablo" onClick={(e) => e.preventDefault()}>
                          <img
                            alt="..."
                            className="img"
                            src={require("assets/kimaye/banana3.jpg")}
                          />
                        </a>
                      </CardImg>
                    </Col>
                  </Row>
                </Card>
              </Col>
              <Col md="6">
                <Card className="card-profile card-plain">
                  <Row>
                    <Col md="5">
                      <CardImg top tag="div">
                        <a href="#pablo" onClick={(e) => e.preventDefault()}>
                          <img
                            alt="..."
                            className="img"
                            src={require("assets/kimaye/Child.jpg")}
                          />
                        </a>
                      </CardImg>
                    </Col> 
                    <Col md="7">
                      <CardBody className="text-left">
                        <CardTitle tag="h4">Ms. Consumer</CardTitle>
                        <h6 className="card-category">Queen</h6>
                        <p className="card-description">
                          She's worried about her loved ones' health. <br />
                          Kimaye ADDS to their life by providing assured hygeinic, unadulterated {"&"} safe fruits
                        </p>
                        <CardFooter style = {{justifyItems: 'left'}}>
                          <Button className="btn-link" color="primary" type="button"
                          // href="#pablo"
                          onClick={(e) => e.preventDefault()} >
                            Know More
                            <i className="nc-icon nc-minimal-right"></i>
                          </Button> 
                           <Button
                            className="btn-just-icon btn-neutral mr-1"
                            color="link"
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            <i className="fa fa-instagram" />
                          </Button>
                          <Button
                            className="btn-just-icon btn-neutral"
                            color="link"
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
              </Col>
            </Row>
          </Container>
        </div> 
        {/* ********* END TEAM 5 ********* */}
    );
}
