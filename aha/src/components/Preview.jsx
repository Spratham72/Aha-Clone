import { useParams } from "react-router-dom"
import "./previewStyle.css";
import Popular from "./Popular";
import Similar from "./Similar";
import { Footer } from "./Footer";
import React from "react";
export const PreviewPage = () => {
  const [heading, setHeading] = React.useState("");
  const [server, setServer] = React.useState([]);
    let {movie_name} = useParams();
    const data = {
      cast: "heroes of movie",
      details:"details of movie"
    };
    movie_name = movie_name.replace("_", " ");
    console.log("movie_name", movie_name);
  React.useEffect(() => {
    fetch(`https://aha-backend.herokuapp.com/movie/${movie_name}`).then((response) => response.json()).then(res=>setServer(res.movie))
},[server])
  console.log("server",server)  
  return (
      <div>
          <div className="preView">
            {/* "https://image-resizer-cloud-api.akamaized.net/image/4A651C09-9C7D-49CE-B03F-6495DC54C043//0-3x1.jpg?width=1920" */}
            <img src={server[0].poster_url} alt="previewImage" />
            <div className="details">
              <div className="tags">
                <div className="premiumDiv">
                  <p>  Premium </p>
                </div>
                <div className="premiumDiv">
                  <p>U/A</p>
                </div>
                <div className="premiumDiv">
                  <p>{server[0].age}</p>
                </div>
              </div>
              <div>
                <h1 style={{ fontSize: "4.3em", position: "absolute", top: "190px", marginLeft: "0.4em", color: "white" }}>{movie_name}</h1>
              </div>
              <div className="duration">
                <p>{server[0].year} • {server[0].time} • Romance Comedy</p>
                <p style={{ color: "white", width: "40%" }}>
                  {server[0].description}
                </p>
                <button style={{ backgroundColor: "#2d3037", marginTop: "1em", padding: "0.7em 2.5em", cursor: "pointer", borderRadius: "1.5em", border: ".5px solid silver", color: "white", fontSize: "1em" }}>Play Trailer</button>&emsp;
                <button style={{ backgroundColor: "#ff6d2e", marginTop: "1em", padding: "0.7em 2.5em", cursor: "pointer", borderRadius: "1.5em", border: "none", color: "white", fontSize: "1em" }}>Subscribe</button>
                <br></br><br>
                </br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
                <button style={{ backgroundColor: "#3b4046", color: "silver", fontSize: "2em", border: "none", borderRadius: "50%", cursor: "pointer" }}><i class="fa fa-share-alt" aria-hidden="true"></i></button>
              </div>
            </div>
          </div>
          <div style={{ display: "flex", marginLeft: "1em" }}>
            <div>
              <p style={{ fontSize: "2em", color: "white", cursor: "pointer", }} >Cast </p></div>
            <div>
              <p style={{ fontSize: "2em", marginLeft: "1em", color: "white", cursor: "pointer" }}>Details</p>
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