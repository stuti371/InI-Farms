import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardTitle,
  Form,
  Input,
  Container,
  Row,
  Col,
  CardColumns,
} from "reactstrap";

// core components
import MultiDropdownNavbar from "components/Navbars/MultiDropdownNavbar.js";
import LandingPageHeader from "components/Headers/LandingPageHeader.js";
import FooterWhite from "components/Footers/FooterWhite.js";
import SectionProject from "../sections-sections/SectionProject.js";
import SectionTeams from "../sections-sections/SectionTeam.js"
import LandingPage1 from "../../LandingPage1.js"
import LandingPage2 from "../../LandingPage2.js"
import FooterFinal from '../../FooterFinal'

function LandingPage() {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("landing-page");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("landing-page");
    };
  });
  return (
    <>
      <MultiDropdownNavbar />
      <LandingPageHeader />
      <div >
        <LandingPage1 />
        <div className = "text-center">
          <LandingPage2 />
        </div>
        {/* <div className="section text-center landing-section">
          
        </div>
        <div className="section landing-section">
          
        </div> */}
      </div>
      <FooterFinal />
    </>
  );
}

export default LandingPage;
