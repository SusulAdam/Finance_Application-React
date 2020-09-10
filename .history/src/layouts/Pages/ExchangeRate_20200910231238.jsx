import React, { Component } from 'react';
const url = `https://api.ratesapi.io/api/latest?base=PLN&symbols=USD`



class ExchangeRate extends Component {

    state = {
        enterValue: 'xD'

    }

    handleEnterValue = (e) => {
        this.setState({
            enterValue: e.target.value
        })
    }


    handleDataExchangeRate = () => {
        fetch(url)
            .then(response => response.json())
            .then(res => {
                console.log(res);
            })

    }


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
                            value={this.state.enterValue}
                            onChange={this.handleEnterValue}
                        />

                        <div className="exchangeRate-body__currency-container">
                            <select id="exchangeRate-body__left-currency">
                                <option value="PLN" selected>PLN</option>
                                <option value="USD">USD</option>
                                <option value="GBP">GBP</option>
                                <option value="EUR">EUR</option>
                                <option value="CHF">CHF</option>
                            </select>
                            <button onClick={this.handleDataExchangeRate}>Click</button>
                            <select id="exchangeRate-body__right-currency">
                                <option value="PLN">PLN</option>
                                <option value="USD" selected>USD</option>
                                <option value="GBP">GBP</option>
                                <option value="EUR">EUR</option>
                                <option value="CHF">CHF</option>
                            </select>
                        </div>
                        <p className="exchangeRate-body__rate-info"></p>

                    </div>
                </div>
            </>
        );
    }
}

export default ExchangeRate;