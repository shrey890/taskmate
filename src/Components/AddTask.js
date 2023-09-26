import React, { useState } from 'react'
import './AddTask.css'
export const AddTask = ({ task, settask }) => {
    const [taskValue, setTaskValue] = useState('')
    const [progress, setProgress] = useState(false)
    const handleChange = (event) => {
        setTaskValue(event.target.value)
    }
    const handleReset = () => {
        setTaskValue('')
        setProgress(false)
    }
    const handleSubmit = (event) => {
        event.preventDefault()
        if (taskValue.trim() === '') {
            window.alert('Please fill in the task name.')
            return; // Prevent adding a blank task
        }
        const newtask = {
            id: Math.floor(Math.random() * 10000),
            name: taskValue,
            completed: Boolean(progress)
        }
        settask([...task, newtask])
        handleReset()
    }
    return (
        <section className='add-task'>
            <form action="" onSubmit={ handleSubmit }>
                {/* <label htmlFor="task">Task Name : </label> */ }
                <div class="input-group input-group-sm">



                    <span class="input-group-text" id="inputGroup-sizing-lg">Task</span>
                    <input onChange={ handleChange } type="text" name='task' id='task' placeholder='Task Name' value={ taskValue }
                        class="form-control" aria-label="Sizing example input" id="inputGroup-sizing-lg"
                        autoComplete='off' autoFocus />

                </div>
                <br />
                <select className='form-select' onChange={ (event) => setProgress(event.target.value) } value={ progress }>
                    <option value='false'>pending</option>
                    <option value='true '>completed</option>
                </select>
                <br />
                <div className='d-grid gap-2'>

                    <button type='submit' className='btn  btn-primary'>Add Task</button>
                </div>

            </form>
            <p className='lead'>{ taskValue }</p>
            <span onClick={ handleReset } className='btn d-grid gap-2 btn-danger'>Reset </span>
        </section>
    )
}
