import React, { Component } from 'react';


class AddTransaction extends Component {
    state = {}
    render() {
        return (
            <div className="AddTransactionPanel">
                <h2>Add new transaction</h2>
                <label htmlFor="nameOfTransaction">Name:</label>
                <small>(please enter the name of transaction)</small>
                <input id="nameOfTransaction" type="text" />
                <small>enter the transaction amount, if you add an expense put a minus sign at the beginning of the amount</small>
                <label htmlFor="amount">amount</label>
                <input type="number" />
                <div className="AddTransactionPanel__controls">
                    <button>Save</button>
                    <button>Cancel</button>
                </div>

            </div>
        );
    }
}

export default AddTransaction;