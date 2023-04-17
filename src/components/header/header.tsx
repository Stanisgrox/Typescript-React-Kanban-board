import React, { useState } from 'react';
import './header.css';
import pfp from '../../images/pfp.svg';
import chevronD from '../../images/chevronD.svg';
import chevronU from '../../images/chevronU.svg';
import { Link } from 'react-router-dom';

const Header = () => {
    
    const [menuActive, activateMenu] = useState(false)

    return (
        <header className = 'header navigation'>
                <Link 
                    to = {`/`} 
                    style = {{textDecoration: 'none', color: '#FFF'}} 
                >
                    <div className = 'logo'>
                        Awesome Kanban Board
                    </div>   
                </Link>
            <div className = 'profile'>
                <button 
                    className = 'profile-button'
                    onClick={()  => {
                        activateMenu(!menuActive)
                    }}
                >
                    <img 
                        src = {pfp} 
                        alt = 'profile avatar' 
                    />
                    <img 
                        src = {menuActive ? chevronU : chevronD} 
                        alt = 'open profile' 
                    />
                </button>
                <div 
                    className = 'profile-dropdown'
                    style={{display: menuActive ? 'block' : 'none'}}    
                >
                    <ul className = 'profile-dropdown-menu'>
                        <li className = 'profile-dropdown-menu-link'>
                            Profile
                        </li>
                        <li className = 'profile-dropdown-menu-link'>
                            Log Out
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    )
}

export default Header;