import React from 'react'
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { IconContext } from 'react-icons';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import {SidebarData} from './SidebarData';
import './Navbar.css';

function Navbar() {
  const [sidebar , setSidebar] = useState(false);

  const ShowSidebar = () => setSidebar(!sidebar);

  return (
    <>
    <IconContext.Provider value={{color:'black'}}>
    <div classname="navbar">
    <Link to='#' className='menu-bars'>
        <FaIcons.FaBars onClick={ShowSidebar}/>
    </Link>
    </div>
    <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
      <ul className='nav-menu-items' onClick={ShowSidebar}>
        <li className='navbar-toggle'>
        <Link to='#' className='menu-bars'>
          <AiIcons.AiOutlineClose/>
        </Link>
        </li>
        {SidebarData.map((item, index) => {
          return(
            <li key={index} className={item.cName}>
              <Link to={item.path}>
                {item.icon}
                <span>{item.title}</span>
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
    </IconContext.Provider>
    </>
  )
}

export default Navbar;