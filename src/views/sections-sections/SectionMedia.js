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
import styles from "./Media.module.css";

// core components

function SectionMedia() {
  return (
    <>
      <WhiteNavbar />
      <div className="header-1">
        <div
          className="page-header"
          style={{
            backgroundImage:
              "url(" + require("assets/kimaye/Decade.jpg") + ")", marginTop: '2%'
          }}
        >
          {/* <div className="filter" /> */}
          <div className="content-center">
            <Container>
              <Row style={{justifyContent: 'center', marginTop: '60%'}}>
                {/* <div className="iframe-container">
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
                    <br /> */}
                <Button
                  className="btn-round"
                  color="default"
                  href="https://www.youtube.com/watch?v=nx5Aj0qw7do"
                  target="_blank"
                >
                  {/* <i className="nc-icon nc-cart-simple mr-1" /> */}
                      Play Video
                    </Button>
              </Row>
            </Container>
          </div>
        </div>
      </div>
      {/* ********* BLOGS 2 ********* */}

      <div className="blog-2 section section-image" style={{
        backgroundImage: "url(" + require("assets/kimaye/BGN2.jpg") + ")",
      }}>
        <div className={styles.JourneyContainer}>
          <h2 style={{color: '#dbac00', fontWeight: '500', textAlign: 'center'}}>The Journey...</h2>
          <div className={styles.CardsContainer}>
            <Card className="card-blog">
              <div className="card-image">
                <a href="https://www.stimulusmag.com/94/Fruits-of-Integration.aspx" >
                  <img
                    alt="..."
                    className="img img-raised"
                    src={require("assets/kimaye/Profile1.jpg")}
                  />
                </a>
              </div>
              <CardBody>
                <CardTitle tag="h5">
                  <a href="https://www.stimulusmag.com/94/Fruits-of-Integration.aspx" style={{color: '#800000', fontWeight: '400'}}>
                    Fruits of Integration
                  </a>
                </CardTitle>
                <p style={{color: 'black'}}>
                  Pankaj Khandelwal talks about the journey
                  of InI Farms, the expansion of Brand Kimaye and the company's future plans in the domestic market
                </p>
              </CardBody>
            </Card>
            <Card className="card-blog">
              <div className="card-image">
                <a href="http://www.fruitnet.com/asiafruit/article/182696/ini-farms-adds-qr-codes" >
                  <img
                    alt="..."
                    className="img img-raised"
                    src={require("assets/kimaye/Profile2.jpg")}
                  />
                </a>
              </div>
              <CardBody>
                <CardTitle tag="h5" >
                  <a href="http://www.fruitnet.com/asiafruit/article/182696/ini-farms-adds-qr-codes"
                    style={{color: '#800000', fontWeight: '400'}}>
                    InI Farms adds QR Codes
                  </a>
                </CardTitle>
                <p style={{color: 'black'}}>
                  Kimaye fruits will now provide traceability QR codes which will enable complete
                  transparency and visibility to our consumers on the journey of Kimaye fruits.
                </p>
              </CardBody>
            </Card>
            <Card className="card-blog">
              <div className="card-image">
                <a href="https://hr.economictimes.indiatimes.com/news/trends/leadership/covid-19-has-stress-tested-all-organizations-and-their-leadership-purnima-khandelwal-ini-farms/77363478" >
                  <img
                    alt="..."
                    className="img img-raised"
                    src={require("assets/kimaye/Profile3.jpg")}
                  />
                </a>
              </div>
              <CardBody>
                <CardTitle tag="h5" >
                  <a href="https://hr.economictimes.indiatimes.com/news/trends/leadership/covid-19-has-stress-tested-all-organizations-and-their-leadership-purnima-khandelwal-ini-farms/77363478"
                    style={{color: '#800000', fontWeight: '400'}}>
                    Covid-19 has stress-tested all organizations and their leadership
                  </a>
                </CardTitle>
                <p style={{color: 'black'}}>
                  Purnima on impact of the pandemic on organization culture, team dynamics and
                  leadership capabilities with ETHRWorld.
                </p>
              </CardBody>
            </Card>
            <Card className="card-blog">
              <div className="card-image">
                <a href="https://cfo.economictimes.indiatimes.com/news/our-farmers-made-up-to-80-losses-in-the-lockdown-says-horticulture-start-up-ini-farms/75464247">
                  <img
                    alt="..."
                    className="img img-raised"
                    src={require("assets/kimaye/Profile4.jpg")}
                  />
                </a>
              </div>
              <CardBody>
                <CardTitle tag="h5" style={{color: '#800000', fontWeight: '400'}}>
                  <a href="https://cfo.economictimes.indiatimes.com/news/our-farmers-made-up-to-80-losses-in-the-lockdown-says-horticulture-start-up-ini-farms/75464247"
                    style={{color: '#800000', fontWeight: '400'}}>
                    Our Farmers made up to 80% losses in the lockdown
                  </a>
                </CardTitle>
                <p style={{color: 'black'}}>
                  Finance Controller Mr. Sushil Pareek, of InI Farms on how labour shortage and supply
                  chain disruption led the farmers to do distress sale.
                </p>
              </CardBody>
            </Card>
            <Card className="card-blog">
              <div className="card-image">
                <a href="https://yourstory.com/herstory/2020/04/woman-entrepreneur-horticulture-ini-farms-india" >
                  <img
                    alt="..."
                    className="img img-raised"
                    src={require("assets/kimaye/Profile5.jpg")}
                  />
                </a>
              </div>
              <CardBody>
                <CardTitle tag="h5" >
                  <a href="https://yourstory.com/herstory/2020/04/woman-entrepreneur-horticulture-ini-farms-india"
                    style={{color: '#800000', fontWeight: '400'}}>
                    This Woman Entrepreneur is changing the horticulture landscape of India
                  </a>
                </CardTitle>
                <p style={{color: 'black'}}>
                  A story on organising the unorganised Indian Horticulture industry. </p>
              </CardBody>
            </Card>
            <Card className="card-blog">
              <div className="card-image">
                <a href="https://economictimes.indiatimes.com/news/economy/agriculture/ini-farms-joins-hands-with-us-based-munger-farms/articleshow/71045764.cms" >
                  <img
                    alt="..."
                    className="img img-raised"
                    src={require("assets/kimaye/Profile7.jpg")}
                  />
                </a>
              </div>
              <CardBody>
                <CardTitle tag="h5" >
                  <a href="https://economictimes.indiatimes.com/news/economy/agriculture/ini-farms-joins-hands-with-us-based-munger-farms/articleshow/71045764.cms"
                    style={{color: '#800000', fontWeight: '400'}} >
                    INI Farms joins hands with US-based Munger Farms
                  </a>
                </CardTitle>
                <p style={{color: 'black'}}>
                  INI and Munger Farms, a leading independant blueberry growe from US
                  to create a global-value-chain for blueberries in India
                </p>
              </CardBody>
            </Card>
            <Card className="card-blog">
              <div className="card-image">
                <a href="http://www.inifarms.com/newsmedia/INI-Farms-Asia-Fruit.pdf" >
                  <img
                    alt="..."
                    className="img img-raised"
                    src={require("assets/kimaye/Profile7b.jpg")}
                  />
                </a>
              </div>
              <CardBody>
                <CardTitle tag="h5" >
                  <a href="http://www.inifarms.com/newsmedia/INI-Farms-Asia-Fruit.pdf"
                    style={{color: '#800000', fontWeight: '400'}}>
                    Blazing a Trail
                  </a>
                </CardTitle>
                <p style={{color: 'black'}}>
                  Purnima Khandelwal, First Lady to feature on the cover of AsiaFruit Magazine,
                  talks about her personal and professional journey
                  in establishing one of India's largest exporter of Pomegranates and Bananas
                </p>
              </CardBody>
            </Card>
            <Card className="card-blog">
              <div className="card-image">
                <a href="http://www.inifarms.com/newsmedia/Business-India-INI-Farms-January-30-2017.pdf">
                  <img
                    alt="..."
                    className="img img-raised"
                    src={require("assets/kimaye/Profile8.jpg")}
                  />
                </a>
              </div>
              <CardBody>
                <CardTitle tag="h5" >
                  <a href="http://www.inifarms.com/newsmedia/Business-India-INI-Farms-January-30-2017.pdf"
                    style={{color: '#800000', fontWeight: '400'}}>
                    Setting a Benchmark
                  </a>
                </CardTitle>
                <p style={{color: 'black'}}>
                  INI Farms is all set to redefine the entire fresh fruit supply chain
                </p>
              </CardBody>
            </Card>
          </div>
        </div>
        {/* </Container> */}
      </div>
      {/* ********* END BLOGS 2 ********* */}
      {/* ********* BLOGS 3 ********* */}
      <div className="blog-3" style={{backgroundColor: '#fffaef'}}>
        <Container>

          <Row>
            <Col className="ml-auto mr-auto" md="10"><br />
              <h2 style={{textAlign: 'center', color: '#800000', fontWeight: '500'}}>Point of View...</h2>
              <br />
              <Card className="card-plain card-blog">
                <Row>
                  <Col md="4">
                    <div className="card-image">
                      <img
                        alt="..."
                        className="img"
                        src={require("assets/kimaye/Industry1.jpg")}
                      />
                    </div>
                  </Col>
                  <Col md="8">
                    <CardBody>
                      <CardTitle tag="h3">
                        <a href="https://www.thehindubusinessline.com/economy/agri-business/more-players-may-enter-contract-farming/article31741794.ece"
                          style={{fontWeight: '500'}} >
                          More players may enter contract farming
                          </a>
                      </CardTitle>
                      <p style={{color: 'black'}}>
                        With the new law coming on the direct sale agreement under contract farming,
                        the agriculture industry is set to witness more and more private players entering in
                        contract farming, which will lead to infrastructure development, capacity building and market access for farmers and FPOs— and…{" "}
                        <a href="https://www.thehindubusinessline.com/economy/agri-business/more-players-may-enter-contract-farming/article31741794.ece"
                          style={{color: '#800000', fontWeight: '500'}}>
                          Read More
                          </a>
                      </p>
                    </CardBody>
                  </Col>
                </Row>
              </Card>
              <Card className="card-plain card-blog">
                <Row>
                  <Col md="8">
                    <CardBody>
                      <CardTitle tag="h3">
                        <a href="https://www.businesstoday.in/magazine/cover-story/the-new-farm-formula/story/403592.html"
                          style={{fontWeight: '500'}}>
                          The New Farm Formula
                          </a>
                      </CardTitle>
                      <p style={{color: 'black'}}>
                        Lockdown has enabled new avenues for agriculture and horticulture companies to take a step
                        in transforming the operations from physical to digital.
                        Pankaj Khandelwal , MD InI Farms, mentions how INI Farms is making a shift towards
                            digital space in various steps from procurement to last mile delivery.— and…{" "}
                        <a href="https://www.businesstoday.in/magazine/cover-story/the-new-farm-formula/story/403592.html"
                          style={{color: '#800000', fontWeight: '500'}} >
                          Read More
                          </a>
                      </p>
                    </CardBody>
                  </Col>
                  <Col md="4">
                    <div className="card-image">
                      <a href="https://www.newindianexpress.com/states/andhra-pradesh/2020/apr/12/despite-bumper-crop-horticulture-farmers-stare-at-huge-losses-2129035.html"
                      >
                        <img
                          alt="..."
                          className="img"
                          src={require("assets/kimaye/Industry2.jpg")}
                        />
                      </a>
                    </div>
                  </Col>
                </Row>
              </Card>
              <Card className="card-plain card-blog">
                <Row>
                  <Col md="4">
                    <div className="card-image">
                      <a href="https://www.newindianexpress.com/states/andhra-pradesh/2020/apr/12/despite-bumper-crop-horticulture-farmers-stare-at-huge-losses-2129035.html" >
                        <img
                          alt="..."
                          className="img"
                          src={require("assets/kimaye/Industry3.jpg")}
                          style={{marginTop: '7%'}}
                        />
                      </a>
                    </div>
                  </Col>
                  <Col md="8">
                    <CardBody>
                      {/* <h6 className="card-category text-success">Startups</h6> */}
                      <CardTitle tag="h3">
                        <a href="https://www.newindianexpress.com/states/andhra-pradesh/2020/apr/12/despite-bumper-crop-horticulture-farmers-stare-at-huge-losses-2129035.html"
                          style={{fontWeight: '500'}}>
                          Despite bumper crop, horticulture farmers in Andhra stare at huge losses
                          </a>
                      </CardTitle><br />
                      <p style={{color: 'black'}}>
                        Due to sufficient water availability this season, farmers in AP produced bumper crop of
                        Banana. However due to the current scenario, they are on the verge of facing huge
                        losses. INI Farms alongwith Govt of AP are trying their best to procure the
                        produce as much as possible to minimize the plight of farmers.{" "}
                        <a href="https://www.newindianexpress.com/states/andhra-pradesh/2020/apr/12/despite-bumper-crop-horticulture-farmers-stare-at-huge-losses-2129035.html"
                          style={{color: '#800000', fontWeight: '500'}} >
                          Read More
                          </a>
                      </p>
                    </CardBody>
                  </Col>
                </Row>
              </Card>
            </Col>
          </Row>
        </Container>

      </div>
      {/* ********* BLOGS 1 ********* */}
      {/* <div className="blog-1 section-image" id="blog-1" style = {{
            backgroundImage: "url(" + require("assets/kimaye/BGN2.jpg") + ")",
                 }}>
          <Container>
            <Row>
              <Col className="ml-auto mr-auto" md="10">
                <h2 className="title">Authored</h2>
                <br />
                <Card className="card-plain card-blog">
                  <Row>
                    <Col md="5">
                      <div className="card-image">
                        <img
                          alt="..."
                          className="img"
                          src={require("assets/img/sections/stephanie-krist.jpg")}
                        />
                      </div>
                    </Col>
                    <Col md="7">
                      <CardBody> */}
      {/* <h6 className="card-category text-info">Enterprise</h6> */}
      {/* <CardTitle tag="h3">
                          <a href="#https://timesofindia.indiatimes.com/readersblog/inifarms/how-india-can-become-the-global-fruit-bowl-10659/" >
                            How India can become the global fruit bowl!
                          </a>
                        </CardTitle>
                        <p className="card-description">
                        INI's Managing Director, Pankaj Khandelwal, on the untapped potential of
                        exports of fruits from India and the key factors which can make India a
                        potential export hub for fruits. — and…{" "}
                          <a href="https://timesofindia.indiatimes.com/readersblog/inifarms/how-india-can-become-the-global-fruit-bowl-10659/" >
                            Read More
                          </a>
                        </p>
                        <p className="author">
                          by{" "}
                          <a href="https://timesofindia.indiatimes.com/readersblog/inifarms/how-india-can-become-the-global-fruit-bowl-10659/" >
                            <b>Times of India</b>
                          </a>
                          , 17/03/2020
                        </p>
                      </CardBody>
                    </Col>
                  </Row>
                </Card>
                <Card className="card-plain card-blog">
                  <Row>
                    <Col md="7">
                      <CardBody>
                        <h6 className="card-category text-danger">
                          <i className="fa fa-free-code-camp mr-1" />
                          Trending
                        </h6>
                        <CardTitle tag="h3">
                          <a href="#pablo" onClick={(e) => e.preventDefault()}>
                            Okoli connects you with tour guides around the world
                          </a>
                        </CardTitle>
                        <p className="card-description">
                          Okoli is a new service by developer Jack Deneut that
                          aims to replace those ugly little cards you find in
                          tourist hotels. The web app, which currently works in
                          Prague, Budapest, Berlin and Paris, lets you reserve a
                          nearly private tour with a professional guid — and…{" "}
                          <a href="#pablo" onClick={(e) => e.preventDefault()}>
                            Read More
                          </a>
                        </p>
                        <p className="author">
                          by{" "}
                          <a href="#pablo" onClick={(e) => e.preventDefault()}>
                            <b>John Biggs</b>
                          </a>
                          , 3 seconds ago
                        </p>
                      </CardBody>
                    </Col>
                    <Col md="5">
                      <div className="card-image">
                        <img
                          alt="..."
                          className="img"
                          src={require("assets/img/sections/federico-beccari.jpg")}
                        />
                      </div>
                    </Col>
                  </Row>
                </Card>
              </Col>
            </Row>
          </Container>
        </div> */}
      {/* ********* END BLOGS 1 ********* */}
      {/* ********* END BLOGS 4 ********* */}
      {/* <div className="blog-4">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto" md="8">
                <h2 className="title text-center">Latest Blogposts 4</h2>
                <br />
              </Col>
            </Row>
            <Row>
              <Col md="6">
                <Card className="card-plain card-blog text-center">
                  <div className="card-image">
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <img
                        alt="..."
                        className="img img-raised"
                        src={require("assets/img/sections/val-vesa.jpg")}
                      />
                    </a>
                  </div>
                  <CardBody>
                    <h6 className="card-category text-warning">Travel</h6>
                    <CardTitle tag="h3">
                      <a href="#pablo" onClick={(e) => e.preventDefault()}>
                        Learning different cultures through travel
                      </a>
                    </CardTitle>
                    <p className="card-description">
                      A wonderful serenity has taken possession of my entire
                      soul, like these sweet mornings of spring which I enjoy
                      with my whole heart. I am alone, and feel the charm of
                      existence in this spot.
                    </p>
                    <br />
                    <Button
                      className="btn-round"
                      color="warning"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      Read More
                    </Button>
                  </CardBody>
                </Card>
              </Col>
              <Col md="6">
                <Card className="card-plain card-blog text-center">
                  <div className="card-image">
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <img
                        alt="..."
                        className="img img-raised"
                        src={require("assets/img/sections/rodrigo-ardilha.jpg")}
                      />
                    </a>
                  </div>
                  <CardBody>
                    <h6 className="card-category text-info">Travel</h6>
                    <CardTitle tag="h3">
                      <a href="#pablo" onClick={(e) => e.preventDefault()}>
                        Kick-Ass ways to disappear like a Ninja!
                      </a>
                    </CardTitle>
                    <p className="card-description">
                      In the end, the judge ruled that Levandowski could be
                      brought in and examined, but that each question asked to
                      him would be vetted in advance and should have some basis
                      in evidence.
                    </p>
                    <br />
                    <Button
                      className="btn-round"
                      color="primary"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      Read More
                    </Button>
                  </CardBody>
                </Card>
              </Col>
            </Row>
            <Row>
              <Col md="6">
                <Card className="card-plain card-blog text-center">
                  <div className="card-image">
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <img
                        alt="..."
                        className="img img-raised"
                        src={require("assets/img/sections/federico-beccari.jpg")}
                      />
                    </a>
                  </div>
                  <CardBody>
                    <h6 className="card-category text-danger">Lifestyle</h6>
                    <CardTitle tag="h3">
                      <a href="#pablo" onClick={(e) => e.preventDefault()}>
                        We will breathe clean air and exercise
                      </a>
                    </CardTitle>
                    <p className="card-description">
                      Don't be scared of the truth because we need to restart
                      the human foundation in truth And I love you like Kanye
                      loves Kanye I love Rick Owens’ bed design but the back is
                      too high for the beams and angle of the ceiling...
                    </p>
                    <br />
                    <Button
                      className="btn-round"
                      color="danger"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      Read More
                    </Button>
                  </CardBody>
                </Card>
              </Col>
              <Col md="6">
                <Card className="card-plain card-blog text-center">
                  <div className="card-image">
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <img
                        alt="..."
                        className="img img-raised"
                        src={require("assets/img/sections/pedro-lastra.jpg")}
                      />
                    </a>
                  </div>
                  <CardBody>
                    <h6 className="card-category text-success">Best Seller</h6>
                    <CardTitle tag="h3">
                      <a href="#pablo" onClick={(e) => e.preventDefault()}>
                        Readers Pick of The Month
                      </a>
                    </CardTitle>
                    <p className="card-description">
                      “Raising equity is very expensive” In essence, it lets new
                      consumer businesses apply to raise funding on its
                      platform, and gives investors a new way to find and back
                      those tricks to finance their growing businesses.
                    </p>
                    <br />
                    <Button
                      className="btn-round"
                      color="success"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      Read More
                    </Button>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        </div> */}
      {/* ********* END BLOGS 4 ********* */}
      <FooterFinal />
    </>
  );
}

export default SectionMedia;
