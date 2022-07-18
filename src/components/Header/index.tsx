import Image from "next/image";
import React, { useState, useEffect } from "react";
import { Container, Navbar, Nav, NavItem, NavLink } from "reactstrap";

const Header = () => {
  const [sticky, setSticky] = useState(false);

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
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
