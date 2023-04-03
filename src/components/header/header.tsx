import React from 'react';
import './header.css';
import pfp from '../../images/pfp.svg';
import chevron from '../../images/chevronD.svg';

const Header = () => {
    return (
        <header className="header navigation">
            <div className = 'logo'>
                Awesome Kanban Board
            </div>
            <div>
                <img 
                    src = {pfp} 
                    alt = 'profile avatar' 
                />
                <img 
                    src = {chevron} 
                    alt = 'open profile' 
                />
            </div>
        </header>
    )
}

export default Header;