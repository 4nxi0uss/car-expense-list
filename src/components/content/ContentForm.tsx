import * as React from 'react';
import { useContext } from 'react';
import { StoreContex } from '../../store/StoreProvider';

import firebaseApp from '../FIrebaseUtility/Firebase';

import { databaseRef } from '../FIrebaseUtility/Firebase';

import "./ContentForm.scss"

const ContentForm = () => {
        const { price, setPrice, thing, setThing, buyDate, setBuyDate,carBrand, setCarBrand } = useContext(StoreContex)
    let objectThing = {
        price: price,
        thing,
        date: buyDate,
        carBrand: carBrand,
    }
     
    console.log(firebaseApp)
    console.log(databaseRef)

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
        console.log(objectThing)
        resetFormValues()
    }

    const handleCarModel =(event:any)=>{
        setCarBrand(event.target.value)
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
                    <input onChange={handlePrice} type="number" value={price === 0 ?"":price} placeholder="cena za rzeczy... np: 50 zł" required/> zł
                </label>
                <label className='label'>
                    Rzecz:
                    <input onChange={handleThing} type="text" value={thing} placeholder="Zakup... np: Paliwo" required />
                </label>
                <label className='label'>
                    Data:
                    <input onChange={handleBuyDate} type="date" value={buyDate} required/>
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
            <button onClick={handleSubmit} className='submitBtn' type='submit'>Zapisz</button>
            <button onClick={handleReset} className='btn' type='button'>Anuluj</button>
        </div>

    )
}

export default ContentForm