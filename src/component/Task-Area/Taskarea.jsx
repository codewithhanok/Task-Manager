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
    const [form, setForm] = useState(false);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [editId, setEditId] = useState(null);




    const deleteTask = (id) => {
        setTasks(tasks.filter((task) => task.id !== id))
    }
    const toggleTaskStatus = (id) => {
        setTasks(tasks.map((task) =>
            task.id === id
                ? {
                    ...task,
                    status: task.status === "Pending"
                        ? "Completed"
                        : "Pending"
                }
                : task
        ));
    };
    const editTask = (task) => {
        setEditId(task.id);
        setTitle(task.title);
        setDescription(task.description);
        setForm(true);
    };
    const addTask = () => {
        if (title.trim() === "") {
            return;
        }

        if (editId !== null) {
            setTasks(tasks.map((task) =>
                task.id === editId
                    ? {
                        ...task,
                        title: title,
                        description: description
                    }
                    : task
            ));
        } else {
            const newTask = {
                id: Date.now(),
                title: title,
                description: description,
                status: "Pending"
            };

            setTasks([...tasks, newTask]);
        }

        setTitle("");
        setDescription("");
        setEditId(null);
        setForm(false);
    };
    return (
        <div className='taskside-full'>

            <div className="tasksidetop">

                <div className="task-head">
                    <h4>My Task</h4>

                    <button onClick={() => setForm(true)}>
                        + ADD TASK
                    </button>

                </div>
                {form && (
                    <div className="add-task-form">
                        <h3>{editId !== null ? "Edit Task" : "Create New Task"}</h3>

                        <input
                            type="text"
                            placeholder="Enter task title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />


                        <input
                            type="text"
                            placeholder="Enter task description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        />

                        <button onClick={addTask}>
                            {editId !== null ? "Update Task" : "Save Task"}
                        </button>
                        <button onClick={() => {
                            setForm(false);
                            setTitle("");
                            setDescription("");
                            setEditId(null);
                        }}>
                            Cancel
                        </button>
                    </div>
                )}

                <div className="task-count">

                    <div className="count-card">
                        <h3>Total Tasks</h3>
                        <p>{tasks.length}</p>
                    </div>

                    <div className="count-card">
                        <h3>Pending</h3>
                        <p>{tasks.filter(task => task.status === "Pending").length}</p>
                    </div>

                    <div className="count-card">
                        <h3>Completed</h3>
                        <p>{tasks.filter(task => task.status === "Completed").length}</p>
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

                                <button onClick={() => toggleTaskStatus(task.id)}>
                                    {task.status === "Pending" ? "Complete" : "Reopen"}
                                </button>

                                <button onClick={() => editTask(task)}>
                                    Edit
                                </button>

                                <button onClick={() => deleteTask(task.id)}>
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
