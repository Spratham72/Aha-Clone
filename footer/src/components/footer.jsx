
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom"
import "./footer.css"

export const Footer = () => {

    return (<>
        <div className="o_container">
            <div className="f_container f_flex">
                <div className="f_left_sec">
                    <div>
                        <img src="https://www.aha.video/assets/icons/svg/aha-footer-logo.svg" className="f_image" />
                    </div>
                    <div>
                        <div className="text_font" >Connect with us</div>
                        <div>
                            <img src="https://www.aha.video/assets/icons/svg/instagram-icon.svg" className="insta_logo" />
                            <img src="https://www.aha.video/assets/icons/svg/facebook-footer.svg" className="insta_logo" />
                            <img src="https://www.aha.video/assets/icons/svg/twitter-icon.svg" className="insta_logo" />
                        </div>
                    </div>
                    <div>
                        <div className="text_font">Download aha mobile app</div>
                        <div>
                            <img src="https://www.aha.video/assets/images/googlePlay.png" />
                            <img src="https://www.aha.video/assets/images/ios.png" />
                        </div>
                    </div>

                    <div className="text_font">
                        Contect us : <a href="mailto:support@aha.video" style={{ color: "rgb(255, 109, 46)" }}>support@aha.video</a>
                    </div>


                </div>
                <div className="f_flex text_font">
                    <div className="f_maut_sec">
                        Must Watch Movies
                        <div>
                            <a href="#" className='f_anchor'>Krack</a>
                            <a href="#" className='f_anchor'>Naandhi</a>
                            <a href="#" className='f_anchor'>Chaavu Kaburu Challaga</a>
                            <a href="#" className='f_anchor'>Kanulu Kanulanu Dochayante</a>
                        </div>
                    </div>
                    <div className="f_maut_sec">
                        Popular Telugu Movies
                        <div>
                            <a href="#" className='f_anchor'>Sulthan</a>
                            <a href="#" className='f_anchor'>Gaali Sampath</a>
                            <a href="#" className='f_anchor'>Thellavarithe Guruvaram</a>
                            <a href="#" className='f_anchor'>Super Over</a>
                            <a href="#" className='f_anchor'>Mail</a>
                            <a href="#" className='f_anchor'>Anaganaga O Athidhi</a>
                        </div>
                    </div>
                    <div className="f_maut_sec">
                        Aha Originals
                        <div>
                            <a href="#" className='f_anchor'>Sin</a>
                            <a href="#" className='f_anchor'>Masti's</a>
                            <a href="#" className='f_anchor'>11th Hour</a>
                            <a href="#" className='f_anchor'>Geetha Subramanyam 2020</a>
                        </div>
                    </div>
                    <div className="f_maut_sec">
                        Genres
                        <div>
                            <a href="#" className='f_anchor'>Drama</a>
                            <a href="#" className='f_anchor'>Comedy</a>
                            <a href="#" className='f_anchor'>Action</a>
                            <a href="#" className='f_anchor'>Romance</a>
                        </div>
                    </div>
                    <div className="f_maut_sec">
                        Learn More
                        <div>
                            <a href="#" className='f_anchor'>View Plans</a>
                            <a href="#" className='f_anchor'>About Us</a>
                            <a href="#" className='f_anchor'>FAQs / Help</a>
                            <a href="#" className='f_anchor'>Privacy Policy</a>
                            <a href="#" className='f_anchor'>Terms of Service</a>
                        </div>
                    </div>

                </div>

            </div>
            <hr style={{ color: 'white', opacity: "0.1" }} />
            <div className="f_container text_font">
                <div style={{ float: 'left', maxWidth: "60%" }}>
                    <div className="text_font" > © Copyright 2022 Arha Media and Broadcasting Pvt Ltd. All rights reserved. </div>
                </div>
                <div style={{ float: 'right' }}>
                    <div className="f_flex">
                        <h5 style={{ color: "#96969d", marginTop: "0px", marginRight: "7px" }}>Powered by</h5>
                        <img className="powered_logo" src="https://www.aha.video/assets/images/fl_logo.png" />
                    </div>
                </div>
                <div style={{ clear: 'both' }}></div>
            </div>

        </div>



    </>)
}