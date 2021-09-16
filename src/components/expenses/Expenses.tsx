import React, { useContext, useState } from 'react';
import { StoreContex } from '../../store/StoreProvider';

import ExpenseList from './subcomponent/ExpenseList/ExpenseList';

import './Expenses.scss'

const Expenses = () => {
    const [sort, setSort] = useState<string>()
    const { list, user } = useContext(StoreContex)

    const keyObjectArrayEntires: any = (Boolean(list[`${user.uid}`]) && Object.entries(list[`${user.uid}`])); // get id from object 

    const sortedArray: any = []
    Boolean(list[`${user.uid}`]) && keyObjectArrayEntires.forEach((element: any) => { //sort function 
        sort !== "productName" ? sortedArray.push([element[1][`${sort}`], element[1].id]) : sortedArray.push([String(element[1].productName).toLowerCase(), element[1].id]);
    })

    // add to expenseListElement props
    const expenseListElement = sortedArray.sort().sort((a: any, b: any) => a[0] - b[0]).map((el: any) => (<ExpenseList key={list[`${user.uid}`][`${el[1]}`].id} id={list[`${user.uid}`][`${el[1]}`].id} date={list[`${user.uid}`][`${el[1]}`].date} carBrand={list[`${user.uid}`][`${el[1]}`].carBrand} price={Number(list[`${user.uid}`][`${el[1]}`].price)} productName={list[`${user.uid}`][`${el[1]}`].productName} createDate={list[`${user.uid}`][`${el[1]}`].createDate} />))

    const calculatedExpenses = () => { // calculated price from all of list
        let spendMoney: number = 0;
        sortedArray.sort((a: any, b: any) => a[0] - b[0]).forEach((el: string) => (spendMoney += Number(list[`${user.uid}`][`${el[1]}`].price)));

        return (spendMoney.toFixed(2))
    }

    const handleSort = (e: React.ChangeEvent<HTMLSelectElement>) => { //sort
        setSort(String(e.target.value))
    }

    return (
        <section className='sectionExpenses'>
            <ul className='ulExpenses'>
                {Boolean(list[`${user.uid}`]) ? expenseListElement : <p className='nonExpenses'>You didn't even spend a buck</p>}
                {/* {Boolean(list[`${user.uid}`]) ? expenseListElement : <p className='nonExpenses'>nie wydałeś nawet złotówki</p>} */}
            </ul>
            <div className='expensesCalculating'>{`Total expenses $${calculatedExpenses()}`}
                {/* <div className='expensesCalculating'>{`Łączne wydatki ${calculatedExpenses()} zł.`} */}
                <label className='sort' > Sort:
                    {/* <label className='sort' > Sortuj po: */}
                    <select className='sortSelect' onChange={handleSort} /*name="auto" id="auto"*/ value={sort}>
                        <option value="-" disabled={sort !== undefined ? true : false}>-Choose-</option>
                        {/* <option value="-" disabled={sort !== undefined ? true : false}>-Wybierz-</option> */}
                        <option value="price">Price</option>
                        <option value="carBrand">Car brand</option>
                        <option value="date">Date</option>
                        <option value="productName">Item</option>
                    </select>
                </label>
            </div>
        </section>
    )
}

export default Expenses;