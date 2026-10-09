import React from 'react'
import "./Navbar.css"

function Navbar() {
    return (
        <div className='nav-main'>
            <div className="nav-head">
                <p>TASK MANAGER </p>
            </div>
            <div className="nav-name">
                <p>Hanok</p>
            </div>
           <div className="nav-login">
           <p>Login</p> 
           </div>
        </div>
    )
}

export default Navbar
