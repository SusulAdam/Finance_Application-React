import React, { Component } from 'react';
import ExchangeRateEnterValue from 'layouts/Pages/ExchangeRate-Components/ExchangeRateEnterValue';
import SelectCurrency from 'layouts/Pages/ExchangeRate-Components/SelectCurrency';
import { MdSwapHoriz } from 'react-icons/md';


class ExchangeRate extends Component {

    state = {
        enterValue: '',
        leftCurrency: "PLN",
        rightCurrency: "USD",
        exchangeRateScore: ""
    }

    handleValuesOfExchange = (e) => {
        const name = e.target.name
        this.setState({
            [name]: e.target.value
        })
    }


    handleDataExchangeRate = (firstCurrency, secondCurrency) => {
        const urlAPI = `https://api.ratesapi.io/api/latest?base=${firstCurrency}&symbols=${secondCurrency}`
        fetch(urlAPI)
            .then(response => response.json())
            .then(res => {
                console.log(res);
                const rates = Object.values(res.rates)[0];
                console.log(rates);
                let exchangeRateScore = [this.state.exchangeRateScore]
                exchangeRateScore = (this.state.enterValue * rates).toFixed(2);
                this.setState({
                    exchangeRateScore,
                })
            })
    }

    swaperOfValues = () => {

        this.setState({
            leftCurrency: this.state.rightCurrency,
            rightCurrency: this.state.leftCurrency,
        })

        this.handleDataExchangeRate(this.state.rightCurrency, this.state.leftCurrency)
    }


    render() {


        return (

            <>
                <div className="exchangeRate" >
                    <h2 className="exchangeRate__header">Check current
                exchange rates!</h2>


                    <div className="exchangeRate-body">

                        <div className="exchangeRate-body__enterValue-items">


                            <ExchangeRateEnterValue
                                value={this.state.enterValue}
                                onChange={this.handleValuesOfExchange} />
                            <span className="exchangeRate-body__mainCurrency">{this.state.leftCurrency}</span>
                        </div>



                        <div className="exchangeRate-body__currency-container">

                            <SelectCurrency
                                value={this.state.leftCurrency}
                                onChange={this.handleValuesOfExchange}
                                name="leftCurrency" />


                            <button onClick={this.swaperOfValues}>
                                <MdSwapHoriz className="exchangeRate-body__swaper " />
                            </button>
                            <SelectCurrency

                                value={this.state.rightCurrency}
                                onChange={this.handleValuesOfExchange}
                                name="rightCurrency" />


                        </div>

                        <button
                            className="exchangeRate-body__exchangeCurrency"
                            onClick={() => this.handleDataExchangeRate(this.state.leftCurrency, this.state.rightCurrency)}>Exchange</button>



                        <p className="exchangeRate-body__rate-info">{this.state.exchangeRateScore && <span>{this.state.exchangeRateScore}  {this.state.rightCurrency}</span>}</p>


                    </div>
                </div>
            </>
        );
    }
}

export default ExchangeRate;