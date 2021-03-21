import React from "react";
import {Link} from "react-router-dom";
// JavaScript plugin that hides or shows a component based on your scroll
import Headroom from "headroom.js";
// reactstrap components
import {
  NavbarBrand,
  Navbar,
  Container,
} from "reactstrap";

import SideNav from "./SideNav";
// core components

function WhiteNavbar() {
  const [collapseOpen, setCollapseOpen] = React.useState(false);
  React.useEffect(() => {
    let headroom = new Headroom(document.getElementById("navbar-main"));
    // initialise
    headroom.init();
  });
  return (
    <>
      <Navbar
        className={`fixed-top ${collapseOpen ? "nav-open" : ""}`}
        expand="lg"
        id="navbar-main"
        color='dark'>
        <Container>
          <div className="navbar-translate">
            <NavbarBrand id="navbar-brand" to="/index" tag={Link}>
              <img alt="qwerty" src={require("assets/kimaye/ini-farms.png")} width="90px" height="40px" />
            </NavbarBrand>
            {
              !collapseOpen &&
              <button
                className="navbar-toggler"
                id="navigation"
                type="button"
                onClick={() => {
                  setCollapseOpen(!collapseOpen);
                }}
              >
                <span className="navbar-toggler-bar bar1" />
                <span className="navbar-toggler-bar bar2" />
                <span className="navbar-toggler-bar bar3" />
              </button>
            }
          </div>
          <SideNav setCollapseOpen={setCollapseOpen} collapseOpen={collapseOpen} />
        </Container>
      </Navbar>
    </>
  );
}

export default WhiteNavbar;
