import React from 'react';


const Transaction = (props) => {

    const { text, amount, id } = props.transaction;

    return (
        <>
            <div>{text}: {amount}</div>
            <button onClick={() => props.deleteTransation(id)}>X</button>
        </>
    );
}

export default Transaction;