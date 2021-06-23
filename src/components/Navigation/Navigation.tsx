import React from 'react';
import { BrowserRouter, Link, Route } from 'react-router-dom';

import '../Navigation/Navigation.scss'

const Navigation =()=>{

    return(
        <menu className='menu'>
            <li className="list">
                <nav>
                    <Link className='link' to="/">Strona główna</Link>
                    <Link className='link' to="/">Wdatki</Link>
                </nav>
            </li>
        </menu>
    )
}

export default Navigation;