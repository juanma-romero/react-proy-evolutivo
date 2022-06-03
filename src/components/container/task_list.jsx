import React, {useState, useEffect} from 'react';
import { LEVELS } from '../../models/levels.enum';
import { Task } from '../../models/task.class';
import TaskComponent from '../pure/task';

const TaskListComponent = () => {
    const defaultTask = new Task('Example', 'default description', false, LEVELS.NORMAL);

    const [task, setTask] = useState(defaultTask);
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
                            {/* aplicar map para rendirazar lista*/}
                            <TaskComponent task={defaultTask}/>
                        </tbody>
                    </table>
                </div>
            </div>
            
        </div>
    );
}

export default TaskListComponent;


