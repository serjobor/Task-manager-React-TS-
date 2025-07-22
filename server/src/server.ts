import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { ITask } from './types';

// Инициализация сервера
const app = express();
const PORT = 3001;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Хранилище задач в памяти
let tasks: ITask[] = [
  {
    id: 0,
    title: "a Title Task0",
    category: "Bug",
    status: "To Do",
    priority: "Low",
    description: "description",
    dateCreated: '01.01.2025'
  },
  {
    id: 1,
    title: "b Title Task1",
    category: "Feature",
    status: "In Progress",
    priority: "Medium",
    description: "description",
    dateCreated: '02.01.2025'
  },
  {
    id: 2,
    title: "c Title Task2",
    category: "Documentation",
    status: "Done",
    priority: "High",
    description: "description",
    dateCreated: '03.01.2025'
  },
  {
    id: 3,
    title: "d Title Task3",
    category: "Refactor",
    status: "In Progress",
    priority: "Medium",
    description: "description",
    dateCreated: '04.01.2025'
  },
  {
    id: 4,
    title: "i Title Task4",
    category: "Test",
    status: "Done",
    priority: "High",
    description: "description",
    dateCreated: '05.01.2025'
  },
];

// Роуты

// Получить все задачи
app.get('/tasks', (req: Request, res: Response) => {
  const { title } = req.query;
  
  if (title && typeof title === 'string') {
    const filteredTasks = tasks.filter(task => 
      task.title.toLowerCase().includes(title.toLowerCase())
    );
    return res.json(filteredTasks);
  }
  
  res.json(tasks);
});

// Получить задачу по ID
app.get('/tasks/:id', (req: Request, res: Response) => {
  const taskId = parseInt(req.params.id);
  const task = tasks.find(t => t.id === taskId);
  
  if (task) {
    res.json(task);
  } else {
    res.status(404).json({ message: 'Task not found' });
  }
});

// Создать новую задачу
app.post('/tasks', (req: Request, res: Response) => {
  const { title, category, status, priority, description } = req.body;
  
  if (!title || !category || !status || !priority) {
    return res.status(400).json({ message: 'Missing required fields' });
  }
  
  const newTask: ITask = {
    id: Date.now(),
    title,
    category,
    status,
    priority,
    description: description || '',
    dateCreated: new Date().toLocaleDateString()
  };
  
  tasks.push(newTask);
  res.status(201).json(newTask);
});

// Обновить задачу
app.patch('/tasks/:id', (req: Request, res: Response) => {
  const taskId = parseInt(req.params.id);
  const taskIndex = tasks.findIndex(t => t.id === taskId);
  
  if (taskIndex === -1) {
    return res.status(404).json({ message: 'Task not found' });
  }
  
  const updatedTask = {
    ...tasks[taskIndex],
    ...req.body,
    id: taskId // Защищаем ID от изменения
  };
  
  tasks[taskIndex] = updatedTask;
  res.json(updatedTask);
});

// Удалить задачу
app.delete('/tasks/:id', (req: Request, res: Response) => {
  const taskId = parseInt(req.params.id);
  const initialLength = tasks.length;
  
  tasks = tasks.filter(t => t.id !== taskId);
  
  if (tasks.length === initialLength) {
    return res.status(404).json({ message: 'Task not found' });
  }
  
  res.status(204).send();
});

// Запуск сервера
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});