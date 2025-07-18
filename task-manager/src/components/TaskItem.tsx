import { type FC} from "react";
import '../styles/TaskItem.css'
import { useNavigate } from 'react-router-dom';
import trashIcon from '../assets/trashIcon.png'

import type {ITask} from './types/types'
import TaskInfoBlock from "./TaskInfoBlock";

interface TaskItemProps {
  task: ITask;
  onDelete: (taskId: number) => void;
}

const TaskItem: FC<TaskItemProps> = ({task, onDelete}) => {
  const router = useNavigate();

  const handleDelete = (e: React.MouseEvent) => {
    e.stopPropagation();
    onDelete(task.id);
  };

  return (
    <>
      <div>
        <div className='taskItem' onClick={() => {router(`/task/${task.id}`)}}>
          <div className='taskItem__head'>
            <h2 className='taskItem__title'>{task.title}</h2>
            <img className='trashIcon' onClick={handleDelete} src={trashIcon} alt="trashIcon" />
          </div>
          <div className='taskItem__info'>
            <TaskInfoBlock task={task} />
          </div>
          <div className='taskItem__description'>Description: {task.description}</div>

          <div>Date created: {task.dateCreated}</div>
        </div>
      </div>
      </>
  )
}

export default TaskItem