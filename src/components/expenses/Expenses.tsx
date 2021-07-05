import React from 'react';
import { useContext } from 'react';
import { StoreContex } from '../../store/StoreProvider';

import ExpenseList from './subcomponent/ExpenseList/ExpenseList';

import './Expenses.scss'

const Expenses = () => {

    const { list } = useContext(StoreContex)

    const keyObjectArray: string[] = []
    for (const property in list) {
        keyObjectArray.push(property)
    }

    const expenseListElement = keyObjectArray.map((el: any) => (<ExpenseList key={list[`${el}`].id} id={list[`${el}`].id} date={list[`${el}`].date} carBrand={list[`${el}`].carBrand} price={Number(list[`${el}`].price)} productName={list[`${el}`].productName} />))


    const calculatedExpenses = () => {
        let spendMoney: number = 0;
        keyObjectArray.forEach((el: string) => (spendMoney += Number(list[`${el}`].price)));

        return (spendMoney)
    }






    // const prettierCurencyValue = (value:string)=>{
    // console.log(value.includes('.'))
    // console.log(value.indexOf('.'))
    // console.log(value.slice(0, 4))
    // let prettierValue : any ='';
    // if (value.includes('.')){
    // prettierValue = value.slice(0, value.indexOf('.'));
    // return( value.slice(0, value.indexOf('.')))

    // }
    // console.log(prettierValue.length)
    // console.log(Array(prettierValue))


    // prettierValue = prettierValue.split('')
    // prettierValue = Array(prettierValue)
    // console.log(prettierValue)
    // console.log(typeof(prettierValue))
    // console.log(prettierValue[0].join(' ') )

    //     for (let i:number=0 ; i <prettierValue.length; i++){
    //         if(i%3 === 0){

    //         }
    //     }

    //     return( prettierValue)
    // }

    // prettierCurencyValue(calculatedExpenses())
    // console.log(prettierCurencyValue(calculatedExpenses()))

    return (
        <section className='sectionExpenses'>
            <ul className='ulExpenses'>
                {/* <ExpenseList /> */}
                {expenseListElement}
            </ul>
            <div className='expensesCalculating'>{`Łączne wydatki ${calculatedExpenses()} zł.`}</div>
            {/* <div className='expensesCalculating'>{`Łączne wydatki ${prettierCurencyValue(calculatedExpenses())} zł.`}</div> */}
        </section>
    )
}

export default Expenses;

// https://stackoverflow.com/questions/14810506/map-function-for-objects-instead-of-arrays    https://developer.mozilla.org/pl/docs/Web/JavaScript/Reference/Statements/for...in   https://stackoverflow.com/questions/32716929/best-way-to-model-identifiers-unique-id-in-json   https://developer.mozilla.org/pl/docs/Web/JavaScript/Guide/Loops_and_iteration#for...in     https://stackoverflow.com/questions/8131838/returning-values-out-of-for-loop-in-javascript       check tomorrow