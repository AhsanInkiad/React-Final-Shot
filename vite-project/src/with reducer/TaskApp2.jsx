import React, { useReducer, useState } from 'react';
import TaskList2 from './TaskList2';
import AddTask2 from './AddTask2';
import tasksReducer from './my_reducer';

let nextId = 3;
const initialTasks = [
    { id: 0, text: 'Visit Kafka Museum', done: true },
    { id: 1, text: 'Watch a puppet show', done: false },
    { id: 2, text: 'Lennon Wall pic', done: false },
];
function TaskApp2() {
    const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);

    function handleAddTask(text) {
        dispatch(
            // action object
            {
                type: 'added',
                id: nextId++,
                text: text,
                done: false
            }
        );
    }

    function handleChangeTask(task) {
        dispatch(
            // action object
            {
                type: "changed",
                task: task
            }
        )
    }

    function handleDeleteTask(taskId) {
        dispatch(
            // action object
            {
                type: "deleted",
                id: taskId
            }
        )
    }
    return (
        <>
            <h1>Without reducer</h1>
            <AddTask2 onAddTask={handleAddTask}></AddTask2>
            <TaskList2
                tasks={tasks}
                onChangeTask={handleChangeTask}
                onDeleteTask={handleDeleteTask}
            ></TaskList2>
        </>
    );
}

export default TaskApp2;