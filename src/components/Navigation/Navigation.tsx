import { useContext } from 'react';

import { Link } from 'react-router-dom';

import { StoreContex } from '../../store/StoreProvider';

import '../Navigation/Navigation.scss'

const Navigation = () => {
    const { user } = useContext(StoreContex)
    return (
        <menu className='menu'>
            <nav className='nav'>
                <ul>  <li className="list">
                    <Link className='link' to="/">Home</Link>
                    {/* <Link className='link' to="/">Strona główna</Link> */}
                </li>
                    {Boolean(user) === true ? <li className="list">
                        <Link className='link' to="/expenses">Expenses</Link>
                        {/* <Link className='link' to="/expenses">Wdatki</Link> */}
                    </li> : null}
                </ul>  </nav>
        </menu>
    )
}

export default Navigation;