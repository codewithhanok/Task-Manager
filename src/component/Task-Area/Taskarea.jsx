import React from 'react'
import './Taskarea.css'
import { useState } from 'react'


function Taskarea() {
    const [tasks, setTasks] = useState([
    {
        id: 1,
        title: "Learn React",
        description: "Practice components and hooks",
        status: "Completed"
    },
    {
        id: 2,
        title: "Learn Node.js",
        description: "Practice Express and REST APIs",
        status: "Pending"
    },
    {
        id: 3,
        title: "Learn MongoDB",
        description: "Practice database operations",
        status: "Pending"
    }
]);


const deleteTask =(id)=>{
    setTasks(tasks.filter((task)=> task.id !== id))
}


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

                <div className="history-head">
                    <h2>Task History</h2>
                </div>

                <div className='task-list'>
                    {tasks.map((task) => (
                        <div className="task-card" key={task.id}>
                            <h3>{task.title}</h3>
                            <p>{task.description}</p>

                            <div className="task-actions">
                                <span>{task.status}</span>
                                <button>Edit</button>
                                <button onClick={()=>deleteTask(task.id)}>
                                    Delete</button>
                            </div>
                        </div>
                    ))}

                </div>

            </div>
        </div>
    )
}

export default Taskarea
