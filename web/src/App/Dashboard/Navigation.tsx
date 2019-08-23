import React from "react";
import {
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
import { Link } from "react-router-dom";

export default () => {
  return (
    // <Navbar color="white" className="h-100">
    <Nav pills card>
      <NavItem>
        <NavLink
          tag={Link}
          to="/dashboard/employee"
          tabIndex={-1}
          className="vertical-centered"
          active={window.location.pathname === "/dashboard/employee"}
        >
          <i className="material-icons pr-2">person</i>
          <span>Employee</span>
        </NavLink>
      </NavItem>
      {/* <NavItem>
        <NavLink
          tag={Link}
          to="/dashboard/add"
          tabIndex={-1}
          className="vertical-centered"
          active={window.location.pathname === "/dashboard/add"}
        >
          <i className="material-icons pr-2">person_add</i>
          <span>Add</span>
        </NavLink>
      </NavItem> */}
      <NavItem>
        <NavLink
          tag={Link}
          to="/dashboard/vehicles"
          tabIndex={-1}
          className="vertical-centered"
          active={window.location.pathname === "/dashboard/vehicles"}
        >
          <i className="material-icons pr-2">directions_car</i>
          <span>Vehicles</span>
        </NavLink>
      </NavItem>
      <UncontrolledDropdown nav tabIndex={-1} className="ml-auto">
        <DropdownToggle nav caret tabIndex={-1} className="vertical-centered">
          <i className="material-icons pr-2">settings</i>
          <span>Settings</span>
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem header>Options</DropdownItem>
          <DropdownItem>Account Settings</DropdownItem>
          <DropdownItem>Sign Out</DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>
    </Nav>
    // </Navbar>
  );
};
