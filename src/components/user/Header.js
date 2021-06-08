
import React from "react";
import { Navbar, Button,  NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";



const Header = (props) => {
    return (
        <header>
            <Navbar className="header">
                <NavbarBrand href ="/"> MyPlanner App </NavbarBrand>
                <Nav className = "ml-auto" navbar>
                    <NavItem>
                        <Button onClick = {props.clickLogout}>Logout</Button>
                    </NavItem>
                    <NavItem>
                        <NavLink href ="https://github.com/wesutton/ClientSide-React.git">
                            Github
                        </NavLink>
                    </NavItem>
                </Nav>
      
            </Navbar>
        </header>
     );
};

export default Header;