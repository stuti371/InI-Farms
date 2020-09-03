import React from "react";
// react plugin used to create DropdownMenu for selecting items

// reactstrap components
import { Button, FormGroup, Container, Row, Col } from "reactstrap";

export default function FooterFinal() {
  return (
    <>
    <footer className="footer footer-black footer-big">
    <Container>
        <Row>
        <Col className="text-center ml-auto mr-auto" md="3" sm="3" xs="12">
            <h4>InI Farms</h4>
            <div className="social-area">
            <Button className="btn-just-icon btn-round" color="linkedin">
                <i className="fa fa-linkedin" />
            </Button>&emsp;
            <Button
                className="btn-just-icon btn-round mr-1"
                color="facebook"
            >
                <i className="fa fa-facebook" />
            </Button>&emsp;
            <Button
                className="btn-just-icon btn-round mr-1"
                color="twitter"
            >
                <i className="fa fa-twitter" />
            </Button>&emsp;
            <Button className="btn-just-icon btn-round" color="instagram">
                <i className="fa fa-instagram" />
            </Button>
            </div>
        </Col>
        <Col className="ml-auto mr-auto" md="7" sm="7" xs="12">
            <Row>
            <Col md="3" sm="3" xs="6">
                <div className="links">
                <ul className="uppercase-links stacked-links">
                    <li>
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                        Home
                    </a>
                    </li>
                    <li>
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                        Locations
                    </a>
                    </li>
                    <li>
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                        Media
                    </a>
                    </li>
                    {/* <li>
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                        Live Support
                    </a>
                    </li>
                    <li>
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                        Money Back
                    </a>
                    </li> */}
                </ul>
                </div>
            </Col>
            <Col md="3" sm="3" xs="6">
                <div className="links">
                <ul className="uppercase-links stacked-links">
                    <li>
                    <a href="#pablo" >
                        About Us
                    </a>
                    </li>
                    <li>
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                        Ag-Tech
                    </a>
                    </li>
                    <li>
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                        Soulful
                    </a>
                    </li>
                </ul>
                </div>
            </Col>
            <Col md="3" sm="3" xs="6">
                <div className="links">
                <ul className="uppercase-links stacked-links">
                    <li>
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                        Contact Us
                    </a>
                    </li>
                    <li>
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                        Privacy Policy
                    </a>
                    </li>
                    <li>
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                        Terms of Use
                    </a>
                    </li>
                </ul>
                </div>
            </Col>
            {/* <Col md="3" sm="3" xs="6">
                <div className="links">
                <ul className="stacked-links">
                    <li>
                    <h4>
                        13.723 <br />
                        <small>accounts</small>
                    </h4>
                    </li>
                    <li>
                    <h4>
                        55.234 <br />
                        <small>downloads</small>
                    </h4>
                    </li>
                </ul>
                </div>
            </Col> */}
            </Row>
            <hr />
            <div className="copyright">
            <div className="pull-left">
                © {new Date().getFullYear()} InI Farms Pvt Ltd, All Rights Reserved
            </div>
            {/* <div className="links pull-right">
                <ul>
                <li className="mr-1">
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                    Company Policy
                    </a>
                </li>
                |{" "}
                <li className="mr-1">
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                    Terms
                    </a>
                </li>
                |{" "}
                <li>
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                    Privacy
                    </a>
                </li>
                </ul>
            </div> */}
            </div>
        </Col>
        <Col className="text-center ml-auto mr-auto" md="2" sm="2" xs="12">
            <h4>Kimaye</h4>
            <a href="#pablo" onClick={(e) => e.preventDefault()} style = {{color: '#dbac00', fontWeight:'500', }}>www.kimaye.com</a>
        </Col>
        </Row>
    </Container>
    </footer>
    </>
  );
}