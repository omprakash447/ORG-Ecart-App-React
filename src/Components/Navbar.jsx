import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar({ cartx }) {
    // State to manage the toggle of the menu
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Function to toggle the menu
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className='navbar'>
            <div className="logo">
                <Link to="/"><h1>FreeCodeCamp ORG</h1></Link>
                <img src="https://th.bing.com/th/id/OIP.AzcQtB-gTJAOnkzs12frIAAAAA?rs=1&pid=ImgDetMain" alt="Logo" />
            </div>
            <div className="toggle-btn" onClick={toggleMenu}>
                ☰
            </div>
            <div className={`contents ${isMenuOpen ? 'active' : ''}`}>
                <ul id="menu">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/All">All</Link></li>
                    <li><Link to="/Shirts">T-Shirts</Link></li>
                    <li><Link to="/Bags">Bags</Link></li>
                    <li><Link to="/Jackets">Jackets</Link></li>
                    <li><Link to="/Cartitem"><img src="https://www.freeiconspng.com/uploads/black-shopping-cart-icon-22.png" alt="Cart" /><span>{cartx}</span></Link></li>
                </ul>
            </div>
        </div>
    );
}

export default Navbar;
