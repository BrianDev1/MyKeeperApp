import React, {useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import Addnote from "./Addnote";

function App() {

    const [noteArray, setNoteArray] = useState([]);


    function addNotes(aNote) {
        console.log(aNote);
        console.log(noteArray);
        setNoteArray(
            (previousNotes) => {
               return [...previousNotes, aNote];
            }
        );
       

    }


    return (
        <div>
            <Header />
            <Addnote onAddNoteClicked={addNotes}/>
            {
                noteArray.map((note, index) => <Note 
                        key = {
                            note.index
                        }
                        title = {
                            note.title
                        }
                        content={
                            note.content
                        }
                        /> )}    
            <Footer />
        </div>
    );
}


export default App;