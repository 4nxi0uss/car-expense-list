import './Header.scss'

import { GoogleAuthProvider, getAuth, signInWithPopup, signOut } from 'firebase/auth';

import { onValue, ref } from '@firebase/database';
import { database } from '../FIrebaseUtility/Firebase';

import { useContext } from 'react';
import { StoreContex } from '../../store/StoreProvider';

import { useEffect } from 'react';

const Header = () => {

    const { user, setUser, setList, setInfoShow } = useContext(StoreContex)

    const provider = new GoogleAuthProvider();
    const auth = getAuth();
    auth.languageCode = 'pl';

    let userUid = '';

    const handleSingIn = () => {
        setInfoShow(false)
        signInWithPopup(auth, provider).then((result: any) => {
            console.log(`Zalogowano`);
            setUser(result.user);
            userUid = result.user.uid;
        }).catch((error) => {
            console.warn(error)
        });
    }

    const handleSingOut = () => {
        signOut(auth).then((result: any) => {
            console.log(`Wylogowano`)
            setUser()
        }).catch((error) => {
            console.warn(error)
        })
    }

    useEffect(() => {
        const test = ref(database, `/${userUid}`)
        onValue(test, (snapshot) => { setList(snapshot.val()) })
    }, [userUid, setList])

    return (
        <div>
            <header className='header'>
                <div className='logo'>
                    LOGO
                </div>
                <h1 className="title">Lista wydatków na samochód</h1>
                <button onClick={Boolean(user) === true ? handleSingOut : handleSingIn}>{Boolean(user) === true ? `Wyloguj` : `Zaloguj`}</button>
            </header>
        </div>
    )
}

export default Header;