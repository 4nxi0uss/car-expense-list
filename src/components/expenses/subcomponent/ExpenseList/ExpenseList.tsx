import { useContext, useState } from 'react';

import { StoreContex } from '../../../../store/StoreProvider';

import { ref, remove } from '@firebase/database';
import { database } from '../../../FIrebaseUtility/Firebase';

import './ExpenseList.scss'

import EditMode from '../EditMode/EditMode';

const ExpenseList = ({ date = "2021-07-01", productName = "Akumulator", price = 50, carBrand = "Ford", id, createDate }: {
    date?: string;
    productName?: string;
    price?: number;
    carBrand?: string;
    id: string;
    createDate: string;
}) => {

    const [isOpenPopup, setIsOpenPopup] = useState(false)

    const { list, user } = useContext(StoreContex)

    const keyObjectArrayInExpenses: string[] = []
    for (const property in list[`${user.uid}`]) { // get id from object 
        keyObjectArrayInExpenses.push(property)
    }

    const handleDelete = () => { //delete one part of list 

        keyObjectArrayInExpenses.map((key: string) => {

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
        setIsOpenPopup(true)
    }

    // edit mode with drop down menu or with popup window


    return (
        <li className="liList">
            <article className="expenseList">
                <h3>{`Car maintenance purchases`}</h3>
                {/* <h3>{`Zakupy dotyczące utrzymania samochodu`}</h3> */}
                <p>{`Purchased item: ${productName}`}</p>
                {/* <p>{`Zakupiony produkt: ${productName}`}</p> */}
                <p>{`For the car: ${carBrand}`}</p>
                {/* <p>{`Przeznaczony do samochodu: ${carBrand}`}</p> */}
                <p>{`Cost: $${price}`}</p>
                {/* <p>{`Kwota zakupu: ${price}zł`}</p> */}
                <p>{`Purchased on: ${date}`}</p>
                {/* <p>{`Zakupiony w dniu: ${date}`}</p> */}
                <button onClick={handleDelete} className='btn'>Delete</button>
                {/* <button onClick={handleDelete} className='btn'>usuń</button> */}
                <button onClick={handleEdit} className='btn'>Edit</button>
                {/* <button onClick={handleEdit} className='btn'>edytuj</button> */}
                <EditMode key={id} id={id} isOpenPopup={isOpenPopup} hidePopup={hidePopup} priceFromExpensesList={price} dateFromExpensesList={date} carBrandFromExpensesList={carBrand} productNameFromExpensesList={productName} createDateFromExpensesList={createDate} />
            </article>
        </li>
    )
}

export default ExpenseList;