import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardBody,
  CardTitle,
  CardImg,
  CardFooter,
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
    src: "url(" + "https://res.cloudinary.com/ini-farms/image/upload/v1618863944/media/kimaye/bananac1_iuehtq.jpg" + ")",
    content: (
      <Container>
        <Row>
          {/* <Col className="text-left" md="6">
              <h1 className="title">Paper Kit 2 PRO</h1>
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
            </Col> */}
        </Row>
      </Container>
    ),
    altText: "",
    caption: "",
  },
  {
    src: "url(" + "https://res.cloudinary.com/ini-farms/image/upload/v1618863943/media/kimaye/bananabox_yqumi3.jpg" + ")",
    content: (
      <Container>
        <Row>
          {/* <Col className="ml-auto mr-auto text-center" md="8">
              <h1 className="title">Awesome Experiences</h1>
              <h5>
                Now you have no excuses, it's time to surprise your clients, your
                competitors, and why not, the world. You probably won't have a
                better chance to show off all your potential if it's not by
                designing a website for your own agency or web studio.
              </h5>
              <br />
              <h6>Connect with us:</h6>
              <div className="buttons">
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
                  <i className="fa fa-instagram" />
                </Button>
                <Button
                  className="btn-neutral btn-just-icon"
                  color="link"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                >
                  <i className="fa fa-google-plus" />
                </Button>
              </div>
            </Col> */}
        </Row>
      </Container>
    ),
    altText: "",
    caption: "",
  },
  {
    src: "url(" + "https://res.cloudinary.com/ini-farms/image/upload/v1618863944/media/kimaye/bananac2_zidtxf.jpg" + ")",
    content: (
      <Container>
        <Row>
          {/* <Col className="ml-auto text-right" md="7">
              <h2 className="title">Premium Offers for Venice</h2>
              <h5>
                Now you have no excuses, it's time to surprise your clients, your
                competitors, and why not, the world. You probably won't have a
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
              </div>
            </Col> */}
        </Row>
      </Container>
    ),
    altText: "",
    caption: "",
  },
];

