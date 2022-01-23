import React, { useState } from 'react';

import { GoogleLogin, GoogleLogout } from 'react-google-login';
import FacebookLogin from 'react-facebook-login';

import "./login.css";

import { app } from "../configs/firebase";
import { getAuth, RecaptchaVerifier,signInWithPhoneNumber  } from "firebase/auth";
import {  Navigate } from 'react-router-dom';






const clientId = "48145435660-gsp4inkbiebdeadn4af36dmrd7ecbe3u.apps.googleusercontent.com";
export const Login = () => {
  const [loginstate,setLogin]=useState(false);
  const [phnoneNumber,setphn]=useState("");
  const [otpNumber, setotp]=useState("");
  const [page,setpage]=useState(false);
const phone=(e)=>{
  setphn(e.target.value)
}
const auth = getAuth();
const captchaVerify=()=>{
 
window.recaptchaVerifier = new RecaptchaVerifier('sign-in-button', {
  'size': 'invisible',
  'callback': (response) => {
   
    onSignInSubmit();
    console.log("Captcha Verified :" +response)
  }
}, auth);}
var count=0;

const onSignInSubmit=()=>{
  
  if(count===0){
    captchaVerify();
  }
  count++;
  const phoneNumber = "+91"+phnoneNumber;
  console.log(phoneNumber)
  const appVerifier = window.recaptchaVerifier;
  
 
    signInWithPhoneNumber(auth, phoneNumber, appVerifier)
      .then((confirmationResult) => {
        // SMS sent. Prompt user to type the code from the message, then sign the
        // user in with confirmationResult.confirm(code).
        window.confirmationResult = confirmationResult;
        console.log("OTP Sent");
        setLogin(true);
      }).catch((error) => {
        console.log(error)
      });
}
  const responseFacebook = (response) => {
    console.log(response);
  }
 
  const [showloginButton, setShowloginButton] = useState(true);
    const [showlogoutButton, setShowlogoutButton] = useState(false);
    const onLoginSuccess = (res) => {
        console.log('Login Success:', res.profileObj);
        if(localStorage.getItem("user")===null){
          localStorage.setItem("user",JSON.stringify({}))
        }
        localStorage.setItem("user",JSON.stringify(res.profileObj));
        setpage(true)
        setShowloginButton(false);
        setShowlogoutButton(true);
    };

    const onLoginFailure = (res) => {
        console.log('Login Failed:', res);
    };

    const onSignoutSuccess = () => {
        alert("You have been logged out successfully");
        console.clear();
        setShowloginButton(true);
        setShowlogoutButton(false);
       
    };
    const otp=(e)=>{
      setotp(e.target.value)
    }
   const submitOTP=()=>{
    const code = otpNumber;
    window.confirmationResult.confirm(code).then((result) => {
      // User signed in successfully.
      const user = result.user;
      console.log(JSON.stringify(user))
      if(localStorage.getItem("user")===null){
        localStorage.setItem("user",JSON.stringify({}))
      }
      localStorage.setItem("user",JSON.stringify(user));
      setpage(true)
      
    }).catch((error) => {
      // User couldn't sign in (bad verification code?)
      // ...
    });
   }
   if(page){
     return <Navigate to="/"></Navigate>
   }
 

  return !loginstate?(
    <div className="login-component">
      <div className="login">
        <div  className="email__arrow">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="9"
            height="16"
            viewBox="0 0 9 16"
            fill="none"
            className="ng-star-inserted"
          >
            <path
              d="M8.37377 1.70711C8.7643 1.31658 8.7643 0.683418 8.37377 0.292893C7.98325 -0.0976311 7.35008 -0.0976311 6.95956 0.292893L0.292893 6.95956C-0.097631 7.35009 -0.097631 7.98325 0.292893 8.37377L6.95956 15.0404C7.35008 15.431 7.98325 15.431 8.37377 15.0404C8.7643 14.6499 8.7643 14.0168 8.37377 13.6262L2.41421 7.66667L8.37377 1.70711Z"
              fill="#ECECEC"
            ></path>
          </svg>
        </div>
        <div className="email" >
        <p>LET'S GET <br />  STARTED <span className="dot">.</span></p> 
        <div style={{fontSize:"20px", fontWeight:"650"}}>Mobile Number</div>
        <div className="input-mobile">
          <div id='sign-in-button'></div>
           <img src="https://www.aha.video/assets/images/countries/country-in.svg" alt="" />
            <div className="code">+91</div>
            <div className="line"></div><input type="text" onChange={phone}/>
            </div>
           <div className="button" onClick={onSignInSubmit}>Proceed</div>
           <div className="other-options">
             <p>Or, Use one of the following options</p>
           </div>
           <div className="options">
            <div className="option-email">
              <div><img style={{width:"15px", marginBottom:"60%",marginRight:"50%"}} src="https://www.aha.video/email.145527ff74d14f04a19e.png" alt="" /></div>
              <div><p className="option-email-p">Email</p></div>
            </div>
 
            <FacebookLogin
                  cssClass='facebook'
                  appId="878354122841411"
                  fields="name,email,picture"
                  onClick={responseFacebook}
                  textButton='Facebook'
                  icon="fa-facebook"/>
            <div>
            { showloginButton ?
            
                <GoogleLogin
                  
                    clientId={clientId}
                    render={renderProps => (
                  <div onClick={renderProps.onClick} className="google">
                    <div><img style={{width:"15px", marginBottom:"40%",marginRight:"5px"}} src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="" /></div>
                    <div><p className="option-email-p">Sign in</p></div>
                  </div>
                      
                    )}
                  autoLoad={false}
                    buttonText="Sign In"
                    onSuccess={onLoginSuccess}
                    onFailure={onLoginFailure}
                    cookiePolicy={'single_host_origin'}
                    isSignedIn={false}
                /> : null}
            { showlogoutButton ?
                <GoogleLogout
                render={renderProps => (
                  <button  onClick={renderProps.onClick} className='facebook'>Log out</button>
                )}
                    clientId={clientId}
                    buttonText="Log out"
                    onLogoutSuccess={onSignoutSuccess}
                    icon="fa-facebook"
                >
                </GoogleLogout> : null
            }
        </div>
           </div>
           
        </div>
        
      </div>
      
    </div>
  ):(
    <div className="login-component">
      <div className="login">
        <div  className="email__arrow">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="9"
            height="16"
            viewBox="0 0 9 16"
            fill="none"
            className="ng-star-inserted"
          >
            <path
              d="M8.37377 1.70711C8.7643 1.31658 8.7643 0.683418 8.37377 0.292893C7.98325 -0.0976311 7.35008 -0.0976311 6.95956 0.292893L0.292893 6.95956C-0.097631 7.35009 -0.097631 7.98325 0.292893 8.37377L6.95956 15.0404C7.35008 15.431 7.98325 15.431 8.37377 15.0404C8.7643 14.6499 8.7643 14.0168 8.37377 13.6262L2.41421 7.66667L8.37377 1.70711Z"
              fill="#ECECEC"
            ></path>
          </svg>
        </div>
        <div className="email" >
        <p>VERIFY  <br />  YOUR OTP <span className="dot">.</span></p> 
        <div style={{fontSize:"20px", fontWeight:"650"}}>OTP was sent to</div>
        <div style={{fontSize:"20px", fontWeight:"650"}}>+91 {phnoneNumber}</div>
        <div className="input-mobile">
          <input type="text" onChange={otp}/>
            </div>
           <div className="button" onClick={submitOTP}>Submit</div>
           <div className="other-options">
             <p>By creating an account, you adhere to the <br/> <span style={{color:"#ff6d2e"}}> Terms Of Service and Privacy Policy</span></p>
           </div>
          
 
           
        </div>
           </div>
           
        </div>
        
  );
};