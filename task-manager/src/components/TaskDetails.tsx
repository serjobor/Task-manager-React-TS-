import MySelect from './UI/select/MySelect';
import type {ITask} from './types/types'
import { useState, type FC } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/TaskCard.css';

const arrCategory: string[] = ['Bug','Feature','Documentation','Refactor','Test'] as const;
const arrStatus: string[] = ['To Do','In Progress','Done'] as const;
const arrPriority: string[] = ['Low','Medium','High'] as const;

interface TaskDetailsProps {
  task: ITask;
  onSave?: (updatedTask: ITask) => void;
}

const TaskDetails: FC<TaskDetailsProps> = ({task, onSave}) => {
  const [editedTask, setEditedTask] = useState<ITask>({...task});
  const navigate = useNavigate();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setEditedTask(prev => ({...prev, [name]: value}));
  };

  const handleSelectChange = (field: keyof ITask, value: string) => {
    setEditedTask(prev => ({...prev, [field]: value}));
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSave) {
      onSave(editedTask);
    }
    navigate('/');
  };

  const handleExit = () => {
    navigate('/');
  };

  return (
    <div className="task-card">    
      <h1>Task Details</h1>
      <form className='form' onSubmit={handleSave}>
        <input 
          className='form__title'
          type="text" 
          name="title"
          value={editedTask.title}
          onChange={handleInputChange}
        />
        
        <div className='form__select'>
        <div className='select__block'>
          <div>Category</div>
          <MySelect
            key={`category-${editedTask.id}`}
            tagName={editedTask.category}
            arrTags={arrCategory}
            onChange={(value) => handleSelectChange('category', value)}
          />
        </div> 

        <div className='select__block'>
          <div>Status</div>
          <MySelect
            key={`status-${editedTask.id}`}
            tagName={editedTask.status}
            arrTags={arrStatus}
            onChange={(value) => handleSelectChange('status', value)}
          />
        </div> 

        <div className='select__block'>
          <div>Priority</div>
          <MySelect
            key={`priority-${editedTask.id}`}
            tagName={editedTask.priority}
            arrTags={arrPriority}
            onChange={(value) => handleSelectChange('priority', value)}
          />
        </div> 
      </div>
      <textarea 
          className='form__description' 
          name="description"
          value={editedTask.description || ''}
          onChange={handleInputChange}
          placeholder="Enter task description..."
        ></textarea>

        <div className="button-group">
          <button type="submit">Save</button>
          <button type="button" onClick={handleExit}>Exit</button>
        </div>
      </form>
    </div>
  )
}

export default TaskDetails