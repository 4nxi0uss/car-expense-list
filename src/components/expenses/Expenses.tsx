import React from 'react';
import { useContext } from 'react';
import { StoreContex } from '../../store/StoreProvider';

import ExpenseList from './subcomponent/ExpenseList/ExpenseList';

import './Expenses.scss'
import { useState } from 'react';

const Expenses = () => {
    const [sort, setSort] = useState<string>()
    const { list, user } = useContext(StoreContex)
    // console.log(list[`${user.uid}`][`8XYleUm_lP6bMmWDzYn2I`] )
    // const keyObjectArray: string[] = []
    // for (const property in list[`${user.uid}`]) {
    //     keyObjectArray.push(property)
    // }

    // console.log(keyObjectArray)

    const keyObjectArrayEntires: any = Object.entries(list[`${user.uid}`]);

    const sortedArray: any = []
    keyObjectArrayEntires.forEach((element: any) => {

        // sortedArray.push([element[1][`${sort}`], element[1].id])

        sort !== "productName" ? sortedArray.push([element[1][`${sort}`], element[1].id]) : sortedArray.push([String(element[1].productName).toLowerCase(), element[1].id]);
    })

    // sortedArray.sort().map((el:any)=>{
    // console.log(el)
    // return(null)
    // })

    // sortedArray.sort();
    // console.log(sortedArray)
    // sortedArray.sort((a: any, b: any) => a[0] - b[0]).map((el:any)=>{
    //     console.log(el)

    //     return(null)
    // })
    // // console.log(keyObjectArrayKeys)
    // console.log(keyObjectArrayValues.sort().forEach((element:any) => {
    // console.log(element.date)
    //   console.log(element.forEach((element2:any) => {
    //       console.log(element2)
    //   }))  
    // }))

    // const expenseListElement = sortedArray.sort().map((el: any) => (<ExpenseList key={list[`${user.uid}`][`${el[1]}`].id} id={list[`${user.uid}`][`${el[1]}`].id} date={list[`${user.uid}`][`${el[1]}`].date} carBrand={list[`${user.uid}`][`${el[1]}`].carBrand} price={Number(list[`${user.uid}`][`${el[1]}`].price)} productName={list[`${user.uid}`][`${el[1]}`].productName} createDate={list[`${user.uid}`][`${el[1]}`].createDate} />))

    const expenseListElement = sortedArray.sort().sort((a: any, b: any) => a[0] - b[0]).map((el: any) => (<ExpenseList key={list[`${user.uid}`][`${el[1]}`].id} id={list[`${user.uid}`][`${el[1]}`].id} date={list[`${user.uid}`][`${el[1]}`].date} carBrand={list[`${user.uid}`][`${el[1]}`].carBrand} price={Number(list[`${user.uid}`][`${el[1]}`].price)} productName={list[`${user.uid}`][`${el[1]}`].productName} createDate={list[`${user.uid}`][`${el[1]}`].createDate} />))

    // const expenseListElement = sortedArray.sort((a: any, b: any) => a[0] - b[0]).map((el: any) => (<ExpenseList key={list[`${user.uid}`][`${el[1]}`].id} id={list[`${user.uid}`][`${el[1]}`].id} date={list[`${user.uid}`][`${el[1]}`].date} carBrand={list[`${user.uid}`][`${el[1]}`].carBrand} price={Number(list[`${user.uid}`][`${el[1]}`].price)} productName={list[`${user.uid}`][`${el[1]}`].productName} createDate={list[`${user.uid}`][`${el[1]}`].createDate} />))

    // const expenseListElement = keyObjectArray.map((el: any) => (<ExpenseList key={list[`${user.uid}`][`${el}`].id} id={list[`${user.uid}`][`${el}`].id} date={list[`${user.uid}`][`${el}`].date} carBrand={list[`${user.uid}`][`${el}`].carBrand} price={Number(list[`${user.uid}`][`${el}`].price)} productName={list[`${user.uid}`][`${el}`].productName} createDate={list[`${user.uid}`][`${el}`].createDate} />))

    // const expenseListElement = keyObjectArray.map((el: any) => (<ExpenseList key={list[`${el}`].id} id={list[`${el}`].id} date={list[`${el}`].date} carBrand={list[`${el}`].carBrand} price={Number(list[`${el}`].price)} productName={list[`${el}`].productName} createDate={list[`${el}`].createDate} />))


    const calculatedExpenses = () => {
        let spendMoney: number = 0;
        sortedArray.sort((a: any, b: any) => a[0] - b[0]).forEach((el: string) => (spendMoney += Number(list[`${user.uid}`][`${el[1]}`].price)));
        // keyObjectArray.forEach((el: string) => (spendMoney += Number(list[`${user.uid}`][`${el}`].price)));

        return (spendMoney)
    }

    const handleSort = (e: any) => {
        setSort(e.target.value)
    }

    return (
        <section className='sectionExpenses'>
            <ul className='ulExpenses'>
                {/* <ExpenseList /> */}
                {expenseListElement}
            </ul>
            <div className='expensesCalculating'>{`Łączne wydatki ${calculatedExpenses()} zł.`}
                <label > Sortuj po:
                    <select onChange={handleSort} /*name="auto" id="auto"*/ value={sort}>
                        <option value="-" disabled={sort !== undefined ? true : false}>-Wybierz-</option>
                        <option value="price"  >Cena</option>
                        <option value="carBrand">smochód</option>
                        <option value="date">data</option>
                        <option value="productName">produkt</option>
                    </select>
                </label>
            </div>
        </section>
    )
}

export default Expenses;