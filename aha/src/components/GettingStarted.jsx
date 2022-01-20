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


export default class GettingStarted extends Component {
  render() {
    const settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 8,
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
        <h2 className="title" style={{color:"white",marginLeft:"10px"}}> Getting started with aha </h2>
        <Slider {...settings} >
          <div   className="cards">
            <img src="https://image-resizer-cloud-api.akamaized.net/image/3F2C6053-1776-4416-BA15-E8A261077A31/0-16x9.jpg?width=224" alt="card1" />
            <p>How to Upgrade aha 2.0</p>
          </div>
          <div className="cards">
            <img src="https://image-resizer-cloud-api.akamaized.net/image/C7408F51-B483-40E6-8827-B5522678DF0B/0-16x9.jpg?width=224" alt="card1" />
      
            <p>How to connect to TV?</p>
          </div>
          <div className="cards">
            <img src="https://image-resizer-cloud-api.akamaized.net/image/D301CF20-47B9-461A-94A8-533D950B894D/0-16x9.jpg?width=224" alt="card1" />
            <p>How to 'clear cache'</p>
          </div>
          <div className="cards">
            <img src="https://image-resizer-cloud-api.akamaized.net/image/A1227745-B56C-4327-95CB-A173A310EA07/0-16x9.jpg?width=224" alt="card1"/>
            <p>How to use smart features of Video Player on aha</p>
          </div>
          <div className="cards">
            <img src="https://image-resizer-cloud-api.akamaized.net/image/8E058B57-BE1C-42A6-A02F-B2CC60003B3A/0-16x9.jpg?width=224" alt="card1"/>

            <p>How to get help from aha</p>
          </div>
          <div className="cards">
            <img src="https://image-resizer-cloud-api.akamaized.net/image/78262424-57F9-45AF-BF2E-5439268D20B9/0-16x9.jpg?width=224" alt="card1"/>
    
            <p>How to subscribe or re-subscribe to aha</p>
          </div>
          <div className="cards">
            <img src="https://image-resizer-cloud-api.akamaized.net/image/40316E07-630F-407A-9448-EA762F1D6262/0-16x9.jpg?width=224" alt="card1"/>
             
            <p>How to create User Profiles on aha</p>
          </div>
          <div className="cards">
            <img src="https://image-resizer-cloud-api.akamaized.net/image/131C2F74-64ED-4311-B41C-4439ECDAAADB/0-16x9.jpg?width=224" alt="card1"/>
              
            <p>How to enable parental control on aha</p>
          </div>
          <div className="cards">
            <img src="https://image-resizer-cloud-api.akamaized.net/image/016DDE71-A2B8-47DA-8F7E-79282663039B/0-16x9.jpg?width=224" alt="card1"/>
            
            <p>How to discover movies or web series on aha</p>
          </div>
          <div className="cards">
            <img src="https://image-resizer-cloud-api.akamaized.net/image/A75F8362-35C1-4D6B-84A5-BC93146138D1/0-16x9.jpg?width=224" alt="card1"/>
              
            <p>How to select languages in aha</p>
          </div>
          <div className="cards">
            <img src="https://image-resizer-cloud-api.akamaized.net/image/63E29260-7822-4F01-868A-E7C2AD32016F/0-16x9.jpg?width=224" alt="card1"/>
                 
            <p>How to sign in to aha?</p>
          </div>

        </Slider>
      </div>
    );
  }
}