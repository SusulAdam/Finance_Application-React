import React from 'react';
import { NavLink } from 'react-router-dom';
import { links } from 'constans/links';
import 'styles/main.scss';
import { GiPig } from 'react-icons/gi';


const Navigation = () => {

    const menu = links.map(link => (

        <li className="navigation__li" key={link.name}>
            <NavLink to={link.path} exact={link.exact ? link.exact : false}> {link.name}</NavLink>
        </li>

    ))

    return (
        <ul>
            <GiPig className="pigIcon"/>
            <li><a className="pigBank-logo">PiggyBank</a></li>
            {menu}

        </ul>
    );

}

export default Navigation;