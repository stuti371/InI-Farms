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

  const [journeyDB, setJourneys] = useState([]);
  const [povDB, setPOV] = useState([]);
  const [mediaDB, setMedia] = useState([]);

  const jPerPage = 8;
  const pPerPage = 3;
  const mPerPage = 6;

  const getFirst = (perPage, ref, setDB) => {
    db.ref(ref)
      .orderByKey()
      .limitToLast(perPage + 1)
      .on("value", snapshot => {
        const tests = snapshot.val();
        const testList = [];
        for (let id in tests) {
          testList.push({ id, ...tests[id] });
        }
        setDB(testList);
      });
  }

  const getlast = (ref, setDB) => {
    db.ref(ref)
      .orderByKey()
      .limitToFirst(1)
      .on("value", snapshot => {
        const tests = snapshot.val();
        const testList = [];
        for (let id in tests) {
          testList.push({ id, ...tests[id] });
        }
        setDB(testList);
      });
  }

  const getNext = (perPage, ref, DB, setDB) => {
    if (DB.length > 0 && DB.length - 1 < perPage) {
      setDB(DB);
      // console.log("Already Last Page.", DB);
      return;
    }

    let testRef = db.ref(ref)
      .orderByKey()
      .limitToLast(perPage + 1);
    testRef = DB.length !== 0 ? testRef.endAt(DB[DB.length - 1].id) : testRef
    testRef.on("value", (snapshot) => {
      const tests = snapshot.val();
      const testList = [];
      for (let id in tests) {
        testList.push({id, ...tests[id]});
      }
      setDB(testList);
    });
  }

  const getPrev = (perPage, ref, DB, setDB) => {
    db.ref(ref)
      .orderByKey()
      .limitToFirst(perPage + 1)
      .startAt(DB[0].id)
      .on("value", (snapshot) => {
        const tests = snapshot.val();
        const testList = [];
        for (let id in tests) {
          testList.push({id, ...tests[id]});
        }
        if (testList.length < perPage + 1) {
          setDB(DB);
          // console.log("Already at first page");
          return;
        }
        setDB(testList);
      });
  }

  useEffect(() => {
    getNext(jPerPage, "Journey", journeyDB, setJourneys);
    getNext(mPerPage, "Media", mediaDB, setMedia);
    getNext(pPerPage, "POV", povDB, setPOV);
  }, [])

  const map = {
    "youtube": "http://www.youtube.com/embed/",
    "vimeo": "https://player.vimeo.com/video/",
    "dailymotion": "https://www.dailymotion.com/embed/video/"
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
          <h2 id="journeyJump" style={{color: '#dbac00', fontWeight: '500', textAlign: 'center'}}>The Journey...</h2>
          <div className={styles.CardsContainer}>
            {
              journeyDB && journeyDB.reverse().slice(0, jPerPage).map(card => {
                return (
                  <Card key={card.id} className="card-blog">
                    <div className="card-image">
                      <a target="_blanck" href={card.link} >
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
                          target="_blanck"
                          style={{color: '#800000', fontWeight: '400'}}>
                          {card.title}
                        </a>
                      </CardTitle>
                      <p className={styles.CardContent} style={{color: 'black'}}>{`${card.content.substring(0, 200)}...`}</p>
                    </CardBody>
                  </Card>
                )
              })
            }
          </div>
          {
            journeyDB &&
            <Paginate
              first={() => {
                getFirst(jPerPage, "Journey", setJourneys);
                document.getElementById("journeyJump").scrollIntoView({behavior: 'smooth'});
              }}
              next={() => {
                getNext(jPerPage, "Journey", journeyDB, setJourneys);
                document.getElementById("journeyJump").scrollIntoView({behavior: 'smooth'});
              }}
              prev={() => {
                getPrev(jPerPage, "Journey", journeyDB, setJourneys);
                document.getElementById("journeyJump").scrollIntoView({behavior: 'smooth'});
              }}
              last={() => {
                getlast("Journey", setJourneys);
                document.getElementById("journeyJump").scrollIntoView({behavior: 'smooth'});
              }}
              variable={false}
            />
          }
        </div>
        {/* </Container> */}
      </div>
      {/* ********* END BLOGS 2 ********* */}
      {/* ********* BLOGS 3 ********* */}
      <div className="blog-3" style={{backgroundColor: '#fffaef'}}>
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
              <h2 id="povJump" style={{textAlign: 'center', color: '#800000', fontWeight: '500'}}>Point of View...</h2>
              <br />

              <div className={styles.pov}>
                {
                  povDB && povDB.reverse().slice(0, pPerPage).map(card => {
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
                                target="_blanck"
                                style={{fontWeight: '500'}} >
                                {card.title}
                              </a>
                            </CardTitle>
                            <p style={{color: 'black'}}>
                              {card.content + " "}
                              <a href={card.link}
                                target="_blanck"
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
                  first={() => {
                    getFirst(pPerPage, "POV", setPOV);
                    document.getElementById("povJump").scrollIntoView({behavior: 'smooth'});
                  }}
                  next={() => {
                    getNext(pPerPage, "POV", povDB, setPOV);
                    document.getElementById("povJump").scrollIntoView({behavior: 'smooth'});
                  }}
                  prev={() => {
                    getPrev(pPerPage, "POV", povDB, setPOV);
                    document.getElementById("povJump").scrollIntoView({behavior: 'smooth'});
                  }}
                  last={() => {
                    getlast("POV", setPOV);
                    document.getElementById("povJump").scrollIntoView({behavior: 'smooth'});
                  }}
                  variable={true}
                />
              }
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
        <div style={{
          display: "flex",
          flexDirection: "column",
          gap: "4rem"
        }}>
          <h2 id="mediaJump" style={{color: '#dbac00', fontWeight: '500', textAlign: 'center'}}>Media...</h2>
          <div className={styles.VidCont}>
            {
              mediaDB && mediaDB.reverse().slice(0, mPerPage).map((vid, ind) => {
                return (
                  <iframe
                    key={vid.id}
                    title={`video-${ind + 1}`}
                    style={{
                      borderRadius: "10px",
                      borderColor: "#000"
                    }}
                    src={vidLink(vid.media)}>
                  </iframe>
                )
              })
            }
          </div>
          {
            mediaDB &&
            <Paginate
              first={() => {
                getFirst(mPerPage, "Media", setMedia);
                document.getElementById("mediaJump").scrollIntoView({behavior: 'smooth'});
              }}
              next={() => {
                getNext(mPerPage, "Media", mediaDB, setMedia);
                document.getElementById("mediaJump").scrollIntoView({behavior: 'smooth'});
              }}
              prev={() => {
                getPrev(mPerPage, "Media", mediaDB, setMedia);
                document.getElementById("mediaJump").scrollIntoView({behavior: 'smooth'});
              }}
              last={() => {
                getlast("Media", setMedia);
                document.getElementById("mediaJump").scrollIntoView({behavior: 'smooth'});
              }}
              variable={false}
            />
          }
        </div>
      </div>
      <FooterFinal />
    </>
  );
}

export default SectionMedia;
