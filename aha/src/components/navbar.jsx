import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import {GoogleLogout} from 'react-google-login';
import './navbar.css'
const clientId = "48145435660-gsp4inkbiebdeadn4af36dmrd7ecbe3u.apps.googleusercontent.com";
export const Navbar=()=>{
    const[sign,setSign]=useState(false);
    useEffect(()=>{
        if(localStorage.getItem("user")!==null){
            setSign(true);
        }
    },[])
    const onSignoutSuccess = () => {
        alert("You have been logged out successfully");
        console.clear();
     
       
    };
    return <><div className="nav">
        <div className="left">
        <Link to="/home"><img className="logo" src="https://www.aha.video/aha-logo.db810aeaa42b356a86a7.png" alt="logo" /></Link>
        <Link to="/home">Home</Link>
        <Link to="/movies">Movies</Link>
        <Link to="/show">Show</Link>
        <Link to="/kids">Kids</Link>
        <Link to="/myaha">My aha</Link>
        </div>
        
        <div className="search"><input type="text"/></div>
        <img src="https://www.aha.video/search-icon.704c679b82e10dd8379c.svg" alt=""  className="searchIcon"/>
        
        <div className="right">
        <Link to="/subscribe"><button className="subscribe">Subscribe Now</button></Link>
        <Link to="/login"><div className="signin"><img src="https://www.aha.video/assets/icons/svg/avatar_profile.svg" alt="user"/> {!sign?<p>Sign In</p>: <GoogleLogout
                ClientId={clientId}
                    buttonText="Log out"
                    onLogoutSuccess={onSignoutSuccess}
                    icon={false}
                >
                </GoogleLogout>}</div></Link>
        </div>
        
    </div>
    
    </>
}