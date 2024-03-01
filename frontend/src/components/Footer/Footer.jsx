import React from "react"; //6.9k (gzipped:2.7k)
import "./footer.css";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import { Link } from 'react-router-dom';
import logo from "../../assets/images/india 2.png";


const quick__links = [
    {
        path: '/home',
        display: 'Home'
    },
    {
        path: '/about',
        display: 'About Us'
    },
    {
        path: '/tours',
        display: 'Tours'
    },
    {
        path: '/careers',
        display: 'Careers'
    },
    {
        path: '/FAQs',
        display: 'FAQs'
    },
    {
        path: '/Support',
        display: 'Support'
    },
    {
        path: '/collections',
        display: 'Collections'
    },
];

const quick__links2 = [
    {
        path: '/gallery',
        display: 'Gallery'
    },
    {
        path: '/login',
        display: 'Login'
    },
    {
        path: '/register',
        display: 'Register'
    },
    {
        path: '/cleartrip for business',
        display: 'Cleartrip for Business'
    },
    {
        path: '/Gift-Cards',
        display: 'Gift-cards'
    },
    {
        path: '/Holiday Packages',
        display: 'Holiday Packages'
    },
    {
        path: '/Club',
        display: 'Club'
    },
];

const Footer = () => {

    const year=new Date().getFullYear();
    return (
        <footer className="footer">
            <Container>
                <Row>
                    <Col lg='3'>
                        <div className="logo">
                            <img src={logo} alt="" />
                            <p> Explore the world with us – your trusted travel companion for unforgettable adventures, expert insights, and seamless journeys. Your passport to a world of wanderlust awaits!Join us for an exciting journey around the world – we're your go-to travel partner for amazing adventures, expert advice, and smooth trips. Get ready to explore new horizons and make unforgettable memories with us!</p>
                            <div className="social__links  d-flex  align-items-center gap-4">
                                <span>
                                    <Link to='#'><i class="ri-youtube-line"></i></Link>
                                </span>

                                <span>
                                    <Link to='#'><i class="ri-github-fill"></i></Link>
                                </span>

                                <span>
                                    <Link to='#'><i class="ri-facebook-circle-line"></i></Link>
                                </span>

                                <span>
                                    <Link to='#'><i class="ri-instagram-line"></i></Link>
                                </span>

                            </div>
                        </div>
                    </Col>

                    <Col lg="3">
                        <h5 className="footer__link-title">Discover</h5>
                        <ListGroup className="footer__quick-links">
                            {
                                quick__links.map((item, index) => (
                                    <ListGroupItem key={index} className="ps-0 border-0">
                                        <Link to={item.path}>{item.display}</Link>
                                    </ListGroupItem>
                                ))
                            }
                        </ListGroup>
                    </Col>
                    <Col lg="3">
                        <h5 className="footer__link-title">Quick Links</h5>
                        <ListGroup className="footer__quick-links">
                            {
                                quick__links2.map((item, index) => (
                                    <ListGroupItem key={index} className="ps-0 border-0">
                                        <Link to={item.path}>{item.display}</Link>
                                    </ListGroupItem>
                                ))
                            }
                        </ListGroup>
                    </Col>
                    <Col lg="3">
                        <h5 className="footer__link-title">Contact</h5>
                        <ListGroup className="footer__quick-links">
                            <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-3">
                                <h6 className="mb-0 d-flex align-items-center gap-2">
                                    <span><i class="ri-map-pin-line"></i></span>
                                    Address:
                                </h6>
                                <p className="mb-0">Uttar Pradesh ,India</p>
                            </ListGroupItem>

                            <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-3">
                                <h6 className="mb-0 d-flex align-items-center gap-2">
                                    <span><i class="ri-mail-line"></i></span>
                                    Email:
                                </h6>
                                <p className="mb-0">ankitabhishek494@gmail.com</p>
                            </ListGroupItem>

                            <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-3">
                                <h6 className="mb-0 d-flex align-items-center gap-2">
                                    <span><i class="ri-phone-fill"></i></span>
                                    Phone:
                                </h6>
                                <p className="mb-0">+91-6387249153</p>

                            </ListGroupItem>
                        </ListGroup>
                    </Col>

                    <Col lg='12' className="text-center pt-5">
                        <p className="copyright">@ Copyright {year}, Design and Develop by Abhishek Goyal. All Rights Reserved.</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
};
export default Footer;

