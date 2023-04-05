import React from 'react';
import './header.css';
import pfp from '../../images/pfp.svg';
import chevron from '../../images/chevronD.svg';

const Header = () => {
    return (
        <header className = 'header navigation'>
            <div className = 'logo'>
                Awesome Kanban Board
            </div>
            <div className = 'profile'>
                <button className = 'profile-button'>
                    <img 
                        src = {pfp} 
                        alt = 'profile avatar' 
                    />
                    <img 
                        src = {chevron} 
                        alt = 'open profile' 
                    />
                </button>
                <div className = 'profile-dropdown'>
                    <ul>
                        <li>
                            Profile
                        </li>
                        <li>
                            Log Out
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    )
}

export default Header;