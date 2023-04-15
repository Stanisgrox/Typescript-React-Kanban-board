import React from 'react';
import './header.css';
import pfp from '../../images/pfp.svg';
import chevron from '../../images/chevronD.svg';
import { Link } from 'react-router-dom';

const Header = () => {
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