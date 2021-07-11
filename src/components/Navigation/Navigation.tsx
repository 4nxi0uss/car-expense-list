import React from 'react';
import { Link } from 'react-router-dom';

import '../Navigation/Navigation.scss'

const Navigation = () => {

    return (
        <menu className='menu'>
            <nav className='nav'>
              <ul>  <li className="list">
                    <Link className='link' to="/">Strona główna</Link>
                </li>
                <li className="list">
                    <Link className='link' to="/expenses">Wdatki</Link>
                </li>
          </ul>  </nav>
        </menu>
    )
}

export default Navigation;