import Register from './components/Register';
import Login from './components/Login';
import Dashboard from './components/Dashboard';  
import People from './components/People'; 
import Hiring from './components/Hiring';
import Salary from './components/Salary';
import Reviews from './components/Reviews';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/people" element={<People />} /> 
      <Route path="/hiring" element={<Hiring />} />
      <Route path="/salary" element={<Salary/>} />
            <Route path="/reviews" element={<Reviews/>}/>


    </Routes>
  );
}

export default App;
