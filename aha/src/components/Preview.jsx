import { useParams } from "react-router-dom"
import "./previewStyle.css";
import { FaCheck } from 'react-icons/fa';
import {BiShareAlt}from "react-icons/bi"
import Action from "./Actions";
import Popular from "./Popular";
import Similar from "./Similar";
import { Footer } from "./Footer";
export const PreviewPage = () => {
    let {movie_name} = useParams();
  console.log("movie_name", movie_name)
  movie_name=movie_name.replace("_"," ")
    return (
<div>
<div className="preView">
          <img src="https://image-resizer-cloud-api.akamaized.net/image/4A651C09-9C7D-49CE-B03F-6495DC54C043//0-3x1.jpg?width=1920" alt="previewImage"/>
        <div className="details">
        <div className="tags">
          <div className="premiumDiv">
            <p>  Premium </p>
          </div>
          <div className="premiumDiv">
          <p>U/A</p>
          </div>
          <div className="premiumDiv">
          <p>7+</p>
          </div>
        </div>
        <div>
            <h1 style={{ fontSize: "4.3em", position: "absolute", top: "190px", marginLeft: "0.4em", color: "white" }}>{movie_name}</h1>
          </div>
          <div className="duration">
            <p>2020 • 2hr 28min • Romance Comedy</p>
            <p style={{color: "white",width:"40%"}}>
              Thank You Brother' Is About Two Strangers, A Rich Spoilt Young Man And A Pregnant Woman Who Get Stuck In An Elevator. The Story Reaches A Twist When Her Labor Pain Begins While They Still Wait For Help To Arrive.
            </p>
            <button style={{backgroundColor: "#2d3037",marginTop:"1em",padding: "0.7em 2.5em",cursor:"pointer" ,borderRadius: "1.5em",border:".5px solid silver",color:"white",fontSize:"1em"}}>Play Trailer</button>&emsp;
            <button style={{backgroundColor: "#ff6d2e",marginTop:"1em",padding: "0.7em 2.5em",cursor:"pointer" ,borderRadius: "1.5em",border:"none",color:"white",fontSize:"1em"}}>Subscribe</button>
            <br></br><br>
            </br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
            <button style={{ backgroundColor: "#3b4046",color:"silver",fontSize:"2em",border:"none",borderRadius:"50%",cursor:"pointer" }}><i class="fa fa-share-alt" aria-hidden="true"></i></button>
          </div> 
        </div>
        </div>
        <div style={{display:"flex",marginLeft:"1em"}}>
          <div>
            <p style={{fontSize:"2em"  ,color:"white"}}>Cast </p></div>
          <div>
            <p style={{fontSize:"2em",marginLeft:"1em" ,color:"white"}}>Details</p>
        </div>
        </div>
      <div>
        <Similar />
          <Popular />
          <Footer />
      </div>
      
          
      </div>
    )
}