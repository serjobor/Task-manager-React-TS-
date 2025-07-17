import { configureStore } from '@reduxjs/toolkit';
import tasksReducer from '../features/tasks/tasksSlice';

// const loadState = () => {
//   try {
//     const serializedState = localStorage.getItem('reduxState');
//     return serializedState ? JSON.parse(serializedState) : undefined;
//   } catch (err) {
//     return undefined;
//   }
// };

const saveState = (state: RootState) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('reduxState', serializedState);
  } catch {
    // ignore errors
  }
};

// const preloadedState = loadState()

export const store = configureStore({
  reducer: {
    tasks: tasksReducer
  }
})

store.subscribe(() => {
  saveState(store.getState());
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch