import { type FC } from "react";
import '../styles/TaskItem.css'
import { useNavigate } from 'react-router-dom';

import type {ITask} from './types/types'

function getColor(nameTag:string): string {
  const arrTags: object = {
    'Bug': 'bug',
    'Feature': 'feature',
    'Documentation': 'documentation',
    'Refactor': 'refactor',
    'Test': 'test',

    'To Do': 'todo',
    'In Progress': 'in-progress',
    'Done': 'done',

    'Low': 'low',
    'Medium': 'medium',
    'High': 'high'
  } as const;

  for (let key in arrTags) {
    if(key === nameTag) {
      return arrTags[key as keyof typeof arrTags];
    };
  }

  return 'error: tag is not find';
}

interface TaskItemProps {
  task: ITask;
}

const TaskItem: FC<TaskItemProps> = ({task}) => {
  const router = useNavigate();

  return (
    <>
      <div>
        <div className='taskItem'>
          <div className='taskItem__head'>
          <h2 className='taskItem__title'>{task.id}. {task.title}</h2>
          <button className='edit__btn' onClick={() => {router(`./task/${task.id}`)}}>Edit</button>
          </div>
          <div className='taskItem__info'>
            <div className='category'>
              <div className='category__title'>Category</div>
              <div className={getColor(task.category)}>{task.category}</div>
            </div>

            <div className='status'>
              <div className='status__title'>Status</div>
              <div className={getColor(task.status)}>{task.status}</div>

            </div>

            <div className='priority'>
              <div className='priority__title'>Priority</div>
              <div className={getColor(task.priority)}>{task.priority}</div>

            </div>
          </div>
          <div className='taskItem__description'>Description: {task.description}</div>
        </div>
      </div>
      </>
  )
}

export default TaskItem