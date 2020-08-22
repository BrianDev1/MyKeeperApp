import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";
import Addnote from "./Addnote";

function App() {
    return (
        <div>
            <Header />
            {
                notes.map(note => <Note 
                        key = {
                            note.key
                        }
                        title = {
                            note.title
                        }
                        content={
                            note.content
                        }
                        /> )}
            <Addnote />
            <Footer />
        </div>
    );
}


export default App;