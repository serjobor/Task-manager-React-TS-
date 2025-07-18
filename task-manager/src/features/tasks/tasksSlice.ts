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