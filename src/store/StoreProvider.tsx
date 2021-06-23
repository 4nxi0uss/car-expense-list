import * as React from 'react';
import { useState,createContext } from 'react';

export const StoreContex = createContext({})
  


const StoreProvider = ({children}:any) =>{
    
    const [values, setValues] = useState();
    return(
        <StoreContex.Provider value ={{values, setValues}}>
            {children}
        </StoreContex.Provider>
    )
}

export default StoreProvider