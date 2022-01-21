import './App.css';
import { Home } from './components/Home';
import { Routes, Route } from "react-router-dom";
import { Navbar } from './components/navbar';
// import {Navbar} from './components/navbar';
import { Login } from './components/login';
import { PreviewPage } from './components/Preview';
import { Subscribe } from './components/subscribe';
function App() {
  return (
    <div style={{ padding: "0px", margin: "0px", boxSizing: "border-box" }}>
      <div>
      <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/movies/:movie_name" element={<PreviewPage />}></Route>
        <Route path="*" element={<h1>Page Not Found</h1>}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/subscribe" element={<Subscribe />}></Route>
      </Routes>
    </div>
  );
}

export default App;
