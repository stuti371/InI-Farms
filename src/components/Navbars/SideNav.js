import React from "react";
import {Link} from "react-router-dom"

import {
  Collapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  NavItem,
  Nav,
} from "reactstrap";
import styles from "./SideNav.module.css"

const SideNav = ({collapseOpen}) => {
  return (
    <Collapse navbar isOpen={collapseOpen}>
      <Nav className='ml-auto' navbar>
        <UncontrolledDropdown nav inNavbar>
          <DropdownToggle className="mr-2" color="default" caret nav>
            Company
          </DropdownToggle>
          <DropdownMenu className="dropdown-danger" right>
            <DropdownItem to="/AboutUs" tag={Link}>
              About Us
            </DropdownItem>
            <DropdownItem to="/Team" tag={Link}>
              Team
            </DropdownItem>
            <DropdownItem
              to="/Location" tag={Link}
            >
              Locations
            </DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
        <UncontrolledDropdown nav inNavbar>
          <DropdownToggle className="mr-2" color="default" caret nav>
            Our Work
          </DropdownToggle>
          <DropdownMenu className="dropdown-danger" right>
            <DropdownItem to="/Products" tag={Link}>
              Products
            </DropdownItem>
            <DropdownItem to="/Brand" tag={Link}>
              Brand
            </DropdownItem>
            <DropdownItem
              to="/D2C" tag={Link}
            >
              D2C
            </DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
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

