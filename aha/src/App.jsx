import './App.css';
import { Home } from './components/Home';
import { Routes, Route } from "react-router-dom";
import { Navbar } from './components/Navbar';
import { PreviewPage } from './components/Preview';
// import { PreviewPage } from './components/Preview';
function App() {
  return (
    <div style={{ padding: "0px", margin: "0px", boxSizing: "border-box" }}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/movies/:movie_name" element={<PreviewPage />}></Route>
        <Route path="*" element={<h1>Page Not Found</h1>}></Route>
      </Routes>
    </div>
  );
}

export default App;
