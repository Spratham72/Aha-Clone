// import {Routes,Route} from "react-router-dom"
import SimpleSlider from './Carousal';
import { Navbar } from './navbar';
import MultipleItems from "./BestOf2021"
import NewReleases from './NewRelease';
import SankrathiSpecials from './SankrathiSpecial';
import Top10ThisWeek from './Top10ThisWeek';
import AhaOriginals from './AhaOriginals';
import Handpicked from './Handpicked';
import MostWatched from './MostWatched';
import UpComing from './UpComing';
import Genres from './Genres';
import NewlyAdded from './NewlyAdded';
import FreeMovies from './FreeMovies';
import RecommendedEpisodes from './RecommendedEpisodes';
import Thriller from './Thriller';
import AhaKids from './AhaKids';
import Action from './Actions';
import Drama from './Drama';
import Crime from './Crime';
import Romance from './Romance';
import ActorsAZ from './ActorsAZ';
import GettingStarted from './GettingStarted';
import { Footer } from './Footer';
export const Home = () => {
    return (
        <div >
            {/* <Navbar /> */}
            <div style={{height:"10%"}}></div>
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
      < Footer />
        </div>
    )
}