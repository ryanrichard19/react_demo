import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
    const location = useLocation();

    return (
        <header>
            <nav>
                {location.pathname === '/about' ? (
                    <Link to="/">Home</Link>
                ) : (
                    <Link to="/about">About</Link>
                )}
            </nav>
        </header>
    );
};

export default Header;
