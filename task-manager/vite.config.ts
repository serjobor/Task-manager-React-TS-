import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@store': path.resolve(__dirname, './src/app/store/store'),
      '@hooks': path.resolve(__dirname, './src/app/store/hooks'),
      
      '@AppRouter': path.resolve(__dirname, './src/app/AppRouter'),

      '@trashIcon': path.resolve(__dirname, './src/assets/trashIcon.png'),

      '@types': path.resolve(__dirname, 'src/entities/task/types'),
      '@TaskInfoBlock': path.resolve(__dirname, 'src/entities/task/TaskInfoBlock'),

      '@tasksSlice': path.resolve(__dirname, './src/features/tasks/model/tasksSlice'),

      '@TaskItem': path.resolve(__dirname, './src/features/tasks/UI/TaskItem'),
      '@TaskList': path.resolve(__dirname, './src/features/tasks/UI/TaskList'),
      '@TaskSelectors': path.resolve(__dirname, './src/features/tasks/UI/TaskSelectors'),

      '@pages': path.resolve(__dirname, './src/pages'),
      
      '@MyButton': path.resolve(__dirname, './src/shared/UI/button'),
      '@MySelect': path.resolve(__dirname, './src/shared/UI/select'),

      '@styles': path.resolve(__dirname, './src/styles'),
    }
  }
})
