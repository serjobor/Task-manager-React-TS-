import { useAppSelector, useAppDispatch } from '@hooks';
import { deleteTask } from '@features/tasks/tasksSlice';
import { Link } from 'react-router-dom';
import TaskList from '@components/TaskList'
import '@styles/TaskList.css';


function HomePage() {
  const tasks = useAppSelector(state => state.tasks.tasks);
  const dispatch = useAppDispatch();

  const handleDeleteTask = (taskId: number) => {
    dispatch(deleteTask(taskId));
  };

  return (
    <div className="all-tasks-container">
      <div className='header-container'>
        <h1>Task List</h1>
        <Link to="/task/new" className="add-task-button">
          Add New Task
        </Link>
      </div>

      <TaskList 
        tasks={tasks}
        onDelete={handleDeleteTask}
      />    
    </div>
  )
}

export default HomePage
