import * as React from 'react';
import { useContext } from 'react';
import { StoreContex } from '../../store/StoreProvider';

import "./ContentForm.scss"

const handleReset = ()=>{

}



const ContentForm = () => {
    const {price, setPrice,thing, setThing,buyDate, setBuyDate} = useContext(StoreContex)
    console.log(typeof({}))
    return (
        <div className='divForm'>
            <form className='form' method='post'  >
                <label className='label'>
                    Cena:
                    <input type="number" value={price}/>
                </label>
                <label className='label'>
                    Rzecz:
                    <input type="text" value={thing}/>
                </label>
                <label className='label'>
                    Data:
                    <input type="date" value={buyDate} />
                </label>
            </form>
            <button className='submitBtn' type='submit'>Zapisz</button>
            <button onClick={handleReset} className='btn' type='button'>Anuluj</button>
        </div>

    )
}

export default ContentForm