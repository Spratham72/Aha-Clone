import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

import './navbar.css'

export const Navbar=()=>{
    const [sign, setSign] = useState(false);
    useEffect(()=>{
        if(localStorage.getItem("user")!==null){
            setSign(true);
        };
       setSign(true) 
    },[])
    const handleSingout = () => {
        localStorage.removeItem("user");
        setSign(false);
    }
    const handleSignin = () => {
        setTimeout(() => {
            setSign(!sign);
        },15000)
    }
    return <><div className="nav">
        <div className="left">
        <Link to="/"><img className="logo" src="https://www.aha.video/aha-logo.db810aeaa42b356a86a7.png" alt="logo" /></Link>
        <Link to="/">Home</Link>
        <Link to="/movies">Movies</Link>
        <Link to="/show">Show</Link>
        <Link to="/kids">Kids</Link>
        <Link to="/myaha">My aha</Link>
        </div>
        
        <div className="search"><input type="text"/></div>
        <img src="https://www.aha.video/search-icon.704c679b82e10dd8379c.svg" alt=""  className="searchIcon"/>
        <img src="https://www.aha.video/language-icon.ef88ebcc6b1bcda97fc4.svg" style={{marginLeft:"2%"}} width={"1.5%"} alt=""  className="langugageIcon"/>
        
        <div className="right">
        <Link to="/subscribe"><button  style={{marginLeft: "2em"}} className="subscribe">Subscribe Now</button></Link>
            <div style={{marginLeft: "2em"}} className="signin"><img src="https://www.aha.video/assets/icons/svg/avatar_profile.svg" alt="user" /> {!sign ?<Link to ={"/login"}> <p onClick={handleSignin} >Sign In</p> </Link>: <p onClick={handleSingout} style={{color:"white"}}>Logout</p>}
                
                </div>
        </div>
        
    </div>
    
    </>
}