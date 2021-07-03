import { useEffect } from 'react';
import { useState, createContext } from 'react';

import { onValue, ref } from '@firebase/database';
import { database } from '../components/FIrebaseUtility/Firebase';

export const StoreContex = createContext<null | any>(null)


// export type Variables = {
//     price: any,
//     setPrice: number | null,
//     thing: string,
//     setThing: string | null,
//     buyDate: string,
//     setBuyDate: string | null,
// }


const StoreProvider = ({ children }: any) => {
    const [list, setList] = useState<string | object>('')
    // const [price, setPrice] = useState<number>(Number(''));
    // const [thing, setThing] = useState<string>('');
    // const [buyDate, setBuyDate] = useState<string>('');
    // const [carBrand, setCarBrand] = useState<string>('');

    useEffect(() => {
        const test = ref(database, '/ToDo')
        onValue(test, (snapshot) => { setList(snapshot.val()) })
    }, [])

    return (
        <StoreContex.Provider value={{ list, setList }}>
            {children}
        </StoreContex.Provider>
    )
}

export default StoreProvider;