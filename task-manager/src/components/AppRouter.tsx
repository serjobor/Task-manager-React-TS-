import { Routes, Route} from 'react-router-dom'
import TaskForm from '@pages/TaskForm'
import HomePage from '@pages/HomePage';

const AppRouter = () => {
  return (
    <>
    <Routes>
      <Route path="/" element={<HomePage/>}></Route>
      <Route path="/task/:id?" element={<TaskForm />} />
      <Route path="*" element={<HomePage/>} />
    </Routes>
    </>
  );
};

export default AppRouter