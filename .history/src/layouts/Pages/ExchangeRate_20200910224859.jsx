import React, { Component } from 'react';

class ExchangeRate extends Component {
    state = {}
    render() {
        return (
            <>
                <div className="exchangeRate" >
                    <h2 className="exchangeRate__header"></h2>
                    <p className="exchangeRate__information">Check current
                exchange rates!</p>

                    <div className="exchangeRate-body">
                        <input
                            type="number" className="exchangeRate-body__enter-value"
                            value={}
                            onChange={} />

                        <div className="exchangeRate-body__currency-container">
                            <select id="currency-one">
                                <option value="PLN" selected>PLN</option>
                                <option value="USD">USD</option>
                                <option value="GBP">GBP</option>
                                <option value="EUR">EUR</option>
                                <option value="CHF">CHF</option>
                            </select>
                        </div>

                    </div>
                </div>
            </>
        );
    }
}

export default ExchangeRate;