import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

// Models
import { Task } from '../../models/task.class';
import { LEVELS } from '../../models/levels.enum';

// Importamos la hoja de estilos de task.scss
import '../../styles/task.scss'



const TaskComponent = () => {
    return (
        <tr className='fw-normal'>
            <th>
                <span className='ms-2'>{task.name}</span>
            </th>
            <td className='align-middle'>
                <span>{task.description}</span>
            </td>
            <td className='align-middle'>
                <span>{task.level}</span>
            </td>
            <td className='align-middle'>
                <span>{task.completed}</span>
            </td>
        </tr>
    );
}

TaskComponent.propTypes = {
    task: PropTypes.instanceOf(Task)
}


export default TaskComponent;

