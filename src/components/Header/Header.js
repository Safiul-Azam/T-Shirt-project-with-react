import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav>
            <Link to='/home'>Home</Link>
            <Link to='/order-review'>order review</Link>
        </nav>
    );
};

export default Header;