import React from 'react';
import Transaction from 'layouts/Pages/ManageFinances-Components/Transaction';


const TransactionsList = (props) => {

    const positiveAmounts = props.transactions.filter(positiveAmount => positiveAmount.amount >= 0)
    const negativeAmounts = props.transactions.filter(negativeAmount => negativeAmount.amount < 0)
    const income = positiveAmounts.map(transaction => <Transaction key={transaction.id} transaction={transaction} deleteTransaction={props.deleteTransaction} />)
    const expenses = negativeAmounts.map(transaction => <Transaction key={transaction.id} transaction={transaction} deleteTransaction={props.deleteTransaction} />)




    return (
        <>

            <div className="transaction-list">
                <h3 className="transaction-list__h3">Income</h3>
                <div className="transaction-list__container income">

                    {income}

                </div>
                <h3 className="transaction-list__h3">Expenses</h3>
                <div className="transaction-list__container expenses">

                    {expenses}

                </div>

            </div>
        </>
    );
}

export default TransactionsList;