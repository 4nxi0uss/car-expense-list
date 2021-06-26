import * as React from 'react';
import { useState,createContext } from 'react';

export const StoreContex = createContext<Variables>(null)
  
export type Variables = {
    null,
    price: number,
    setPrice: number,
    thing: string,
    setThing: string,
    buyDate: string,
    setBuyDate: string,
}


const StoreProvider = ({children}:any) =>{
    
    const [price, setPrice] = useState(50);
    const [thing, setThing] = useState('Paliwo');
    const [buyDate, setBuyDate] = useState('2001-09-08');
    return(
        <StoreContex.Provider value ={{price, setPrice,thing, setThing, buyDate, setBuyDate}}>
            {children}
        </StoreContex.Provider>
    )
}

export default StoreProvider;