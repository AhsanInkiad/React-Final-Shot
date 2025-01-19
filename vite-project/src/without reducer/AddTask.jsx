import React, { useState } from 'react';

function AddTask({ onAddTask }) {
    const [text, setText] = useState('');
    return (
        <div className="mb-4">
            <input
                placeholder='Add task'
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <button
                className='btn bg-slate-300 rounded-lg px-2 ml-2'
                onClick={() => {
                    setText('');
                    onAddTask(text)
                }}>
                Add
            </button>
        </div>
    );
}

export default AddTask;