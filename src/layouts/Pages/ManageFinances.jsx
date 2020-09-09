import React from 'react';
import AddTransaction from 'layouts/Pages/ManageFinances-Components/AddTransaction';
import TransactionsList from 'layouts/Pages/ManageFinances-Components/TransactionsList';
import MainManageFinancesControls from 'layouts/Pages/ManageFinances-Components/MainManageFinancesControls';

class ManageFinances extends React.Component {
    state = {
        transactions: [],
        activeAddTransaction: false,
        allFinances: [0],
    }
    counter = 0

    deleteTransaction = (idOfDeleteTranscition) => {

        let transactions = [...this.state.transactions];
        transactions = transactions.filter(transaction => transaction.id !== idOfDeleteTranscition)

        let allFinances = [...this.state.allFinances]
        allFinances = transactions.map(newValueOfAmount => newValueOfAmount.amount)

        this.setState({
            transactions,
            allFinances: [0, ...allFinances]
        });

    }


    addTransaction = (text, amount) => {
        const transaction = {
            id: this.counter,
            amount,
            text,
        }
        this.setState(prevState => ({
            transactions: [...prevState.transactions, transaction],
            activeAddTransaction: false,
            allFinances: [...prevState.allFinances, amount],
        }))

        this.counter++
    }

    handleShowHideAddTransaction = () => {
        this.setState({
            activeAddTransaction: !this.state.activeAddTransaction
        })
    }

    deleteAllTransaction = () => {
        this.setState({
            transactions: [],
            allFinances: [0],
        })
    }

    render() {
        return (
            <>
                <div className="manageFinances">
                    <TransactionsList transactions={this.state.transactions} allFinances={this.state.allFinances} deleteTransaction={this.deleteTransaction} />
                    <div className="controlsTransaction">
                        <MainManageFinancesControls deleteAllTransaction={this.deleteAllTransaction} handleShowHideAddTransaction={this.handleShowHideAddTransaction} />
                    </div>
                    {this.state.activeAddTransaction && <AddTransaction handleShowHideAddTransaction={this.handleShowHideAddTransaction} addTransaction={this.addTransaction} />}
                </div>
            </>
        );
    }
}

export default ManageFinances;