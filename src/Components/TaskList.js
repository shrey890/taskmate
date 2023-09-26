import { useState } from 'react';
import { TaskCard } from './TaskCard';
export const TaskList = ({ task, settask }) => {
    const [show, setShow] = useState(true)
    function handleDelete(id) {
        settask(task.filter(task => id !== task.id))
    }
    return (
        <div className='taskList'>
            <br />
            <h1>Task List</h1>
            <ul>
                <button onClick={ () => setShow(!show) } className='rounded-pill btn btn-secondary'>Hide Task</button>
                <br />
                <br />
                { show && task.map((task) => (
                    <TaskCard task={ task } key={ task.id } handleDelete={ handleDelete } />
                ))
                }
            </ul>
        </div>
    )
}
