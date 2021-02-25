import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardBody,
  CardTitle,
  CardFooter,
  UncontrolledCollapse,
  FormGroup,
  Form,
  Input,
  NavbarBrand,
  Navbar,
  Nav,
  Container,
  Row,
  Col,
  Carousel,
  CarouselItem,
  CarouselIndicators,
} from "reactstrap";
import MultiDropdownNavbar from "components/Navbars/MultiDropdownNavbar.js";
import FooterFinal from "FooterFinal";

const items = [
    {
      src: "url(" + require("assets/kimaye/D2C4.png") + ")",
      content: (
        <Container>
          {/* <Row>
            <Col className="text-left" md="8" style ={{marginTop: '45%', fontWeight: '500'}}>
              <h1 className="title">Grown With Passion <br /> 
              <span style ={{marginLeft: '10%'}}>Delivered With Care</span></h1>
              <h5>
                Now you have no excuses, it's time to surprise your clients, your
                competitors, and why not, the world. You probably won't have a
                better chance to show off all your potential if it's not by
                designing a website for your own agency or web studio.
              </h5>
              <br />
              <div className="buttons">
                <Button
                  className="btn-round"
                  color="danger"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                  size="lg"
                >
                  Read More
                </Button>
                <Button
                  className="btn-neutral btn-just-icon"
                  color="link"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                >
                  <i className="fa fa-twitter" />
                </Button>
                <Button
                  className="btn-neutral btn-just-icon"
                  color="link"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                >
                  <i className="fa fa-facebook-square" />
                </Button>
                <Button
                  className="btn-neutral btn-just-icon"
                  color="link"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                >
                  <i className="fa fa-get-pocket" />
                </Button>
              </div>
            </Col>
          </Row> */}
        </Container>
      ),
      altText: "",
      caption: "",
    },
    {
      src: "url(" + require("assets/kimaye/D2C7.png") + ")",
      content: (
        <Container>
          {/* <Row>
            <Col className="ml-auto mr-auto text-center" md="8">
              <h1 className="title" style = {{marginTop: '50%'}}>#AllSafe#AllGood</h1>
            </Col>
          </Row> */}
        </Container>
      ),
      altText: "",
      caption: "",
    },
    {
      src: "url(" + require("assets/kimaye/D2C6.png") + ")",
      content: (
        <Container>
          {/* <Row>
            <Col md="8">
              <h2 className="title" style = {{marginTop: '83%', fontWeight: '500'}}>Doing Good... <br />
              <span style = {{marginLeft: '5%'}}>As We Do Well</span></h2> */}
              {/* <h5>
                Now you have no excuses, it's time to surprise your clients, your
                competitors, and why not, the world. You probably won't have an
                better chance to show off all your potential if it's not by
                designing a website for your own agency or web studio.
              </h5>
              <br />
              <div className="buttons">
                <Button
                  className="btn-neutral"
                  color="link"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                  size="lg"
                >
                  <i className="fa fa-share-alt" />
                  Share Offer
                </Button>
                <Button
                  className="btn-round"
                  color="success"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                  size="lg"
                >
                  <i className="fa fa-shopping-cart" />
                  Shop Now
                </Button>
              </div> */}
            {/* </Col>
          </Row> */}
        </Container>
      ),
      altText: "",
      caption: "",
            } ,
  ];
  
