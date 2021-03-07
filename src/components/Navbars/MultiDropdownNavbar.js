import React, {useEffect, useState} from "react";
import classnames from "classnames";
import Headroom from "headroom.js";
import {
  NavbarBrand,
  Navbar,
  Container,
} from "reactstrap";
import SideNav from "./SideNav"

function MultiDropdownNavbar() {

  const [navbarColor, setNavbarColor] = useState("navbar-transparent");
  const [bodyClick, setBodyClick] = useState(false);
  const [collapseOpen, setCollapseOpen] = useState(false);

  useEffect(() => {
    let headroom = new Headroom(document.getElementById("navbar-main"));
    headroom.init();

    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 499 ||
        document.body.scrollTop > 499
      ) {
        setNavbarColor("bg-dark");
      } else if (
        document.documentElement.scrollTop < 500 ||
        document.body.scrollTop < 500
      ) {
        setNavbarColor("navbar-transparent");
      }
    };
    window.addEventListener("scroll", updateNavbarColor);
    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  });
  return (
    <>
      {bodyClick ? (
        <div
          id="bodyClick"
          onClick={() => {
            document.documentElement.classList.toggle("nav-open");
            setBodyClick(false);
            setCollapseOpen(false);
          }}
        />
      ) : null}
      <Navbar
        className={classnames("fixed-top", navbarColor)}
        id="navbar-main"
        expand="lg"
      >
        <Container>
          <div className="navbar-translate">
            <NavbarBrand id="navbar-brand" href="/homepage">
              <img alt="logo" src={require("assets/kimaye/ini-farms.png")} width="90px" height="40px" />
            </NavbarBrand>
            <button
              className="navbar-toggler"
              id="navigation"
              type="button"
              onClick={() => {
                document.documentElement.classList.toggle("nav-open");
                setBodyClick(true);
                setCollapseOpen(true);
              }}
            >
              <span className="navbar-toggler-bar bar1"></span>
              <span className="navbar-toggler-bar bar2"></span>
              <span className="navbar-toggler-bar bar3"></span>
            </button>
          </div>
          <SideNav collapseOpen={collapseOpen} />
        </Container>
      </Navbar>
    </>
  );
}

export default MultiDropdownNavbar;
