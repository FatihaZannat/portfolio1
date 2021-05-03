import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import './Header.css'
import {Navbar, Nav} from 'react-bootstrap'
import {
Link
} from "react-router-dom";


const Header = () => {
    return (

<Navbar bg="dark" variant="dark">
    <Navbar.Brand to="/home"></Navbar.Brand>
    <Nav className="ml-auto">
      <Nav.Link as={Link} to="/home">Home</Nav.Link>
      <Nav.Link as={Link} to="/about">About Me</Nav.Link>
      <Nav.Link as={Link} to="/project">Project</Nav.Link>
      <Nav.Link as={Link} to="/blog">Blog</Nav.Link>
      <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
   
    </Nav>
  
  </Navbar>



        


    );
};

export default Header;