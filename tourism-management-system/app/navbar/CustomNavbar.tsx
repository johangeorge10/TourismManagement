'use client';

import { useState } from 'react';
import Image from 'next/image';
import './CustomNavbar.css';

export default function CustomNavbar() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isOpen, setIsOpen] = useState(false); // For mobile menu toggle

    return (
        // <div className="background-container">
        <nav className="custom-navbar">
            <div className="nav-container">
                {/* Brand Logo */}
                <a className="nav-brand" href="#">
                    Bon Voyage
                </a>

                {/* Mobile Menu Button */}
                <button className="nav-toggler" onClick={() => setIsOpen(!isOpen)}>
                    ☰
                </button>

                {/* Navigation Links */}
                <div className={`nav-links ${isOpen ? "active" : ""}`}>
                    <a href="#" className="nav-item">Home</a>
                    <a href="#" className="nav-item">Destinations</a>
                    <a href="#" className="nav-item">Contact</a>
                    {isLoggedIn ? (
                        <button className="logout-btn" onClick={() => setIsLoggedIn(false)}>Logout</button>
                    ) : (
                        <a className="login-btn" href="/login">Login</a>
                    )}
                </div>
            </div>
        </nav>
        // </div>
    );
}
