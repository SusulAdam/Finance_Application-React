import React, { Component } from 'react';
import messages from 'constans/errorMessages';
import AddTransactionPanelControls from 'layouts/Pages/ManageFinances-Components/AddTransactionPanelControls';

class AddTransaction extends Component {
    state = {
        text: '',
        amount: '',
        errors: {
            text: false,
            amount: false
        },
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
        let addTransaction;
        console.log(addTransaction);
        const transactionValidation = this.addTransactionValidation()
        if (transactionValidation.correct) {
            addTransaction = this.props.addTransaction(text, amount)
            this.setState({
                text: '',
                amount: '',
                errors: {
                    text: false,
                    amount: false
                }
            })
        } else {
            this.setState({
                errors: {
                    text: !transactionValidation.text,
                    amount: !transactionValidation.amount,
                }
            })
        }
    }

    addTransactionValidation = () => {
        let text = false;
        let amount = false;
        let correct = false;
        if (this.state.text !== '') {
            text = true
        }
        if (this.state.amount !== '') {
            amount = true
        }
        if (text && amount) {
            correct = true
        }
        return ({
            text,
            amount,
            correct
        })
    }


    render() {

        return (
            <div className="AddTransactionPanel">
                <form >
                    <h2>Add new transaction</h2>

                    <label htmlFor="nameOfTransaction">Name:</label>
                    <small>(please enter the name of transaction)</small>
                    <input
                        onChange={this.handleNameOfTransaction}
                        id="nameOfTransaction"
                        type="text"
                        value={this.state.text}
                        name="text" />

                    {this.state.errors.text && <span>{messages.text_incorect}</span>}

                    <label htmlFor="amount">amount</label>
                    <small>(enter the transaction amount, if you add an expense put a minus sign at the beginning of the amount)</small>
                    <input
                        onChange={this.handleAmountOfTransaction}
                        type="number"
                        id="amount"
                        name="amount"
                        value={this.state.amount} />
                    {this.state.errors.amount && <span>{messages.amount_incorect}</span>}


                    <AddTransactionPanelControls handleAddTransaction={this.handleAddTransaction} handleShowHideAddTransaction={this.props.handleShowHideAddTransaction} />

                </form>

            </div>
        );
    }
}

export default AddTransaction;