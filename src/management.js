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
} from "reactstrap";

export default function Management(){
    return(
        <div className="section section-team cd-section" id="teams" style = {{
          backgroundImage:
          `url("https://res.cloudinary.com/ini-farms/image/upload/v1618863946/media/kimaye/BG3_aj4sfe.jpg")`,}}>
          <Container >
            <Row>
              <Col className="ml-auto mr-auto text-center" md="8">
                <h2 className="title" style = {{color: '#800000', fontWeight: '450'}}>Management</h2>
                <h5 className="description" style = {{color: 'black', fontWeight: '450'}}>
                  Individually we are one drop, together we are an ocean
                </h5>
              </Col>
            </Row>
            
            <Row>
              
              <Col md="3">
                <Card className="card-profile card-category">
                  <div className="card-avatar">
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <img
                        alt="..."
                        src="https://res.cloudinary.com/ini-farms/image/upload/v1618863984/media/kimaye/ashwin_zzkbp8.jpg"
                      />
                    </a>
                  </div>
                  <CardBody>
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <div className="author">
                        <CardTitle tag="h5" style = {{fontWeight: '500'}}>Ashwin Raghuwanshi</CardTitle>
                        <h6 className="card-category" style = {{fontWeight: '450', color: '#800000'}}>
                          Chief Operating Officer
                        </h6>
                      </div>
                    </a>
                    <p className="card-description text-center" style = {{color: 'black'}}>
                      
                      MSc Agri <br />
                      FreshAcres, Moody 
                    </p>
                  </CardBody>
                  <CardFooter className="text-center">
                    <Button
                      className="btn-link btn-just-icon mr-1"
                      color="twitter"
                      href="https://twitter.com/raghuwanshiash?s=20"
                    >
                      <i className="fa fa-twitter" />
                    </Button>
                    <Button
                      className="btn-link btn-just-icon"
                      color="linkedin"
                      href="https://www.linkedin.com/in/ashwin-raghuwanshi-51b1416"
                    >
                      <i className="fa fa-linkedin" />
                    </Button>
                  </CardFooter>
                </Card>
              </Col>
              
              <Col md="3">
              <Card className="card-profile card-category">
                  <div className="card-avatar">
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <img
                        alt="..."
                        src="https://res.cloudinary.com/ini-farms/image/upload/v1618863976/media/kimaye/Sushil_f29z2e.jpg"
                      />
                    </a>
                  </div>
                  <CardBody>
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <div className="author">
                        <CardTitle tag="h5" style = {{fontWeight: '500'}}>Sushil Parikh</CardTitle>
                        <h6 className="card-category" style = {{fontWeight: '450', color: '#800000'}}>
                          Finance
                        </h6>
                      </div>
                    </a>
                    <p className="card-description text-center" style = {{color: 'black'}}>
                      Chartered Accountant <br />
                      Endurance, Garware
                    </p>
                  </CardBody>
                  <CardFooter className="text-center">
                    <Button
                      className="btn-link btn-just-icon mr-1"
                      color="twitter"
                      href="https://twitter.com/sushilparikh?s=20"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fa fa-twitter" />
                    </Button>
                    <Button
                      className="btn-link btn-just-icon"
                      color="linkedin"
                      href="https://www.linkedin.com/in/sushil-parikh-pareek-6b8a9123"
                    >
                      <i className="fa fa-linkedin" />
                    </Button>
                  </CardFooter>
                </Card>
              </Col>
              
              <Col md="3">
              <Card className="card-profile card-category">
                  <div className="card-avatar">
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <img
                        alt="..."
                        src="https://res.cloudinary.com/ini-farms/image/upload/v1618863981/media/kimaye/ajit-kumar_iwqckh.jpg"
                      />
                    </a>
                  </div>
                  <CardBody>
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <div className="author">
                        <CardTitle tag="h5" style = {{fontWeight: '500'}}>Ajit Kumar</CardTitle>
                        <h6 className="card-category" style = {{fontWeight: '450', color: '#800000'}}>
                          CSR & PPP
                        </h6>
                      </div>
                    </a>
                    <p className="card-description text-center" style = {{color: 'black'}}>
                      PhD (GBPAU) <br />
                      World Bank, Mother Dairy
                    </p>
                  </CardBody>
                  <CardFooter className="text-center">
                    <Button
                      className="btn-link btn-just-icon mr-1"
                      color="twitter"
                      href="#pablo"
                    >
                      <i className="fa fa-twitter" />
                    </Button>
                    <Button
                      className="btn-link btn-just-icon"
                      color="linkedin"
                      href="https://www.linkedin.com/in/ajit-kumar-36ab8168"
                    >
                      <i className="fa fa-linkedin" />
                    </Button>
                  </CardFooter>
                </Card>
              </Col>
              
              <Col md="3">
              <Card className="card-profile card-category">
                  <div className="card-avatar">
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <img
                        alt="..."
                        src="https://res.cloudinary.com/ini-farms/image/upload/v1618863957/media/kimaye/kalpesh_lnl1lh.jpg"
                      />
                    </a>
                  </div>
                  <CardBody>
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <div className="author">
                        <CardTitle tag="h5" style = {{fontWeight: '500'}}>Kalpesh Khivasara</CardTitle>
                        <h6 className="card-category" style = {{fontWeight: '450', color: '#800000'}}>
                          International Sales
                        </h6>
                      </div>
                    </a>
                    <p className="card-description text-center" style = {{color: 'black'}}>
                      B.Tech. (IITB) <br />
                      InI Consulting 
                    </p>
                  </CardBody>
                  <CardFooter className="text-center">
                    <Button
                      className="btn-link btn-just-icon mr-1"
                      color="twitter"
                      href="#pablo"
                    >
                      <i className="fa fa-twitter" />
                    </Button>
                    <Button
                      className="btn-link btn-just-icon"
                      color="linkedin"
                      href="https://www.linkedin.com/in/kalpeshk"
                    >
                      <i className="fa fa-linkedin" />
                    </Button>
                  </CardFooter>
                </Card>
              </Col>
            </Row>
            
            <Row>

              <Col md="3">
              <Card className="card-profile card-category">
                  <div className="card-avatar">
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <img
                        alt="..."
                        src="https://res.cloudinary.com/ini-farms/image/upload/v1618863970/media/kimaye/prachi_xsrafl.jpg"
                      />
                    </a>
                  </div>
                  <CardBody>
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <div className="author">
                        <CardTitle tag="h5" style = {{fontWeight: '500'}}>Prachi Singh</CardTitle>
                        <h6 className="card-category" style = {{fontWeight: '450', color: '#800000'}}>
                          HR & Admin
                        </h6>
                      </div>
                    </a>
                    <p className="card-description text-center" style = {{color: 'black'}}>
                      B.Tech, MBA (IMT) <br />
                      Advanz, Birlasoft
                    </p>
                  </CardBody>
                  <CardFooter className="text-center">
                    <Button
                      className="btn-link btn-just-icon mr-1"
                      color="twitter"
                      href="#pablo"
                    >
                      <i className="fa fa-twitter" />
                    </Button>
                    <Button
                      className="btn-link btn-just-icon"
                      color="linkedin"
                      href="https://www.linkedin.com/in/prachi-singh-5a691821"
                    >
                      <i className="fa fa-linkedin" />
                    </Button>
                  </CardFooter>
                </Card>
              </Col>
              
              <Col md="3">
              <Card className="card-profile card-category">
                  <div className="card-avatar">
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <img
                        alt="..."
                        src="https://res.cloudinary.com/ini-farms/image/upload/v1618863975/media/kimaye/SHALABH_ildazr.jpg"
                      />
                    </a>
                  </div>
                  <CardBody>
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <div className="author">
                        <CardTitle tag="h5" style = {{fontWeight: '500'}}>Shalabh Agarwal</CardTitle>
                        <h6 className="card-category" style = {{fontWeight: '450', color: '#800000'}}>
                          Logistics & Planning
                        </h6>
                      </div>
                    </a>
                    <p className="card-description text-center" style = {{color: 'black'}}>
                      B.Tech (BIT), MBA (IMT)<br />
                      KPMG, Deloitte
                    </p>
                  </CardBody>
                  <CardFooter className="text-center">
                    <Button
                      className="btn-link btn-just-icon mr-1"
                      color="twitter"
                      href="https://mobile.twitter.com/ShalabhAgrawa14"
                    >
                      <i className="fa fa-twitter" />
                    </Button>
                    <Button
                      className="btn-link btn-just-icon"
                      color="linkedin"
                      href="https://www.linkedin.com/in/shalabh-agrawal-239300b"
                      // onClick={(e) => e.preventDefault()}
                    >
                      <i className="fa fa-linkedin" />
                    </Button>
                  </CardFooter>
                </Card>
              </Col>
              
              <Col md="3">
              <Card className="card-profile card-category">
                  <div className="card-avatar">
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <img
                        alt="..."
                        src="https://res.cloudinary.com/ini-farms/image/upload/v1618863956/media/kimaye/Indravadan_abczxj.jpg"
                      />
                    </a>
                  </div>
                  <CardBody>
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <div className="author">
                        <CardTitle tag="h5" style = {{fontWeight: '500'}}>Indravadan Jadhav</CardTitle>
                        <h6 className="card-category" style = {{fontWeight: '450', color: '#800000'}}>
                          Fruit Procurement
                        </h6>
                      </div>
                    </a>
                    <p className="card-description text-center" style = {{color: 'black'}}>
                      BHMS, MBA (IIMA) <br />
                      Accenture, Astron
                    </p>
                  </CardBody>
                  <CardFooter className="text-center">
                    <Button
                      className="btn-link btn-just-icon mr-1"
                      color="twitter"
                      href="#pablo"
                      // onClick={(e) => e.preventDefault()}
                    >
                      <i className="fa fa-twitter" />
                    </Button>
                    <Button
                      className="btn-link btn-just-icon"
                      color="linkedin"
                      href="https://www.linkedin.com/in/indravadanjadav"
                    >
                      <i className="fa fa-linkedin" />
                    </Button>
                  </CardFooter>
                </Card>
              </Col>

            <Col md="3">
              <Card className="card-profile card-category">
                <div className="card-avatar">
                  <a href="#pablo" onClick={(e) => e.preventDefault()}>
                    <img
                      alt="..."
                      src="https://res.cloudinary.com/ini-farms/image/upload/v1620048603/media/kimaye/parag_kpci6x.jpg"
                    />
                  </a>
                </div>
                <CardBody>
                  <a href="#pablo" onClick={(e) => e.preventDefault()}>
                    <div className="author">
                      <CardTitle tag="h5" style={{ fontWeight: '500' }}>Parag H Dhakan</CardTitle>
                      <h6 className="card-category" style={{ fontWeight: '450', color: '#800000' }}>
                        Chief Technology Officer
                      </h6>
                    </div>
                  </a>
                  <p className="card-description text-center" style={{ color: 'black' }}>
                    BE, MIM, Cyber Law
                    <br />
                    Arvind, Tommy Hilfiger
                  </p>
                </CardBody>
                <CardFooter className="text-center">
                  <Button
                    className="btn-link btn-just-icon mr-1"
                    color="twitter"
                    // href="https://twitter.com/iamsarabjeetk"
                    href="https://twitter.com/"
                  >
                    <i className="fa fa-twitter" />
                  </Button>
                  <Button
                    className="btn-link btn-just-icon"
                    color="linkedin"
                    href="https://www.linkedin.com/in/parag-dhakan-76562713/"
                  >
                    <i className="fa fa-linkedin" />
                  </Button>
                </CardFooter>
              </Card>
            </Col>
            </Row>
            
            <Row style={{justifyContent: "center"}}>
            <Col md="3">
              <Card className="card-profile card-category">
                <div className="card-avatar">
                  <a href="#pablo" onClick={(e) => e.preventDefault()}>
                    <img
                      alt="..."
                      src="https://res.cloudinary.com/ini-farms/image/upload/v1620915232/media/kimaye/Vaibhav_Batra_jch1a0.jpg"
                    />
                  </a>
                </div>
                <CardBody>
                  <a href="#pablo" onClick={(e) => e.preventDefault()}>
                    <div className="author">
                      <CardTitle tag="h5" style={{ fontWeight: '500' }}>Vaibhav Batra</CardTitle>
                      <h6 className="card-category" style={{ fontWeight: '450', color: '#800000' }}>
                        Business Head – D2C
                      </h6>
                    </div>
                  </a>
                  <p className="card-description text-center" style={{ color: 'black' }}>
                    MBA, Marketing, FMS
                    <br />
                    HUL, Lenskart, Lodha Group
                  </p>
                </CardBody>
                <CardFooter className="text-center">
                  <Button
                    className="btn-link btn-just-icon mr-1"
                    color="twitter"
                    href="https://twitter.com/"
                    // href="https://twitter.com/iamsarabjeetk"
                  >
                    <i className="fa fa-twitter" />
                  </Button>
                  <Button
                    className="btn-link btn-just-icon"
                    color="linkedin"
                    href="https://www.linkedin.com/in/vaibhav-batra-a3217b8/"
                  >
                    <i className="fa fa-linkedin" />
                  </Button>
                </CardFooter>
              </Card>
            </Col>
            </Row>
          </Container>
        </div>
    );
}