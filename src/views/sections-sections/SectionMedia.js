import React, {useState, useEffect} from "react";
import {db} from "../../services/firebase";
import Paginate from "../../util/pagination";


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

  const [journeyDB, setJourneys] = useState();
  const [povDB, setPOV] = useState();
  const [mediaDB, setMedia] = useState();

  const [jCurrentPage, setJCurrentPage] = useState(0);
  const [pCurrentPage, setPCurrentPage] = useState(0);
  const [mCurrentPage, setMCurrentPage] = useState(0);

  useEffect(() => {
    const journeyRef = db.ref("Journey");
    journeyRef.on("value", (snapshot) => {
      const jour = snapshot.val();
      const journeyList = [];
      for (let id in jour) {
        journeyList.push({id, ...jour[id]});
      }
      setJourneys(journeyList);
    })
    console.log("hiiiii");
  }, [])

  useEffect(() => {
    const mediaRef = db.ref("Media");
    mediaRef.on("value", (snapshot) => {
      const media = snapshot.val();
      const mediaList = [];
      for (let id in media) {
        mediaList.push({id, ...media[id]});
      }
      setMedia(mediaList);
    })
    console.log("hiiiii");
  }, [])

  useEffect(() => {
    const povRef = db.ref("POV");
    povRef.on("value", (snapshot) => {
      const pov = snapshot.val();
      const povList = [];
      for (let id in pov) {
        povList.push({id, ...pov[id]});
      }
      setPOV(povList);
    })
    console.log("hiiiii");
  }, [])

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
        minHeight: "80vh",
        backgroundImage: "linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(" + require("assets/kimaye/BGN2.jpg") + ")",
      }}>
        <div className={styles.JourneyContainer}>
          <h2 style={{color: '#dbac00', fontWeight: '500', textAlign: 'center'}}>The Journey...</h2>
          <div className={styles.CardsContainer}>
            {
              journeyDB && journeyDB.slice(jCurrentPage * 8, (jCurrentPage + 1) * 8).map(card => {
                return (
                  <Card key={card.id} className="card-blog">
                    <div className="card-image">
                      <a href={card.link} >
                        <img
                          alt="..."
                          className="img img-raised"
                          src={card.imgLink}
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
                      <p style={{color: 'black'}}>{card.content}</p>
                    </CardBody>
                  </Card>
                )
              })
            }
          </div>
          {
            journeyDB &&
            <Paginate
              data={journeyDB}
              perPage={8}
              setCurrentPage={setJCurrentPage}
              name={"journey_pag"}
            />
          }
        </div>
        {/* </Container> */}
      </div>
      {/* ********* END BLOGS 2 ********* */}
      {/* ********* BLOGS 3 ********* */}
      <div className="blog-3" style={{minHeight: "80vh", backgroundColor: '#fffaef'}}>
        <Container>

          <Row>
            <Col 
              className="ml-auto mr-auto" 
              md="10"
              style={{
                paddingBottom: "2rem"
              }}
            >
              <br />
              <h2 style={{textAlign: 'center', color: '#800000', fontWeight: '500'}}>Point of View...</h2>
              <br />

              <div className={styles.pov}>
                {
                  povDB && povDB.slice(pCurrentPage * 3, (pCurrentPage + 1) * 3).map(card => {
                    return (
                      <Card key={card.id} className={`${styles.povCard} card-plain card-blog`}>
                        <Col md="4">
                          <div className="card-image">
                            <img
                              alt="..."
                              className="img"
                              src={card.imgLink}
                            />
                          </div>
                        </Col>
                        <Col md="8">
                          <CardBody>
                            <CardTitle tag="h3">
                              <a href={card.link}
                                style={{fontWeight: '500'}} >
                                {card.title}
                              </a>
                            </CardTitle>
                            <p style={{color: 'black'}}>
                              {card.content + " "}
                              <a href={card.link}
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
              {
                povDB &&
                <Paginate
                  data={povDB}
                  perPage={3}
                  setCurrentPage={setPCurrentPage}
                  name={"pov_pag"}
                />
              }
            </Col>
          </Row>
        </Container>

      </div>
      <div
        className={`blog-2 ${styles.BlogSection}`}
        style={{
          minHeight: "80vh",
          backgroundImage: "linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(" + require("assets/kimaye/BGN2.jpg") + ")",
          paddingBottom: "3rem"
        }}>
        <div className={styles.JourneyContainer}>
          <h2 style={{color: '#dbac00', fontWeight: '500', textAlign: 'center'}}>Media...</h2>
          <div className={styles.VidCont}>
            {
              mediaDB && mediaDB.slice(mCurrentPage*6, (mCurrentPage + 1)*6).map((vid, ind) => {
                return (
                  <iframe
                    key={vid.id}
                    title={`video-${ind + 1}`}
                    src={vidLink(vid.media)}>
                  </iframe>
                )
              })
            }
          </div>
          {
            mediaDB &&
            <Paginate
              data={mediaDB}
              perPage={6}
              setCurrentPage={setMCurrentPage}
              name={"media_pag"}
            />
          }
        </div>
      </div>
      <FooterFinal />
    </>
  );
}

export default SectionMedia;
