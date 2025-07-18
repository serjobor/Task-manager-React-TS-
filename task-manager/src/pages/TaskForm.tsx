import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '@hooks'
import { createTask, updateTask, selectTaskById } from '@features/tasks/tasksSlice'
import type { ITask } from '@components/types'
import { MyButton } from '@components/UI/button'
import '@styles/TaskForm.css'
import TaskSelectors from '@components/TaskSelectors'

const TaskForm = () => {
  const { id } = useParams<{ id?: string }>();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  
  const existingTask = useAppSelector(state => 
    id ? selectTaskById(state, Number(id)) : null
  );

  const [formData, setFormData] = useState<Omit<ITask, 'id'>>( () => {
    if (existingTask) {
      const { id, ...rest } = existingTask;
      return rest;
    };
    return {
      title: '',
      category: 'Bug',
      status: 'To Do',
      priority: 'Low',
      description: '',
      dateCreated: new Date().toLocaleDateString(),
    };
  })

  useEffect(() => {
    if (existingTask) {
      const { id, ...rest } = existingTask
      setFormData(rest)
    };
  }, [existingTask]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  };

  const handleSelectChange = (field: keyof ITask, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!formData.title.trim()) {
      alert('error title is missing')
      return
    };

    if (id !== 'new') {
      dispatch(updateTask({ ...formData, id: Number(id) }))
    } else {
      dispatch(createTask(formData))
    };
    
    navigate('/');
  }

  const handleCancel = () => {
    navigate('/')
  }

  return (
    <div className="task-form">    
      <h1>{(id !== 'new') ? 'Edit Task' : 'Create new Task'}</h1>
      
      <form className="form" onSubmit={handleSubmit}>
        <input 
          className="form__title"
          type="text" 
          name="title"
          value={formData.title}
          onChange={handleInputChange}
          placeholder="Add title"
          required
        />

        <TaskSelectors
          formData = {formData}
          onChange = {handleSelectChange}
        />

        <textarea 
          className="form__description" 
          name="description"
          value={formData.description}
          onChange={handleInputChange}
          placeholder="Enter task description.."
        />

        <div className="button-group">
          <MyButton 
            type="submit" 
            buttonText={(id !== 'new') ? 'Save' : 'Create'}/>
          <MyButton 
            type="button"
            buttonText='Exit' 
            onClick={handleCancel}
            />
        </div>
      </form>
    </div>
  )
}

export default TaskForm