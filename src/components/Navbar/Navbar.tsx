import React from "react";
import cl from './Navbar.module.css'

function Navbar(){
    return(
        <nav className={cl.nav}>
            <div><a className={`${cl.item} ${cl.active}`}>Profile</a></div>
    <div><a>Messages</a></div>
    <div><a>News</a></div>
    <div><a>Music</a></div>
    <div><a>Setting</a></div>
    </nav>
    )
}
export default Navbar