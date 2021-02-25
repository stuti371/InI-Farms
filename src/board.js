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

export default function board(){
    return(
        <div className="section section-team cd-section" id="teams"  style = {{
          backgroundImage:
          "url(" + require("assets/kimaye/BG3.jpg") + ")",}}>
          <Container >
            <Row>
              <Col className="ml-auto mr-auto text-center" md="8">
                <h2 className="title" style = {{color: '#800000', fontWeight: '450'}}>Board</h2>
                <h5 className="description" style = {{fontWeight: '500', color: 'black'}} >
                Build and Translate Vision into Reality 
                </h5>
              </Col>
            </Row>
            <Row>
              {/* <Col md="3"> */}
                {/* <Card className="card-profile card-category">
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
                        <CardTitle tag="h4">Henry Ford</CardTitle>
                        <h6 className="card-category text-muted">
                          Product Manager
                        </h6>
                      </div>
                    </a>
                    <p className="card-description text-center">
                      Teamwork is so important that it is virtually impossible
                      for you to reach 
                    </p>
                  </CardBody>
                  <CardFooter className="text-center">
                    <Button
                      className="btn-link btn-just-icon mr-1"
                      color="twitter"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fa fa-twitter" />
                    </Button>
                    <Button
                      className="btn-link btn-just-icon mr-1"
                      color="dribbble"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fa fa-dribbble" />
                    </Button>
                    <Button
                      className="btn-link btn-just-icon"
                      color="linkedin"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fa fa-linkedin" />
                    </Button>
                  </CardFooter>
                </Card> */}
              {/* </Col> */}
              <Col md="4">
                <Card className="card-profile card-category">
                  <div className="card-avatar">
                    {/* <a href="#pablo" onClick={(e) => e.preventDefault()}> */}
                      <img
                        alt="..."
                        src={require("assets/kimaye/arun.jpg")}
                      />
                    {/* </a> */}
                  </div>
                  <CardBody>
                    {/* <a href="#pablo" onClick={(e) => e.preventDefault()}> */}
                      <div className="author">
                        <CardTitle tag="h4" style = {{fontWeight: '500'}}>Arun Diaz</CardTitle>
                        <h6 className="card-category" style = {{fontWeight: '450', color: '#800000'}}>Director</h6>
                      </div>
                    {/* </a> */}
                    <p className="card-description text-center" style = {{color: 'black'}}>
                      Founding Member - Aavishkaar <br /> 28 years with Standard Chartered Bank <br /> Led  Reuters Consulting in South Asia
                    </p>
                  </CardBody>
                  <CardFooter className="text-center">
                    <Button
                      className="btn-link btn-just-icon mr-1"
                      color="twitter"
                      href="https://twitter.com/arun_diaz?s=20"
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
                      href="https://www.linkedin.com/in/arun-diaz-70b606"
                      // onClick={(e) => e.preventDefault()}
                    >
                      <i className="fa fa-linkedin" />
                    </Button>
                  </CardFooter>
                </Card>
              </Col>
              <Col md="4">
                <Card className="card-profile card-category">
                  <div className="card-avatar">
                    {/* <a href="#pablo" onClick={(e) => e.preventDefault()}> */}
                      <img
                        alt="..."
                        src={require("assets/kimaye/dhara.jpg")}
                      />
                    {/* </a> */}
                  </div>
                  <CardBody>
                    {/* <a href="#pablo" onClick={(e) => e.preventDefault()}> */}
                      <div className="author">
                        <CardTitle tag="h4" style = {{fontWeight: '500'}}>Dhara Mehta</CardTitle>
                        <h6 className="card-category" style = {{color: '#800000', fontWeight: '450'}}>Director</h6>
                      </div>
                    {/* </a> */}
                    <p className="card-description text-center" style = {{color: 'black'}}>
                    Core founding member Samridhi fund <br />
                    Chartered Accountant & Bachelor of Law <br /> 
                    Worked with Big 4 accounting firms
                    </p>
                  </CardBody>
                  <CardFooter className="text-center">
                    <Button
                      className="btn-link btn-just-icon mr-1"
                      color="twitter"
                      href=""
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
                      href="https://www.linkedin.com/in/dhara-mehta-a0728a50"
                      // onClick={(e) => e.preventDefault()}
                    >
                      <i className="fa fa-linkedin" />
                    </Button>
                  </CardFooter>
                </Card>
              </Col>
              <Col md="4">
                <Card className="card-profile card-category">
                  <div className="card-avatar">
                    {/* <a href="#pablo" onClick={(e) => e.preventDefault()}> */}
                      <img
                        alt="..."
                        src={require("assets/kimaye/sudhir.jpg")}
                      />
                    {/* </a> */}
                  </div>
                  <CardBody>
                    {/* <a href="#pablo" onClick={(e) => e.preventDefault()}> */}
                      <div className="author">
                        <CardTitle tag="h4" style = {{fontWeight: '500'}}>Sudhir Kamath</CardTitle>
                        <h6 className="card-category" style = {{color: '#800000', fontWeight: '450'}}>
                          Director
                        </h6>
                      </div>
                    {/* </a> */}
                    <p className="card-description text-center" style = {{color: 'black'}}>
                      Co-founder 9Stacks & Faboom <br />
                      DIT, IIMA, McKinsey <br />
                      Managing Director Sunterra
                    </p>
                  </CardBody>
                  <CardFooter className="text-center">
                    <Button
                      className="btn-link btn-just-icon mr-1"
                      color="twitter"
                      href="https://twitter.com/SudhirKamath2?s=20"
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
                      href="https://www.linkedin.com/in/kamathsudhir"
                      // onClick={(e) => e.preventDefault()}
                    >
                      <i className="fa fa-linkedin" />
                    </Button>
                  </CardFooter>
                </Card>
              </Col>
            </Row>
            <Row>
              <Col className="ml-auto mr-auto text-center" md="8">
                {/* <h2 className="title">Our Stunning Team 1</h2> */}
                {/* <h5 className="description">
                  This is the paragraph where you can write more details about
                  your team. Keep you user engaged by providing meaningful
                  information.
                </h5> */}
              </Col>
            </Row>
            <Row>
              {/* <Col md="3">
                <Card className="card-profile card-plain">
                  <div className="card-avatar">
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <img
                        alt="..."
                        src={require("assets/kimaye/AJIT.jpg")}
                      />
                    </a>
                  </div>
                  <CardBody>
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <div className="author">
                        <CardTitle tag="h4">Henry Ford</CardTitle>
                        <h6 className="card-category text-muted">
                          Product Manager
                        </h6>
                      </div>
                    </a>
                    <p className="card-description text-center">
                      Teamwork is so important that it is virtually impossible
                      for you to reach the heights of your capabilities or make
                      the money that you want without becoming very good at it.
                    </p>
                  </CardBody>
                  <CardFooter className="text-center">
                    <Button
                      className="btn-link btn-just-icon mr-1"
                      color="twitter"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fa fa-twitter" />
                    </Button>
                    <Button
                      className="btn-link btn-just-icon mr-1"
                      color="dribbble"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fa fa-dribbble" />
                    </Button>
                    <Button
                      className="btn-link btn-just-icon"
                      color="linkedin"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fa fa-linkedin" />
                    </Button>
                  </CardFooter>
                </Card>
              </Col> */}

            </Row>
            <Row>
              {/* <Col md="3"> */}
                {/* <Card className="card-profile card-category">
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
                        <CardTitle tag="h4">Henry Ford</CardTitle>
                        <h6 className="card-category text-muted">
                          Product Manager
                        </h6>
                      </div>
                    </a>
                    <p className="card-description text-center">
                      Teamwork is so important that it is virtually impossible
                      for you to reach 
                    </p>
                  </CardBody>
                  <CardFooter className="text-center">
                    <Button
                      className="btn-link btn-just-icon mr-1"
                      color="twitter"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fa fa-twitter" />
                    </Button>
                    <Button
                      className="btn-link btn-just-icon mr-1"
                      color="dribbble"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fa fa-dribbble" />
                    </Button>
                    <Button
                      className="btn-link btn-just-icon"
                      color="linkedin"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fa fa-linkedin" />
                    </Button>
                  </CardFooter>
                </Card> */}
              {/* </Col> */}
              <Col md="4">
                <Card className="card-profile card-category">
                  <div className="card-avatar">
                    {/* <a href="#pablo" onClick={(e) => e.preventDefault()}> */}
                      <img
                        alt="..."
                        src={require("assets/kimaye/ajaym.jpg")}
                      />
                    {/* </a> */}
                  </div>
                  <CardBody>
                    {/* <a href="#pablo" onClick={(e) => e.preventDefault()}> */}
                      <div className="author">
                        <CardTitle tag="h4" style = {{fontWeight: '500'}}>Ajay Maniar</CardTitle>
                        <h6 className="card-category" style = {{fontWeight: '450', color: '#800000'}}>Observer</h6>
                      </div>
                    {/* </a> */}
                    <p className="card-description text-center" style = {{color: 'black'}}>
                      Partner - Aavishkaar <br /> Chemical Engineer, MMS (JBIMS) <br /> CARE, CitiBank
                    </p>
                  </CardBody>
                  <CardFooter className="text-center">
                    <Button
                      className="btn-link btn-just-icon mr-1"
                      color="twitter"
                      href="https://twitter.com/AjayManiar?s=20"
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
                      href="https://www.linkedin.com/in/ajay-maniar-6b229622"
                      // onClick={(e) => e.preventDefault()}
                    >
                      <i className="fa fa-linkedin" />
                    </Button>
                  </CardFooter>
                </Card>
              </Col>
              <Col md="4">
                <Card className="card-profile card-category">
                  <div className="card-avatar">
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <img
                        alt="..."
                        src={require("assets/kimaye/kartik.jpg")}
                      />
                    </a>
                  </div>
                  <CardBody>
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <div className="author">
                        <CardTitle tag="h4" style = {{fontWeight: '500'}}>Kartik Srivatsa</CardTitle>
                        <h6 className="card-category" style = {{color: '#800000', fontWeight: '450'}}>Observer</h6>
                      </div>
                    </a>
                    <p className="card-description text-center" style = {{color: 'black'}}>
                    Managing Partner LGT Lightstone Aspada<br />
                    IITM, McKinsey <br /> 
                    Lightspeed, SONG
                    </p>
                  </CardBody>
                  <CardFooter className="text-center">
                    <Button
                      className="btn-link btn-just-icon mr-1"
                      color="twitter"
                      href="https://twitter.com/kartik_srivatsa?s=20"
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
                      href="https://www.linkedin.com/in/kartiksrivatsa"
                      // onClick={(e) => e.preventDefault()}
                    >
                      <i className="fa fa-linkedin" />
                    </Button>
                  </CardFooter>
                </Card>
              </Col>
              <Col md="4">
                <Card className="card-profile card-category">
                  <div className="card-avatar">
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <img
                        alt="..."
                        src={require("assets/kimaye/chetan.jpg")}
                      />
                    </a>
                  </div>
                  <CardBody>
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <div className="author">
                        <CardTitle tag="h4" style = {{fontWeight: '500'}}>Chetan Juthani</CardTitle>
                        <h6 className="card-category" style = {{color: '#800000', fontWeight: '450'}}>
                          Observer
                        </h6>
                      </div>
                    </a>
                    <p className="card-description text-center" style = {{color: 'black'}}>
                      CFO Unilazer Ventures <br />
                      Chartered Accoountant & CS<br />
                      UTV, Walt Disney
                    </p>
                  </CardBody>
                  <CardFooter className="text-center">
                    <Button
                      className="btn-link btn-just-icon mr-1"
                      color="twitter"
                      href="https://twitter.com/ChetanJuthani?s=20"
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
                      href="https://www.linkedin.com/in/chetan-juthani-6b8b0811"
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