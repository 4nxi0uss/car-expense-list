import * as React from 'react';
import { useState } from 'react';

import Modal from '../../../Modal/Modal';

import { ref, set } from '@firebase/database';
import { database } from '../../../FIrebaseUtility/Firebase';

import './EditMode.scss'
import { useContext } from 'react';
import { StoreContex } from '../../../../store/StoreProvider';

const EditMode = ({ isOpenPopup, hidePopup, id, priceFromExpensesList, dateFromExpensesList, carBrandFromExpensesList, productNameFromExpensesList, createDateFromExpensesList }: any) => {

    const { list,user } = useContext(StoreContex)

    const keyObjectArrayInEditMode: string[] = []
    // for (const property in list) {
    for (const property in list[`${user.uid}`]) {
        keyObjectArrayInEditMode.push(property)
    }

    const [price, setPrice] = useState<number>(Number(priceFromExpensesList));
    const [productName, setProductName] = useState<string>(productNameFromExpensesList);
    const [buyDate, setBuyDate] = useState<string>(dateFromExpensesList);
    const [carBrand, setCarBrand] = useState<string>(carBrandFromExpensesList);
    const [showText, setShowText] = useState<boolean>(false);


    const handlePrice = (event: any) => {
        setPrice(event?.target.value)
    }
    const handleProductName = (event: any) => {
        setProductName(event?.target.value)
    }
    const handleBuyDate = (event: any) => {
        setBuyDate(event?.target.value)
    }
    const handleCarModel = (event: any) => {
        setCarBrand(event?.target.value)
    }

    // const handleClearStateOfInput = () => {
    //     setPrice(Number(''));
    //     setProductName('');
    //     setBuyDate('');
    //     setCarBrand('');
    // }

    const handleSubmit = (e: any) => {

        if (price === 0 && productName === '' && buyDate === '' && carBrand === '') {
            console.log(price, productName, buyDate, carBrand)
            setShowText(true)
        } else {
            hidePopup()
            // console.log(price, productName, buyDate, carBrand)
            setShowText(false)

            keyObjectArrayInEditMode.map((key: any) => {

                if (list[`${user.uid}`][`${key}`].id === id) {
                    set(ref(database, `/${user.uid}/${id}`), {
                        price: Number(price),
                        productName,
                        createDate: createDateFromExpensesList,
                        date: buyDate,
                        id,
                        carBrand,
                        editDate: new Date().toUTCString()
                    });
                }

                return (null)


            })

        }


        e.preventDefault()

    }
    const handleCancle = (e: any) => {
        e.preventDefault();
        setShowText(false)
        hidePopup()
    }


    return (
        <Modal isOpen={isOpenPopup} handleOnClose={hidePopup} shouldBeCloseOnOutsideClick={false}>
            <div className="divEdit">
                {showText === true ? <p className="warningText" >nie możesz zapisać nie zmieniając żadnej wartości</p> : null}
                <form className='formEdit' method='post' onSubmit={handleSubmit} >
                    <label className='label'>
                        Cena:
                        <input onChange={handlePrice} type="number" value={price === 0 ? "" : price} placeholder="cena za rzeczy... np: 50 zł" />
                    </label>
                    <label className='label'>
                        Rzecz:
                        <input onChange={handleProductName} type="text" value={productName} placeholder="Zakup... np: Paliwo" />
                    </label>
                    <label className='label'>
                        Data:
                        <input onChange={handleBuyDate} type="date" value={buyDate} />
                    </label>
                    <label className='label' >
                        Auto:
                        <select onChange={handleCarModel} name="auto" id="auto" value={carBrand} >
                            <option value='none' > - Wybierz -</option>
                            <option value="ford">Ford</option>
                            <option value="hyundai">Hyundai</option>
                            <option value="volkswagen">Volkswagen</option>
                        </select>
                    </label>
                    <button className="btnSubmit" type='submit'>Zapisz</button>
                    <button onClick={handleCancle} className="btnCancel" type='button'>Anuluj</button>
                </form>
            </div>
        </Modal>
    )
}

export default EditMode;