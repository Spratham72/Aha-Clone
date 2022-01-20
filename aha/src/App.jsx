import './App.css';
import SimpleSlider from './components/Carousal';
import { Navbar } from './components/Navbar';
import MultipleItems from "./components/BestOf2021"
import NewReleases from './components/NewRelease';
import SankrathiSpecials from './components/SankrathiSpecial';
import Top10ThisWeek from './components/Top10ThisWeek';
import AhaOriginals from './components/AhaOriginals';
import Handpicked from './components/Handpicked';
import MostWatched from './components/MostWatched';
import UpComing from './components/UpComing';
import Genres from './components/Genres';
import NewlyAdded from './components/NewlyAdded';
import FreeMovies from './components/FreeMovies';
import RecommendedEpisodes from './components/RecommendedEpisodes';
import Thriller from './components/Thriller';
import AhaKids from './components/AhaKids';
import Action from './components/Actions';
import Drama from './components/Drama';
import Crime from './components/Crime';
import Romance from './components/Romance';
import ActorsAZ from './components/ActorsAZ';
import GettingStarted from './components/GettingStarted';
function App() {
  return (
    <div style={{padding:"0px",margin:"0px",boxSizing:"border-box"}}>
      <Navbar />
      <SimpleSlider />
      < MultipleItems />
      < NewReleases />
      < SankrathiSpecials />
      < Top10ThisWeek />
      < AhaOriginals />
      < Handpicked />
      < MostWatched />
      < UpComing />
      < Genres />
      < NewlyAdded />
      <FreeMovies />
      <RecommendedEpisodes />
      < Thriller />
      < AhaKids />
      < Action />
      < Drama />
      <Crime />
      < Romance />
      < ActorsAZ />
      < GettingStarted />
    </div>
  );
}

export default App;
