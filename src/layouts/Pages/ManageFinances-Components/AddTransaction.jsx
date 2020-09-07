import React, { Component } from 'react';


class AddTransaction extends Component {
    state = {
        text: '',
        amount: '',

    }

    handleNameOfTransaction = (e) => {

        this.setState({
            text: e.target.value
        })
    }

    handleAmountOfTransaction = (e) => {
        const amount = parseFloat(e.target.value);
        this.setState({
            amount
        })
    }

    handleAddTransaction = (e) => {
        e.preventDefault();
        const { text, amount } = this.state;
        const addTransaction = this.props.addTransaction(text, amount)
        console.log(addTransaction);
        if (!addTransaction) {
            this.setState({
                text: '',
                amount: '',
            })
        }

    }


    render() {
        return (
            <div className="AddTransactionPanel">
                <form >
                    <h2>Add new transaction</h2>
                    <label htmlFor="nameOfTransaction">Name:</label>
                    {/* <small>(please enter the name of transaction)</small> */}
                    <input onChange={this.handleNameOfTransaction} id="nameOfTransaction" type="text" value={this.state.text} />
                    {/* <small>enter the transaction amount, if you add an expense put a minus sign at the beginning of the amount</small> */}
                    <label htmlFor="amount">amount</label>
                    <input onChange={this.handleAmountOfTransaction} type="number" id="amount" value={this.state.amount} />
                    <div className="AddTransactionPanel__controls">
                        <button onClick={this.handleAddTransaction}>Save</button>
                        <button>Cancel</button>
                    </div>
                </form>

            </div>
        );
    }
}

export default AddTransaction;