import React from 'react'
import {Navbar,Nav,Container} from 'react-bootstrap'
import NavDropdown from 'react-bootstrap/NavDropdown';
import {LinkContainer} from 'react-router-bootstrap'
import {MdLocalOffer} from 'react-icons/md'
const Topbar = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container fluid>
            <h6 className='text-light'>
            <MdLocalOffer className="text-success"></MdLocalOffer>
            &nbsp;
              Flat 399 off on order above 1500
            </h6>
            <Nav className="ms-auto">
                 <LinkContainer to="/" activeClassName=''>
                    <Nav.Link>
                    Home
                    </Nav.Link>
                 </LinkContainer>
                 <LinkContainer to="/about" activeClassName=''>
                    <Nav.Link>
                        About
                    </Nav.Link>
                 </LinkContainer>
                 <LinkContainer to="/Contact" activeClassName=''>
                    <Nav.Link>
                        Contact Us
                    </Nav.Link>
                 </LinkContainer>
                 <LinkContainer to="/policy" activeClassName=''>
                    <Nav.Link>
                        Policy
                    </Nav.Link>
                 </LinkContainer>
                 {/* /* <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown> */} */
            </Nav>
        </Container>
      </Navbar>
    </div>
  )
} 

export default Topbar
