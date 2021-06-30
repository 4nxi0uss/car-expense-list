import * as React from 'react';
import { useState, createContext } from 'react';

// import {getDatabase, ref, onValue} from 'firebase/database'
// import { FirebaseApp } from '@firebase/app';
export const StoreContex = createContext<null | any>(null)

// const db= getDatabase();
// const starCountRef = ref(db, 'date/');
// onValue(starCountRef, (snapshot) => {
//   const data = snapshot.val();
//   console.log(data)
// });

// export type Variables = {
//     price: any,
//     setPrice: number | null,
//     thing: string,
//     setThing: string | null,
//     buyDate: string,
//     setBuyDate: string | null,
// }


const StoreProvider = ({ children }: any) => {
    const [list, setList]=useState<string | any>('')
    const [price, setPrice] = useState<number>(Number(''));
    const [thing, setThing] = useState<string>('');
    const [buyDate, setBuyDate] = useState<string>('');
    const [carBrand, setCarBrand] = useState<string>('');

    return (
        <StoreContex.Provider value={{ price, setPrice, thing, setThing, buyDate, setBuyDate, carBrand,setCarBrand,list, setList }}>
            {children}
        </StoreContex.Provider>
    )
}

export default StoreProvider;