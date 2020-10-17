import React from 'react';
import { Button } from 'react-bootstrap';

import './header.css';

const Header = () => {
    return(
        <div className="header">
            <div>LOGO</div>
            <div>firstName lastName</div>
            <div>settings</div>
            <Button variant="primary">Logout</Button>
        </div>
    );
}

export default Header;