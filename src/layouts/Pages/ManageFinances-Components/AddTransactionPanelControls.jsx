import React from 'react';

const AddTransactionPanelControls = (props) => {
    return (
        <div className="AddTransactionPanel__controls">
            <button className="manageFinancesControl buttonStyles" onClick={props.handleAddTransaction}>Save</button>
            <button className="manageFinancesControl buttonStyles" onClick={props.handleShowHideAddTransaction}>Cancel</button>
        </div>
    );
}

export default AddTransactionPanelControls;