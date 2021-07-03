import * as React from 'react';

import './ExpenseList.scss'

const ExpenseList = ({ date = "2021-07-01", productName = "Akumulator", price = 50, carBrand = "Ford" }) => {

    return (
        <li className="liList">
            <article className="expenseList">
                <h3>{`Zakupy dotyczące utrzymania samochodu`}</h3>
                <p>{`Zakupiony produkt: ${productName}`}</p>
                <p>{`Przeznaczony do samochodu: ${carBrand}`}</p>
                <p>{`Kwota zakupu: ${price}zł`}</p>
                <p>{`Zakupiony w dniu: ${date}`}</p>
            </article>
        </li>
    )
}

export default ExpenseList;