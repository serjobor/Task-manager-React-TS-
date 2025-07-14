import TaskDetails from '../components/TaskDetails'
import {useParams} from 'react-router-dom'
import { arrTemplate } from './AllTasks'
import { useState } from 'react';
import type { ITask } from '../components/types/types';

function TaskCard() {
  const param = useParams();
  const [task, setTask] = useState({...arrTemplate[Number(param.id)]});

  const handleSave = (updatedTask: ITask) => {
    arrTemplate[Number(param.id)] = updatedTask;
    setTask(updatedTask);
  };

  return (
    <>
      <TaskDetails 
        key={task.id}
        task={task}
        onSave={handleSave}
      />    
    </>
  )
}

export default TaskCard