import React, { useEffect, useState } from "react";
import "../assets/css/styles.css"

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

    const removePerson=()=>{
        if(window.confirm("Confirm remove "+person.name))
            db.ref("Team/Management/"+person.id).remove();
    }

    return (
        <Col md="3" style={{zIndex:0}}>
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
                </div>
                <p 
                    className="card-description text-center" 
                    style = {{color: 'black'}} 
                    dangerouslySetInnerHTML={{__html:person.description}}>
                </p>
            </CardBody>

            <CardFooter className="text-center">
                <Button className="btn btn-danger" onClick={()=>{
                    removePerson()
                }}>
                    Remove
                </Button>
            </CardFooter>
        </Card>
        </Col>
    )
}

export default function ManagementPeople(){

    const [people, setPeople] = useState([])
    const [modal, setModal] = useState(false)
    const [newName, setNewName] = useState(null)
    const [designation, setDesignation] = useState(null)
    const [description, setDescription] = useState(null)
    const [imgLink, setImgLink] = useState(null)
    const [twitter, setTwitter] = useState(null)
    const [linkdin, setLinkdin] = useState(null)

    useEffect(() => {
        var peopleRef=db.ref("Team/Management");
        peopleRef.on("value",(snapshot)=>{
            var mypeople=snapshot.val();
            var newPeople=[]
            
            for(var personId in mypeople){
                newPeople.push({
                    id: personId,
                    description:mypeople[personId].description,
                    name:mypeople[personId].name,
                    image:mypeople[personId].image,
                })
            }
            setPeople(newPeople)
        })
    }, [])

    const addPerson=()=>{
        var peopleRef=db.ref("Team/Management");
        peopleRef.push(
            {
                name:newName,
                image:imgLink,
                designation:designation,
                description:description,
                twitter:twitter,
                linkdin:linkdin
            }
        )
    }

    const renderModal=()=>{
        return(
            <div
                style={{
                    background: "rgba(255, 255, 255, 0.8)",
                    display:"flex",
                    position:"fixed",
                    inset:"0px",
                    justifyContent:"center",
                    alignItems:"center",
                    width:"100vw", 
                    zIndex:1,
                    height:"100vh"}}
                    onClick={e=>{
                    if(e.target==e.currentTarget)
                        setModal(false);
                    }}
            >
                <div style={{
                    display:"flex",
                    flexDirection:"column",
                    background:"gray",
                    borderRadius:"2%",
                    position:"relative",
                    width:"60%", 
                    padding:"2%",
                    color:"white"
                }}>
                    <label style={{fontWeight:"bold" }} for="name">Name</label>
                    <input 
                        style={{marginBottom: "1rem"}} 
                        onChange={(e) => setNewName(e.target.value)} 
                        value={newName} 
                        type="text" 
                        id="name" 
                        name="name" 
                        placeholder="Name" />

                    <label style={{fontWeight:"bold" }} for="designation">Designation</label>
                    <input 
                        style={{marginBottom: "1rem"}} 
                        onChange={(e) => setDesignation(e.target.value)} 
                        value={designation} 
                        type="text" 
                        id="designation" 
                        name="designation" 
                        placeholder="Designation" />

                    <label style={{fontWeight:"bold" }} for="image">Image Link</label>
                    <input 
                        style={{marginBottom: "1rem"}} 
                        onChange={(e) => setImgLink(e.target.value)} 
                        value={imgLink} 
                        type="text" 
                        id="imgLink" 
                        name="img-link" 
                        placeholder="Image Link" />

                    <label style={{fontWeight:"bold" }} for="twitter">Twitter</label>
                    <input 
                        style={{marginBottom: "1rem"}} 
                        onChange={(e) => setTwitter(e.target.value)} 
                        value={twitter} 
                        type="text" 
                        id="twitter" 
                        name="twitter" 
                        placeholder="Twitter" />

                    <label style={{fontWeight:"bold" }} for="linkdin">Linkdin</label>
                    <input 
                        style={{marginBottom: "1rem"}} 
                        onChange={(e) => setLinkdin(e.target.value)} 
                        value={linkdin} 
                        type="text" 
                        id="linkdin" 
                        name="linkdin" 
                        placeholder="Linkdin" />

                    <label style={{fontWeight:"bold" }} for="description">Description</label>
                    <textarea 
                        rows={3}
                        style={{marginBottom: "1rem"}} 
                        onChange={(e) => setDescription(e.target.value)} 
                        value={description} 
                        type="text" 
                        id="description" 
                        name="description" 
                        placeholder="Description (add <br/> at newline)" />
                    <Button 
                        className="btn btn-primary"
                        onClick={()=>{
                        if(newName&&designation&&description&&imgLink)
                        {
                            addPerson(); 
                            setModal(false);  
                            setNewName(null);
                            setDesignation(null);
                            setDescription(null);
                            setImgLink(null);
                            setTwitter(null);
                            setLinkdin(null);    
                        }
                        else
                        {
                            console.log("Enter all details")
                        }
                    }}>ADD</Button>
                </div>
            </div>
        )
    }

    return(
        <div className="section section-team cd-section" id="teams"  style = {{
          backgroundImage:
          `url("https://res.cloudinary.com/ini-farms/image/upload/v1618863946/media/kimaye/BG3_aj4sfe.jpg")`,}}>
          <Container >
            {modal&&renderModal()}
            <Row >
              <Col className="ml-auto mr-auto text-center" md="8">
                <h2 className="title" style = {{color: '#800000', fontWeight: '450'}}>Management</h2>
              </Col>
            </Row>
            <Row>
                <Button onClick={()=>{setModal(true)}} >Add new</Button>
            </Row>
            <Row className="justify-content-center">
                {people.map(person=><RenderPerson person={person}/>)}
            </Row>
          </Container>
        </div>
    );
}