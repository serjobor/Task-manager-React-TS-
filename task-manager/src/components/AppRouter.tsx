import { Routes, Route} from 'react-router-dom'

import AllTasks from '../pages/AllTasks'
import TaskCard from '../pages/TaskCard'
const AppRouter = () => {
  return (
    <>
    <Routes>
      <Route path="/" element={<AllTasks/>}></Route>
      <Route path='/task/:id' element={ <TaskCard/>}></Route>
      <Route path="*" element={<AllTasks/>} />
    </Routes>
    </>
  );
};

export default AppRouter