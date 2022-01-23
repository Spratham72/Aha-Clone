import './subscribe.css'
import { Navbar } from './navbar';
export const Subscribe = () => {
  return (
      <>
      <div >
      <div >
      {/* <Navbar /> */}
      </div>
    
    <div >
        <div style={{height:"100px"}}></div>
        
      <h3 style={{color:"#fff",textAlign:"center",fontSize:"2em"}}> Choose a Plan</h3>
      
     <div className="plan" >
     
         <div>
             <h3>Telugu Annual Plan</h3>
             <p>Unlimited 12 Month Ad free access to 100% Telugu <br />Movies and Web Series</p>
             <p>INR 399/ <span style={{fontSize:"smaller"}}>year</span></p>
             <button className='subsButton'> Subscribe</button>
         </div>
         <div>
             <h3>Telugu Quaterly Plan</h3>
             <p>Unlimited 3 Month Ad free access to 100% Telugu <br />Movies and Web Series</p>
             <p>INR 399/ <span style={{fontSize:"smaller"}}>year</span></p>
             <button className='subsButton'>Subscribe</button>
         </div>
     </div>
    </div>
    </div>
    <div style={{display:"flex",margin:"5%", gap:"6%", justifyContent:"center", alignItems:"center"}}>
        <div>
            <img style={{width:"60px"}} src="	https://www.aha.video/fire-tv.6a7c5bd4edc482ab6fdb.png" alt="" />
        </div>
        <div >
            <img style={{width:"60px"}} src="	https://www.aha.video/apple-tv.0cc514784d60b0aeab30.png" alt="" />
        </div>
        <div>
            <img style={{width:"60px"}} src="	https://www.aha.video/android-tv.53c5fa7c25f3187d5380.png" alt="" />
        </div>
        <div>
            <img style={{width:"60px"}} src="		https://www.aha.video/roku.2ce26111eea2042904d8.png" alt="" />
        </div>
        <div>
            <img style={{width:"50px"}} src="	https://www.aha.video/mi.49cd83b5c30b9fbd0ced.png" alt="" />
        </div>
        <div>
            <img style={{width:"60px"}} src="	https://www.aha.video/fire-tv.6a7c5bd4edc482ab6fdb.png" alt="" />
        </div>
    </div>
    </>
  );
};