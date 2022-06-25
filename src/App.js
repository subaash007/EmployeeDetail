import './App.css';
import CreateEmployee from './components/CreateEmployee';
import EmployeeList from './components/EmployeeList';
import Header from './components/Header';
import {Route, Routes} from 'react-router'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
      <div>
      <ToastContainer />
            </div>
      <Header/>
      <Routes>
        <Route path='/employee' element={<CreateEmployee/>}/>
        <Route path= '/employees' element={<EmployeeList/>}/>
        <Route path= '/employee/:id' element={<CreateEmployee/>}/>
        <Route path='*' element={<EmployeeList/>} />
      </Routes>
    </div>
  );
}

export default App;
