import { type FC } from 'react'

import '../styles/TaskList.css'
import type {ITask} from './types/types'
import TaskItem from './TaskItem'


interface TaskLisTProps {
  tasks: ITask[]
}

const TaskList: FC<TaskLisTProps> = ({tasks}) => {
  return (
    <>    
    <h1>Task List</h1>

    <div className='task__list'>
      {
        tasks.map((task) => (
          <TaskItem key={task.id} task={task}/>
        ))
      }
    </div>
    </>
  )
}

export default TaskList
