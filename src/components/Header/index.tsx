import Image from "next/image";
import React, { useState } from "react";
import {
  Container,
  Navbar,
  Collapse,
  Nav,
  NavItem,
  NavLink,
  NavbarToggler,
  NavbarBrand,
} from "reactstrap";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="header sticky">
      <Navbar light expand="md">
        <Container className="container-nav">
          <div className="navbar-collapse-menu">
            <NavbarBrand href="/">
              <Image
                src="/images/mega_logo.png"
                alt="logo"
                width={150}
                height={70}
                className="logo"
              />
            </NavbarBrand>
            <NavbarToggler onClick={toggle} />
          </div>
          <Collapse isOpen={isOpen} navbar>
            <Nav className="m-auto" navbar>
              <NavItem>
                <NavLink href="#home">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#product">Produtos</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#service">Serviços</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#about">Sobre</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
