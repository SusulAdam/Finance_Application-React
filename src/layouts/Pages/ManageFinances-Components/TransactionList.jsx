import React from 'react';
import Transaction from 'layouts/Pages/ManageFinances-Components/Transaction'

const TransactionList = () => {
    return (
        <>
            <div className="manageFinances__allFinances">All Finacnes</div>
            <h2 className="manageFinances__h2">List of transactions</h2>
            <div className="transaction-list">
                <Transaction />
            </div>
        </>
    );
}

export default TransactionList;