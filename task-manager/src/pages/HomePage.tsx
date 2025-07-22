import { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '@hooks';
import { fetchTasks, deleteTask } from '@tasksSlice';
import { Link } from 'react-router-dom';
import TaskList from '@TaskList';
import '@styles/TaskList.css';
import SearchBar from '../features/tasks/UI/SearchBar';

function HomePage() {
  const { tasks, searchQuery, loading, error } = useAppSelector(state => state.tasks);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!searchQuery) {
      dispatch(fetchTasks());
    }
  }, [dispatch, searchQuery]);

  const handleDeleteTask = (taskId: number) => {
    dispatch(deleteTask(taskId));
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="all-tasks-container">
      <div className='header-container'>
        <h1>Task List</h1>
        <Link to="/task/new" className="add-task-button">
          Add New Task
        </Link>
      </div>

      <SearchBar/>

      <TaskList 
        tasks={tasks}
        onDelete={handleDeleteTask}
      />    
    </div>
  );
}

export default HomePage;