export default function SectionHeader() {
    // carousel - header 3
    const [activeIndex, setActiveIndex] = React.useState(0);
    const [animating, setAnimating] = React.useState(false);
    const onExiting = () => {
      setAnimating(true);
    };
    const onExited = () => {
      setAnimating(false);
    };
    const next = () => {
      if (animating) return;
      const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
      setActiveIndex(nextIndex);
    };
    const previous = () => {
      if (animating) return;
      const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
      setActiveIndex(nextIndex);
    };
    const goToIndex = (newIndex) => {
      if (animating) return;
      setActiveIndex(newIndex);
    };
    // video - header 4
    const [videoPlaying, setVideoPlaying] = React.useState(false);
    const videoRef = React.createRef();
    const videoButtonClick = () => {
      if (videoPlaying) {
        setVideoPlaying(false);
        videoRef.current.pause();
      } else {
        setVideoPlaying(true);
        videoRef.current.play();
      }
    };
    return (
        <>
            <MultiDropdownNavbar />
            <div className="header-3">
            {/* <Navbar className="navbar-transparent navbar-absolute" expand="lg">
            <Container>
                <NavbarBrand className="mb-0" href="www.creative-tim.com">
                Creative Tim
                </NavbarBrand>
                <button
                className="navbar-toggler"
                id="navbarSupportedContent3"
                type="button"
                >
                <span className="navbar-toggler-bar" />
                <span className="navbar-toggler-bar" />
                <span className="navbar-toggler-bar" />
                </button>
                <UncontrolledCollapse navbar toggler="#navbarSupportedContent3">
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
            <div className="page-carousel">
            {/* <div className="filter" /> */}
            <Carousel activeIndex={activeIndex} next={next} previous={previous}>
                <CarouselIndicators 
                items={items}
                activeIndex={activeIndex}
                onClickHandler={goToIndex}
                />
                {items.map((item) => {
                return (
                    <CarouselItem
                    onExiting={onExiting}
                    onExited={onExited}
                    key={item.src}
                    >
                    <div
                        className="page-header"
                        style={{ backgroundImage: item.src }}
                    >
                        {/* <div className="filter" /> */}
                        <div >{item.content}</div>
                    </div>
                    </CarouselItem>
                );
                })}
                <a
                className="left carousel-control carousel-control-prev"
                data-slide="prev"
                href="#pablo"
                onClick={(e) => {
                    e.preventDefault();
                    previous();
                }}
                role="button"
                style = {{marginTop: '4%'}}
                >
                <span className="fa fa-angle-left" />
                <span className="sr-only">Previous</span>
                </a>
                <a
                className="right carousel-control carousel-control-next"
                data-slide="next"
                href="#pablo"
                onClick={(e) => {
                    e.preventDefault();
                    next();
                }}
                role="button"
                style = {{marginTop: '4%'}}
                >
                <span className="fa fa-angle-right"  />
                <span className="sr-only">Next</span>
                </a>
            </Carousel>
            </div>
            </div>
            <div className="blog-2 section section-image" style={{
                backgroundImage:
                    "url(" + require("assets/kimaye/BGN2.jpg") + ")",
                }}>
            <Container>
              <Row>
              <Col className="ml-auto mr-auto " md="10">
                <h2 className="title" style = {{textAlign: 'center'}}>Enhancing The Kimaye Experience</h2>
                <h4 style = {{textAlign: 'center', color: '#dbac00', fontWeight: '500'}}>Fulfilling your Local & Exotic Cravings</h4><br /><br /><br />
                <Row md ='10'>
                  <Col md="4">
                    <Card className="card-blog">
                      <div className="card-image">
                        <a href="#pablo" onClick={(e) => e.preventDefault()}>
                          <img
                            alt="..."
                            className="img img-raised"
                            src={require("assets/kimaye/core.jpg")}
                          />
                        </a>
                      </div>
                      <CardBody>
                        <h6 className="card-category text-info">Core</h6>
                        <CardTitle tag="h5" style = {{fontWeight: '500'}}>
                          {/* <a href="#pablo" onClick={(e) => e.preventDefault()}> */}
                            Kimaye-Grown Fruits
                          {/* </a> */}
                        </CardTitle>
                        <p className="card-description" style = {{color: 'black'}}>
                        These fruits are grown with our 5000 farmer partners in 8 states.
                        Our deep engagement with farmers include training and guidance to grow
                        quality fruit<br />
                        </p>
                        <hr />
                      </CardBody>
                    </Card>
                  </Col>
                  <Col md="4">
                    <Card className="card-blog">
                      <div className="card-image">
                        <a href="#pablo" onClick={(e) => e.preventDefault()}>
                          <img
                            alt="..."
                            className="img img-raised"
                            src={require("assets/kimaye/assorted.jpg")}
                          />
                        </a>
                      </div>
                      <CardBody>
                        <h6 className="card-category text-success">Indian Assorted</h6>
                        <CardTitle tag="h5" style = {{fontWeight: '500'}}>
                          {/* <a href="#pablo" onClick={(e) => e.preventDefault()}> */}
                            Kimaye-Fulfilled Fruits
                          {/* </a> */}
                        </CardTitle>
                        <p className="card-description" style = {{color: 'black'}}>
                        We partner with large farmers or FPOs to manage farmer relationship.
                        With our guidance these partners implement quality standards on farms. 
                        {/* <br /> */}
                        </p>
                        <hr />
                      </CardBody>
                    </Card>
                  </Col>
                  <Col md="4">
                    <Card className="card-blog">
                      <div className="card-image">
                        {/* <a href="#pablo" onClick={(e) => e.preventDefault()}> */}
                          <img
                            alt="..."
                            className="img img-raised"
                            src={require("assets/kimaye/imported1.jpg")}
                          />
                        {/* </a> */}
                      </div>
                      <CardBody>
                        <h6 className="card-category text-danger">
                          Imported
                        </h6>
                        <CardTitle tag="h5" style = {{fontWeight: '500'}}>
                          {/* <a href="#pablo" onClick={(e) => e.preventDefault()}> */}
                            Kimaye-Global Fruits
                          {/* </a> */}
                        </CardTitle>
                        <p className="card-description" style = {{color: 'black'}}>
                        Only the best Global companies who adhere to our standards of fruit safety, traceability and
                        quality become our partners for imported fruits. <br />
                        </p>
                        <hr />
                      </CardBody>
                    </Card>
                  </Col>
                </Row>
                {/* <Row md = '2'>
                    <h4 style = {{textAlign: 'center', color: '#dbac00', fontWeight: '500'}}>The supply chain is handled by Kimaye, ensuring that only quality fruits
                    earn the Kimaye badge.
                    </h4>
                </Row> */}
              </Col>
            </Row>
          </Container>
        </div>
        <div className="features-4" style = {{backgroundColor: '#fffaef'}}>
          <Container>
            <Row>
              <Col className="ml-auto mr-auto text-center" md="8">
                <h2 style = {{color: '#800000', fontWeight: '500'}}>Making Life Easier</h2>
                <h4  style = {{color: 'black'}}>
                  Flexibility for the Consumer to choose
                </h4><br />
              </Col>
            </Row>
            <Row>
              <Col md="6">
                <div className="ipad-container">
                  <img
                    alt="..."
                    src={require("assets/kimaye/basket.jpg")}
                    style = {{marginTop: '12%'}}
                  />
                </div>
              </Col>
              <Col className="offset-1" md="4">
                <div className="info info-horizontal">
                  <div className="icon icon-info">
                    <i aria-hidden={true} className="nc-icon nc-atom" />
                  </div>
                  <div className="description">
                    <h4 style = {{fontWeight: '500', color: '#800000'}}>All Fruits</h4>
                    <p style = {{color: 'black', fontWeight: '400'}}>
                      Pick and choose from a wide assortment of fruits <br />
                      Includes the fresh cut range
                    </p>
                  </div>
                </div>
                <div className="info info-horizontal">
                  <div className="icon icon-success">
                    <i aria-hidden={true} className="nc-icon nc-ruler-pencil" />
                  </div>
                  <div className="description">
                    <h4 style = {{fontWeight: '500', color: '#800000'}}>Combos</h4>
                    <p style = {{color: 'black', fontWeight: '400'}}>
                        Selection made easy - choose from pre-defines combinations<br />
                        Value for money format
                    </p>
                  </div>
                </div>
                <div className="info info-horizontal">
                  <div className="icon icon-danger">
                    <i aria-hidden={true} className="nc-icon nc-tie-bow" />
                  </div>
                  <div className="description">
                    <h4 style = {{fontWeight: '500', color: '#800000'}}>Subscription</h4>
                    <p style = {{color: 'black', fontWeight: '400'}}>
                        Convenience to plan week/month consumption in advance<br />
                        Best price guarantee and
                        no delivery charges
                    </p>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <div className ='section section-image'
        style={{
            backgroundImage:
                "url(" + require("assets/kimaye/BGN2.jpg") + ")",
            }}>
            <Container>
                <Row>
                <Col className="ml-auto mr-auto text-center" md="8">
                <h2 style = {{color: '#dbac00', fontWeight: '400'}}>Our Online Partners</h2>
              </Col>
              </Row><br /><br />
              <Col className="ml-auto mr-auto text-center" md="12">
              <Row  >
                    <Col   md ='4' xs = '12' style = {{ marginTop: '2%'}}>
                        <img src={require("assets/kimaye/swiggy.png")}/>
                    </Col>
                    <Col  md ='4' xs = '12' style = {{ marginTop: '2%'}}>
                        <img src={require("assets/kimaye/nearstores.jpg")}/>
                    </Col><br />
                    <Col  md ='4' xs = '12' style = {{ marginTop: '2%'}}>
                        <img src={require("assets/kimaye/dunzo.jpg")}/>
                    </Col>
                </Row><br />
                <Row >
                    <Col md = '4'  xs ='12 ' style = {{marginTop: '3%'}}>
                        <img src={require("assets/kimaye/staples.jpg")}/>
                    </Col>
                    <Col md = '4' xs = '12' style = {{ marginTop: '3%'}}>
                        <img src={require("assets/kimaye/bbrrmm.jpg")}/>
                    </Col>
                    <Col md = '4' xs = '12' style = {{marginTop: '3%'}}>
                        <img src={require("assets/kimaye/lokal.png")}/>
                    </Col>
                </Row>
              </Col>
            </Container>
        </div>
        <FooterFinal />
        </>
    );
}