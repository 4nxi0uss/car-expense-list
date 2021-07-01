import * as React from 'react';
import { useContext } from 'react';
import { StoreContex } from '../../store/StoreProvider';

import { ref, set } from "firebase/database"
// import { onValue } from "firebase/database"

import { database } from '../FIrebaseUtility/Firebase';

import "./ContentForm.scss"
// import { useEffect } from 'react';
// import { useState } from 'react';

const ContentForm = () => {
    // const [dataValue, setDataValue] = useState<object>()
    const { price, setPrice, thing, setThing, buyDate, setBuyDate, carBrand, setCarBrand } = useContext(StoreContex)
    let objectThing = {
        price,
        thing,
        date: buyDate,
        carBrand,
    }

    // useEffect(() => {
    //     const test = ref(database, '/ToDo')
    //     onValue(test, (snapshot) => { setDataValue(snapshot.val()) })
    // }, [database])

    const uploadData = (price: number, thing: Text, buyDate: Text, carBrand: Text) => {
        set(ref(database, 'ToDo/55'), {
            price,
            thing,
            date: buyDate,
            carBrand
        });
    }



    const handlePrice = (event: any) => {
        const priceValue = event?.target.value
        setPrice(priceValue)
    }

    const handleThing = (event: any) => {
        setThing(event?.target.value)
    }
    const handleBuyDate = (event: any) => {
        setBuyDate(event?.target.value)
    }

    const resetFormValues = () => {
        setPrice('');
        setThing('');
        setBuyDate('')
        setCarBrand('')
    }

    const handleSubmit = () => {
        objectThing = {
            price,
            thing,
            date: buyDate,
            carBrand,
        }
        uploadData(price, thing, buyDate, carBrand)
        console.log(objectThing)
        resetFormValues()
    }

    const handleCarModel = (event: any) => {
        setCarBrand(event.target.value)
    }

    const handleReset = () => {
        resetFormValues()
        console.log('reset')
    }

    return (
        <div className='divForm'>
            <form className='form' method='post' onSubmit={handleSubmit}>
                <label className='label'>
                    Cena:
                    <input onChange={handlePrice} type="number" value={price === 0 ? "" : price} placeholder="cena za rzeczy... np: 50 zł" required={true} /> zł
                </label>
                <label className='label'>
                    Rzecz:
                    <input onChange={handleThing} type="text" value={thing} placeholder="Zakup... np: Paliwo" required={true} />
                </label>
                <label className='label'>
                    Data:
                    <input onChange={handleBuyDate} type="date" value={buyDate} required />
                </label>
                <label className='label' >
                    Auto:
                    <select onChange={handleCarModel} name="auto" id="auto" required value={carBrand}>
                        <option value="-"> - Wybierz -</option>
                        <option value="ford">Ford</option>
                        <option value="hyundai">Hyundai</option>
                        <option value="volkswagen">Volkswagen</option>
                    </select>
                </label>
            </form>
            <button type='submit' className='submitBtn' >Zapisz</button> {/*i must repair form, buttons must be in form marker. addicionaly i must change a style file*/}
            <button onClick={handleReset} className='btn' type='button'>Anuluj</button>
        </div>

    )
}

export default ContentForm