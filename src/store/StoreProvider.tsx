import { useState, createContext } from 'react';

export const StoreContex = createContext<null | any>(null)

const StoreProvider = ({ children }: any) => {


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