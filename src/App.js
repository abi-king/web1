import './App.css';
import Navbar from "../src/components/navbar/Navbar" 
import {Route, Routes} from "react-router-dom"
import Login from './router/login/Login';

function App() {
  return (
    <div className="App">
      <Navbar/>



      <Routes>
        <Route path='/'/>
        <Route path='/login' element={<Login/>}/>
        
        
      </Routes>

    </div>
  );
}

export default App;
