import React, {useState, useRef, useEffect} from "react";
import {Link} from "react-router-dom"
import "./sidenav.css";

import {
  Collapse,
  NavItem,
  Nav,
} from "reactstrap";
import styles from "./SideNav.module.css"

const SideNav = ({collapseOpen}) => {

  const [openCompany, setOpenCompany] = useState(false);
  const [openWork, setOpenWork] = useState(false);

  const companyRef = useRef();
  const workRef = useRef();

  useEffect(() => {
    const handler = (e) => {
      if (!companyRef.current?.contains(e.target)) {
        setOpenCompany(false)
      }

    }
    window.addEventListener("click", handler);
    return () => window.removeEventListener("click", handler);
  }, [])

  useEffect(() => {
    const handler = (e) => {
      if (!workRef.current?.contains(e.target)) {
        setOpenWork(false)
      }

    }
    window.addEventListener("click", handler);
    return () => window.removeEventListener("click", handler);
  }, [])

  return (
    <Collapse navbar isOpen={collapseOpen}>
      <Nav className='ml-auto' navbar>
        <NavItem nav inNavbar>
          <div ref={companyRef} className={` nav-link ${styles.Button} ${styles.Drop}`} onClick={() => setOpenCompany(!openCompany)}><span className={styles.toggle}>Company</span></div>
          <div className={`${openCompany ? styles.DropMenu : ""} ${styles.DropShow}`}>
            <Link to="/AboutUs" className={styles.DropLi}>About Us</Link>
            <Link to="/Team" className={styles.DropLi}>Team</Link>
            <Link to="/Location" className={styles.DropLi}>Locations</Link>
          </div>
        </NavItem>
        <NavItem nav inNavbar>
          <div ref={workRef} className={` nav-link ${styles.Button} ${styles.Drop}`} onClick={() => setOpenWork(!openWork)}><span className={styles.toggle}>Our Work</span></div>
          <div className={`${openWork ? styles.DropMenu : ""} ${styles.DropShow}`}>
            <Link to="/Products" className={styles.DropLi}>Products</Link>
            <Link to="/Brand" className={styles.DropLi}>Brand</Link>
            <Link to="/D2C" className={styles.DropLi}>D2C</Link>
          </div>
        </NavItem>
        <NavItem nav inNavbar>
          <Link to="/AgTech" className={`nav-link ${styles.Button}`}>AgTech</Link>
        </NavItem>
        <NavItem nav inNavbar>
          <Link to="/Soulful" className={`nav-link ${styles.Button}`}>Soulful</Link>
        </NavItem>
        <NavItem>
          <Link to="/Media" className={`nav-link ${styles.Button}`}>Media</Link>
        </NavItem>
      </Nav>
    </Collapse>

  )
};

export default SideNav;

