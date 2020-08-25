import React from "react";
import Delete from "./Delete";



function Note(props) {
    return (
        <div className="note">
            <h1>{props.title}</h1>
            <p>{props.content}</p>
            <Delete id={props.id} onDeleteClicked={props.onDeleteClicked} />
        </div>
    );
}

export default Note;