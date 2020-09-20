import React, { useState } from 'react';
import './nav.css';
import { Link } from 'react-router-dom';
import homeIcon from '../../../home-icon.png';


const Nav = () => {
    const [showMenu, setShowMenu] = useState(false)

    const showMenuHandler = (e) => {
            setShowMenu(!showMenu);
    }

    return (
        <div className = 'Nav'>

            { showMenu ? <div id = 'menu'>
                <ul>
                    <li>
                        <Link className = 'Menu=list' to = '/'>
                            <img src = {homeIcon} id = 'home-icon' alt = 'Home icon' />
                        </Link>
                    </li>
                    <li>
                        <Link className = 'Menu=list' to = 'login'>Sign-in</Link>
                    </li>
                    <li>
                        <Link className = 'Menu=list' to = '#'>Register</Link>
                    </li>
                </ul>
            </div> : ''} 

        

            <div onClick = {showMenuHandler} id = 'hambugger'>
                <div className = 'Ham'></div>
                <div className = 'Ham'></div>
                <div className = 'Ham'></div>
            </div>

            <div className = 'Border'></div>

            <h3>NIGERIAN SHIPPERS' COUNCIL</h3>
        </div>
    )
}

export default Nav;
