import React from "react";
import DeleteIcon from '@material-ui/icons/Delete';


function Delete(props) {

    function handleClick() {
        props.onDeleteClicked(props.id);
    }

    return (
        <button onClick={handleClick}><DeleteIcon /></button>
    );

}

export default Delete;