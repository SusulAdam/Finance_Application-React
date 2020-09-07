import React from 'react';
import AddTransaction from 'layouts/Pages/ManageFinances-Components/AddTransaction';
import TransactionsList from 'layouts/Pages/ManageFinances-Components/TransactionsList';
import ShowAddTransaction from 'layouts/Pages/ManageFinances-Components/ShowAddTransaction';

class ManageFinances extends React.Component {
    state = {
        transactions: []
    }
    counter = 0

    deleteTransation = (idOfDeleteTransition) => {
        let transactions = [...this.state.transactions];
        transactions = transactions.filter(transaction => transaction.id !== idOfDeleteTransition)
        this.setState({
            transactions
        });

    }

    addTransaction = (text, amount) => {
        const transaction = {
            id: this.counter,
            amount,
            text,
        }
        this.setState(prevState => ({
            transactions: [...prevState.transactions, transaction]
        }))

        this.counter++

    }

    render() {
        return (
            <>
                <div className="manageFinances">
                    <TransactionsList transactions={this.state.transactions} deleteTransation={this.deleteTransation} />
                    <div className="controlsTransaction">
                        <ShowAddTransaction />
                        <button className="controlsTransaction__deleteAllFinances">Delete All Finances</button>
                    </div>
                    <AddTransaction addTransaction={this.addTransaction} />
                </div>
            </>
        );
    }
}

export default ManageFinances;