import React, { Component } from "react";
import Slider from "react-slick";
import "./Styles.css";
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", right:"30px",position:"absolute"}}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", position: "absolute", backgroundColor: 'red',height:'100px',width:"100px" }}
      onClick={onClick}
    />
  );
}


export default class Genres extends Component {
  render() {
    const settings = {
      infinite: false,
      speed: 500,
      slidesToShow: 11,
      slidesToScroll: 3,
      arrows: true,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 3,
            infinite: true,
            // dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        }
      ]
    };
    return (
      <div >
        <h2 className="title" style={{color:"white",marginLeft:"10px"}}> Genres</h2>
        <Slider {...settings} >
          <div   className="cards genres">
            <img src="https://image-resizer-cloud-api.akamaized.net/image/043D44D4-3207-495C-BE41-3408EF030E2F/3-1x1.jpg?width=150" alt="card1" />           
            <p>Drama</p>
          </div>
          <div className="cards genres">
            <img src="https://image-resizer-cloud-api.akamaized.net/image/7F4940AA-9AED-4423-BE07-99444BB2AF8E/3-1x1.jpg?width=150" alt="card1" />
            <p>Action</p>
          </div>
          <div className="cards genres">
            <img src="https://raw.githubusercontent.com/raman-boddula/React/main/love.png" alt="card1" />
                      
            <p>Romance</p>
          </div>
          <div className="cards genres">
            <img src="https://image-resizer-cloud-api.akamaized.net/image/8A4D87E9-A64F-4DEE-93AC-70B18DAB200E/3-1x1.jpg?width=150" alt="card1"/>
                    
            <p>Comedy</p>
          </div>
          <div className="cards genres">
            <img src="https://image-resizer-cloud-api.akamaized.net/image/980B8405-40B2-46AD-B42B-1D32E2904148/3-1x1.jpg?width=150" alt="card1"/>
                     
            <p>Thriller</p>
          </div>
          <div className="cards genres">
            <img src="https://image-resizer-cloud-api.akamaized.net/image/A08999DD-0D95-475A-99FF-63FD0E32C280/3-1x1.jpg?width=150" alt="card1"/>
                    
            <p>Crime</p>
          </div>
          <div className="cards genres">
            <img src="https://image-resizer-cloud-api.akamaized.net/image/3F7F6586-D3E3-429A-9654-04B74B32DF1B/3-1x1.jpg?width=150" alt="card1"/>
                   
            <p>Romance Comedy</p>
          </div>
          <div className="cards genres">
            <img src="https://image-resizer-cloud-api.akamaized.net/image/3EECFEB8-172F-4ED8-9C23-E72E49666F4A/3-1x1.jpg?width=150" alt="card1"/>
                 
            <p>Family Drama</p>
          </div>
          <div className="cards genres">
            <img src="https://image-resizer-cloud-api.akamaized.net/image/BBD54BA4-A014-4725-8D29-3E81FA8928B0/3-1x1.jpg?width=150" alt="card1"/>
                 
            <p>Devotional</p>
          </div>
          <div className="cards genres">
            <img src="https://image-resizer-cloud-api.akamaized.net/image/BCA532C2-B758-4D4D-A129-471320872391/3-1x1.jpg?width=150" alt="card1"/>
               
            <p>Horror Comedy</p>
          </div>
        </Slider>
      </div>
    );
  }
}