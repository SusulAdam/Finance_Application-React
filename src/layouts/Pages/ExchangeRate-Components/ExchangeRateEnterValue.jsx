import React from 'react';

const ExchangeRateEnterValue = (props) => {
    const { value, onChange } = props;
    return (

        <input
            type="number"
            className="exchangeRate-body__enter-value"
            value={value}
            onChange={onChange}
            name="enterValue"

        />
    );
}

export default ExchangeRateEnterValue;