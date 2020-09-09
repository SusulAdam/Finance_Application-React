import React from 'react';

const AddTransactionPanelControls = (props) => {
    return (
        <div className="AddTransactionPanel__controls">
            <button onClick={props.handleAddTransaction}>Save</button>
            <button onClick={props.handleShowHideAddTransaction}>Cancel</button>
        </div>
    );
}

export default AddTransactionPanelControls;