import React, {useState} from "react";
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

function Addnote(props) {

  
    const [aNote, setNote] = useState({
        title: "",
        content: ""
    });
    

    function handleNote(event) {
        const { name, value } = event.target;
        setNote((previousValue) => {
           return  {
               ...previousValue,
               [name]: value,
           };
        }
        ) ;
    }

    function handleFormSubmit(event) {
        props.onAddNoteClicked(aNote);
        setNote({title: "", content: ""});
        event.preventDefault();
    }


    return (
        <div>
        <form onSubmit={handleFormSubmit} className="create-note">
        <input name="title" type="text" onChange={handleNote}  placeholder="Title" value={aNote.title} ></input>
            <textarea name="content" onChange={handleNote} rows="4" cols="50" placeholder="Description" value={aNote.content}></textarea>
            <Fab type="submit" ><AddIcon /></Fab>
            </form>        
        </div>
        
    );

}

export default Addnote;