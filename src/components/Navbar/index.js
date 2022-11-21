import React from "react";
import { Nav, NavLink, NavMenu } 
    from "./NavbarElements";
  
const Navbar = () => {
  return (
    <>
      <Nav>
        <NavMenu>

          <NavLink to="/about" activeStyle>
            <button class="button2">
            About Me
            </button>
          </NavLink>

          <NavLink to="/Capstone" activeStyle>
          <button class="button">
            Capstone
            </button>
          </NavLink>

          <NavLink to="/Infernoguard" activeStyle>
            <button class="button">
            Infernoguard
            </button>
          </NavLink>

          <NavLink to="/Index" activeStyle>
          <button class="button">
            PA Index
            </button>
          </NavLink>

          <NavLink to="/Converter" activeStyle>
          <button class="button">
            Converter
            </button>
          </NavLink>

          <NavLink to="/Animations" activeStyle>
          <button class="button">
            Animations
            </button>
          </NavLink>

        </NavMenu>
      </Nav>
    </>
  );
};
  
export default Navbar;