import React, {useState} from "react";
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Zoom from '@material-ui/core/Zoom';

function Addnote(props) {

  
    const [titleField, setTitleFieldType] = useState({inputType: "hidden", rows : 0, zoomIn: false, textDescription: "Make a note..."});
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

    function displayTitleInput() {
        setTitleFieldType(() => {
            return {
                inputType: "text",
                rows: 4,
                zoomIn: true,
                textDescription: "Make a note..."
            };
        });
    }


    return (
        <div>
        <form onSubmit={handleFormSubmit} className="create-note">
        <input name="title" type={titleField.inputType} onChange={handleNote}  placeholder="Title" value={aNote.title} ></input>
            <textarea name="content" onChange={handleNote} onClick={displayTitleInput} rows={titleField.rows} cols="50" placeholder={titleField.textDescription} value={aNote.content}></textarea>
            
            <Zoom in={titleField.zoomIn}><Fab type="submit" ><AddIcon /></Fab></Zoom>
            </form>        
        </div>
        
    );

}

export default Addnote;