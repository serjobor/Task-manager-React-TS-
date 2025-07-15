import TaskList from '../components/TaskList'
import type { ITask } from '../components/types/types'
import '../styles/TaskList.css';
import { useState } from 'react';

export const arrTemplate: ITask[] = [
  {
    id: 0,
    title: "Title Task",
    category: "Bug",
    status: "To Do",
    priority: "Low",
    description: "description",
    dateCreated: 'test0'
  },
  {
    id: 1,
    title: "Title Task",
    category: "Feature",
    status: "In Progress",
    priority: "Medium",
    description: "description",
    dateCreated: 'test1'
  },
  {
    id: 2,
    title: "Title Task",
    category: "Documentation",
    status: "Done",
    priority: "High",
    description: "description",
    dateCreated: 'test2'
  },
  {
    id: 3,
    title: "Title Task",
    category: "Refactor",
    status: "In Progress",
    priority: "Medium",
    description: "description",
    dateCreated: 'test3'
  },
  {
    id: 4,
    title: "Title Task",
    category: "Test",
    status: "Done",
    priority: "High",
    description: "description",
    dateCreated: 'test4'
  },
];

function AllTasks() {
  const [tasks, setTasks] = useState<ITask[]>(arrTemplate);

  const handleDeleteTask = (taskId: number) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  return (
    <div className="all-tasks-container">
      <TaskList 
      tasks={tasks}
      onDelete={handleDeleteTask}
      />    
    </div>
  )
}

export default AllTasks
