import React from 'react';
import { useContext } from 'react';
import { StoreContex } from '../../store/StoreProvider';

import './Expenses.scss'
import ExpenseList from './subcomponent/ExpenseList/ExpenseList';

const Expenses = () => {
    const { list } = useContext(StoreContex)
    // console.log(list)


    let arr: string[] = []
    for (const property in list) {
        arr.push(property)
    }
    //   console.log(arr)

    const expenseListElement = arr.map((el: any) => (<ExpenseList key={list[`${el}`].id} date={list[`${el}`].date} carBrand={list[`${el}`].carBrand} price={Number(list[`${el}`].price)} productName={list[`${el}`].productName} />))

    return (
        <section>
            <ul>
                {/* <ExpenseList /> */}
                {expenseListElement}
            </ul>
        </section>
    )
}

export default Expenses;

// https://stackoverflow.com/questions/14810506/map-function-for-objects-instead-of-arrays    https://developer.mozilla.org/pl/docs/Web/JavaScript/Reference/Statements/for...in   https://stackoverflow.com/questions/32716929/best-way-to-model-identifiers-unique-id-in-json     check tomorrow