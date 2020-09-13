import React from 'react';

const AddTransactionPanelControls = (props) => {
    return (
        <div className="AddTransactionPanel__controls">
            <button className="manageFinancesControl click-control" onClick={props.handleAddTransaction}>Save</button>
            <button className="manageFinancesControl click-control" onClick={props.handleShowHideAddTransaction}>Cancel</button>
        </div>
    );
}

export default AddTransactionPanelControls;