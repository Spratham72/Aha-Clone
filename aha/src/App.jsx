import './App.css';
import SimpleSlider from './components/Carousal';
import { Navbar } from './components/Navbar';
import MultipleItems from "./components/BestOf2021"
function App() {
  return (
    <div style={{padding:"0px",margin:"0px",boxSizing:"border-box"}}>
      <Navbar />
      <SimpleSlider />
      < MultipleItems />
      < MultipleItems />
      < MultipleItems />
      < MultipleItems />
    </div>
  );
}

export default App;
