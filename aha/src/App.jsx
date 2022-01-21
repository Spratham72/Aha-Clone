import './App.css';
import SimpleSlider from './components/Carousal';
import { Navbar } from './components/Navbar';
import SankrathiSpecials from './components/SankrathiSpecial';
import Top10ThisWeek from './components/Top10ThisWeek';
import AhaOriginals from './components/AhaOriginals';

import Action from './components/Actions';
import Crime from './components/Crime';
import Romance from './components/Romance';
import ActorsAZ from './components/ActorsAZ';
import GettingStarted from './components/GettingStarted';
function App() {
  return (
    <div style={{padding:"0px",margin:"0px",boxSizing:"border-box"}}>
      <Navbar />
      <SimpleSlider />
      
      < SankrathiSpecials />
      < Top10ThisWeek />
      < AhaOriginals />
      < Action />
      {/* < Drama /> */}
      <Crime />
      < Romance />
      < ActorsAZ />
      < GettingStarted />
    </div>
  );
}

export default App;
