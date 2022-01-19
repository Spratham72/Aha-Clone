import React, { Component } from "react";

import Slider from "react-slick";
import "./Styles.css";
// function SampleNextArrow(props) {
//   const { className, style, onClick } = props;
//   return (
//     <div
//       className={className}
//       style={{ ...style, display: "block", right:"100px",position:"absolute"}}
//       onClick={onClick}
//     />
//   );
// }


// function SamplePrevArrow(props) {
//   const { className, style, onClick } = props;
//   return (
//     <div
//       className={className}
//       style={{ ...style,top:"20px",right:"20px", position: "relative",textAlign: "center",background: "green",height:'100px',width:"100px" }}
//       onClick={onClick}
//     />
//   );
// }

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
      autoplaySpeed: 2000,
        arrows:false,
        appendDots: dots => (
        <div>
            <ul>{dots}</ul>
        </div>
      ),
      // nextArrow: <SampleNextArrow />,
      // prevArrow: <SamplePrevArrow />
    };
    return (
      <div style={{margin: "0px",padding: "0px"}}>
        <Slider {...settings} >
          <div  >
             <img src="https://image-resizer-cloud-api.akamaized.net/image/1DC3EEC3-20C1-4C7B-AB13-A7AC0D368956/0-3x1.jpg?width=1920" alt="image1" />
          </div>
        <div >
      <img src="https://image-resizer-cloud-api.akamaized.net/image/3FB93E6F-C2F5-4379-928B-10CEC8BD4FE6/0-3x1.jpg?width=1920" alt="image2" />
     </div>
     <div >
       <img src="https://image-resizer-cloud-api.akamaized.net/image/AE9D806A-5950-4F13-8FAD-1CFF2AD7DABF/0-3x1.jpg?width=1920" alt="image3" />
     </div>
   <div >
       <img src="https://image-resizer-cloud-api.akamaized.net/image/62D5F973-AE52-4040-9EA8-799E86B04E3D/0-3x1.jpg?width=1920" alt="image4" />
     </div>
     <div >
       <img src="https://image-resizer-cloud-api.akamaized.net/image/082F82D4-9E62-4B95-AC33-97FA05F16989/0-3x1.jpg?width=1920" alt="image5" />
     </div>
     <div >
       <img src="https://image-resizer-cloud-api.akamaized.net/image/4BAD80A8-8D00-4010-B9E3-02F257B86B74/0-3x1.jpg?width=1920" alt="image6" />
     </div>
     <div>
       <img src="https://image-resizer-cloud-api.akamaized.net/image/9663B61A-A91D-47DE-B906-328CF64BD859/0-3x1.jpg?width=1920" alt="image7" />
     </div>
     <div>
       <img src="https://image-resizer-cloud-api.akamaized.net/image/5A8AAB23-17F7-4E49-A299-8D422EA8117B/0-3x1.jpg?width=1920" alt="image8" />
     </div>
     <div>
       <img src="https://image-resizer-cloud-api.akamaized.net/image/1D67B609-AC68-4A94-B80E-D0B8437B5519/0-3x1.jpg?width=1920" alt="image9" />
     </div>  
        </Slider>
      </div>
    );
  }
}
