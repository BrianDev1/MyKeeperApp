import React from "react";


function Delete(props) {

    function handleClick() {
        props.onDeleteClicked(props.id);
    }

    return (
        <button onClick={handleClick}>delete</button>
    );

}

export default Delete;