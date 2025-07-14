import TaskList from '../components/TaskList'
import type { ITask } from '../components/types/types'
import '../styles/TaskList.css';

export const arrTemplate: ITask[] = [
  {
    id: 0,
    title: "Title Task",
    category: "Bug",
    status: "To Do",
    priority: "Low",
    description: "description",
  },
  {
    id: 1,
    title: "Title Task",
    category: "Feature",
    status: "In Progress",
    priority: "Medium",
    description: "description",
  },
  {
    id: 2,
    title: "Title Task",
    category: "Documentation",
    status: "Done",
    priority: "High",
    description: "description",
  },
  {
    id: 3,
    title: "Title Task",
    category: "Refactor",
    status: "In Progress",
    priority: "Medium",
    description: "description",
  },
  {
    id: 4,
    title: "Title Task",
    category: "Test",
    status: "Done",
    priority: "High",
    description: "description",
  },
];

function AllTasks() {
  return (
    <div className="all-tasks-container">
      <TaskList tasks={arrTemplate}/>    
    </div>
  )
}

export default AllTasks
