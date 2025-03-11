'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import 'bootstrap/dist/css/bootstrap.min.css';
import './globals.css';
//import CustomNavbar from './navbar/CustomNavbar';
import './navbar/navbar.css';
import { FaInstagram } from "react-icons/fa6";


export default function LandingPage() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);


    return (
        <div className="background-container">
            <div className="background-container">
            <nav className={`navbar navbar-expand-lg fixed-top ${scrolled ? 'scrolled' : ''} py-3`}>
                <div className="container ps-0 ms-0 pe-0 me-0">
                    <a className="navbar-brand fw-bold p-2 ms-4"
                        style={{
                            fontFamily: 'Playfair Display, serif',
                            fontWeight: 'bold',
                            // backgroundColor: '#ADD8E6',
                            // color: 'black',
                            // textShadow: '1px 1px 2px rgba(0, 0, 0, 0.2)'
                        }}
                        href="#"
                    >
                        Bon Voyage
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse " id="navbarNav">
                        <ul className="navbar-nav ms-auto ">
                            <li className="nav-item me-4"><a className="nav-link" href="/">Home</a></li>
                            <li className="nav-item me-4"><a className="nav-link" href="#">Destinations</a></li>
                            <li className="nav-item me-4"><a className="nav-link" href="#">Contact</a></li>
                            <li className="nav-item me-4">
                            {isLoggedIn ? (
                                <button className="logout-button" onClick={() => setIsLoggedIn(false)}>Logout</button>
                            ) : (
                                <a className="login-button" href="/login">Login</a>
                            )}
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
            </div>

            {/* <CustomNavbar /> */}

            <header className="text-center py-5 text-white">
                <div className="container">
                    <br/><br/><br/><br/><br/>
                    <h1 className="display-4">Explore the World with Us</h1>
                    <p className="lead">Find the best travel destinations and packages tailored just for you.</p>
                    <a className="btn btn-light btn-lg" href="#">Get Started</a>
                </div>
            </header>

            <section className="container my-5">
                <div className="row text-center">
                    <div className="col-md-4">
                    <a href="https://www.instagram.com/sreee_the_dream_chaser/">
                        <Image className="image-box" src="/images/discover.jpg" width={300} height={200} alt="Travel Icon" />
                        </a>
                        <h3 className="mt-3">Discover Places</h3>
                        <p>Find the most beautiful places around the globe.</p>
                    </div>
                    <div className="col-md-4">
                        <a href="https://www.instagram.com/sreee_the_dream_chaser/">
                        <Image className="image-box" src="/images/easybooking.jpg" width={300} height={200} alt="Booking Icon" />
                        </a>
                        <h3 className="mt-3">Easy Booking</h3>
                        <p>Book your trips hassle-free with our platform.</p>
                    </div>
                    <div className="col-md-4">
                      <a href="https://www.instagram.com/sreee_the_dream_chaser/">
                      <Image className="image-box" src="/images/247.png" width={300} height={200} alt="Support Icon" />
                      </a>
                        
                        <h3 className="mt-3">24/7 Support</h3>
                        <p>We provide round-the-clock customer service.</p>
                    </div>
                </div>
            </section>

            {/* Footer Section */}
            <footer className="footer text-center py-4">
                <div className="container">
                    <p>
                        Follow us on &nbsp;&nbsp;
                        <a href="https://www.instagram.com/sreee_the_dream_chaser/" target="_blank" rel="noopener noreferrer" className="footer-link">
                            {/* <Image src="/images/instagram.png" width={24} height={24} alt="Instagram" className="ms-2" /> */}
                            <FaInstagram />
                        </a>
                    </p>
                    <p>© 2025 Bon Voyage. All rights reserved.</p>
                </div>
            </footer>

            {/* Overlay Effect for Blurring */}
            <div className="background-overlay"></div>
        </div>
    );
}
