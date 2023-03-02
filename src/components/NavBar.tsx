import React from "react";
import { Container, Navbar,  NavbarBrand } from 'reactstrap';

 function NavBar(){
    return (
  <div>
    <Navbar color="dark" light dark>
      <Container>
          <NavbarBrand href="/" >Bustabook - beta</NavbarBrand> 
      </Container>
    </Navbar>
  </div>
);
}

export default NavBar;