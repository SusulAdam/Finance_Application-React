import React from 'react';
import AddTransaction from 'layouts/Pages/ManageFinances-Components/AddTransaction';
import TransactionsList from 'layouts/Pages/ManageFinances-Components/TransactionsList';
import ShowAddTransaction from 'layouts/Pages/ManageFinances-Components/ShowAddTransaction';

class ManageFinances extends React.Component {
    state = {
        transactions: [],
        activeAddTransaction: true,
        allFinances: [0]
    }
    counter = 0



    deleteTransation = (idOfDeleteTransition) => {
        let transactions = [...this.state.transactions];
        transactions = transactions.filter(transaction => transaction.id !== idOfDeleteTransition)
        const index = transactions.indexOf(idOfDeleteTransition) + 2;
        console.log(index);

        let allFinances = [...this.state.allFinances]
        const z = allFinances.splice(index, 1)
        console.log(z);

        // allFinances = transactions.reduce((a, b) => a.amount + b.amount)



        this.setState({
            transactions,
            allFinances

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




    handleShowAddTransaction = () => {
        this.setState({
            activeAddTransaction: !this.state.activeAddTransaction
        })
    }





    render() {

        return (
            <>
                <div className="manageFinances">
                    <TransactionsList transactions={this.state.transactions} allFinances={this.state.allFinances} deleteTransation={this.deleteTransation} />
                    <div className="controlsTransaction">
                        <ShowAddTransaction handleShowAddTransaction={this.handleShowAddTransaction} />
                        <button className="controlsTransaction__deleteAllFinances">Delete All Finances</button>
                    </div>
                    {this.state.activeAddTransaction && <AddTransaction addTransaction={this.addTransaction} />}
                </div>
            </>
        );
    }
}

export default ManageFinances;