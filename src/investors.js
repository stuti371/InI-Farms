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

import styles from "./Custom.module.css";

export default function Investors() {
  return (
    <div
      className="team-2 section-image" style={{
        backgroundImage:
          `url("https://res.cloudinary.com/ini-farms/image/upload/v1618863946/media/kimaye/BG2_cpea02.jpg")`,
      }}>
      <Container>
        <Row>
          <Col className="ml-auto mr-auto text-center" md="8">
            <h2 className="title">Investors</h2>
            <h3 style={{color: '#dcab00'}}>
              Institutions
      </h3>
          </Col>
        </Row>
        <Row style={{alignItems: 'center'}}>
          <Col md="4">
            <Card className="card-profile card-plain">
              <CardImg top tag="div">
                <a href="#pablo" onClick={(e) => e.preventDefault()}>
                  <img
                    alt="..."
                    className="img"
                    src="https://res.cloudinary.com/ini-farms/image/upload/v1618863943/media/kimaye/aavishkaar_aqzuvd.png"
                  />
                </a>
              </CardImg>
              <CardBody>
                {/* <CardTitle tag="h4">Alec Thompson</CardTitle> */}
                {/* <h6 className="card-category">Managing Partner</h6>
          <CardFooter>
            <Button
              className="btn-link btn-just-icon mr-1"
              color="neutral"
              href="#pablo"
              onClick={(e) => e.preventDefault()}
            >
              <i className="fa fa-twitter" />
            </Button>
            <Button
              className="btn-link btn-just-icon mr-1"
              color="neutral"
              href="#pablo"
              onClick={(e) => e.preventDefault()}
            >
              <i className="fa fa-facebook" />
            </Button>
            <Button
              className="btn-link btn-just-icon"
              color="neutral"
              href="#pablo"
              onClick={(e) => e.preventDefault()}
            >
              <i className="fa fa-dribbble" />
            </Button>
          </CardFooter> */}
              </CardBody>
            </Card>
          </Col>
          <Col md="4">
            <Card className="card-profile card-plain">
              <CardImg top tag="div" >
                <a href="#pablo" onClick={(e) => e.preventDefault()}>
                  <img
                    alt="..."
                    className="img"
                    src="https://res.cloudinary.com/ini-farms/image/upload/v1618863939/media/kimaye/aspada_yshykf.png"
                  />
                </a>
              </CardImg>
              <CardBody>
                {/* <CardTitle tag="h4">George Lincoln</CardTitle> */}
                {/* <h6 className="card-category">Backend Hacker</h6>
          <CardFooter>
            <Button
              className="btn-link btn-just-icon mr-1"
              color="neutral"
              href="#pablo"
              onClick={(e) => e.preventDefault()}
            >
              <i className="fa fa-linkedin" />
            </Button>
            <Button
              className="btn-link btn-just-icon mr-1"
              color="neutral"
              href="#pablo"
              onClick={(e) => e.preventDefault()}
            >
              <i className="fa fa-facebook" />
            </Button>
            <Button
              className="btn-link btn-just-icon"
              color="neutral"
              href="#pablo"
              onClick={(e) => e.preventDefault()}
            >
              <i className="fa fa-dribbble" />
            </Button>
          </CardFooter> */}
              </CardBody>
            </Card>
          </Col>
          <Col md="4">
            <Card className="card-profile card-plain">
              <CardImg top tag="div">
                <a href="#pablo" onClick={(e) => e.preventDefault()}>
                  <img
                    alt="..."
                    className="img"
                    src="https://res.cloudinary.com/ini-farms/image/upload/v1618863978/media/kimaye/unilazer_crlrls.jpg"
                  />
                </a>
              </CardImg>
              <CardBody>
                {/* <CardTitle tag="h4">Sophie West</CardTitle> */}
                {/* <h6 className="card-category">Photographer</h6> */}
                {/* <CardFooter>
            <Button
              className="btn-link btn-just-icon mr-1"
              color="neutral"
              href="#pablo"
              onClick={(e) => e.preventDefault()}
            >
              <i className="fa fa-dribbble" />
            </Button>
            <Button
              className="btn-link btn-just-icon mr-1"
              color="neutral"
              href="#pablo"
              onClick={(e) => e.preventDefault()}
            >
              <i className="fa fa-twitter" />
            </Button>
            <Button
              className="btn-link btn-just-icon"
              color="neutral"
              href="#pablo"
              onClick={(e) => e.preventDefault()}
            >
              <i className="fa fa-linkedin" />
            </Button>
          </CardFooter> */}
              </CardBody>
            </Card>
          </Col>
        </Row>

        <Row>
          <Col className="ml-auto mr-auto text-center" md="8">
            <h3 style={{color: '#dcab00'}}>
              Angels <br /> <br /> <br />
            </h3>
          </Col>
        </Row>

        <Row className={`${styles.AngelFlex}`}>
          <Col md="4" className={`${styles.CardCont}`}>
            <Card className="card-profile card-category">
              <div className="card-avatar">
                <a href="#pablo" onClick={(e) => e.preventDefault()}>
                  <img
                    alt="..."
                    src="https://res.cloudinary.com/ini-farms/image/upload/v1618863984/media/kimaye/ashish_snyvkm.jpg"
                  />
                </a>
              </div>
              <CardBody>
                <a href="#pablo" onClick={(e) => e.preventDefault()}>
                  <div className="author">
                    <CardTitle tag="h4" style={{color: 'black'}}>Ashish Gupta</CardTitle><br />
                  </div>
                </a>
                <p className="text-center">
                  Managing Director <br />
                  Helion Advisors <br />
                  Junglee, Tavant, IITK, Stanford
                </p>
              </CardBody>
            </Card>
          </Col>
          <Col md="4" className={`${styles.CardCont}`}>
            <Card className="card-profile card-category">
              <div className="card-avatar">
                <a href="#pablo" onClick={(e) => e.preventDefault()}>
                  <img
                    alt="..."
                    src="https://res.cloudinary.com/ini-farms/image/upload/v1618863959/media/kimaye/pavan_wenflp.jpg"
                  />
                </a>
              </div>
              <CardBody>
                <a href="#pablo" onClick={(e) => e.preventDefault()}>
                  <div className="author">
                    <CardTitle tag="h4" style={{color: 'black'}}>Pavan Vaish</CardTitle><br />
                  </div>
                </a>
                <p className="text-center">
                  Director, Supply & Driver Ops<br />
          Uber India & South Asia<br />
          IBM-Daksh, IITKGP, Stanford
          </p>
              </CardBody>
            </Card>
          </Col>
          <Col md="4" className={`${styles.CardCont}`}>
            <Card className="card-profile card-category">
              <div className="card-avatar">
                <a href="#pablo" onClick={(e) => e.preventDefault()}>
                  <img
                    alt="..."
                    src="https://res.cloudinary.com/ini-farms/image/upload/v1618863973/media/kimaye/rahul_gh7zht.png"
                  />
                </a>
              </div>
              <CardBody>
                <a href="#pablo" onClick={(e) => e.preventDefault()}>
                  <div className="author">
                    <CardTitle tag="h4" style={{color: 'black'}}>Rahul Chowdhri</CardTitle><br />
                  </div>
                </a>
                <p className="text-center">
                  Co-Founder <br />
          Stellaris Ventures<br />
          BCG, Helion, IITK, IIMC
          </p>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
