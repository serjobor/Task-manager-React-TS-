import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { ITask } from '@types';

export interface TasksState {
  tasks: ITask[];
  searchQuery: string;
  loading: boolean;
  error: string | null;
}

const initialState: TasksState = {
  tasks: [],
  searchQuery: '',
  loading: false,
  error: null
};

// Получить все задачи
export const fetchTasks = createAsyncThunk('tasks/fetchTasks', async () => {
  const response = await fetch('http://localhost:3001/tasks');
  return await response.json();
});

// Получить задачу по ID
export const fetchTaskById = createAsyncThunk('tasks/fetchTaskById', async (id: number) => {
  const response = await fetch(`http://localhost:3001/tasks/${id}`);
  return await response.json();
});

// Поиск задачи по названию
export const searchTasks = createAsyncThunk(
  'tasks/searchTasks',
  async (searchTerm: string) => {
    if (!searchTerm.trim()) {
      const response = await fetch('http://localhost:3001/tasks');
      return await response.json();
    }

    const response = await fetch(`http://localhost:3001/tasks?title=${searchTerm}`);
    return await response.json();
  }
);

// Создать новую задачу
export const createTask = createAsyncThunk('tasks/createTask', async (task: Omit<ITask, 'id' | 'dateCreated'>) => {
  const response = await fetch('http://localhost:3001/tasks', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(task),
  });
  return await response.json();
});

// Обновить задачу
export const updateTask = createAsyncThunk('tasks/updateTask', async (task: ITask) => {
  const response = await fetch(`http://localhost:3001/tasks/${task.id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(task),
  });
  return await response.json();
});

// Удалить задачу
export const deleteTask = createAsyncThunk('tasks/deleteTask', async (id: number) => {
  await fetch(`http://localhost:3001/tasks/${id}`, {
    method: 'DELETE',
  });
  return id;
});

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    clearSearch: (state) => {
      state.searchQuery = '';
    }
  },
  extraReducers: (builder) => {
    builder
      // Обработка состояний fetchTasks
      .addCase(fetchTasks.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTasks.fulfilled, (state, action) => {
        state.loading = false;
        state.tasks = action.payload;
      })
      .addCase(fetchTasks.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch tasks';
      })

      // Обработка состояний searchTasks
      .addCase(searchTasks.fulfilled, (state, action) => {
        state.tasks = action.payload; 
        state.searchQuery = action.meta.arg;
        state.loading = false;
      })

      // Обработка состояний createTask
      .addCase(createTask.fulfilled, (state, action) => {
        state.tasks.push(action.payload);
      })

      // Обработка состояний updateTask
      .addCase(updateTask.fulfilled, (state, action) => {
        const index = state.tasks.findIndex(task => task.id === action.payload.id);
        if (index !== -1) {
          state.tasks[index] = action.payload;
        }
      })
      // Обработка состояний deleteTask
      .addCase(deleteTask.fulfilled, (state, action) => {
        state.tasks = state.tasks.filter(task => task.id !== action.payload);
      });
  },
});

export default tasksSlice.reducer;
export const selectTaskById = (
  state: { tasks: TasksState }, taskId: number
) => state.tasks.tasks.find(task => task.id === taskId);