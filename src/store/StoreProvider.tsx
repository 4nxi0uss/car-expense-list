import { useState, createContext } from 'react';

import { childrenType } from '../Types/Types';

export const StoreContex = createContext<null | any>(null)



const StoreProvider = <T,>({ children }: childrenType<T>) => {


    const [list, setList] = useState<string>()
    const [user, setUser] = useState<object>()
    const [infoShow, setInfoShow] = useState<boolean>(false);

    return (
        <StoreContex.Provider value={{ list, setList, user, setUser, infoShow, setInfoShow }}>
            {children}
        </StoreContex.Provider>
    )
}

export default StoreProvider;