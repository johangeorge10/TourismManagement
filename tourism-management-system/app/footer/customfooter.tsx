import { FaInstagram } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";


export default function Footer() {
    return (
        <footer className="footer text-center py-4 bg-gray-800 text-white">
            <div className="container">
                <p>
                    Follow us on &nbsp;&nbsp;
                    <a 
                        href="https://www.instagram.com/sreee_the_dream_chaser/" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="footer-link text-pink-400 hover:text-pink-500"
                    >
                        <FaInstagram className="inline-block text-2xl" />
                    </a>
                    &nbsp;&nbsp;
                    <a 
                        href="mailto:xplodx69@gmail.com" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="footer-link text-blue-400 hover:text-blue-500"
                    >
                        <MdOutlineEmail className="inline-block text-2xl" />
                    </a>
                </p>
                <p>© 2025 Bon Voyage. All rights reserved.</p>
            </div>
        </footer>
    );
}
