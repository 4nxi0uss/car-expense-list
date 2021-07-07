import * as React from 'react';

import { nanoid } from 'nanoid';

import { ref, set } from "firebase/database"

import { database } from '../FIrebaseUtility/Firebase';

import "./ContentForm.scss"
import { useState } from 'react';

const ContentForm = () => {

    const [price, setPrice] = useState<number>(Number(''));
    const [productName, setProductName] = useState<string>('');
    const [buyDate, setBuyDate] = useState<string>('');
    const [carBrand, setCarBrand] = useState<string>('');

    const id = nanoid()
    // let objectThing = {
    //     price,
    //     productName: productName,
    //     date: buyDate,
    //     carBrand,
    //     id
    // }

    const sendData = (price: number, productName: string, buyDate: string, carBrand: string) => {

        // set(ref(database, `ToDo/${nanoid()}`), {
        set(ref(database, `/ToDo/${id}`), {
            id,
            price: Number(price),
            productName: productName,
            date: buyDate,
            carBrand,
            createDate: new Date().toUTCString()
        });
    }


    const handlePrice = (event: any) => {
        const priceValue = event?.target.value
        setPrice(priceValue)
    }

    const handleThing = (event: any) => {
        setProductName(event?.target.value)
    }
    const handleBuyDate = (event: any) => {
        setBuyDate(event?.target.value)
    }
    const handleCarModel = (event: any) => {
        setCarBrand(event.target.value)
    }

    const resetFormValues = () => {
        setPrice(Number(''));
        setProductName('');
        setBuyDate('')
        setCarBrand('')
    }

    const handleSubmit = (e: any) => {
        e.preventDefault()
        // objectThing = {
        //     price,
        //     productName: productName,
        //     date: buyDate,
        //     carBrand,
        //     id
        // }
        sendData(price, productName, buyDate, carBrand)
        // console.log(objectThing)
        resetFormValues()
    }

    const handleReset = (e: any) => {
        e.preventDefault()
        resetFormValues()
        console.log('reset')
    }

    return (
        <section className='divForm'>
            <form className='form' method='post' onSubmit={handleSubmit}>
                <label className='label'>
                    Cena:
                    <input onChange={handlePrice} type="number" value={price === 0 ? "" : price} placeholder="cena za rzeczy... np: 50 zł" required /> zł
                </label>
                <label className='label'>
                    Rzecz:
                    <input onChange={handleThing} type="text" value={productName} placeholder="Zakup... np: Paliwo" required />
                </label>
                <label className='label'>
                    Data:
                    <input onChange={handleBuyDate} type="date" value={buyDate} required />
                </label>
                <label className='label' >
                    Auto:
                    <select onChange={handleCarModel} name="auto" id="auto" value={carBrand} required={carBrand === 'none' ? true : false}>
                        <option value='none'  > - Wybierz -</option>
                        <option value="ford">Ford</option>
                        <option value="hyundai">Hyundai</option>
                        <option value="volkswagen">Volkswagen</option>
                    </select>
                </label>
                <button type='submit' className='submitBtn' >Zapisz</button>
                <button onClick={handleReset} className='btn' type='button'>Anuluj</button>
            </form>

        </section>

    )
}

export default ContentForm