import { Container, Nav, Navbar } from 'react-bootstrap';

import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <Navbar collapseOnSelect expand="lg" className="navbar navbar-expand-lg bg-secondary fixed-top text-uppercase" id="mainNav">
    <Container>
      <Navbar.Brand href="#home">{siteTitle}</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto" as="ul">
          <Nav.Item as="li">
            <Nav.Link className="px-lg-3" href="#portfolio">Portfolio</Nav.Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Nav.Link className="px-lg-3" href="#about">About</Nav.Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Nav.Link className="px-lg-3" href="#contact">Contact</Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

export default Header
