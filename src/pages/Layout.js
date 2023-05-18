import React from "react";
import { Nav, NavLink, NavMenu } 
    from "./styles";


const Layout = () => {
  return (
    <>
      <Nav>
        <NavMenu>
        <NavLink to="/" activeStyle>
            Home
          </NavLink>
          <NavLink to="/Faculty" activeStyle>
            Faculty
          </NavLink>
          <NavLink to="/Exam" activeStyle>
            Exam
          </NavLink>
          <NavLink to="/Allotment" activeStyle>
            Allotment
          </NavLink>
          <NavLink to="/Lab" activeStyle>
            Lab
          </NavLink>
          <NavLink to="/Logout" activeStyle>
            Logout
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};

export default Layout;