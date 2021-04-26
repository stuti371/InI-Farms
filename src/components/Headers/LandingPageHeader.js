import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardBody,
  UncontrolledCollapse,
  FormGroup,
  Form,
  Input,
  NavbarBrand,
  Navbar,
  Nav,
  Container,
  Row,
  Col,
  Carousel,
  CarouselItem,
  CarouselIndicators,
} from "reactstrap";


const items = [
    {
      src: "url(" + "https://res.cloudinary.com/ini-farms/image/upload/v1618863958/media/kimaye/landing_qgnuj6.jpg" + ")",
      content: (
        <Container>
          <Row>
            <Col className="text-left" md="8" style ={{marginTop: '50%', fontWeight: '400'}}>
              <h2 className="title">Grown With Passion <br /> 
              <span style ={{marginLeft: '5%'}}>Delivered With Care</span></h2>
            </Col>
          </Row>
        </Container>
      ),
      altText: "",
      caption: "",
    },
    {
      src: "url(" + "https://res.cloudinary.com/ini-farms/image/upload/v1618863941/media/kimaye/banana10_jx2d57.jpg" + ")",
      content: (
        <Container>
          <Row>
            <Col className="ml-auto mr-auto text-center" md="8">
              <h1 className="title" style = {{marginTop: '50%'}}>#AllSafe#AllGood</h1>
            </Col>
          </Row>
        </Container>
      ),
      altText: "",
      caption: "",
    },
    {
      src: "url(" + "https://res.cloudinary.com/ini-farms/image/upload/v1618863979/media/kimaye/Woman5_dblhxq.jpg" + ")",
      content: (
        <Container>
          <Row>
          <Col className="text-left" md="8" style ={{marginTop: '50%', fontWeight: '400'}}>
              <h2 className="title">Doing Good <br /> 
              <span style ={{marginLeft: '5%'}}>As we do well</span></h2>
            </Col>
          </Row>
        </Container>
      ),
      altText: "",
      caption: "",
            } ,
    {
      src: "url(" + "https://res.cloudinary.com/ini-farms/image/upload/v1618863971/media/kimaye/Product1_swckvi.jpg" + ")",
      content: (
        <Container>
          <Row>
            <Col md="2">
              <h2 className="title" style = {{marginTop: '100%', fontWeight: '400'}}>#AddingLifeToFruit</h2>
    
            </Col>
          </Row>
        </Container>
      ),
      altText: "",
      caption: "",
    },

  ];
  
export default function SectionHeader() {
    // carousel - header 3
    const [activeIndex, setActiveIndex] = React.useState(0);
    const [animating, setAnimating] = React.useState(false);
    const onExiting = () => {
      setAnimating(true);
    };
    const onExited = () => {
      setAnimating(false);
    };
    const next = () => {
      if (animating) return;
      const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
      setActiveIndex(nextIndex);
    };
    const previous = () => {
      if (animating) return;
      const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
      setActiveIndex(nextIndex);
    };
    const goToIndex = (newIndex) => {
      if (animating) return;
      setActiveIndex(newIndex);
    };
    // video - header 4
    const [videoPlaying, setVideoPlaying] = React.useState(false);
    const videoRef = React.createRef();
    const videoButtonClick = () => {
      if (videoPlaying) {
        setVideoPlaying(false);
        videoRef.current.pause();
      } else {
        setVideoPlaying(true);
        videoRef.current.play();
      }
    };
    return (
    <div className="header-3">
    <div className="page-carousel">
    <Carousel activeIndex={activeIndex} next={next} previous={previous}>
        <CarouselIndicators
        items={items}
        activeIndex={activeIndex}
        onClickHandler={goToIndex}
        />
        {items.map((item) => {
        return (
            <CarouselItem
            onExiting={onExiting}
            onExited={onExited}
            key={item.src}
            >
            <div
                className="page-header"
                style={{ backgroundImage: item.src }}
            >
                <div className="filter" />
                <div >{item.content}</div>
            </div>
            </CarouselItem>
        );
        })}
        <a
        className="left carousel-control carousel-control-prev"
        data-slide="prev"
        href="#pablo"
        onClick={(e) => {
            e.preventDefault();
            previous();
        }}
        role="button"
        >
        <span className="fa fa-angle-left" />
        <span className="sr-only">Previous</span>
        </a>
        <a
        className="right carousel-control carousel-control-next"
        data-slide="next"
        href="#pablo"
        onClick={(e) => {
            e.preventDefault();
            next();
        }}
        role="button"
        >
        <span className="fa fa-angle-right" />
        <span className="sr-only">Next</span>
        </a>
    </Carousel>
    </div>
    </div>
    );
}