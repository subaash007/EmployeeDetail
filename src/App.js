import './App.css';
import CreateEmployee from './components/CreateEmployee';
import EmployeeList from './components/EmployeeList';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header/>
      <CreateEmployee/>
      {/* <EmployeeList/> */}
    </div>
  );
}

export default App;
