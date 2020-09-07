import React from 'react';
import Transaction from 'layouts/Pages/ManageFinances-Components/Transaction'

const TransactionsList = (props) => {


    const income = props.transactions.map(transaction => <Transaction key={transaction.id} transaction={transaction} deleteTransation={props.deleteTransation} />
    )



    return (
        <>
            <div className="manageFinances__allFinances">All Finacnes</div>
            <h2 className="manageFinances__h2">List of transactions</h2>
            <div className="transaction-list">
                <div className="transaction-list__income">
                    <h3>Income</h3>
                    {income}

                </div>
                <div className="transaction-list__expenses">
                    <h3>Expenses</h3>

                </div>

            </div>
        </>
    );
}

export default TransactionsList;