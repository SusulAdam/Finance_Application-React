import React, { Component } from 'react';


const MainManageFinancesControls = (props) => {
    const { handleShowAddTransaction, deleteAllTransaction } = props;
    return (


        <>
            <button onClick={handleShowAddTransaction} className="controlsTransaction__addTransaction">Add Transaction</button>
            <button onClick={deleteAllTransaction} className="controlsTransaction__deleteAllFinances">Delete All Finances</button>
        </>
    );

}

export default MainManageFinancesControls;


