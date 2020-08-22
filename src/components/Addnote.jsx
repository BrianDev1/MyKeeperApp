import React from "react";

function Addnote() {

    return (
        <div className="addnote">
        <form>
        <input placeholder="Title"></input>
            <textarea rows="4" cols="50" placeholder="Description"></textarea>
            <button className="addnotebutton">Add </button>
            </form>        
        </div>
        
    );

}

export default Addnote;