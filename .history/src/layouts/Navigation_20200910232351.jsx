import React from 'react';
import { NavLink } from 'react-router-dom';
import { links, urlAPI } from 'constans/links';
import 'styles/main.scss';


const Navigation = () => {

    const menu = links.map(link => (
        <li key={link.name}>
            <NavLink to={link.path} exact={link.exact ? link.exact : false}> {link.name}</NavLink>
        </li>
    ))

    return (
        <ul>
            {menu}
        </ul>
    );

}

export default Navigation;