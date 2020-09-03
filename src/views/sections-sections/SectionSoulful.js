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
                "url(" + require("assets/kimaye/Social.jpg") + ")", marginTop: '3%'
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
        <FooterFinal />
        </>
    );
}