
import './App.css';
import { Login } from './components/login';
import { Navbar } from './components/navbar';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import { Subscribe } from './components/subscribe';
function App() {
  return (
    <BrowserRouter>
  
    <div className="App">
      <Routes>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/' element={<Navbar/>}></Route>
       <Route path="/subscribe" element={<Subscribe/>}></Route>
      </Routes>
     
     
    </div>
    </BrowserRouter>
  );
}

export default App;
