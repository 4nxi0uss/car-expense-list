import * as React from 'react';
import { useState, createContext } from 'react';

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

    const [price, setPrice] = useState<number>(Number(''));
    const [thing, setThing] = useState<string>('');
    const [buyDate, setBuyDate] = useState<string>('');
    return (
        <StoreContex.Provider value={{ price, setPrice, thing, setThing, buyDate, setBuyDate }}>
            {children}
        </StoreContex.Provider>
    )
}

export default StoreProvider;