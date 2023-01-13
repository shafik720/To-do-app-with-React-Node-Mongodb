import logo from './logo.svg';
import './App.css';

import { Route, Routes } from 'react-router';
import EditTask from './Components/Tasks/EditTask/EditTask';
import AppMainPage from './Components/AppMainPage/AppMainPage';

function App() {
  return (
    <div className="main-div">
      <Routes>
        <Route path='/' element={<AppMainPage></AppMainPage>}></Route>
        <Route path='/editTask/:id' element={<EditTask></EditTask>}></Route>
      </Routes>
    </div>
  );
}

export default App;
