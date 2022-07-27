import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

// Models
import { Task } from '../../models/task.class';
import { LEVELS } from '../../models/levels.enum';

// Importamos la hoja de estilos de task.scss
import '../../styles/task.scss'



const TaskComponent = ({task, complete, remove}) => {
    useEffect(() => {
        console.log('created task')
        return () => {
            console.log('task is going to unmopunt')
        };
    }, [task]);

    function taskLevelBadge() {
        switch (task.level) {
            case LEVELS.NORMAL:
                return(
                    <h6 className='mb-0'><span className='badge bg-primary'>{task.level}</span></h6>
                )
            case LEVELS.URGENT:
                return(
                    <h6 className='mb-0'><span className='badge bg-warning'>{task.level}</span></h6>
                )
            case LEVELS.BLOCKING:
                return(
                    <h6 className='mb-0'><span className='badge bg-danger'>{task.level}</span></h6>
                )                     
            default:
                break; 
        }
    }

    function taskCompletedIcon() {
        if (task.completed) {
            return (<i onClick={() => complete(task)} className='bi-toggle-on task-action' style={{color: 'green'}}></i>)
        } else {
            return (<i onClick={() => complete(task)} className='bi-toggle-off task-action' style={{color: 'grey'}}></i>)
        }
    }

    return (
        <tr className='fw-normal'>
            <th>
                <span className='ms-2'>{task.name}</span>
            </th>
            <td className='align-middle'>
                <span>{task.description}</span>
            </td>
            <td className='align-middle'>
                {taskLevelBadge()}
            </td>
            <td className='align-middle'>
                {taskCompletedIcon()}
            <i className='bi-trash task-action' onClick={() => remove(task)} style={{color: 'tomato'}}></i>
            </td>
        </tr>
    );
}

TaskComponent.propTypes = {
    task: PropTypes.instanceOf(Task).isRequired,
    complete: PropTypes.func.isRequired,
    remove: PropTypes.func.isRequired
}


export default TaskComponent;

