import React from 'react';
import AddTransaction from 'layouts/Pages/ManageFinances-Components/AddTransaction';
import TransactionList from 'layouts/Pages/ManageFinances-Components/TransactionList';
import ShowAddTransaction from 'layouts/Pages/ManageFinances-Components/ShowAddTransaction';


class ManageFinances extends React.Component {
    render() {
        return (
            <>
                <div className="manageFinances">
                    <TransactionList />
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