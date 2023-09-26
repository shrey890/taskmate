import React from 'react'

export const TaskCard = ({task , info ,handleDelete}) => {
    return (
        <li 
            className={task.completed ? 'shadow p-3 mb-5 bg-body-tertiary rounded text-dark fw-bold' : 'fw-bold shadow p-3 mb-5 bg-body-tertiary rounded text-danger' }
        >
            <span>{ task.id } - { task.name } - {info} </span>
            <button className='btn rounded-end-circle btn-danger' onClick={ () => handleDelete(task.id) }>delete</button>
        </li>
    )
}
