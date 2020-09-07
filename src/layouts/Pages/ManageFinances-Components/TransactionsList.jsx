import React from 'react';
import Transaction from 'layouts/Pages/ManageFinances-Components/Transaction'

const TransactionsList = (props) => {

    const positiveAmounts = props.transactions.filter(positiveAmount => positiveAmount.amount >= 0)
    const negativeAmounts = props.transactions.filter(negativeAmount => negativeAmount.amount < 0)
    const income = positiveAmounts.map(transaction => <Transaction key={transaction.id} transaction={transaction} deleteTransation={props.deleteTransation} />)
    const expenses = negativeAmounts.map(transaction => <Transaction key={transaction.id} transaction={transaction} deleteTransation={props.deleteTransation} />)



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
                    {expenses}

                </div>

            </div>
        </>
    );
}

export default TransactionsList;