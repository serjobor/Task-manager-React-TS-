import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { ITask } from '@components/types';
// import type { RootState } from '@reduxjs/toolkit/query';

interface TasksState {
  tasks: ITask[];
}

const initialState: TasksState = {
  tasks: [
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
  ],
};

export const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    createTask: (state, action: PayloadAction<Omit<ITask, 'id' | 'dateCreated'>>) => {
      const newTask: ITask = {
        ...action.payload,
        id: Date.now(),
        dateCreated: new Date().toLocaleDateString()
      };
      state.tasks.push(newTask);
    },
    deleteTask: (state, action: PayloadAction<number>) => {
      state.tasks = state.tasks.filter(task => task.id !== action.payload);
    },
    updateTask: (state, action: PayloadAction<ITask>) => {
      const index = state.tasks.findIndex(task => task.id === action.payload.id);
      if (index !== -1) {
        state.tasks[index] = action.payload;
      }
    },
  },
});

export const { createTask, deleteTask, updateTask } = tasksSlice.actions;
export default tasksSlice.reducer;

export const selectTaskById = (state: { tasks: TasksState }, taskId: number) =>
  state.tasks.tasks.find(task => task.id === taskId)