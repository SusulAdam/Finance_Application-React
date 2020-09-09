import React, { Component } from 'react';


const MainManageFinancesControls = (props) => {
    const { handleShowHideAddTransaction, deleteAllTransaction } = props;
    return (
        <div className="controlsTransaction">
            <button onClick={handleShowHideAddTransaction} className="controlsTransaction__addTransaction manageFinancesControl buttonStyles">Add Transaction</button>
            <button onClick={deleteAllTransaction} className="controlsTransaction__deleteAllFinances manageFinancesControl buttonStyles">Delete All Finances</button>
        </div>
    );

}

export default MainManageFinancesControls;


