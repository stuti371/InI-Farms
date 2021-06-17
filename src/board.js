import React, { useEffect, useState } from "react";

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
  UncontrolledCollapse,
  FormGroup,
  Form,
  Input,
  NavbarBrand,
  Navbar,
  Nav,
  Carousel,
  CarouselItem,
  CarouselIndicators,
} from "reactstrap";
import { db } from "services/firebase";

const RenderPerson=({person})=>{

  return (
    <Col md="4">
      <Card className="card-profile card-category">
        <div className="card-avatar">
            <img
              alt="..."
              src={person.image}
            />
        </div>

        <CardBody>
            <div className="author">
              <CardTitle tag="h4" style = {{fontWeight: '500'}}>{person.name}</CardTitle>
              <h6 className="card-category" style = {{fontWeight: '450', color: '#800000'}}>{person.designation}</h6>
            </div>

            <p 
              className="card-description text-center" 
              style = {{color: 'black'}} 
              dangerouslySetInnerHTML={{__html:person.description}}>
            </p>
        </CardBody>

        <CardFooter className="text-center">
          <Button
            className="btn-link btn-just-icon mr-1"
            color="twitter"
            href={person.twitter}
          >
            <i className="fa fa-twitter" />
          </Button>

          <Button
            className="btn-link btn-just-icon"
            color="linkedin"
            href={person.linkdin}
          >
            <i className="fa fa-linkedin" />
          </Button>
        </CardFooter>
      </Card>
    </Col>
  )
}

export default function Board(){

    const [people, setPeople] = useState([])

    useEffect(() => {
        var peopleRef=db.ref("Team/Board");
        peopleRef.on("value",(snapshot)=>{
            var mypeople=snapshot.val();
            var newPeople=[]
            
            for(var personId in mypeople){
                newPeople.push({
                    id: personId,
                    image:mypeople[personId].image,
                    name:mypeople[personId].name,
                    designation:mypeople[personId].designation,
                    description:mypeople[personId].description,
                    twitter:mypeople[personId].twitter,
                    linkdin:mypeople[personId].linkdin
                })
            }
            setPeople(newPeople)
        })
    }, [])

    return(
        <div className="section section-team cd-section" id="teams"  style = {{
          backgroundImage:
          `url("https://res.cloudinary.com/ini-farms/image/upload/v1618863946/media/kimaye/BG3_aj4sfe.jpg")`,}}>
          <Container >
            <Row>
              <Col className="ml-auto mr-auto text-center" md="8">
                <h2 className="title" style = {{color: '#800000', fontWeight: '450'}}>Board</h2>
                <h5 className="description" style = {{fontWeight: '500', color: 'black'}} >
                Build and Translate Vision into Reality 
                </h5>
              </Col>
            </Row>

            <Row className="justify-content-center">
                {people.map(person=><RenderPerson person={person}/>)}
            </Row>

            <Row>
              <Col className="ml-auto mr-auto text-center" md="8">
                {/* <h2 className="title">Our Stunning Team 1</h2> */}
                {/* <h5 className="description">
                  This is the paragraph where you can write more details about
                  your team. Keep you user engaged by providing meaningful
                  information.
                </h5> */}
              </Col>
            </Row>
          
          </Container>
        </div>
    );
}