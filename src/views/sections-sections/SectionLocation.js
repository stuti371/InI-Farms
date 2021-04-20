import React, {useState} from "react";

// reactstrap components
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardImg,
  CardTitle,
  NavItem,
  NavLink,
  Nav,
  TabContent,
  Form,
  FormGroup,
  Input,
  Label,
  TabPane,
  Container,
  Row,
  Col,
} from "reactstrap";
// import SectionContactUs from './SectionContactUs.js'
import WhiteNavbar from 'components/Navbars/WhiteNavbar'
import FooterFinal from "FooterFinal";

export default function SectionLocation() {

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("")
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");

  return (
    <>
      <WhiteNavbar />
      <div className="projects-3" id="projects-3" style={{backgroundColor: '#fffaef'}}>
        <Container>
          <Row>
            <Col className="ml-auto mr-auto text-center" md="8">
              <div className="space-top" />
              {/* <h6 className="category">Our Locations</h6> */}
              <h2 style={{color: '#800000', fontWeight: '500'}}>Our Locations</h2>
            </Col>
          </Row>
          <Row>
            <Col md="4">
              <Card className="card-profile card-plain">
                <CardImg top tag="div">
                  <a
                    href="https://www.google.com/maps/d/embed?mid=1weEGvGZ0j8HYsB7wEtc_iOgi0hxNPpdD&hl=en"
                    target="_blank"
                  >
                    <img
                      alt="..."
                      className="img"
                      src={require("assets/kimaye/HO.jpg")}
                    />
                  </a>
                </CardImg>
                <CardBody>
                  <h6 className="card-category" style={{color: '#800000'}}>Corporate Office</h6>
                  {/* <CardTitle tag="h4">
                      Beautiful Desktop for Designers
                    </CardTitle> */}
                  <p style={{color: 'black', fontWeight: '400'}}>
                    A-102 Boomerang, Chandivali Farm Rd, Andheri(E), Mumbai - 400072
                    </p>
                </CardBody>
              </Card>
            </Col>
            <Col md="4">
              <Card className="card-profile card-plain">
                <CardImg top tag="div">
                  <a
                    href="https://www.google.com/maps/d/embed?mid=1weEGvGZ0j8HYsB7wEtc_iOgi0hxNPpdD&hl=en"
                    target="_blank"
                  >
                    <img
                      alt="..."
                      className="img"
                      src={require("assets/kimaye/intnoffices.jpg")}
                    />
                  </a>
                </CardImg>
                <CardBody>
                  <h6 className="card-category" style={{color: '#800000'}}>International Offices</h6>
                  {/* <CardTitle tag="h4">
                      Famous Website Redesign Implementation
                    </CardTitle> */}
                  <p style={{color: 'black', fontWeight: '400'}}>
                    InI Farms, Netherlands <br />
                      InI Farms DMCC
                    </p>
                </CardBody>
              </Card>
            </Col>
            <Col md="4">
              <Card className="card-profile card-plain">
                <CardImg top tag="div">
                  <a
                    href="https://www.google.com/maps/d/embed?mid=1weEGvGZ0j8HYsB7wEtc_iOgi0hxNPpdD&hl=en"
                    target="_blank"
                  >
                    <img
                      alt="..."
                      className="img"
                      src={require("assets/kimaye/farmsourcing.png")}
                    />
                  </a>
                </CardImg>
                <CardBody>
                  <h6 className="card-category" style={{color: '#800000'}}>Farm Sourcing</h6>
                  {/* <CardTitle tag="h4">
                      The Best Productivity Applications
                    </CardTitle> */}
                  <p style={{color: 'black', fontWeight: '400'}}>
                    Maharashtra, Andhra Pradesh, Gujarat <br />
                      Karnataka, Madhya Pradesh, Tamil Nadu <br />
                      Kerala, Rajasthan
                    </p>
                </CardBody>
              </Card>
            </Col>
            <Col md="4">
              <Card className="card-profile card-plain">
                <CardImg top tag="div">
                  <a
                    href="https://www.google.com/maps/d/embed?mid=1weEGvGZ0j8HYsB7wEtc_iOgi0hxNPpdD&hl=en"
                    target="_blank"
                  >
                    <img
                      alt="..."
                      className="img"
                      src={require("assets/kimaye/Packhouse.jpg")}
                    />
                  </a>
                </CardImg>
                <CardBody>
                  <h6 className="card-category" style={{color: '#800000'}}>Packhouses & Cold Stores</h6>
                  {/* <CardTitle tag="h4">Behance Redesign</CardTitle> */}
                  <p style={{color: 'black', fontWeight: '400'}}>
                    IPH - Kurkumbh <br />
                      Cold Store - Tadipatri <br />
                      Collection Center - Nimgaon Ketaki
                    </p>
                </CardBody>
              </Card>
            </Col>
            <Col md="4">
              <Card className="card-profile card-plain">
                <CardImg top tag="div">
                  <a
                    href="https://www.google.com/maps/d/embed?mid=1weEGvGZ0j8HYsB7wEtc_iOgi0hxNPpdD&hl=en"
                    target="_blank"
                  >
                    <img
                      alt="..."
                      className="img"
                      src={require("assets/kimaye/ripeningcenters.jpg")}
                    />
                  </a>
                </CardImg>
                <CardBody>
                  <h6 className="card-category" style={{color: '#800000'}}>Ripening Centers</h6>
                  {/* <CardTitle tag="h4">Analytics for Android</CardTitle> */}
                  <p style={{color: 'black', fontWeight: '400'}}>
                    Delhi, Mumbai <br />
                      Bengaluru, Hyderabad
                    </p>
                </CardBody>
              </Card>
            </Col>
            <Col md="4">
              <Card className="card-profile card-plain">
                <CardImg top tag="div">
                  <a
                    href="https://www.google.com/maps/d/embed?mid=1weEGvGZ0j8HYsB7wEtc_iOgi0hxNPpdD&hl=en"
                    target="_blank"
                  >
                    <img
                      alt="..."
                      className="img"
                      src={require("assets/kimaye/farms.jpg")}
                    />
                  </a>
                </CardImg>
                <CardBody>
                  <h6 className="card-category" style={{color: '#800000'}}>Farms</h6>
                  {/* <CardTitle tag="h4">How to find the contacts.</CardTitle> */}
                  <p style={{color: 'black', fontWeight: '400'}}>
                    Saswad, Miri, Dhamangaon (Mah)<br />
                      Atoot, Bhikangaon, Shajapur (MP)
                    </p>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
      <div
        className="contactus-1 section-image"
        id="contactus"
        style={{
          backgroundImage:
            "url(" + require("assets/kimaye/BGN2.jpg") + ")",
        }}
      >
        <Container>
          <Row>
            <Col className="ml-auto mr-auto" md="10">
              <Card className="card-contact no-transition">
                <CardTitle className="text-center" tag="h3" style={{color: '#800000', fontWeight: '500'}}>
                  Contact Us
                  </CardTitle>
                <Row>
                  <Col className="ml-auto" md="5">
                    <CardBody>
                      <div className="info info-horizontal">
                        <div className="icon icon-info">
                          <i className="nc-icon nc-pin-3" />
                        </div>
                        <div className="description">
                          <h4 style={{color: 'black', fontWeight: '400'}}>
                            Find us at
                            </h4>
                          <p style={{color: 'black'}}>
                            A-102 Boomerang <br />
                              Chandivali Farm Rd <br />
                              Andheri (E)<br />
                              Mumbai-400072<br />India
                            </p>
                        </div>
                      </div>
                      <div className="info info-horizontal">
                        <div className="icon icon-danger">
                          <i className="nc-icon nc-badge" />
                        </div>
                        <div className="description">
                          <h4 style={{color: 'black', fontWeight: '400'}}>Reach us on</h4>
                          <p style={{color: 'black'}}>
                            E-mail: kimayedb@gmail.com <br />
                            Tel: +91 22 4260 0700 <br />
                            Fax: +91 22 4260 0731
                            </p>
                        </div>
                      </div>
                    </CardBody>
                  </Col>
                  <Col className="mr-auto" md="5">
                    {/* <a>pankaj.khandelwal@inifarms.com</a> */}
                    <Form id="contact-form" method="post" role="form">
                      <CardBody>
                        <Row>
                          <Col md="6">
                            <FormGroup className="label-floating">
                              <label className="control-label">
                                First name
                                </label>
                              <input
                                name="name"
                                placeholder="First Name"
                                type="text"
                                className="form-control"
                                onChange={(e) => setFirstName(e.target.value)}
                              />
                            </FormGroup>
                          </Col>
                          <Col md="6">
                            <FormGroup className="label-floating">
                              <label className="control-label">
                                Last name
                                </label>
                              <input
                                name="name"
                                placeholder="Last Name"
                                className="form-control"
                                type="text"
                                onChange={(e) => setLastName(e.target.value)}
                              />
                            </FormGroup>
                          </Col>
                        </Row>
                        <FormGroup className="label-floating">
                          <label className="control-label">
                            Subject
                            </label>
                          <input
                            name="subject"
                            id="subject"
                            placeholder="Subject"
                            type="text"
                            className="form-control"
                            onChange={(e) => {setSubject(e.target.value);}}
                          />
                        </FormGroup>
                        <FormGroup className="label-floating">
                          <label className="control-label">
                            Your message
                            </label>
                          <textarea
                            id="message"
                            name="message"
                            placeholder="Message"
                            rows="6"
                            resize="none"
                            className="form-control"
                            onChange={(e) => setBody(e.target.value)}
                          />
                        </FormGroup>
                        <Row>
                          <Col md="6">
                            <FormGroup check>
                              <Label check>
                                <Input defaultValue="" type="checkbox" />
                                  I'm not a robot !{" "}
                                <span className="form-check-sign" />
                              </Label>
                            </FormGroup>
                          </Col>
                          <Col md="6">
                            <Button
                              className="pull-right"
                              color="primary"
                              type="submit"
                              onClick={(e) => { e.preventDefault(); window.open(`mailto:kimayedb@gmail.com?subject=${subject}&body=${`${body}%0D%0AFrom,%0D%0A${firstName} ${lastName}`}`)}}
                            >Send Message
                            </Button>
                          </Col>
                        </Row>
                      </CardBody>
                    </Form>
                  </Col>
                </Row>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
      <FooterFinal />
    </>
  );
}
