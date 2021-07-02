import React from 'react';
import { useContext } from 'react';
import { StoreContex } from '../../store/StoreProvider';

import './Expenses.scss'
import ExpenseList from './subcomponent/ExpenseList/ExpenseList';

const Expenses = ()=>{
const {list}=useContext(StoreContex)

// let myString = JSON.stringify(list);

// console.log(myString)
console.log(list)
// console.log(new Array(list))
console.log(typeof(list))

// const firstTry = Object.keys(list)

// console.log(firstTry)

// firstTry.forEach((key, index)=>{console.log(`key:${key}, index: ${list[index]}`)})



// const expenselist = list.map((exp:any)=><ExpenseList key={exp.id} {...exp}/>)
    return (
        <section>
            <ul>
                {/* {expenselist} */}
                <ExpenseList />
            </ul>
        </section>
    )
}

export default Expenses;