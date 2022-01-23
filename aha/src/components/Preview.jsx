import { Link, useParams } from "react-router-dom"
import "./previewStyle.css";
import Popular from "./Popular";
import Similar from "./Similar";
import { Footer } from "./Footer";
import React from "react";
export const PreviewPage = () => {
  const [heading, setHeading] = React.useState("");
  const [cast, setCast] = React.useState(true);
  const [details, setDetails] = React.useState(false);
  const [data, setData] = React.useState([{"_id":"61eb09a39231fa856af3463d","title":"Love Story","actors":[{"name":"Naga Chaitanya","img":"https://image-resizer-cloud-api.akamaized.net/image/naga-chaitanya/0-1x1.jpg?width=143"},{"name":"Sai Pallavi","img":"https://image-resizer-cloud-api.akamaized.net/image/sai-pallavi/0-1x1.jpg?width=143"},{"name":"Easwari rao","img":"https://image-resizer-cloud-api.akamaized.net/image/eswari-rao/0-1x1.jpg?width=143"},{"name":"Rajeev Kanakala","img":"https://image-resizer-cloud-api.akamaized.net/image/rajeev-kanakala/0-1x1.jpg?width=143"},{"name":"Devayani","img":"https://image-resizer-cloud-api.akamaized.net/image/devayani/0-1x1.jpg?width=143"},{"name":"Uttej","img":"https://image-resizer-cloud-api.akamaized.net/image/uttej/0-1x1.jpg?width=143"}],"director":[{"name":"Sekhar Kammula"}],"poster_url":"https://image-resizer-cloud-api.akamaized.net/image/3B231226-EF16-442E-815E-AAEAF5108338//0-3x1.jpg?width=1920","description":"Revanth Is Settled In Hyderabad As A Zumba Trainee, Mounica Comes From A Conservative Upper Cast Family. It Is The Story Of How They Both Face The Problems In The Society In Order To Start A Life Together.","trailer":"https://www.youtube.com/watch?v=1yH_eOxpkwo","studio":"Amigos Creations","premium":"true","age":"13+","year":"2021","time":"2hr 36min"}]);
    let {movie_name} = useParams();
    movie_name = movie_name.replace("_", " ");
    console.log("movie_name", movie_name);
  React.useEffect(() => {
    fetch(`https://aha-backend.herokuapp.com/movie/${movie_name}`).then((response) => response.json()).then(res=>setData(res.movie))
  }, [])

  console.log("data", data)  
  const handleSubscribe = (e) => {
    // e.preventDefault();
    <Link to ={"/subscribe"}></Link>
  }
  const handleYoutube = (link) => {
    window.open (link,'__blank');
  }
  return (
    <div>
        <div className="preView">
          {/* "https://image-resizer-cloud-api.akamaized.net/image/4A651C09-9C7D-49CE-B03F-6495DC54C043//0-3x1.jpg?width=1920" */}
          <img src={data[0].poster_url} alt="previewImage" />
          <div className="details">
            <div className="tags">
              <div className="premiumDiv">
                <p>Premium </p>
              </div>
              <div className="premiumDiv">
                <p>U/A</p>
              </div>
              <div className="premiumDiv">
                <p>{data[0].age}</p>
              </div>
            </div>
            <div>
              <h1 style={{ fontSize: "4.3em", position: "absolute", top: "190px", marginLeft: "0.4em", color: "white" }}>{movie_name}</h1>
            </div>
            <div className="duration">
              <p>{data[0].year} • {data[0].time} • Romance Comedy</p>
              <p style={{ color: "white", width: "40%" }}>
                {data[0].description}
              </p>
              <button style={{ backgroundColor: "#2d3037", marginTop: "1em", padding: "0.7em 2.5em", cursor: "pointer", borderRadius: "1.5em", border: ".5px solid silver", color: "white", fontSize: "1em" }} onClick={()=>handleYoutube(data[0].trailer)}>Play Trailer</button>&emsp;
              <button style={{ backgroundColor: "#ff6d2e", marginTop: "1em", padding: "0.7em 2.5em", cursor: "pointer", borderRadius: "1.5em", border: "none", color: "white", fontSize: "1em" }} onClick={handleSubscribe}>Subscribe</button>
              <br></br><br>
              </br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
              <button style={{ backgroundColor: "#3b4046", color: "silver", fontSize: "2em", border: "none", borderRadius: "50%", cursor: "pointer" }}><i class="fa fa-share-alt" aria-hidden="true"></i></button>
            </div>
          </div>
        </div>
        <div style={{ display: "flex", marginLeft: "1em" }} >
          <div>
          <p style={{ fontSize: "2em", color: "orange", cursor: "pointer", }} onClick={() => {
            setCast(true)
            setDetails(false)
          }}>Cast </p></div>
        
          <div>
            <p style={{ fontSize: "2em", marginLeft: "1em", color: "white", cursor: "pointer" }} onClick={() => {
            setCast(false)
            setDetails(true)
          }} >Details</p>
          </div>
      </div>
      <div style={{ display: "flex", marginLeft: "1em" }} >
        {cast ? <div style={{ display:"flex",color: "white" }}>
          {data[0].actors.map((el) => {
            return(
              <div style={{ marginRight: "1em" }}> <img style={{ borderRadius: "2em" }} src={el.img} alt={el.name} />
                <h4 style={{textAlign:"center"}}>{el.name}</h4>
              </div>
            )
          })}
        </div> : <div style={{ color: "white" }}>
            {
              data[0].director.map((el) => {
                return (
                  <h1>
                   Direcor : {el.name}
                    </h1>
                )
              })
          }</div>}
      </div>
        <div>
          <Similar />
          <Popular />
          <Footer />
        </div>
      </div>
    )
}