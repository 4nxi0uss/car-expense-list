import './Header.scss'

import { GoogleAuthProvider, getAuth, signInWithPopup, signOut } from 'firebase/auth';

import { onValue, ref } from '@firebase/database';
import { database } from '../FIrebaseUtility/Firebase';

import { useContext } from 'react';
import { StoreContex } from '../../store/StoreProvider';

import { useEffect } from 'react';

const Header = () => {

    const { user, setUser, list, setList, setInfoShow } = useContext(StoreContex)

    const provider = new GoogleAuthProvider();  //google authentication
    const auth = getAuth();
    auth.languageCode = 'pl';

    let userUid = '';

    const handleSingIn = () => {  //sing in app
        setInfoShow(false)
        signInWithPopup(auth, provider).then((result: any) => {
            console.log(`Zalogowano`);
            setUser(result.user);
            // userUid = result.user.uid;
        }).catch((error) => {
            console.warn(error)
        });
    }

    console.log(userUid)

    const handleSingOut = () => {  //sing out app
        signOut(auth).then((result: any) => {
            console.log(`Wylogowano`)
            setUser()
        }).catch((error) => {
            console.warn(error)
        })
    }

    useEffect(() => { //get a list of expenses from database
        console.log(userUid)
        const listOfExpenses = ref(database, `/${userUid}`)
        onValue(listOfExpenses, (snapshot) => { setList(snapshot.val()) })
    }, [userUid, setList])

    console.log(list)

    return (
        <div>
            <header className='header'>
                <div className='logo'>
                    LOGO
                </div>
                <h1 className="title">Lista wydatków na samochód</h1>
                <button onClick={Boolean(user) === true ? handleSingOut : handleSingIn}>{Boolean(user) === true ? `Wyloguj` : `Zaloguj za pomocą Google`}</button>
            </header>
        </div>
    )
}

export default Header;