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

export default function Investors(){
    return(
        <div
className="team-2 section-image" style = {{
  backgroundImage:
  "url(" + require("assets/kimaye/BG2.jpg") + ")",}}>
<Container>
  <Row>
    <Col className="ml-auto mr-auto text-center" md="8">
      <h2 className="title">Investors</h2>
      <h3 style = {{color: '#dcab00'}}>
        Institutions
      </h3>
    </Col>
  </Row>
  <Row style = {{alignItems: 'center'}}>
    <Col md="4">
      <Card className="card-profile card-plain">
        <CardImg top tag="div">
          <a href="#pablo" onClick={(e) => e.preventDefault()}>
            <img
              alt="..."
              className="img"
              src={require("assets/kimaye/aavishkaar.png")}
            />
          </a>
        </CardImg>
        <CardBody>
          {/* <CardTitle tag="h4">Alec Thompson</CardTitle> */}
          {/* <h6 className="card-category">Managing Partner</h6>
          <CardFooter>
            <Button
              className="btn-link btn-just-icon mr-1"
              color="neutral"
              href="#pablo"
              onClick={(e) => e.preventDefault()}
            >
              <i className="fa fa-twitter" />
            </Button>
            <Button
              className="btn-link btn-just-icon mr-1"
              color="neutral"
              href="#pablo"
              onClick={(e) => e.preventDefault()}
            >
              <i className="fa fa-facebook" />
            </Button>
            <Button
              className="btn-link btn-just-icon"
              color="neutral"
              href="#pablo"
              onClick={(e) => e.preventDefault()}
            >
              <i className="fa fa-dribbble" />
            </Button>
          </CardFooter> */}
        </CardBody>
      </Card>
    </Col>
    <Col md="4">
      <Card className="card-profile card-plain">
        <CardImg top tag="div" >
          <a href="#pablo" onClick={(e) => e.preventDefault()}>
            <img
              alt="..."
              className="img"
              src={require("assets/kimaye/aspada.png")}
            />
          </a>
        </CardImg>
        <CardBody>
          {/* <CardTitle tag="h4">George Lincoln</CardTitle> */}
          {/* <h6 className="card-category">Backend Hacker</h6>
          <CardFooter>
            <Button
              className="btn-link btn-just-icon mr-1"
              color="neutral"
              href="#pablo"
              onClick={(e) => e.preventDefault()}
            >
              <i className="fa fa-linkedin" />
            </Button>
            <Button
              className="btn-link btn-just-icon mr-1"
              color="neutral"
              href="#pablo"
              onClick={(e) => e.preventDefault()}
            >
              <i className="fa fa-facebook" />
            </Button>
            <Button
              className="btn-link btn-just-icon"
              color="neutral"
              href="#pablo"
              onClick={(e) => e.preventDefault()}
            >
              <i className="fa fa-dribbble" />
            </Button>
          </CardFooter> */}
        </CardBody>
      </Card>
    </Col>
    <Col md="4">
      <Card className="card-profile card-plain">
        <CardImg top tag="div">
          <a href="#pablo" onClick={(e) => e.preventDefault()}>
            <img
              alt="..."
              className="img"
              src={require("assets/kimaye/unilazer.jpg")}
            />
          </a>
        </CardImg>
        <CardBody>
          {/* <CardTitle tag="h4">Sophie West</CardTitle> */}
          {/* <h6 className="card-category">Photographer</h6> */}
          {/* <CardFooter>
            <Button
              className="btn-link btn-just-icon mr-1"
              color="neutral"
              href="#pablo"
              onClick={(e) => e.preventDefault()}
            >
              <i className="fa fa-dribbble" />
            </Button>
            <Button
              className="btn-link btn-just-icon mr-1"
              color="neutral"
              href="#pablo"
              onClick={(e) => e.preventDefault()}
            >
              <i className="fa fa-twitter" />
            </Button>
            <Button
              className="btn-link btn-just-icon"
              color="neutral"
              href="#pablo"
              onClick={(e) => e.preventDefault()}
            >
              <i className="fa fa-linkedin" />
            </Button>
          </CardFooter> */}
        </CardBody>
      </Card>
    </Col>
  </Row>
  <Row>
    <Col className="ml-auto mr-auto text-center" md="8">
      {/* <h2 className="title">Our Stunning Team 1</h2> */}
      <h3 style = {{color: '#dcab00'}}>
        Angels
      </h3>
    </Col>
  </Row>
  <Row style = {{justifyContent: 'space-evenly'}}>
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
          <a href="#pablo" onClick={(e) => e.preventDefault()}>
            <img
              alt="..."
              src={require("assets/kimaye/ashish.jpg")}
            />
          </a>
        </div>
        <CardBody>
          <a href="#pablo" onClick={(e) => e.preventDefault()}>
            <div className="author">
              <CardTitle tag="h4" style ={{color: 'black'}}>Ashish Gupta</CardTitle><br />
              {/* <h5 className="description" style ={{color: 'black', fontSize: '10',fontWeight: '400'}}>
                  
                </h5> */}
            </div>
          </a>
          <p className="text-center">
          Managing Director <br /> 
                  Helion Advisors <br />
                  Junglee, Tavant, IITK, Stanford
          </p>
        </CardBody>
        {/* <CardFooter className="text-center">
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
        </CardFooter> */}
      </Card>
    </Col>
    <Col md="4">
      <Card className="card-profile card-category">
        <div className="card-avatar">
          <a href="#pablo" onClick={(e) => e.preventDefault()}>
            <img
              alt="..."
              src={require("assets/kimaye/pavan.jpg")}
            />
          </a>
        </div>
        <CardBody>
          <a href="#pablo" onClick={(e) => e.preventDefault()}>
            <div className="author">
              <CardTitle tag="h4" style = {{color: 'black'}}>Pavan Vaish</CardTitle><br />
              {/* <h6 className="card-category text-muted">Director, Supply & Driver Ops </h6>
              <h6 className="card-category text-muted">Uber India & South Asia</h6>
              <h6 className="card-category text-muted">IBM-Daksh, IITKGP, Stanford</h6> */}
            </div>
          </a>
          <p className="text-center">
          Director, Supply & Driver Ops<br />
          Uber India & South Asia<br />
          IBM-Daksh, IITKGP, Stanford
          </p>
        </CardBody>
        {/* <CardFooter className="text-center">
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
        </CardFooter> */}
      </Card>
    </Col>
    <Col md="4">
      <Card className="card-profile card-category">
        <div className="card-avatar">
          <a href="#pablo" onClick={(e) => e.preventDefault()}>
            <img
              alt="..."
              src={require("assets/kimaye/rahul.png")}
            />
          </a>
        </div>
        <CardBody>
          <a href="#pablo" onClick={(e) => e.preventDefault()}>
            <div className="author">
              <CardTitle tag="h4" style ={{color: 'black'}}>Rahul Chowdhri</CardTitle><br />
              {/* <h6 className="card-category text-muted">
                Co-Founder 
              </h6>
              <h6 className="card-category text-muted">
              Stellaris Ventures
              </h6>
              <h6 className="card-category text-muted">
              BCG, Helion, IITK, IIMC
              </h6> */}
            </div>
          </a>
          <p className="text-center">
          Co-Founder <br />
          Stellaris Ventures<br />
          BCG, Helion, IITK, IIMC
          </p>
        </CardBody>
        {/* <CardFooter className="text-center">
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
        </CardFooter> */}
      </Card>
    </Col>
  </Row>
</Container>
</div>
    );
}