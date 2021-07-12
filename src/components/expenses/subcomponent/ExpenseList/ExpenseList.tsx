import * as React from 'react';
import { useContext, useState } from 'react';

import { StoreContex } from '../../../../store/StoreProvider';

import { ref, remove } from '@firebase/database';
import { database } from '../../../FIrebaseUtility/Firebase';

import './ExpenseList.scss'

import EditMode from '../EditMode/EditMode';

const ExpenseList = ({ date = "2021-07-01", productName = "Akumulator", price = 50, carBrand = "Ford", id, createDate }: any) => {

    const [isOpenPopup, setIsOpenPopup] = useState(false)

    const { list, user } = useContext(StoreContex)

    const keyObjectArrayInExpenses: string[] = []
    for (const property in list[`${user.uid}`]) {
        keyObjectArrayInExpenses.push(property)
    }

    const handleDelete = () => {

        keyObjectArrayInExpenses.map((key: any) => {

            if (list[`${user.uid}`][`${key}`].id === id) {
                const deleteToDoObject = ref(database, `/${user.uid}/${id}`);
                remove(deleteToDoObject)
            }

            return (null)

        }
        )
    }

    const hidePopup = (event: any) => {
        if (event) {
            event.preventDefault()
        }

        setIsOpenPopup(false);
    }


    const handleEdit = () => { //editMode on
        // console.log('edit')
        setIsOpenPopup(true)
    }

    // edit mode with drop down menu or with popup window


    return (
        <li className="liList">
            <article className="expenseList">
                <h3>{`Zakupy dotyczące utrzymania samochodu`}</h3>
                <p>{`Zakupiony produkt: ${productName}`}</p>
                <p>{`Przeznaczony do samochodu: ${carBrand}`}</p>
                <p>{`Kwota zakupu: ${price}zł`}</p>
                <p>{`Zakupiony w dniu: ${date}`}</p>
                <button onClick={handleDelete} className='btn'>usuń</button>
                <button onClick={handleEdit} className='btn'>edytuj</button>
                <EditMode key={id} id={id} isOpenPopup={isOpenPopup} hidePopup={hidePopup} priceFromExpensesList={price} dateFromExpensesList={date} carBrandFromExpensesList={carBrand} productNameFromExpensesList={productName} createDateFromExpensesList={createDate} />
            </article>
        </li>
    )
}

export default ExpenseList;