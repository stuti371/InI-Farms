import React from "react";

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
  import FooterFinal from "FooterFinal";
  import WhiteNavbar from 'components/Navbars/WhiteNavbar'

export default function PrivacyPolicy(){
    return(
        <>
        <WhiteNavbar />
        <div>
            <Col>
            <Row md = '2' style = {{backgroundColor: '#4d0000'}} className =' ml-auto mr-auto text-center'>
                <h3>PRIVACY POLICY</h3>
            </Row>
            <Row md = '10'>
                
            </Row>
            </Col>   
        </div>
        <FooterFinal />
        </>
    );
}