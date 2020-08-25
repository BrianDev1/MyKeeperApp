import React, {useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import Addnote from "./Addnote";

function App() {

    const [noteArray, setNoteArray] = useState([]);

    function addNotes(aNote) {
        setNoteArray(
            (previousNotes) => {
               return [...previousNotes, aNote];
            }
        );
    }

    function handleDelete(id) {
        setNoteArray((previousNotes) => {
            return previousNotes.filter((aNote, index) => {
                return index !== id;
            } );
        });

    }

    return (
        <div>
            <Header />
            <Addnote onAddNoteClicked={addNotes}/>
            {
                noteArray.map((note, index) => <Note 
                        key = {
                            index
                        }
                        id = {
                            index
                        }
                        title = {
                            note.title
                        }
                        content={
                            note.content
                        }
                        onDeleteClicked={
                            handleDelete
                        }
                        /> )} 
            <Footer />
        </div>
    );
}


export default App;