import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardTitle,
  Container,
  Row,
  Col,
} from "reactstrap";
import WhiteNavbar from 'components/Navbars/WhiteNavbar.js'
import FooterFinal from "FooterFinal";

export default function SectionSoulful(){
    return(
        <>
        <WhiteNavbar />
        <div className="header-1">
          <div
            className="page-header"
            style={{
              backgroundImage:
                "url(" + require("assets/kimaye/Plant8.jpg") + ")", marginTop: '3%'
            }}
            
          >
            {/* <div className="filter" />
            <div className="content-center">
              <Container>
                <Row>
                  <Col md="5">
                    <div className="iframe-container">
                      <iframe
                        title="iframe-container"
                        allowFullScreen=""
                        frameBorder="0"
                        height="250"
                        src="https://www.youtube.com/embed/RcmrbNRK-jY?modestbranding=1&amp;autohide=1&amp;showinfo=0"
                      />
                    </div>
                  </Col>
                  <Col className="ml-auto" md="6">
                    <h2 className="title">Travel with us</h2>
                    <h5 className="description">
                      There's no doubt that Tesla is delighted with the
                      interest, but the data also raises a few questions. How
                      long will it take for Tesla to fulfill all those extra
                      orders?
                    </h5>
                    <br />
                    <Button
                      color="danger"
                      href="https://www.youtube.com/watch?v=RcmrbNRK-jY?ref=creativetim"
                      target="_blank"
                    >
                      <i className="nc-icon nc-cart-simple mr-1" />
                      Order Now
                    </Button>
                  </Col>
                </Row>
              </Container>
            </div> */}
          </div>
        </div>
        <div
          className="section-image section"
          style = {{backgroundImage: "url(" + require("assets/kimaye/BGN2.jpg") + ")",}}
        >
          <Container>
            <Row>
              <Col className="ml-auto mr-auto " md="10">
                <h2  style = {{color: '#dbac00',textAlign: 'center'}}>Sustainable Social Capital</h2><br />
                <h5 className="description" style = {{color: 'white',fontWeight: '400', textAlign: 'center'}}>
                Pursuing Environmental, Social & Governance Goals 
                </h5>
              </Col>
            </Row>
            <Row>
              <Col md="4">   
                <Card className="card-profile" >
                  <CardBody>
                    <div className="card-avatar">
                      {/* <a href="#pablo" onClick={(e) => e.preventDefault()}> */}
                        <img
                          alt="..."
                          src={require("assets/kimaye/sdg1.jpg")}
                        />
                        {/* <CardTitle tag="h4">Eric Thomson</CardTitle> */}
                      {/* </a> */}
                    </div><br />
                    <h6 style = {{color: 'black', fontWeight: '600'}}>Making Agri Gender Neutral</h6>
                    <p className="card-description text-center"
                       style = {{color: 'black'}}>
                        Equal Pay for equal work <br /> 80% women workers in Fresh Cuts  <br /> <br />
                        Premium for women farmers <br /> 
                        Financial incentives for girl education
                    </p>
                  </CardBody>
                  {/* <CardFooter className="text-center">
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
                  </CardFooter> */}
                </Card>
              </Col>
              <Col md="4">
              <Card className="card-profile" >
                  <CardBody>
                    <div className="card-avatar">
                      {/* <a href="#pablo" onClick={(e) => e.preventDefault()}> */}
                        <img
                          alt="..."
                          src={require("assets/kimaye/sdg2.jpg")}
                        />
                        {/* <CardTitle tag="h4">Eric Thomson</CardTitle> */}
                      {/* </a> */}
                    </div><br />
                    <h6 style = {{color: 'black', fontWeight: '600'}}>Improving Livelihoods</h6>
                    <p className="card-description text-center"
                       style = {{color: 'black'}}>
                    No child labor employed <br /> Rural jobs: 120%+ minimum wages<br /> <br />
                    Premium to farmers for better quality <br />
                    Financial Inclusion: no cash transactions
                    </p>
                  </CardBody>
                  {/* <CardFooter className="text-center">
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
                  </CardFooter> */}
                </Card>
              </Col>
              <Col md="4">
              <Card className="card-profile" >
                  <CardBody>
                    <div className="card-avatar">
                      {/* <a href="#pablo" onClick={(e) => e.preventDefault()}> */}
                        <img
                          alt="..."
                          src={require("assets/kimaye/sdg3.jpg")}
                        />
                        {/* <CardTitle tag="h4">Eric Thomson</CardTitle> */}
                      {/* </a> */}
                    </div><br />
                    <h6 style = {{color: 'black', fontWeight: '600'}}>Safety & Environment Protection</h6>
                    <p className="card-description text-center"
                       style = {{color: 'black'}}>
                    Less than 2% wastage across supply chain <br />
                    70% Water saved with 100% drip irrigation <br /> <br />
                    Env protection by implementing GAP <br />
                    Safe Fruits for the consumers
                    </p>
                  </CardBody>
                  {/* <CardFooter className="text-center">
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
                  </CardFooter> */}
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
        <FooterFinal />
        </>
    );
}