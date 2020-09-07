import React from 'react';
import AddTransaction from 'layouts/Pages/ManageFinances-Components/AddTransaction';
import TransactionsList from 'layouts/Pages/ManageFinances-Components/TransactionsList';
import ShowAddTransaction from 'layouts/Pages/ManageFinances-Components/ShowAddTransaction';




class ManageFinances extends React.Component {

    state = {
        transactions: [{
            id: 0,
            text: 'salary from work',
            amount: 2500,
        },
        {
            id: 1,
            text: 'savings',
            amount: 500,
        }, {
            id: 2,
            text: 'purchase of a computer',
            amount: -500,
        },
        {
            id: 3,
            text: 'purchase of shops',
            amount: -500,
        }]
    }

    deleteTransation = (idOfDeleteTransition) => {

        let transactions = [...this.state.transactions];
        transactions = transactions.filter(transaction => transaction.id !== idOfDeleteTransition)
        this.setState({
            transactions
        });

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
                    <AddTransaction />
                </div>
            </>
        );
    }
}

export default ManageFinances;