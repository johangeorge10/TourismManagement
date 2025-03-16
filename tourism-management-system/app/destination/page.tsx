'use client';

import { useState } from 'react';
import Navbar from '../navbar/CustomNavbar';
import Footer from '../footer/customfooter';
import '../navbar/sidenav.css'
import ImageCarousel from './ImageCarousel';


import { FaHome, FaTachometerAlt, FaTable, FaBox } from 'react-icons/fa';
import { BsBootstrap } from 'react-icons/bs';

import '../globals.css';

export default function DestinationPage() {
    const [activeSection, setActiveSection] = useState('root');
    const [openMenu, setOpenMenu] = useState<string | null>(null);

    const toggleMenu = (menu: string) => {
        setOpenMenu(openMenu === menu ? null : menu);
    };

    return (
        <div className="background-container">
            <Navbar />
            
            <div className="content-wrapper">
                <div className="mainbdy">
                    {/* Sidebar Container */}
                    <div className="sidebar-container">
                        <aside>
                            <div className="sidebar-username">Username</div>

                            <nav className="sidebar-nav">
                                <div className={`sidebar-nav-item ${activeSection === 'home' ? 'active' : ''}`} 
                                     onClick={() => setActiveSection('home')}>
                                    <FaHome /> Home
                                </div>

                                <div className={`sidebar-nav-item ${activeSection === 'dashboard' ? 'active' : ''}`} 
                                     onClick={() => {
                                         toggleMenu('dashboard');
                                         setActiveSection('dashboard');
                                     }}>
                                    <FaTachometerAlt /> Dashboard
                                </div>

                                <div className={`sidebar-nav-item ${activeSection === 'orders' ? 'active' : ''}`}
                                     onClick={() => setActiveSection('orders')}>
                                    <FaTable /> Orders
                                </div>

                                <div className={`sidebar-nav-item ${activeSection === 'packages' ? 'active' : ''}`}
                                     onClick={() => {
                                         toggleMenu('bootstrap');
                                         setActiveSection('packages');
                                     }}>
                                    <BsBootstrap /> Packages
                                </div>

                                <div className={`sidebar-nav-item ${activeSection === 'customize' ? 'active' : ''}`}
                                     onClick={() => {
                                         toggleMenu('products');
                                         setActiveSection('customize');
                                     }}>
                                    <FaBox /> Customize your package
                                </div>
                            </nav>

                            <div className="sidebar-footer">
                                © 2025 Travel Explorer
                            </div>
                        </aside>
                    </div>

                    {/* Main Content - Will now display correctly next to sidebar */}
                    <main className="main-content">
                        {activeSection === 'home' || activeSection === 'root' ? (
                            <div id="root">
                            <h2 className="content-title">Popular Destinations To Explore in Kerala</h2>
                            <ImageCarousel />
                            </div>
                        ) : activeSection === 'previous' ? (
                            <div id="previous">Your previous bookings will appear here.</div>
                        ) : activeSection === 'orders' ? (
                            <div id="orders">Your orders will appear here.</div>
                        ) : activeSection === 'packages' ? (
                            <div id="packages">Available packages will appear here.</div>
                        ) : activeSection === 'customize' ? (
                            <div id="customize">Customize your package options will appear here.</div>
                        ) : activeSection === 'dashboard' ? (
                            <div id="dashboard">Your dashboard will appear here.</div>
                        ) : null}
                    </main>
                </div>
            </div>
            
            <Footer />
        </div>
    );
}