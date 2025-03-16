'use client';

import { useState,useEffect } from 'react';
import Image from 'next/image';
import '../globals.css';
import './CustomNavbar.css';
import Link from 'next/link';

export default function CustomNavbar() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [scrolled, setScrolled] = useState(false);
 useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

const [isOpen, setIsOpen] = useState(false); // For mobile menu toggle

    return (
        // <div className="background-container">
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
                            <li className="nav-item me-4">
                            <Link className="nav-link" href="/destination">
                                Destinations
                            </Link>
                            </li>
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
    );
}
