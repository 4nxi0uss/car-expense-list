import { nanoid } from 'nanoid';

import { ref, set } from "firebase/database"

import { database } from '../FIrebaseUtility/Firebase';

import "./ContentForm.scss"
import { useState } from 'react';
import { useContext } from 'react';
import { StoreContex } from '../../store/StoreProvider';

const ContentForm = () => {

    const { user, infoShow, setInfoShow } = useContext(StoreContex)

    const [price, setPrice] = useState<number>(Number(''));
    const [productName, setProductName] = useState<string>('');
    const [buyDate, setBuyDate] = useState<string>('');
    const [carBrand, setCarBrand] = useState<string>('');

    const id = nanoid() //randomize id 

    const sendData = (price: number, productName: string, buyDate: string, carBrand: string) => { //send data to database 

        set(ref(database, `/${user?.uid}/${id}`), {
            id,
            price: Number(price),
            productName: productName,
            date: buyDate,
            carBrand,
            createDate: new Date().toUTCString()
        });
    }


    const handlePrice = (event: any) => { //add price do the state
        setPrice(event?.target.value)
    }

    const handleProductName = (event: any) => { //add name  do the state
        setProductName(event?.target.value)
    }
    const handleBuyDate = (event: any) => {//add date do the state
        setBuyDate(event?.target.value)
    }
    const handleCarModel = (event: any) => {//add car model do the state
        setCarBrand(event.target.value)
    }

    const resetFormValues = () => { //reset all input 
        setPrice(Number(''));
        setProductName('');
        setBuyDate('')
        setCarBrand('')
    }

    const handleSubmit = (e: any) => { //submit form 
        e.preventDefault();

        (Boolean(user) === true ? sendData(price, productName, buyDate, carBrand) : setInfoShow(true))
        resetFormValues()
    }

    const handleReset = (e: any) => {
        e.preventDefault()
        resetFormValues()
        console.log('reset')
    }

    return (
        <section className='divForm'>
            {infoShow === true ? <p className='infoShowText'>Musisz się zaogować aby dodać swój wydatek!</p> : null}
            <form className='form' method='post' onSubmit={handleSubmit}>
                <label className='label label1'>
                    Cena:
                    <input onChange={handlePrice} type="number" value={price === 0 ? "" : price} placeholder="cena za rzeczy... np: 50 zł" required />
                </label>
                <label className='label label2'>
                    Rzecz:
                    <input onChange={handleProductName} type="text" value={productName} placeholder="Zakup... np: Paliwo" required />
                </label>
                <label className='label label3'>
                    Data:
                    <input onChange={handleBuyDate} type="date" value={buyDate} required />
                </label>
                <label className='label label4' >
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