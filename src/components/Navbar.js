import React from 'react'
import Main from './Main'

function Navbar() {
    return (
        <div className="nav_Container">
            <nav className="navbar">
                <a href="#">About</a>
                <a onClick ={this.projectClick}>Projects</a>
                <a href="#">Resume</a>
                <a href="#">Contact</a>
            </nav>


            
        </div>
    )
}

export default Navbar