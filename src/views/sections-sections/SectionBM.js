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
  Carousel,
  CarouselItem,
  CarouselIndicators,
} from "reactstrap";
import FooterFinal from "FooterFinal";
import WhiteNavbar from 'components/Navbars/WhiteNavbar.js'

export default function SectionBM(){
    return(
    <div>
        <WhiteNavbar />
        <div >
          <div className = 'section-image'
            style ={{
              backgroundImage:
              "url(" + require("assets/kimaye/BGN2.jpg") + ")",}}
          >
            <img src = {require("assets/kimaye/leftwall.jpg")} style = {{marginLeft: '13%',  marginTop: '6%'}}/>
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
        <div className="section-image" style ={{
            backgroundImage:
            "url(" + require("assets/kimaye/BGN2.jpg") + ")",
        }}>
        <Container>
          <Row>
            <Col className="ml-auto mr-auto text-center" md="12">
              <h2 className="title">India's Leading Farm-To-Home Global Ag-Tech Company</h2>
              <h3 className="description" style = {{color: '#dbac00', fontWeight: '500'}}>Adding Life to Fruits</h3>
              <br />
              <br />
            </Col>
          </Row>
          <Row>
            <Col className="ml-auto" md="3">
              <Card style = {{backgroundColor: '#f49f00'}}>
                <CardBody>
                  <div className="author">
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <img
                        alt="..."
                        className="avatar img-raised mr-2"
                        src={require("assets/kimaye/integrated.jpg")}
                      />
                      <span style = {{color: '#800000', fontSize: '102%', fontWeight: '600'}}>Integrated & Focused</span>
                    </a>
                  </div>
                  {/* <span className="category-social pull-right">
                    <i className="fa fa-quote-right" />
                  </span> */}
                  <div className="clearfix" />
                  <p className="card-description" style = {{color: 'black', fontWeight: '400'}}>
                   We control and direct entire operations in chosen products from farming to consumption.
                   This includes large scale farm-level aggregation, managing the supply chain and delivering world 
                   class products.
                  </p>
                </CardBody>
              </Card>
            </Col>
            <Col md="4">
              <Card style = {{backgroundColor: '#dd6000'}}>
                <CardBody>
                  <div className="author">
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <img
                        alt="..."
                        className="avatar img-raised mr-2"
                        src={require("assets/kimaye/global.jpg")}
                      />
                      <span style = {{color: '#800000', fontSize: '102%', fontWeight: '600'}}>
                        Global
                      </span>
                    </a>
                  </div>
                  {/* <span className="category-social pull-right">
                    <i className="fa fa-quote-right" />
                  </span> */}
                  <div className="clearfix" />
                  <p className="card-description" style = {{color: 'white', fontWeight: '400'}}>
                    We are an Indian origin global company. We aspire to achieve leadership
                    at a global scale, meeting world class food safety and quality standards.

                  </p>
                </CardBody>
              </Card>
            </Col>
            <Col className="mr-auto" md="3">
              <Card style = {{backgroundColor: '#dc6a00'}}>
                <CardBody>
                  <div className="author">
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <img
                        alt="..."
                        className="avatar img-raised mr-2"
                        src={require("assets/kimaye/brand4.jpg")}
                      />
                      <span style = {{color: '#800000', fontSize: '102%', fontWeight: '600'}}>
                        Brand
                      </span>
                    </a>
                  </div>
                  {/* <span className="category-social pull-right">
                    <i className="fa fa-quote-right" />
                  </span> */}
                  <div className="clearfix" />
                  <p className="card-description" style = {{color: 'white', fontWeight: '400'}}>
                    All our products are sold under the brand name Kimaye.
                    Kimaye, which means divine in Sanskrit, aspires to earn Love,
                    Trust and Respect from our key stakeholders: farmers and consumers.
                  </p>
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col className="ml-auto" md="4">
              <Card style = {{backgroundColor: '#934000'}}>
                <CardBody>
                  <div className="author">
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <img
                        alt="..."
                        className="avatar img-raised mr-2"
                        src={require("assets/kimaye/soulful2.jpg")}
                      />
                      <span style = {{color: '#f49f00', fontSize: '102%', fontWeight: '600'}}>
                        Soulful
                      </span>
                    </a>
                  </div>
                  {/* <span className="category-social pull-right">
                    <i className="fa fa-quote-right" />
                  </span> */}
                  <div className="clearfix" />
                  <p className="card-description" style = {{color: 'white', fontWeight: '400'}}>
                    We believe that goodness can be achieved by a simple act of producing
                    and delivering a fruit. Our work is focused on  achieving goals of sustainable
                    production, improving livelihood and gender and financial inclusion. 
                  </p>
                </CardBody>
              </Card>
            </Col>
            <Col className="mr-auto" md="6">
              <Card style = {{backgroundColor: '#602320'}}>
                <CardBody>
                  <div className="author">
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <img
                        alt="..."
                        className="avatar img-raised"
                        src={require("assets/kimaye/equitable.jpg")}
                      />
                      <span style = {{color: '#f49f00', fontSize: '102%', fontWeight: '600'}}>Equitable Partnership</span>
                    </a>
                  </div>
                  {/* <span className="category-social pull-right">
                    <i className="fa fa-quote-right" />
                  </span> */}
                  <div className="clearfix" />
                  <p className="card-description" style = {{color: 'white', fontWeight: '400'}}>
                  The business of InI is built on the principles of cooperation and partnerships.
                   We work with our employees, farmers, investors and customers to build a
                   “Healthy-Sustainable-Socially-Impactful-Business”.
                  </p>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="header-1">
          <div
            className="page-header"
            style={{
              backgroundImage:
                "url(" + require("assets/kimaye/BM2.jpg") + ")",
            }}
          >
            {/* <div className="filter" /> */}
            <div>
              <Container>
                <Row>
                  {/* <Col md="5">
                    <div className="iframe-container">
                      <iframe
                        title="iframe-container"
                        allowFullScreen=""
                        frameBorder="0"
                        height="250"
                        src="https://www.youtube.com/embed/RcmrbNRK-jY?modestbranding=1&amp;autohide=1&amp;showinfo=0"
                      />
                    </div>
                  </Col> */}
                  <Col className="ml-auto" md="10">
                    <h2 className="title" style = {{color: 'black', marginTop: '5%'}}>
                        Scaleable & Sustainable Value Chain
                    </h2>
                    {/* <h5 className="description">
                      There's no doubt that Tesla is delighted with the
                      interest, but the data also raises a few questions. How
                      long will it take for Tesla to fulfill all those extra
                      orders?
                    </h5> */}
                    <br />
                    {/* <Button
                      color="danger"
                      href="https://www.youtube.com/watch?v=RcmrbNRK-jY?ref=creativetim"
                      target="_blank"
                    >
                      <i className="nc-icon nc-cart-simple mr-1" />
                      Order Now
                    </Button> */}
                  </Col>
                </Row>
              </Container>
            </div>
          </div>
        </div>
        <div className="projects-2 section section-image" style ={{
            backgroundImage:
            "url(" + require("assets/kimaye/BGN2.jpg") + ")",}}>
          <Container>
            <Row>
              <Col className="ml-auto mr-auto text-center" md="12">
                {/* <h6 className="text-muted">Our work</h6> */}
                <h2 style = {{color: '#dbac00'}}>Integrated platform providing branded, safe fruits</h2>
                {/* <h5 style = {{color: 'white'}}>
                  Integrated platform providing branded safe fruits
                </h5> */}<br />
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
                        src={require("assets/kimaye/farmeraward.jpg")}
                      />
                    {/* </a> */}
                  </CardImg>
                  <CardBody>
                    {/* <a
                      href="http://www.creative-tim.com/product/paper-kit-react?ref=pkpr-sections-page"
                      target="_blank"
                    > */}
                      <CardTitle tag="h4" style = {{color: 'white', fontWeight: '500'}}>Our Award Winning Farmers</CardTitle>
                    {/* </a> */}
                    {/* <h6 className="card-category text-muted">Free Ui kit</h6> */}
                    <p className="card-description" style = {{color: 'white'}}>
                    Our farmers are our most important partners. Working with them, bringing advanced
                    technologies to farms, de-risking their business, improving their livelihood and celebrating
                    them is central to our journey.
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
                        src={require("assets/kimaye/Plant 13.jpg")}
                      />
                    {/* </a> */}
                  </CardImg>
                  <CardBody>
                    {/* <a
                      href="https://www.creative-tim.com/product/argon-dashboard-pro-react?ref=pkpr-sections-page"
                      target="_blank" */}
                    {/* > */}
                      <CardTitle tag="h4" style = {{color: 'white', fontWeight: '500'}}>100% Disintermediation</CardTitle>
                    {/* </a> */}
                    {/* <h6 className="card-category text-muted">
                      Premium template
                    </h6> */}
                    <p className="card-description" style = {{color: 'white'}}>
                      Every Kimaye fruit is bought directly at farm and we control the entire process
                      till it reaches the consumer/ retailer. Our infrastructure, technology, processes
                      and quality systems ensure that only the best fruits earn Kimaye badge.
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
                        src={require("assets/kimaye/shelfretail.jpg")}
                      />
                    {/* </a> */}
                  </CardImg>
                  <CardBody>
                    {/* <a
                      href="https://www.creative-tim.com/product/blk-design-system-pro-react?ref=pkpr-sections-page"
                      target="_blank" */}
                    {/* > */}
                      <CardTitle tag="h4" style = {{color: 'white', fontWeight: '500'}}>
                      World Class Products
                      </CardTitle>
                    {/* </a> */}
                    {/* <h6 className="card-category text-muted">Premium UI kit</h6> */}
                    <p className="card-description" style = {{color: 'white'}}>
                    We are on a mission to provide safe fruits - hygienic, contamination-free,
                    zero health-risk and nutritious products are available to consumers in 35+
                    countries today.<br />And we do this with complete traceability and transparency
                    </p>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
        <FooterFinal />
    </div>
    );
}