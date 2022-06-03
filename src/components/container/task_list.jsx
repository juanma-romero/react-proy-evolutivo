import React, {useState, useEffect} from 'react';
import { LEVELS } from '../../models/levels.enum';
import { Task } from '../../models/task.class';
import TaskForm from '../pure/forms/taskForm';
import TaskComponent from '../pure/task';

const TaskListComponent = () => {
    const defaultTask1 = new Task('Example1', 'Description1', false, LEVELS.NORMAL);
    const defaultTask2 = new Task('Example2', 'Description2', true, LEVELS.BLOCKING);
    const defaultTask3 = new Task('Example3', 'Description3', false, LEVELS.URGENT);


    const [task, setTask] = useState([defaultTask1, defaultTask2, defaultTask3]);
    const [loading, setloading] = useState(true);

    //controlar ciclo de vida del compo
    useEffect(() => {
        console.log('mod tareas')
        setloading(false)
        return () => {
            console.log('componete desaparece')
        };
    }, [task]);


    const changeState = (id) => {
        console.log('cambiar estado')
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
                            <th>Title</th>
                            <th>Description</th>
                            <th>Priority</th>
                            <th>Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                            {task.map((taskInt, index) => {
                                return (
                                    <TaskComponent 
                                        task={taskInt}
                                        key={index}/>
                                )

                            })}
                            {/* aplicar map para rendirazar lista*/}
                            
                        </tbody>
                    </table>
                </div>
                <TaskForm />
            </div>
            
        </div>
    );
}

export default TaskListComponent;


