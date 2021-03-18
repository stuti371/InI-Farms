import React from "react";
import {journeyDB, povDB, mediaDB} from "./db";

// reactstrap components
import {
  Button,
  Card,
  CardBody,
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

  const map = {
    "youtube": "http://www.youtube.com/embed/",
    "vimeo": "https://player.vimeo.com/video/",
  }

  const vidLink = (link) => {
    const url_addr = link.split(/[/.=]/u)
    let serv;
    Object.keys(map).forEach((e) => {
      if (url_addr.includes(e)) {
        serv = map[e];
      }
    })

    return `${serv}${url_addr[url_addr.length - 1]}`;
  }

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
                <Button
                  className="btn-round"
                  color="default"
                  href="https://www.youtube.com/watch?v=nx5Aj0qw7do"
                  target="_blank"
                >
                  Play Video
                    </Button>
              </Row>
            </Container>
          </div>
        </div>
      </div>
      {/* ********* BLOGS 2 ********* */}

      <div className={`blog-2 ${styles.BlogSection}`} style={{
        backgroundImage: "linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(" + require("assets/kimaye/BGN2.jpg") + ")",
      }}>
        <div className={styles.JourneyContainer}>
          <h2 style={{color: '#dbac00', fontWeight: '500', textAlign: 'center'}}>The Journey...</h2>
          <div className={styles.CardsContainer}>
            {
              journeyDB && journeyDB.map(card => {
                return (
                  <Card className="card-blog">
                    <div className="card-image">
                      <a href={card.link} >
                        <img
                          alt="..."
                          className="img img-raised"
                          src={card.img}
                          height="200"
                        />
                      </a>
                    </div>
                    <CardBody>
                      <CardTitle tag="h5">
                        <a
                          href={card.link}
                          style={{color: '#800000', fontWeight: '400'}}>
                          {card.title}
                        </a>
                      </CardTitle>
                      <p style={{color: 'black'}}>{card.body}</p>
                    </CardBody>
                  </Card>
                )
              })
            }
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

              <div className={styles.pov}>
                {
                  povDB && povDB.map(card => {
                    return (
                      <Card className={`${styles.povCard} card-plain card-blog`}>
                        <Col md="4">
                          <div className="card-image">
                            <img
                              alt="..."
                              className="img"
                              src={card.img}
                            />
                          </div>
                        </Col>
                        <Col md="8">
                          <CardBody>
                            <CardTitle tag="h3">
                              <a href="https://www.thehindubusinessline.com/economy/agri-business/more-players-may-enter-contract-farming/article31741794.ece"
                                style={{fontWeight: '500'}} >
                                {card.title}
                              </a>
                            </CardTitle>
                            <p style={{color: 'black'}}>
                              {card.body + " "}
                              <a href="https://www.thehindubusinessline.com/economy/agri-business/more-players-may-enter-contract-farming/article31741794.ece"
                                style={{color: '#800000', fontWeight: '500'}}>
                                Read More
                                  </a>
                            </p>
                          </CardBody>
                        </Col>
                      </Card>
                    )
                  })
                }
              </div>
            </Col>
          </Row>
        </Container>

      </div>
      <div
        className={`blog-2 ${styles.BlogSection}`}
        style={{
          backgroundImage: "linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(" + require("assets/kimaye/BGN2.jpg") + ")",
          paddingBottom: "3rem"
        }}>
        <div className={styles.JourneyContainer}>
          <h2 style={{color: '#dbac00', fontWeight: '500', textAlign: 'center'}}>Media...</h2>
          <div className={styles.VidCont}>
            {
              mediaDB && mediaDB.map((vid) => {
                return (
                  <iframe
                    title="video-1"
                    src={vidLink(vid.link)}>
                  </iframe>
                )
              })
            }
          </div>
        </div>
        {/* </Container> */}
      </div>
      <FooterFinal />
    </>
  );
}

export default SectionMedia;
