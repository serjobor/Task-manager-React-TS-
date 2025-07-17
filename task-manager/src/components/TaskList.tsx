import { type FC } from 'react'

import '../styles/TaskList.css'
import type {ITask} from './types/types'
import TaskItem from './TaskItem'

interface TaskLisTProps {
  tasks: ITask[];
  onDelete: (taskId: number) => void;
}

const TaskList: FC<TaskLisTProps> = ({tasks, onDelete}) => {
  return (
    <>    
    <div className='task__list'>
      {
        tasks.map((task) => (
          <TaskItem 
          key={task.id} 
          task={task}
          onDelete={onDelete}
          />
        ))
      }
    </div>
    </>
  )
}

export default TaskList
