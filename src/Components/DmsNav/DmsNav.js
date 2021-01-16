import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './DmsNavbar.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const DmsNav = () => {
    const [show, setShow] = useState(false);
    // const [color, setColor] = useState(false);
    const showDropdown = (e)=>{
        setShow(!show);
    }
    const hideDropdown = e => {
        setShow(false);
    }
    return (
        <div className='dmsNav fixed-menu'>
            <Navbar className="text text-dark" collapseOnSelect expand="lg" bg="light" variant="light">
            {/* <Navbar.Brand className="" href="#home">React-Bootstrap</Navbar.Brand> */}
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mx-auto">
                    <Navbar.Brand><Link className="text-muted text-decoration-none n-link" to="/home">Home</Link></Navbar.Brand>
                    <Navbar.Brand><Link className="text-muted text-decoration-none n-link" to="/about">About</Link></Navbar.Brand>
                {/* <Nav.Link href="#pricing">Pricing</Nav.Link> */}
                    <NavDropdown 
                    className="text-danger" 
                    title="Courses" 
                    id="collasible-nav-dropdown" 
                    show={show}
                    onMouseEnter={showDropdown} 
                    onMouseLeave={hideDropdown}>
                        <NavDropdown.Item className="text-center">Development</NavDropdown.Item>
                        <Link className={`bg-light w-100 mx-auto d-flex justify-content-center text-decoration-none text-muted d-link`} to="/course-1">Course 1</Link>
                        <Link className={`bg-light w-100 mx-auto d-flex justify-content-center text-decoration-none text-muted d-link`} to="/course-2">Course 2</Link>
                        <Link className={`bg-light w-100 mx-auto d-flex justify-content-center text-decoration-none text-muted d-link`} to="/course-3">Course 3</Link>
                        
                        {/* <NavDropdown.Item className="drop-link text-center bg-light d-link"><Link className='text-decoration-none text-muted' to="/course-3">Course 3</Link></NavDropdown.Item> */}
                        <NavDropdown.Divider />
                        <NavDropdown.Item className="text-center">Marketing</NavDropdown.Item>
                        <Link className={`bg-light w-100 mx-auto d-flex justify-content-center text-decoration-none text-muted d-link`} to="/course-1">Course 1</Link>
                        <Link className={`bg-light w-100 mx-auto d-flex justify-content-center text-decoration-none text-muted d-link`} to="/course-2">Course 2</Link>
                        <Link className={`bg-light w-100 mx-auto d-flex justify-content-center text-decoration-none text-muted d-link`} to="/course-3">Course 3</Link>
                    </NavDropdown>
                    <Navbar.Brand><Link className="text-muted text-decoration-none n-link" to="/admission">Admission</Link></Navbar.Brand>
                    <Navbar.Brand><Link className="text-muted text-decoration-none n-link" to="/mentor">Mentor</Link></Navbar.Brand>
                    <Navbar.Brand><Link className="text-muted text-decoration-none n-link" to="/blog">Blog</Link></Navbar.Brand>
                    <Navbar.Brand><Link className="text-muted text-decoration-none n-link" to="/Contact">Contact</Link></Navbar.Brand>
                    <Navbar.Brand><Link className="text-muted text-decoration-none n-link" to="/Other">Other</Link></Navbar.Brand>
                </Nav>
               {/* <Nav>
                 <Nav.Link className="" href="#deets">More deets</Nav.Link>
                <Nav.Link className="" eventKey={2} href="#memes">
                    Dank memes
                </Nav.Link>
                </Nav> */}
            </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default DmsNav;