function SectionProduct() {
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
      <div id="features">
        <div className="projects-2 section section-image"
          style={{
            backgroundImage:
              "url(" + "https://res.cloudinary.com/ini-farms/image/upload/v1618863946/media/kimaye/BG2_cpea02.jpg" + ")",
          }}>
          <Container>
            <Row>
              <Col className="ml-auto mr-auto text-center" md="8">
                {/* <h6 className="text-muted">Our work</h6> */}
                <h2 className="title">Our Awesome Products</h2>
                {/* <h5 className="description">
                  This is the paragraph where you can write more details about
                  your projects. Keep you user engaged by providing meaningful
                  information.
                </h5> */}
              </Col>
            </Row>
            <div className="space-top" />
            <Row>
              <Col md="4">
                <Card className="card-plain">
                  <CardImg top tag="div">
                    {/* <a
                      href="http://www.creative-tim.com/product/paper-kit-react?ref=pkpr-sections-page"
                      target="_blank"
                    > */}
                    <img
                      alt="..."
                      className="img"
                      src="https://res.cloudinary.com/ini-farms/image/upload/v1618863964/media/kimaye/Pom_Cover_2_k1mfok.jpg"
                    />
                    {/* </a> */}
                  </CardImg>
                  <CardBody>
                    {/* <a
                      href="http://www.creative-tim.com/product/paper-kit-react?ref=pkpr-sections-page"
                      target="_blank"
                    > */}
                    <CardTitle tag="h3" style={{fontWeight: '500'}}>Pomegranates</CardTitle>


                    {/* <h6 className="card-category text-muted">Free Ui kit</h6> */}
                    <p className="card-description" style={{fontWeight: '400'}}>
                      India is the only grower of round the year variety of pomegranates.
                      A rich, exotic and delicious fruit which is a healing powerhouse!
                    </p>
                  </CardBody>
                </Card>
              </Col>
              <Col md="4">
                <Card className="card-plain">
                  <CardImg top tag="div">
                    {/* <a
                      href="https://www.creative-tim.com/product/argon-dashboard-pro-react?ref=pkpr-sections-page"
                      target="_blank"
                    > */}
                    <img
                      alt="..."
                      className="img"
                      src="https://res.cloudinary.com/ini-farms/image/upload/v1618863940/media/kimaye/Banana_cover_wfqfyp.jpg"
                    />
                    {/* </a> */}
                  </CardImg>
                  <CardBody>
                    {/* <a
                      href="https://www.creative-tim.com/product/argon-dashboard-pro-react?ref=pkpr-sections-page"
                      target="_blank"
                    > */}
                    <CardTitle tag="h3" style={{fontWeight: '500'}}>Bananas</CardTitle>
                    {/* <br />
                    </a>
                    <h6 className="card-category text-muted">
                      Premium template
                    </h6> */}
                    <p className="card-description" style={{fontWeight: '400'}}>
                      India is the largest producer of banana in the world.
                      Its year round availability, varietal range, taste,
                      nutritive and medicinal value makes it the favourite fruit!
                    </p>
                  </CardBody>
                </Card>
              </Col>
              <Col md="4">
                <Card className="card-plain">
                  <CardImg top tag="div">
                    {/* <a
                      href="https://www.creative-tim.com/product/blk-design-system-pro-react?ref=pkpr-sections-page"
                      target="_blank"
                    > */}
                    <img
                      alt="..."
                      className="img"
                      src="https://res.cloudinary.com/ini-farms/image/upload/v1618863954/media/kimaye/Fresh_Cut_otoxzv.jpg"
                    />
                    {/* </a> */}
                  </CardImg>
                  <CardBody>
                    {/* <a
                      href="https://www.creative-tim.com/product/blk-design-system-pro-react?ref=pkpr-sections-page"
                      target="_blank"
                    > */}
                    <CardTitle tag="h3" style={{fontWeight: '500'}}>
                      Fresh Cuts
                      </CardTitle>
                    {/* </a>
                    <h6 className="card-category text-muted">Premium UI kit</h6> */}
                    <p className="card-description" style={{fontWeight: '400'}}>
                      Pomegranates & Coconuts are peeled, cubed or shredded for convenience or on-the-go consumption.
                      Firm and Juicy, our Fresh Cuts are here to make your life easy!
                    </p>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="features-3" style={{backgroundColor: '#fffaef'}}>
          <Container>
            <Row>
              <Col md="7">
                <Row>
                  <h2 className="title" style={{marginLeft: "1rem"}}>Kick the Toxins Off...<br /><span>With Punch Of <span style={{color: '#800000', fontWeight: '400'}}>Pomegranates</span></span></h2>
                  {/* <h5 className="description">
                    A rich, exotic and delicious fruit which is a healing powerhouse!
                    </h5> */}
                </Row>
                <Row>
                  <Col md="6">
                    <div className="info info-horizontal">
                      <div className="icon icon-success">
                        <i className="nc-icon nc-layout-11" />
                      </div>
                      <div className="description">
                        <h4 className="info-title" style={{fontWeight: '400'}}>Variety</h4>
                        <p style={{color: 'black'}}>
                          Bhagwa  <br />
                          Extra Sweet | Ultra Soft | Ruby Red Seeds
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
                        <h4 className="info-title" style={{fontWeight: '400'}}>Sourcing Locations</h4>
                        <p style={{color: 'black'}}>
                          Maharashtra, Gujarat, Karnataka & Rajasthan
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
                        <h4 className="info-title" style={{fontWeight: '400'}}>SKUs</h4>
                        <p style={{color: 'black'}}>
                          Bulk - 3.5 kg | 10 kg <br />
                          Consumer - 2pc | 4pc | 6pc <br /> <br />
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
                        <h4 className="info-title" style={{fontWeight: '400'}}>Availability</h4>
                        <p style={{color: 'black'}}>
                          Round the year <br />
                          Shelf Life - 60 to 90 days
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
              <Col className="ml-auto" md="5" >
                <div style={{marginTop: '25%', }}>
                  <img alt="..."
                    style={{width: '100%', height: '110%'}}
                    src="https://res.cloudinary.com/ini-farms/image/upload/v1618863965/media/kimaye/Pom_Products_yydrec.png" 
                  />
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="features-4 section-image" style={{
          backgroundImage:
            "url(" + "https://res.cloudinary.com/ini-farms/image/upload/v1618863946/media/kimaye/BG2_cpea02.jpg" + ")",
        }}>
          <Container>
            <Row>
              <Col className="ml-auto mr-auto text-center" md="8">
                <h2 className="title">Peel your Stress Away...<br /><span style={{marginLeft: '20%'}}>Go <span style={{color: '#dbac00', fontWeight: '400'}}>Bananas</span> Everyday</span></h2>
                {/* <h5 className="description">
          India is the largest producer of banana in the world.
          Its year round availability, varietal range, taste, 
          nutritive and medicinal value makes it the favourite fruit!
          </h5> */}
              </Col>
            </Row>
            <Row>
              <Col md="7">
                <div style={{marginTop: '12%', }}>
                  <img
                    alt="..."
                    style={{width: '100%', height: '110%'}}
                    src="https://res.cloudinary.com/ini-farms/image/upload/v1618863941/media/kimaye/Banana_Products_gok57u.png"
                  />
                </div>
              </Col>
              <Col className="offset-1" md="4">
                <div className="info info-horizontal">
                  <div className="icon icon-success">
                    <i aria-hidden={true} className="nc-icon nc-ruler-pencil" />
                  </div>
                  <div className="description">
                    <h4 className="info-title" style={{fontWeight: '400'}}>Varieties</h4>
                    <p style={{fontSize: '115%', fontWeight: '400'}}>
                      Cavendish  <br /> Yellakki, Nendran - Native Indian varieties
              </p>
                  </div>
                </div>
                <div className="info info-horizontal">
                  <div className="icon icon-danger">
                    <i aria-hidden={true} className="nc-icon nc-tie-bow" />
                  </div>
                  <div className="description">
                    <h4 className="info-title" style={{fontWeight: '400'}}>SKUs</h4>
                    <p style={{fontSize: '115%', fontWeight: '400'}}>
                      Bulk - 3kg | 7kg | 13kg <br />
                Consumer - Banded cluster | Baby banana
              </p>
                  </div>
                </div>
                <div className="info info-horizontal">
                  <div className="icon icon-info">
                    <i aria-hidden={true} className="nc-icon nc-atom" />
                  </div>
                  <div className="description">
                    <h4 className="info-title" style={{fontWeight: '400'}}>Source Locations</h4>
                    <p style={{fontSize: '115%', fontWeight: '400'}}>
                      Maharashtra, Andhra Pradesh, Madhya Pradesh, Karnataka, Tamil Nadu & Kerala
              </p>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="features-3" style={{backgroundColor: '#fffaef'}}>
          <Container>
            <Row>
              <Col md="6">
                <Row>
                  <Container>
                    <h2 className="title">Never Feel Low...<br />Pop the <span style={{color: '#800000', fontWeight: '400'}}>Arils</span> on the Go</h2>
                  </Container>
                </Row>
                <Row>
                  <Col md="6">
                    <div className="info info-horizontal">
                      <div className="icon icon-success">
                        <i className="nc-icon nc-layout-11" />
                      </div>
                      <div className="description">
                        <h4 className="info-title" style={{fontWeight: '400'}}>Variety</h4>
                        <p style={{color: 'black'}}>
                          Bhagwa  <br />
                          Extra Sweet | Ultra Soft | Ruby Red Seeds
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
                        <h4 className="info-title" style={{fontWeight: '400'}}>Availability</h4>
                        <p style={{color: 'black'}}>
                          Round the year
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
                        <h4 className="info-title" style={{fontWeight: '400'}}>SKUs</h4>
                        <p style={{color: 'black'}}>
                          Bulk - 1 kg | 5 kg | 6 kg <br />
                          Consumer - Cups | Punnets <br />
                          <span style={{marginLeft: '10%'}}>100 g | 125 g | 250 g</span> <br />
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
                        <h4 className="info-title" style={{fontWeight: '400'}}>Shelf Life</h4>
                        <p style={{color: 'black'}}>
                          14-17 days from day of packaging<br />
                          No Preservatives
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
              <Col className="ml-auto" md="6" >
                <div style={{marginTop: '33%'}}>
                  <img style={{width: '100%', height: '110%'}}
                    alt="..."
                    src="https://res.cloudinary.com/ini-farms/image/upload/v1618863983/media/kimaye/Arils_Products_uyt94l.png"
                  />
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="features-4 section-image" style={{
          backgroundImage:
            "url(" + "https://res.cloudinary.com/ini-farms/image/upload/v1618863946/media/kimaye/BG2_cpea02.jpg" + ")",
        }}>
          <Container>
            <Row>
              <Col className="ml-auto mr-auto text-center" md="8">
                <h2 className="title">Let's Go Nuts Over...<br /><span style={{marginLeft: '30%'}}>Good-Fat <span style={{fontWeight: '500'}}>Coconuts</span></span></h2>
                {/* <h5 className="description">
                    The more formalized version launching today brings a slate of
                    corporate partners and a more structured application review
                    process.
                </h5> */}
              </Col>
            </Row>
            <Row>
              <Col md="7">
                <div style={{marginTop: '5%'}}>
                  <img
                    alt="..."
                    style={{width: '100%', height: '100%'}}
                    src="https://res.cloudinary.com/ini-farms/image/upload/v1618863950/media/kimaye/Coconut_Products_etf0uz.png"
                  />
                  {/* <Row md = "6" >
                    <Col md="6">
                        <img style = {{borderRadius: '25px', marginLeft: '15%', marginTop: '10%'}}
                    alt="..."
                    src={require("assets/kimaye/coconut3.jpg")}
                        />
                        </Col>
                        <Col md="6">
                        <img style = {{borderRadius: '25px', marginTop: '36%'}}
                    alt="..."
                    src={require("assets/kimaye/coconut1.JPG")}
                        />
                        </Col>
                    </Row><br />
                    <Row md = "6">
                        <Col md="6">
                        <img style = {{borderRadius: '25px'}}
                    alt="..."
                    src={require("assets/kimaye/mix1.JPG")}
                        />
                        </Col>
                        <Col md="6">
                        <img style = {{borderRadius: '25px'}}
                    alt="..."
                    src={require("assets/kimaye/mix2.jpg")}
                        />
                        </Col>
                    </Row> */}
                </div>
              </Col>
              <Col className="offset-1" md="4">
                <div className="info info-horizontal">
                  <div className="icon icon-success">
                    <i aria-hidden={true} className="nc-icon nc-ruler-pencil" />
                  </div>
                  <div className="description">
                    <h4 className="info-title" style={{fontWeight: '400'}}>Varieties</h4>
                    <p style={{fontSize: '115%', fontWeight: '400'}}>
                      East-Coast Tall
                    </p>
                  </div>
                </div>
                <div className="info info-horizontal">
                  <div className="icon icon-danger">
                    <i aria-hidden={true} className="nc-icon nc-tie-bow" />
                  </div>
                  <div className="description">
                    <h4 className="info-title" style={{fontWeight: '400'}}>SKUs</h4>
                    <p style={{fontSize: '115%', fontWeight: '400'}}>
                      Grated | Chunks | Mixed <br />
                         Bulk - 1 kg | 5 kg | 6 kg <br />
                         Consumer - Cups | Punnets <br />
                         100 g | 125 g | 250 g
                    </p>
                  </div>
                </div>
                <div className="info info-horizontal">
                  <div className="icon icon-info">
                    <i aria-hidden={true} className="nc-icon nc-atom" />
                  </div>
                  <div className="description">
                    <h4 className="info-title" style={{fontWeight: '400'}}>Availability</h4>
                    <p style={{fontSize: '115%', fontWeight: '400'}}>
                      Round the year <br />
                        14-17 days from day of packaging
                    </p>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <FooterFinal />
      </div>
    </>
  );
}
export default SectionProduct;
