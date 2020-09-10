import React, { Component } from 'react';



class ExchangeRate extends Component {

    state = {
        enterValue: '',
        leftCurrency: "PLN",
        rightCurrency: "USD"

    }

    handleEnterValue = (e) => {
        this.setState({
            enterValue: e.target.value
        })
    }


    handleDataExchangeRate = () => {
        const urlAPI = `https://api.ratesapi.io/api/latest?base=${this.state.leftCurrency}&symbols=${this.state.rightCurrency}`
        fetch(urlAPI)
            .then(response => response.json())
            .then(res => {
                console.log(res);
                const rates = Object.values(res.rates);
                console.log(rates);
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
                            <select
                                value={this.state.leftCurrency}
                                id="exchangeRate-body__left-currency">

                                <option value="PLN" >PLN</option>
                                <option value="USD">USD</option>
                                <option value="GBP">GBP</option>
                                <option value="EUR">EUR</option>
                                <option value="CHF">CHF</option>
                            </select>
                            <button onClick={this.handleDataExchangeRate}>Click</button>
                            <select
                                value={this.state.rightCurrency}
                                id="exchangeRate-body__right-currency">
                                <option value="PLN">PLN</option>
                                <option value="USD" >USD</option>
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