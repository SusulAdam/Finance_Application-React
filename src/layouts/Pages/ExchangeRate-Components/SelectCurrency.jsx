import React from 'react';
import currencies from 'constans/currenciesList';



const SelectCurrency = (props) => {

    const currency = currencies.map(curr =>
        (
            <option key={curr.id} value={curr.currencyName} >{curr.currencyName}</option>
        )
    )

    return (
        <select
            value={props.value}
            onChange={props.onChange}
            className="exchangeRate-body__selectCurrency ">
            {currency}

        </select>
    );
}

export default SelectCurrency;