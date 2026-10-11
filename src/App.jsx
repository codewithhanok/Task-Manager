import React from 'react'
import Navbar from './component/Navbar/Navbar'
import "./App.css"
import Sidebar from './component/Sidebar/Sidebar'
import Taskarea from './component/Task-Area/Taskarea'
const App = () => {
  return (
    <div className='main-body'>
      <Navbar/>
       <div className="content">
        <Sidebar />

        <div className="task">
          <Taskarea/>

        </div>
        
    </div>
    </div>
  )
}

export default App
