import React from "react";
// react plugin used to create DropdownMenu for selecting items

// reactstrap components
import {Button, FormGroup, Container, Row, Col} from "reactstrap";
import styles from "./Custom.module.css"

export default function FooterFinal() {
  return (
    <>
      <footer className="footer footer-black footer-big">
        <Container>
          <Row>
            <Col className="text-center ml-auto mr-auto" md="3" sm="3" xs="12">
              <h4>InI Farms</h4>
              <div className="social-area">
                <Button className="btn-just-icon btn-round" color="linkedin" href='https://www.linkedin.com/company/ini-farms/?originalSubdomain=in'>
                  <i className="fa fa-linkedin" />
                </Button>&emsp;
            <Button
                  className="btn-just-icon btn-round mr-1"
                  color="facebook"
                  href='https://www.facebook.com/KimayeFruits/'
                >
                  <i className="fa fa-facebook" />
                </Button>&emsp;
            <Button
                  className="btn-just-icon btn-round mr-1"
                  color="twitter"
                  href='https://twitter.com/Kimaye_INI'
                >
                  <i className="fa fa-twitter" />
                </Button>&emsp;
            <Button className="btn-just-icon btn-round" color="instagram" href='https://www.instagram.com/kimayefruits/'>
                  <i className="fa fa-instagram" />
                </Button>
              </div>
            </Col>
            <Col className="ml-auto mr-auto" md="7" sm="7" xs="12">
              <div className={`${styles.LinksCont}`}>
                <div>
                  <div className="links">
                    <ul className="uppercase-links stacked-links">
                      <li>
                        <a href="/homepage" >
                          Home
                        </a>
                      </li>
                      <li>
                        <a href="/Location" >
                          Locations
                        </a>
                      </li>
                      <li>
                        <a href="/Media" >
                          Media
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div>
                  <div className="links">
                    <ul className="uppercase-links stacked-links">
                      <li>
                        <a href="/AboutUs" >
                          About Us
                        </a>
                      </li>
                      <li>
                        <a href="/AgTech" >
                          Ag-Tech
                        </a>
                      </li>
                      <li>
                        <a href="/Soulful" >
                          Soulful
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div>
                  <div className="links">
                    <ul className="uppercase-links stacked-links">
                      <li>
                        <a href="/Location/#contactus" >
                          Contact Us
                        </a>
                      </li>
                      <li>
                        <a to='/PrivacyPolicy' tag='link' >
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
                </div>
              </div>

            </Col>
            <Col className="text-center ml-auto mr-auto" md="2" sm="2" xs="12">
              <h4>Kimaye</h4>
              <a href="http://www.kimaye.com/" style={{color: '#dbac00', fontWeight: '500', }}>www.kimaye.com</a>
            </Col>
          </Row>
          <hr />
          <div className="copyright">
            <div className="pull-left">
              © {new Date().getFullYear()} InI Farms Pvt Ltd, All Rights Reserved
            </div>
          </div>
        </Container>
      </footer>
    </>
  );
}
