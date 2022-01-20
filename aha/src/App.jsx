import './App.css';
import SimpleSlider from './components/Carousal';
import { Navbar } from './components/Navbar';
import MultipleItems from "./components/BestOf2021"
import NewReleases from './components/NewRelease';
import SankrathiSpecials from './components/SankrathiSpecial';
import Top10ThisWeek from './components/Top10ThisWeek';
function App() {
  return (
    <div style={{padding:"0px",margin:"0px",boxSizing:"border-box"}}>
      <Navbar />
      <SimpleSlider />
      < MultipleItems />
      < NewReleases />
      < SankrathiSpecials />
      < Top10ThisWeek />
    </div>
  );
}

export default App;
