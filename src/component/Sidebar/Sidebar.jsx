import React from 'react'
import "./Sidebar.css"

function Sidebar() {
    return (
        <div className='sidebar-main'>

            <div className="sidebar-head">
                <h4>Dashboard</h4>
            </div>


            <div className="sidebar-buttons">
                <button>ALL task</button>
                
                <button>PENDING</button>
                
                <button>COMPLETED</button>
            </div>
        </div>
    )
}

export default Sidebar
