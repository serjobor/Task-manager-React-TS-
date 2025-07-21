import { useAppSelector, useAppDispatch } from '@hooks';
import { deleteTask, searchTasks } from '@tasksSlice';
import { Link } from 'react-router-dom';
import TaskList from '@TaskList'
import '@styles/TaskList.css';


function HomePage() {
  const tasks = useAppSelector(state => state.tasks.tasks);
  const dispatch = useAppDispatch();

  const handleDeleteTask = (taskId: number) => {
    dispatch(deleteTask(taskId));
  };

  const searchTerm = useAppSelector(state => state.tasks.searchTerm);
  const filteredTasks = tasks.filter(task => 
    task.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(searchTasks(e.target.value));
  };   

  return (
    <div className='all-tasks-container'>
      <div className='header-container'>
        <h1>Task List</h1>
        <div className='search-add-container'>
          <input
            type="text"
            placeholder="Search tasks..."
            value={searchTerm}
            onChange={handleSearch}
            className="search-input"
          />
          <Link to='/task/new' className='add-task-button'>
            Add New Task
          </Link>
        </div>
      </div>

      <TaskList 
        tasks={filteredTasks}
        onDelete={handleDeleteTask}
      />    
    </div>
  )
}

export default HomePage
