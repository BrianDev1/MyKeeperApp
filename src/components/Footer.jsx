import React from "react";


function Footer() {

    const currentYear = new Date().getFullYear();
    const myName = "Brian Rudolph";

    return (
        <footer>
           <p>
           Copyright&copy; {myName} {currentYear}
           </p> 
        </footer>
    );
}

export default Footer;