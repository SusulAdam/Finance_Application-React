import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import { links } from 'constans/links';
import 'styles/main.scss';
import { GiPig } from 'react-icons/gi';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faTimes } from '@fortawesome/free-solid-svg-icons'


const Navigation = () => {

    const [showMenu, setShowMenu] = useState(false)
    let menuHamburger;


    menuHamburger = links.map(link => (
        <li className="hamburger__li" key={link.name}>
            <NavLink to={link.path} onClick={() => setShowMenu(!showMenu)} exact={link.exact ? link.exact : false}> {link.name}</NavLink>
        </li>

    ))

    const menu = links.map(link => (
        <li className="navigation__li" key={link.name}>
            <NavLink to={link.path} exact={link.exact ? link.exact : false} > {link.name}</NavLink>
        </li>
    ))

    return (
        <ul>
            <GiPig className="pigIcon" />
            <li><a className="pigBank-logo">PiggyBank</a></li>
            {!showMenu && <FontAwesomeIcon
                icon={faBars}
                onClick={() => setShowMenu(!showMenu)}
            />}

            {showMenu && <FontAwesomeIcon
                icon={faTimes}
                onClick={() => setShowMenu(!showMenu)}
            />}
            {menu}
            {showMenu && <div className='hamburger'>
                <GiPig className="harmburger-pigIcon" />
                <li><a className="harmburger-pigBank-logo">PiggyBank</a></li>
                {menuHamburger}
            </div>}


        </ul>
    );

}

export default Navigation;