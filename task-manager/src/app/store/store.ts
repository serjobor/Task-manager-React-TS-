import { configureStore } from '@reduxjs/toolkit';
import tasksReducer, { type TasksState } from '@tasksSlice';

// Определите тип корневого состояния
export interface RootState {
  tasks: TasksState;
}

// const loadState = (): RootState | undefined => {
//   try {
//     const serializedState = localStorage.getItem('reduxState');
//     return serializedState ? JSON.parse(serializedState) : undefined;
//   } catch (err) {
//     return undefined;
//   }
// };

// const saveState = (state: RootState) => {
//   try {
//     const serializedState = JSON.stringify(state);
//     localStorage.setItem('reduxState', serializedState);
//   } catch {
//     // ignore errors
//   }
// };

// const preloadedState = loadState();

export const store = configureStore({
  reducer: {
    tasks: tasksReducer
  },
  // preloadedState: loadState()
})

// store.subscribe(() => {
//   saveState(store.getState());
// });

// Подписка на изменения store для сохранения в localStorage
// store.subscribe(() => {
//   saveState(store.getState());
// });

export type AppDispatch = typeof store.dispatch;