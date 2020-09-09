import React, { Component } from 'react';


const MainManageFinancesControls = (props) => {
    const { handleShowHideAddTransaction, deleteAllTransaction } = props;
    return (
        <>
            <button onClick={handleShowHideAddTransaction} className="controlsTransaction__addTransaction">Add Transaction</button>
            <button onClick={deleteAllTransaction} className="controlsTransaction__deleteAllFinances">Delete All Finances</button>
        </>
    );

}

export default MainManageFinancesControls;


