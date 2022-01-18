import './App.css';
import SimpleSlider from './components/Carousal';
import { Navbar } from './components/Navbar';
import MultipleItems from "./components/BestOf2021"
function App() {
  return (
    <div>
      <Navbar />
      <SimpleSlider />
      < MultipleItems />
    </div>
  );
}

export default App;
