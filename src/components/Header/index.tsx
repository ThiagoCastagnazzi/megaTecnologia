import Image from "next/image";
import React, { useState, useEffect } from "react";
import {
  Container,
  Navbar,
  Collapse,
  Nav,
  NavItem,
  NavLink,
  NavbarToggler,
} from "reactstrap";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [sticky, setSticky] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });

  const handleScroll = () => {
    if (window.scrollY > 90) {
      setSticky(true);
    } else if (window.scrollY < 90) {
      setSticky(false);
    }
  };

  return (
    <div className={`header${sticky ? " sticky" : ""}`}>
      <Navbar light expand="md" className="nav">
        <Container className="header-container">
          <NavLink href="/" className="logo">
            <Image
              src="/images/mega_logo.png"
              alt="logo"
              width={150}
              height={70}
              className="logo"
            />
          </NavLink>
          <NavbarToggler onClick={toggle} />
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
