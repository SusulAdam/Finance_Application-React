import React from 'react';
import { NavLink } from 'react-router-dom';
import links from '../constans/links';



const Navigation = () => {

    const menu = links.map(link => (
        <li key={link.id}>
            <NavLink to={link.name} excact={link.exact ? link.exact : false}></NavLink>
        </li>
    ))

    return (
        <ul>
            {menu}
        </ul>
    );

}

export default Navigation;