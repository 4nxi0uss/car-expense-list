import * as React from 'react';

import './Header.scss'

const Header = ()=>{


    return(
        <div>
            <header className='header'>
             <div className='logo'>
                 LOGO
             </div>
             <h1 className="title">Kalkulator wydatków na samochów</h1>
            </header>
        </div>
    )
}

export default Header;