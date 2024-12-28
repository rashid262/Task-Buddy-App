import React, {useState} from 'react'

const TaskForm = () => {
    const [task, setTask ] = useState('');
    const [priority, setPriority] = useState('Medium');
    const [category, setCategory] = useState('General');
  return (
    <form>
        <div>
            <input 
                type="text" 
                name="" 
                id="inp"
                onChange={(e) => setTask(e.target.value)}
                placeholder='Enter your task'
                required
            /> <span><button type="submit">Add Task</button></span>
        </div>

        <div id='btns'>
            <select value={priority} onChange={(e)=> setPriority(e.target.value)}>
                <option value="High">High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
            </select>
            <select value={category} onChange={(e)=> setCategory(e.target.value)}>
                <option value="General">General</option>
                <option value="Work">Work</option>
                <option value="Personal">Personal</option>
            </select>
        </div>
    </form>
  )
}

export default TaskForm