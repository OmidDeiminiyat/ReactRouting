import { NavLink } from "react-router-dom";
import React from 'react';
import style from './Navigation.module.scss';
import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';



export function Navbar(){
    const location = useLocation();
  const [activePath, setActivePath] = useState('active');


  useEffect(() => {
    setActivePath(location.pathname);
  }, [location]);

    return(
        <>
            <nav className={style.mainNav}>
                <ul>
                    <li>
                        <NavLink to="/" className={({isActive}) => isActive ? style.active : '' }> Forside </NavLink>
                    </li>
                    <li>
                        <NavLink to="/Concept" className={({isActive}) => isActive ? style.active : '' } > Koncepter </NavLink>
                    </li>
                    <li>
                        <NavLink to="/About" className={({isActive}) => isActive ? style.active : '' }  > Om os </NavLink>
                    </li>
                    <li>
                        <NavLink to="/Contact" className={activePath === '/' ? 'style.active' : ''} > Kontact os </NavLink>
                    </li>
                </ul>
            </nav>
        </>
    );
} 