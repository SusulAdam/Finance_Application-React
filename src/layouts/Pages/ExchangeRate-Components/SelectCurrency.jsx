import React from 'react';
import currencies from 'constans/currenciesList';



const SelectCurrency = (props) => {

    const currency = currencies.map(curr =>
        (
            <option key={curr.id} value={curr.currencyName}>{curr.currencyName}</option>
        )
    )

    const { value, onChange, name } = props;

    return (
        <select
            value={value}
            onChange={onChange}
            className="exchangeRate-body__selectCurrency "
            name={name}>
            {currency}

        </select>
    );
}

export default SelectCurrency;