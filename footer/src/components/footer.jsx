
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom"
import "./footer.css"
import { faAlignJustify, faCoffee } from "@fortawesome/free-solid-svg-icons"
export const Footer = () => {

    return (<>
        <div className="o_container">

            <div className="f_container f_flex">
                <div className="f_left_sec">
                    <div>
                        <img src="https://www.aha.video/assets/icons/svg/aha-footer-logo.svg" className="f_image" />
                    </div>
                    <div>
                        <div className="text_font f_contect_us" >Connect with us</div>
                        <div>
                            <a href="https://www.instagram.com/ahavideoin/" target="_blank"><img src="https://www.aha.video/assets/icons/svg/instagram-icon.svg" className="insta_logo" /></a>
                            <a href="https://www.facebook.com/ahavideoIN" target="_blank">
                                <img src="https://www.aha.video/assets/icons/svg/facebook-footer.svg" className="insta_logo" />
                            </a>


                            <a href="https://twitter.com/AhavideoIN" target="_blank">
                                <img src="https://www.aha.video/assets/icons/svg/twitter-icon.svg" className="insta_logo" />
                            </a>

                        </div>
                    </div>
                    <div>
                        <div className="text_font">Download aha mobile app</div>
                        <div>
                            <a href="https://play.google.com/store/apps/details?id=ahaflix.tv">
                                <img src="https://www.aha.video/assets/images/googlePlay.png" className="f_g_play" />
                            </a>

                            <a href="https://apps.apple.com/in/app/aha-ott-movies-webseries/id1488739001">
                                <img src="https://www.aha.video/assets/images/ios.png" className="f_g_play" />
                            </a>

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


        {/* from here is for 900px  */}

        <div className="f_s_o_container">
            <div className="f_container ">
                <div className="f_flex">
                    <div className="f_s_must_watch">
                        Must Watch Movies
                        <div>
                            <a href="#" className='f_anchor'>Krack</a>
                            <a href="#" className='f_anchor'>Naandhi</a>
                            <a href="#" className='f_anchor'>Chaavu Kaburu Challaga</a>
                            <a href="#" className='f_anchor'>Kanulu Kanulanu Dochayante</a>
                        </div>
                    </div>
                    <div className="f_s_must_watch">
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
                </div>
                <div className="f_flex">
                    <div className="f_s_must_watch">
                        Aha Originals
                        <div>
                            <a href="#" className='f_anchor'>Sin</a>
                            <a href="#" className='f_anchor'>Masti's</a>
                            <a href="#" className='f_anchor'>11th Hour</a>
                            <a href="#" className='f_anchor'>Geetha Subramanyam 2020</a>
                        </div>
                    </div>
                    <div className="f_s_must_watch">
                        Genres
                        <div>
                            <a href="#" className='f_anchor'>Drama</a>
                            <a href="#" className='f_anchor'>Comedy</a>
                            <a href="#" className='f_anchor'>Action</a>
                            <a href="#" className='f_anchor'>Romance</a>
                        </div>
                    </div>

                </div>
                <div className="f_flex">
                    <div className="f_s_must_watch">
                        Learn More
                        <div>
                            <a href="#" className='f_anchor'>View Plans</a>
                            <a href="#" className='f_anchor'>About Us</a>
                            <a href="#" className='f_anchor'>FAQs / Help</a>
                            <a href="#" className='f_anchor'>Privacy Policy</a>
                            <a href="#" className='f_anchor'>Terms of Service</a>
                        </div>
                    </div>
                    <div className="f_s_must_watch">
                        <div>
                            <img src="https://www.aha.video/assets/icons/svg/aha-footer-logo.svg" alt="logo" className="f_image" />
                        </div>
                        <div>
                            <div className="text_font f_contect_us" >Connect with us</div>
                            <div>
                                <a href="https://www.instagram.com/ahavideoin/" target="_blank"><img src="https://www.aha.video/assets/icons/svg/instagram-icon.svg" alt="logo" className="insta_logo" /></a>
                                <a href="https://www.facebook.com/ahavideoIN" target="_blank">
                                    <img src="https://www.aha.video/assets/icons/svg/facebook-footer.svg" alt="logo" className="insta_logo" />
                                </a>


                                <a href="https://twitter.com/AhavideoIN" target="_blank">
                                    <img src="https://www.aha.video/assets/icons/svg/twitter-icon.svg" alt="logo" className="insta_logo" />
                                </a>

                            </div>
                        </div>
                        <div>
                            <div className="text_font">Download aha mobile app</div>
                            <div>
                                <a href="https://play.google.com/store/apps/details?id=ahaflix.tv">
                                    <img src="https://www.aha.video/assets/images/googlePlay.png" className="f_g_play" alt="logo" />
                                </a>

                                <a href="https://apps.apple.com/in/app/aha-ott-movies-webseries/id1488739001">
                                    <img src="https://www.aha.video/assets/images/ios.png" className="f_g_play" alt="logo" />
                                </a>

                            </div>
                        </div>

                        <div className="text_font">
                            Contect us : <a href="mailto:support@aha.video" style={{ color: "rgb(255, 109, 46)" }}>support@aha.video</a>
                        </div>


                    </div>


                </div>
                <div>
                    <div className="f_flex powered_sec">
                        <h5 style={{ color: "#96969d", marginTop: "0px", marginRight: "2vw", fontSize: "1.2rem" }}>Powered by</h5>
                        <img className="powered_logo2" src="https://www.aha.video/assets/images/fl_logo.png" alt="logo" />
                    </div>
                    <div style={{ textAlign: 'center', fontSize: "1.4rem", color: 'white' }} > © Copyright 2022 Arha Media and Broadcasting Pvt Ltd. All rights reserved. </div>
                </div>
            </div>
        </div>

        {/* navigation is started from here  */}

        <div className="f_nav_container">
            <div className="f_nav_top">
                <div className="f_nav_top_logo">
                    <img src="https://www.aha.video/aha-logo.db810aeaa42b356a86a7.png" alt="logo" width="100%" />
                </div>
                <div className="f_nav_top_logo2">
                    <img src="https://www.aha.video/language-icon.ef88ebcc6b1bcda97fc4.svg" alt="logo" width="100%" />
                </div>
                <div style={{
                    display: "flex",
                    justifyContent: "space-around"
                }} >
                    <div className="f_nav_top_child">
                        All
                    </div>
                    <div className="f_nav_top_child">
                        Movies
                    </div>
                    <div className="f_nav_top_child">
                        Shows
                    </div>
                    <div className="f_nav_top_child">
                        Kids
                    </div>
                </div>

            </div>
            <div className="f_nav_bottom">
                <a href="#">
                    <div className="f_nav_bottom_child">Home</div>
                </a>
                <a href="#">
                    <div className="f_nav_bottom_child">My aha</div>
                </a>


                <a href="#">
                    <div className="f_nav_bottom_child">Seach</div>
                </a>

                <a href="#">
                    <div className="f_nav_bottom_child">Menu</div>
                </a>

            </div>
        </div>


    </>)
}