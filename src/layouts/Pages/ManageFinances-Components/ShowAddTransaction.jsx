import React, { Component } from 'react';


const ShowAddTransaction = (props) => {

    return (
        <button onClick={props.handleShowAddTransaction} className="controlsTransaction__addTransaction">Add Transaction</button>
    );

}

export default ShowAddTransaction;


