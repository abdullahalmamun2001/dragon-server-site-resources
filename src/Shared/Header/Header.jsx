import React from 'react';
import logo from "../../../dragon-news-resources/assets/logo.png"
import moment from 'moment';
import { Button } from 'bootstrap';
import Marquee from "react-fast-marquee";
import { Container, Nav, NavDropdown, Navbar } from 'react-bootstrap';

const Header = () => {
    return (
        <div>
            <div className='text-center p-2 m-2'>
                <img src={logo} alt="" />
                <h5>Journalism without fair to favor</h5>
                <p>{moment().format('MMMM Do YYYY, h:mm:ss a')}</p>
                {/* <Button variant="primary">Primary</Button>{' '} */}

            </div>
            <div className='d-flex justify-content-center'>
                <button className='btn btn-primary'>Latest</button>
                <Marquee>
                    <p className='align-content-center m-10'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere et molestiae rem vel! Mollitia tempore error voluptate, provident delectus quis esse officiis. Provident quod veniam cupiditate nobis exercitationem quo cum vel minus laudantium adipisci nisi, saepe quos minima reiciendis officia, quibusdam repudiandae doloremque quidem nemo dolor velit ut distinctio nesciunt!</p>
                </Marquee>

            </div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">ABDULLAH AL MAMUN</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto text-center">
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/about">About</Nav.Link>
                            <Nav.Link href="/career">Career</Nav.Link>
                            
                        </Nav>
                        <Nav>
                            <Nav.Link href="/profile">Profile</Nav.Link>
                            <Nav.Link eventKey={2} href="login" className='btn btn-primary'>
                                Login
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;