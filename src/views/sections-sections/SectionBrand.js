import React from "react";

// reactstrap components
import {
  Card,
  CardBody,
  CardTitle,
  Container,
  Row,
  Col,
} from "reactstrap";
import FooterFinal from "FooterFinal";
import WhiteNavbar from 'components/Navbars/WhiteNavbar'

import styles from "./SectionStyles.module.css";

export default function SectionBrand() {
  return (
    <>
      <WhiteNavbar />
      <div className="header-2">
        {/* <Navbar className="navbar-transparent navbar-absolute" expand="lg">
            <Container>
              <NavbarBrand className="mb-0" href="www.creative-tim.com">
                Creative Tim
              </NavbarBrand>
              <button
                className="navbar-toggler"
                id="navbarSupportedContent2"
                type="button"
              >
                <span className="navbar-toggler-bar" />
                <span className="navbar-toggler-bar" />
                <span className="navbar-toggler-bar" />
              </button>
              <UncontrolledCollapse navbar toggler="#navbarSupportedContent2">
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
        <div
          className="page-header"
          style={{
            backgroundImage:
              "url(" + "https://res.cloudinary.com/ini-farms/image/upload/v1618863951/media/kimaye/D2C5_bkpdfb.png" + ")",
          }}
        >
          {/* <div className="filter" /> */}
          {/* <div className="content-center">
              <Container>
                <Row>
                  <Col className="ml-auto mr-auto text-center" md="8">
                    <h1 className="title">Find your next trip</h1>
                    <h5 className="description">
                      Now you have no excuses, it's time to surprise your
                      clients, your competitors, and why not, the world. You
                      probably won't have a better chance to show off all your
                      potential if it's not by designing a website for your own
                      agency or web studio.
                    </h5>
                    <br />
                  </Col>
                  <Col className="ml-auto mr-auto" md="10">
                    <Card className="card-raised card-form-horizontal no-transition">
                      <CardBody>
                        <Form action="" method="">
                          <Row>
                            <Col md="3">
                              <FormGroup>
                                <Input
                                  defaultValue=""
                                  placeholder="City"
                                  type="text"
                                />
                              </FormGroup>
                            </Col>
                            <Col md="3">
                              <FormGroup>
                                <Input
                                  defaultValue=""
                                  placeholder="Country"
                                  type="text"
                                />
                              </FormGroup>
                            </Col>
                            <Col md="3">
                              <FormGroup>
                                <Input
                                  defaultValue=""
                                  placeholder="Date"
                                  type="text"
                                />
                              </FormGroup>
                            </Col>
                            <Col md="3">
                              <Button block color="danger" type="button">
                                <i className="nc-icon nc-zoom-split" /> Search
                              </Button>
                            </Col>
                          </Row>
                        </Form>
                      </CardBody>
                    </Card>
                  </Col>
                </Row>
              </Container>
            </div> */}
        </div>
      </div>
      <div
        // className="team-4"
        style={{backgroundColor: '#fffaef'}}
      >
        <Container>
          <Row>
            <Col className="ml-auto mr-auto text-center" md="8">
              <h2 className="title" style={{color: '#800000', fontWeight: '500'}}>Kimaye is a Promise</h2>
              <h5 className="description" style={{color: 'black', fontWeight: '400'}}>
                of consistently delivering the safest and superior quality fruits.
                <br />Our roots lie in the principles of cooperation and partnership.
                </h5>
              <br />
            </Col>
          </Row>
          <Row>
            <Col md="4">
              <Card className="card-profile" style={{backgroundColor: '#4d0000'}}>
                <CardBody>
                  <div className="card-avatar">
                    {/* <a href="#pablo" onClick={(e) => e.preventDefault()}> */}
                    <img
                      alt="..."
                      src="https://res.cloudinary.com/ini-farms/image/upload/v1618863974/media/kimaye/Safety_snvyz7.png"
                    />
                    <CardTitle tag="h4">Eric Thomson</CardTitle>
                    {/* </a> */}
                  </div>
                  <h6 style={{color: '#dbac00', fontWeight: '600'}}>Unparalleled Safety</h6>
                  <p className="card-description text-center"
                    style={{color: 'white', fontWeight: '400'}}>
                    Every time a consumer eats Kimaye product,
                    she has assured food safety & freedom from
                    hygiene related worries
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
              <Card className="card-profile" style={{backgroundColor: '#4d0000'}}>
                <CardBody>
                  <div className="card-avatar">
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <img
                        alt="..."
                        src="https://res.cloudinary.com/ini-farms/image/upload/v1618863973/media/kimaye/quality_ynstl0.png"
                      />
                      <CardTitle tag="h4">Sophia West</CardTitle>
                    </a>
                  </div>
                  <h6 style={{color: '#dbac00', fontWeight: '600'}}>Benchmark Quality</h6>
                  <p className="card-description text-center"
                    style={{color: 'white', fontWeight: '400'}}>
                    Our stringent quality processes ensure that only
                    the best quality fruit earns the Kimaye badge.
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
                      color="pinterest"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fa fa-pinterest" />
                    </Button>
                  </CardFooter> */}
              </Card>
            </Col>
            <Col md="4">
              <Card className="card-profile" style={{backgroundColor: '#4d0000'}}>
                <CardBody>
                  <div className="card-avatar">
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <img
                        alt="..."
                        src="https://res.cloudinary.com/ini-farms/image/upload/v1618863949/media/kimaye/Consistency_gueme2.png"
                      />
                      {/* <CardTitle tag="h4">Lucas Andrew</CardTitle> */}
                    </a>
                  </div>
                  <h6 style={{color: '#dbac00', fontWeight: '600', marginTop: '4%'}}>Highest Consistency</h6>
                  <p className="card-description text-center"
                    style={{color: 'white', fontWeight: '400'}}>
                    Our technology platform across the supply chain
                    ensures that each fruit is consistently good in
                    taste & freshness
                    </p>
                </CardBody>
                {/* <CardFooter className="text-center">
                    <Button
                      className="btn-just-icon mr-1"
                      color="youtube"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fa fa-youtube" />
                    </Button>
                    <Button
                      className="btn-just-icon mr-1"
                      color="twitter"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fa fa-twitter" />
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
      <div className="team-4 section-image" style={{
        backgroundImage:
          "url(" + "https://res.cloudinary.com/ini-farms/image/upload/v1618863946/media/kimaye/BG2_cpea02.s" + ")",
      }}>
        <Container>
          <Row>
            <Col md='6'>
              <Row md='2'>
                <h2 className="title" style={{color: 'white', fontWeight: '500', marginLeft: '25%'}}>4 Steps to Perfection</h2>
              </Row>
              <Row md='10'>
                <Col>
                  <Card className='card-profile' style=
                    {{backgroundColor: '#dbac00'}}>
                    <CardBody>
                      <div className='card-avatar'>
                        <img
                          alt="..."
                          src="https://res.cloudinary.com/ini-farms/image/upload/v1618863955/media/kimaye/Grown_Responsibly_osptje.png"
                        />
                      </div>
                      <h6 style={{color: '#800000', fontWeight: '700'}}>Grown Responsibly</h6>
                      <p className="card-description text-center"
                        style={{color: 'black', fontWeight: '400'}}>
                        Our products are grown using organic fertilizers,
                        100% drip irrigation & safe chemicals
                                    </p>
                    </CardBody>
                  </Card>
                </Col>
                <Col>
                  <Card className='card-profile' style=
                    {{backgroundColor: '#dbac00', marginTop: '50%'}}>
                    <CardBody>
                      <div className='card-avatar'>
                        <img
                          alt="..."
                          src="https://res.cloudinary.com/ini-farms/image/upload/v1618863955/media/kimaye/Handpicked_nz0zq3.png"
                        />
                      </div>
                      <h6 style={{color: '#800000', fontWeight: '700'}}>Handpicked at Farms</h6>
                      <p className="card-description text-center"
                        style={{color: 'black', fontWeight: '400'}}>
                        Our trained harvesting team ensure that the fruits
                        are picked at perfect maturity, right taste and
                        freshness
                                    </p>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </Col>
            <Col md='6'>
              <Row md='2'>
                <img 
                  src="https://res.cloudinary.com/ini-farms/image/upload/v1618863954/media/kimaye/flying_qpnoxm.png" 
                  alt="flying" 
                  className={`${styles.ImgFlying}`} />
              </Row>
              <Row md='10'>
                <Col>
                  <Card className='card-profile' style=
                    {{backgroundColor: '#dbac00'}}>
                    <CardBody>
                      <div className='card-avatar'>
                        <img
                          alt="..."
                          src="https://res.cloudinary.com/ini-farms/image/upload/v1618863957/media/kimaye/Kimaye_Badge_iux03r.png"
                        />
                      </div>
                      <h6 style={{color: '#800000', fontWeight: '700'}}>Earning the Kimaye Badge</h6>
                      <p className="card-description text-center"
                        style={{color: 'black', fontWeight: '400'}}>
                        Our modern infra, tech & stringent
                        processes select only the best fruits that deserve Kimaye
                        badge
                                    </p>
                    </CardBody>
                  </Card>
                </Col>
                <Col>
                  <Card className='card-profile' style=
                    {{backgroundColor: '#dbac00', marginTop: '50%'}}>
                    <CardBody>
                      <div className='card-avatar'>
                        <img
                          alt="..."
                          src="https://res.cloudinary.com/ini-farms/image/upload/v1618863951/media/kimaye/Delivery_cxxbdc.png"
                        />
                      </div>
                      <h6 style={{color: '#800000', fontWeight: '700'}}>No-Touch Delivery</h6>
                      <p className="card-description text-center"
                        style={{color: 'black', fontWeight: '400'}}>
                        Our packaging is specially designed to keep the
                        fruit fresh & no touch assurance till it reaches
                        consumer
                                    </p>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
      <div
        className="team-4"
        style={{backgroundColor: '#fffaef'}}
      >
        <Container>
          <Row>
            <Col className="ml-auto mr-auto text-center" md="8">
              <h2 className="title" style={{color: '#800000', fontWeight: '500'}}>Certification</h2>
              <h5 className="description" style={{color: 'black', fontWeight: '400'}}>
                of consistently delivering the safest and superior quality fruits.
                </h5><br />
            </Col>
          </Row>
          <Row>
            <Row md='6' style={{borderBottomColor: 'black', borderBottomWidth: 5}}>
              <Col className='text-center' md='6' >
                <Card className={`card-category ${styles.BrandCertiCards}`} style={{backgroundColor: '#4d0000'}}>
                  <div className='card-avatar'>
                    <h4 style={{color: '#dbac00', fontWeight: '500'}}>Food Safety</h4>
                  </div>
                  <CardBody>
                    <p style={{color: 'white', fontWeight: '400', fontSize: '7'}}>
                      Every step of our journey from farm to home is audited and certified to
                      ensure that food safety and hygeine are never compromised.
                        </p><br />
                    <Row style={{justifyContent: 'center'}}>
                      <Col md='3' style={{justifyContent: 'center'}}>
                        <img 
                          alt="..." 
                          src="https://res.cloudinary.com/ini-farms/image/upload/v1618863955/media/kimaye/HACCP_g1ebjt.png"
                          width='120' 
                          height='150' 
                          style={{borderRadius: '0'}} 
                        />
                        <br /><br />
                        <h6 style={{color: 'white'}}>HACCP</h6>
                      </Col>
                      <Col md='3' style={{justifyContent: 'center'}}>
                        <img 
                          alt="..." 
                          src="https://res.cloudinary.com/ini-farms/image/upload/v1618863954/media/kimaye/FSSC_jggov4.png"
                          width='120' 
                          height='150' 
                          style={{borderRadius: '0'}}
                        />
                        <br /><br />
                        <h6 style={{color: 'white'}}>FSSC</h6>
                      </Col>
                      <Col md='3' style={{justifyContent: 'center'}}>
                        <img 
                          alt="..." 
                          src="https://res.cloudinary.com/ini-farms/image/upload/v1618863954/media/kimaye/FSSAI_crmsre.png" 
                          width='120' 
                          height='150' 
                          style={{borderRadius: '0'}} 
                        />
                        <br /><br />
                        <h6 style={{color: 'white'}}>FSSAI</h6>
                      </Col>
                    </Row>
                  </CardBody>
                </Card>
              </Col>
              <Col className='text-center' md='6'>
                <Card className={`card-category ${styles.BrandCertiCards}`} style={{backgroundColor: '#4d0000'}}>
                  <div className='card-avatar'>
                    <h4 style={{color: '#dbac00', fontWeight: '500'}}>Field Certifications</h4>
                  </div>
                  <CardBody>
                    <p style={{color: 'white', fontWeight: '400', fontSize: '7'}}>
                      Both our own farms & our farmer groups are certified for Good Agriculture Practices to
                      ensure that Kimaye fruits are 100% safe
                        </p><br />
                    <Row style={{justifyContent: 'center'}}>
                      <Col md='3' style={{justifyContent: 'center'}}>
                        <img 
                          alt="..." 
                          src="https://res.cloudinary.com/ini-farms/image/upload/v1618863955/media/kimaye/GGAPOP2_sgxotx.png"
                          width='120' 
                          height='150' 
                          style={{borderRadius: '0'}} 
                        />
                        <br /><br />
                        <h6 style={{color: 'white'}}>Group-GAP</h6>
                      </Col>
                      <Col md='3' style={{justifyContent: 'center'}}>
                        <img 
                          alt="..." 
                          src="https://res.cloudinary.com/ini-farms/image/upload/v1618863955/media/kimaye/GRASPOP2_exbsbz.png" 
                          width='120' 
                          height='150' 
                          style={{borderRadius: '0', marginTop: '30%'}} 
                        />
                        <br /><br />
                        <h6 style={{color: 'white'}}>Group-GRASP</h6>
                      </Col>
                      <Col md='3' style={{justifyContent: 'center'}}>
                        <img 
                          alt="..." 
                          src="https://res.cloudinary.com/ini-farms/image/upload/v1618863954/media/kimaye/GGAP_otgzb6.png" 
                          width='120' 
                          height='150' 
                          style={{borderRadius: '0'}} 
                        />
                        <br /><br />
                        <h6 style={{color: 'white'}}>GlobalGap</h6>
                      </Col>
                    </Row>
                  </CardBody>
                </Card>
              </Col>
            </Row>
            <Row md='6'>
              <Col className='text-center' md='6'>
                <Card className={`card-category ${styles.BrandCertiCards}`} style={{backgroundColor: '#4d0000'}}>
                  <div className='card-avatar'>
                    <h4 style={{color: '#dbac00', fontWeight: '500'}}>Exports</h4>
                  </div>
                  <CardBody>
                    <p style={{color: 'white', fontWeight: '400', fontSize: '7'}}>
                      Our processes meet Global Retail and exports standards - they are fit to be
                      retailed in most premium supermarkets worldwide
                            </p><br />
                    <Row style={{justifyContent: 'center'}}>
                      <Col md='3' style={{justifyContent: 'center'}}>
                        <img 
                          alt="..." 
                          src="https://res.cloudinary.com/ini-farms/image/upload/v1618863982/media/kimaye/APEDA_p828km.png" 
                          width='120' 
                          height='150' 
                          style={{borderRadius: '0'}} 
                        />
                        <br /><br />
                        <h6 style={{color: 'white'}}>APEDA</h6>
                      </Col>
                      <Col md='3' style={{justifyContent: 'center'}}>
                        <img 
                          alt="..." 
                          src="https://res.cloudinary.com/ini-farms/image/upload/v1618863948/media/kimaye/BRC_zwigml.png" 
                          width='120' 
                          height='150' 
                          style={{borderRadius: '0'}} 
                        />
                        <br /><br />
                        <h6 style={{color: 'white'}}>BRC</h6>
                      </Col>
                      <Col md='3' style={{justifyContent: 'center'}}>
                        <img 
                          alt="..." 
                          src="https://res.cloudinary.com/ini-farms/image/upload/v1618863975/media/kimaye/SEH_htlyhp.png" 
                          width='120' 
                          height='150' 
                          style={{borderRadius: '0'}} 
                        />
                        <br /><br />
                        <h6 style={{color: 'white'}}>star export HOUSE</h6>
                      </Col>
                    </Row>
                  </CardBody>
                </Card>
              </Col>
              <Col className='text-center' md='6'>
                <Card className={`card-category ${styles.BrandCertiCards}`} style={{backgroundColor: '#4d0000'}}>
                  <div className='card-avatar'>
                    <h4 style={{color: '#dbac00', fontWeight: '500'}}>Social</h4>
                  </div>
                  <CardBody>
                    <p style={{color: 'white', fontWeight: '400', fontSize: '7'}}>
                      Kimaye products are not only #AllSafe. They are also #AllGood. We meet world's highest
                      social and ethical standards of doing business
                            </p><br />
                    <Row style={{justifyContent: 'center'}}>
                      <Col md='3' style={{justifyContent: 'center'}}>
                        <img 
                          alt="..." 
                          src="https://res.cloudinary.com/ini-farms/image/upload/v1618863975/media/kimaye/SMETA_fv2nte.png" 
                          width='120' 
                          height='150' 
                          style={{borderRadius: '0'}} 
                        />
                        <br /><br />
                        <h6 style={{color: 'white'}}>SMETA</h6>
                      </Col>
                      <Col md='3' style={{justifyContent: 'center'}}>
                        <img 
                          alt="..." 
                          src="https://res.cloudinary.com/ini-farms/image/upload/v1618863955/media/kimaye/GRASP_sthxvw.png" 
                          width='120' 
                          height='150' 
                          style={{borderRadius: '0'}} 
                        />
                        <br /><br />
                        <h6 style={{color: 'white'}}>Grasp</h6><br />
                      </Col>
                    </Row>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Row>
        </Container>
      </div>
      <FooterFinal />
    </>
  );
}
