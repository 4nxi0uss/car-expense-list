import * as React from 'react';
import { useContext } from 'react';
import { StoreContex } from '../../../../store/StoreProvider';

import { ref, remove } from '@firebase/database';
import { database } from '../../../FIrebaseUtility/Firebase';

import './ExpenseList.scss'

const ExpenseList = ({ date = "2021-07-01", productName = "Akumulator", price = 50, carBrand = "Ford", id }: any) => {

    const { list } = useContext(StoreContex)

    const keyObjectArrayInExpenses: string[] = []
    for (const property in list) {
        keyObjectArrayInExpenses.push(property)
    }

    const handleDelete = () => {

        keyObjectArrayInExpenses.map((key: any) => {

            if (list[`${key}`].id === id) {
                const test = ref(database, `/ToDo/${id}`);
                remove(test)
            }

            return (null)

        }
        )
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
                <button className='btn'>edytuj</button>
            </article>
        </li>
    )
}

export default ExpenseList;