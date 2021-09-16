import * as React from 'react';
import { useState } from 'react';

import Modal from '../../../Modal/Modal';

import { ref, set } from '@firebase/database';
import { database } from '../../../FIrebaseUtility/Firebase';

import './EditMode.scss'
import { useContext } from 'react';
import { StoreContex } from '../../../../store/StoreProvider';

const EditMode = ({ isOpenPopup, hidePopup, id, priceFromExpensesList, dateFromExpensesList, carBrandFromExpensesList, productNameFromExpensesList, createDateFromExpensesList }: {
    isOpenPopup: boolean;
    hidePopup: any;
    id: string;
    priceFromExpensesList: number;
    dateFromExpensesList: string;
    carBrandFromExpensesList: string;
    productNameFromExpensesList: string;
    createDateFromExpensesList: string;
}) => {

    const { list, user } = useContext(StoreContex)

    const keyObjectArrayInEditMode: string[] = []
    for (const property in list[`${user.uid}`]) {
        keyObjectArrayInEditMode.push(property)
    }

    //state
    const [price, setPrice] = useState<number>(Number(priceFromExpensesList));
    const [productName, setProductName] = useState<string>(productNameFromExpensesList);
    const [buyDate, setBuyDate] = useState<string>(dateFromExpensesList);
    const [carBrand, setCarBrand] = useState<string>(carBrandFromExpensesList);
    const [showText, setShowText] = useState<boolean>(false);

    // add price to edit mode
    const handlePrice = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPrice(Number(event?.target.value))
    }
    // add product name to edit mode 
    const handleProductName = (event: React.ChangeEvent<HTMLInputElement>) => {
        setProductName(String(event?.target.value))
    }
    // add date to edit mode 
    const handleBuyDate = (event: React.ChangeEvent<HTMLInputElement>) => {
        setBuyDate(String(event?.target.value))
    }
    // add car model to edit mode 
    const handleCarModel = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setCarBrand(String(event.target.value))
    }

    // submit edit form
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {

        if (price === 0 && productName === '' && buyDate === '' && carBrand === '') {
            setShowText(true)
        } else {
            hidePopup()
            setShowText(false)

            keyObjectArrayInEditMode.map((key: any) => {

                //send edit data to database
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
    const handleCancle = (e: React.MouseEvent<HTMLButtonElement>) => { // cancel editing
        e.preventDefault();
        setShowText(false)
        hidePopup()
    }

    console.log(showText)
    return (
        <Modal isOpen={isOpenPopup} handleOnClose={hidePopup} shouldBeCloseOnOutsideClick={false}>
            <div className="divEdit">
                {showText === true ? <p className="warningText" >You can't save without changing any value</p> : null}
                {/* {showText === true ? <p className="warningText" >nie możesz zapisać nie zmieniając żadnej wartości</p> : null} */}
                <form className='formEdit' method='post' onSubmit={handleSubmit} >
                    <label className='label'>
                        Price:
                        <input onChange={handlePrice} type="number" value={price === 0 ? "" : price} placeholder="Price for item... E.g. $50" required />
                    </label>
                    <label className='label'>
                        Item:
                        <input onChange={handleProductName} type="text" value={productName} placeholder='Purchased item... E.g. Fuel' required />
                    </label>
                    <label className='label'>
                        Date:
                        <input onChange={handleBuyDate} type="date" value={buyDate} lang="en" required />
                    </label>
                    <label className='label' >
                        Car Brand:
                        <select onChange={handleCarModel} /*name="auto" id="auto"*/ value={carBrand} required={carBrand === 'none' ? true : false}>
                            <option value='none' > - Choose -</option>
                            <option value="ford">Ford</option>
                            <option value="hyundai">Hyundai</option>
                            <option value="volkswagen">Volkswagen</option>
                        </select>
                    </label>
                    <button className="btnSubmit" type='submit'>Save</button>
                    <button onClick={handleCancle} className="btnCancel" type='button'>Cancel</button>
                </form>
            </div>
        </Modal>
    )
}

export default EditMode;