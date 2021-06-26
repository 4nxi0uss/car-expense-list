import * as React from 'react';
import { useContext } from 'react';
import { StoreContex } from '../../store/StoreProvider';

import "./ContentForm.scss"



const ContentForm = () => {
    const { price, setPrice, thing, setThing, buyDate, setBuyDate } = useContext(StoreContex)
    // console.log(Date())

    const handlePrice = (event: any) => {
        //   console.log(event.target.value)
        const priceValue = event?.target.value
        setPrice(priceValue)
        // console.log(priceValue);
    }

    const handleThing = (event: any) => {
        setThing(event.target.value)
    }
    const handleBuyDate = (event: any) => {
        setBuyDate(event.target.value)
    }

    const resetFormValues = () => {
        setPrice('');
        setThing('');
        setBuyDate('')
    }

    const handleSubmit = () => {
        const objectThing = {
            price: price,
            thing,
            date: buyDate,
        }
        console.log(objectThing)
        resetFormValues()
    }

    const handleReset = () => {
        resetFormValues()
        console.log('reset')
    }

    return (
        <div className='divForm'>
            <form className='form' method='post' >
                <label className='label'>
                    Cena:
                    <input onChange={handlePrice} type="number" value={price} placeholder="cena za rzeczy... np: 50" /> zł
                </label>
                <label className='label'>
                    Rzecz:
                    <input onChange={handleThing} type="text" value={thing} placeholder="Zakup... np: Paliwo" />
                </label>
                <label className='label'>
                    Data:
                    <input onChange={handleBuyDate} type="date" value={buyDate} />
                </label>
            </form>
            <button onClick={handleSubmit} className='submitBtn' type='submit'>Zapisz</button>
            <button onClick={handleReset} className='btn' type='button'>Anuluj</button>
        </div>

    )
}

export default ContentForm