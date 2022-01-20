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


export default class UpComing extends Component {
  render() {
    const settings = {
      infinite: false,
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
        <h2 className="title" style={{color:"white",marginLeft:"10px"}}> Upcoming On aha </h2>
        <Slider {...settings} >
          <div   className="cards">
            <img src="https://image-resizer-cloud-api.akamaized.net/image/C5196255-96A6-4B02-9F71-E88D2F64E6F3/0-16x9.jpg?width=224" alt="card1" />
            <p>Hey Jude Trailer</p>
          </div>
          <div className="cards">
            <img src="https://image-resizer-cloud-api.akamaized.net/image/32F6AB8B-9778-432C-A39E-F1241D1229F5/0-16x9.jpg?width=224" alt="card1" />
            <p>Unstoppable Special Episode</p>
          </div>
          <div className="cards">
            <img src="https://image-resizer-cloud-api.akamaized.net/image/1DC3EEC3-20C1-4C7B-AB13-A7AC0D368956/0-16x9.jpg?width=224" alt="card1" />
            <p>Bhamakalapam First Glimpse</p>
          </div>
           <div   className="cards">
            <img src="https://image-resizer-cloud-api.akamaized.net/image/9FD13C35-D470-4F2D-ABF0-757C8FBF18C0/0-16x9.jpg?width=224" alt="card1" />
            <p>Arjuna Phalguna Trailer</p>
          </div>
        </Slider>
      </div>
    );
  }
}