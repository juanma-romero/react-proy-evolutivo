import React, {useState, useEffect} from 'react';
import { LEVELS } from '../../models/levels.enum';
import { Task } from '../../models/task.class';
import TaskForm from '../pure/forms/taskForm';
import TaskComponent from '../pure/task';

const TaskListComponent = () => {
    const defaultTask1 = new Task('Example1', 'Description1', false, LEVELS.NORMAL);
    const defaultTask2 = new Task('Example2', 'Description2', true, LEVELS.BLOCKING);
    const defaultTask3 = new Task('Example3', 'Description3', false, LEVELS.URGENT);


    const [tasks, setTasks] = useState([defaultTask1, defaultTask2, defaultTask3]);
    const [loading, setloading] = useState(true);

    //controlar ciclo de vida del compo
    useEffect(() => {
        console.log('mod tareas')
        setloading(false)
        return () => {
            console.log('componete desaparece')
        };
    }, [tasks]);


    function completeTask(task) {
        console.log('complete this task', task)
        const index = tasks.indexOf(task)
        const tempTasks = [...tasks]
        tempTasks[index].completed = !tempTasks[index].completed
        setTasks(tempTasks)
    }

    function removeTask(task) {
        console.log('delete this task', task)
        const index = tasks.indexOf(task)
        const tempTasks = [...tasks]
        tempTasks.splice(index, 1)
        setTasks(tempTasks)
    }
    
    function addTask(task) {
        console.log('Add task', task)
        const index = tasks.indexOf(task)
        const tempTasks = [...tasks]
        tempTasks.push(task)
        setTasks(tempTasks)
    }

    return (
        <div className='col-12'>
            <div className='card'>
                <div className='card-header p-3'>
                    <h5>your task </h5>
                </div>
                <div className='card-body' data-mdb-perfect-scrollbar='true' style={ {position: 'relative', height: '400px'} }>
                    <table>
                        <thead>
                        <tr>
                            <th scope='col'>Title</th>
                            <th scope='col'>Description</th>
                            <th scope='col'>Priority</th>
                            <th scope='col'>Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                            {tasks.map((taskInt, index) => {
                                return (
                                    <TaskComponent 
                                        task={taskInt}
                                        key={index}
                                        complete={completeTask}
                                        remove={removeTask}
                                        />
                                )

                            })}
                            {/* aplicar map para rendirazar lista*/}
                            
                        </tbody>
                    </table>
                </div>
                
            </div>
            <TaskForm
                add={addTask}
            />
        </div>
    );
}

export default TaskListComponent;


