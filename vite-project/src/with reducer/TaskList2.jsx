import React, { useState } from 'react';

function TaskList2({ tasks, onChangeTask, onDeleteTask }) {
    return (
        <ul>
            {
                tasks.map((task) => (
                    <li key={task.id}>
                        <Task task={task} onChange={onChangeTask} onDelete={onDeleteTask}></Task>
                    </li>
                ))
            }
        </ul>
    );
}

export default TaskList2;

function Task({ task, onChange, onDelete }) {
    const [isEditing, setIsEditing] = useState(false)
    let taskContent;
    if (isEditing) {
        taskContent = (
            <>
                <input
                    value={task.text}
                    onChange={(e) => {
                        onChange({
                            ...task,
                            text: e.target.value
                        })
                    }}
                />
                <button className='btn bg-slate-300 rounded-lg px-2 ml-2' onClick={() => setIsEditing(false)}>Save</button>
            </>
        )
    } else {
        taskContent = (
            <>
                {task.text}
                <button className='btn bg-slate-300 rounded-lg px-2 ml-2' onClick={() => setIsEditing(true)}>Edit</button>
            </>
        )
    }
    return (
        <label>
            <input
                type="checkbox"
                checked={task.done}
                onChange={(e) => {
                    onChange(
                        {
                            ...task,
                            done: e.target.checked
                        }
                    );
                }}
            />
            {taskContent}
            <button className='btn bg-slate-300 rounded-lg px-2 ml-2' onClick={() => onDelete(task.id)}>Delete</button>
        </label>
    )
}