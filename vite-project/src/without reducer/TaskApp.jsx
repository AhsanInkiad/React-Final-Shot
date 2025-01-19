import React, { useState } from 'react';
import AddTask from './AddTask';
import TaskList from './TaskList';

let nextId = 3;
const initialTasks = [
  {id: 0, text: 'Visit Kafka Museum', done: true},
  {id: 1, text: 'Watch a puppet show', done: false},
  {id: 2, text: 'Lennon Wall pic', done: false},
];

function TaskApp() {
    const [tasks, setTasks] = useState(initialTasks);

    function handleAddTask(text){
        setTasks([
            ...tasks,
            {
                id: nextId++,
                text: text,
                done: false
            }
        ]);
    }

    function handleChangeTask(task){
        setTasks(
            tasks.map((t)=>{
                if( t.id === task.id){
                    return task;
                } else {
                    return t;
                }
            })
        )
    }

    function handleDeleteTask(taskId){
        setTasks(tasks.filter((t)=>t.id!== taskId))
    }
    return (
        <>
            <h1>Without reducer</h1>
            <AddTask onAddTask={handleAddTask}></AddTask>
            <TaskList
                tasks = {tasks}
                onChangeTask={handleChangeTask}
                onDeleteTask={handleDeleteTask}
            ></TaskList>
        </>
    );
}

export default TaskApp;