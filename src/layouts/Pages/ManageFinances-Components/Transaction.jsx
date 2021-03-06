import React from 'react';


const Transaction = (props) => {

    const { text, amount, id } = props.transaction;

    return (
        <div className='transaction-list__item'>
            <div className="transaction-list__textAndAmount">{text}: <span className="transaction-list__amount">${amount}</span></div>
            <button className="transaction-list__control buttonStyles" onClick={() => props.deleteTransaction(id)}>X</button>
        </div>
    );
}

export default Transaction;