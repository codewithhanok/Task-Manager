import React from 'react'
import './Taskarea.css'

function Taskarea() {
    return (
        <div className='taskside-full'>

            <div className="tasksidetop">

                <div className="task-head">
                    <h4>My Task</h4>
                    <button>
                        + ADD TASK
                    </button>

                </div>
                <div className="task-count">

                    <div className="count-card">
                        <h3>Total Tasks</h3>
                        <p>10</p>
                    </div>

                    <div className="count-card">
                        <h3>Pending</h3>
                        <p>4</p>
                    </div>

                    <div className="count-card">
                        <h3>Completed</h3>
                        <p>6</p>
                    </div>

                </div>

            </div>

            <div className="taskside-bottom">
                

            </div>
        </div>
    )
}

export default Taskarea
