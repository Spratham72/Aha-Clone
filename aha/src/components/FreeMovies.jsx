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


export default class FreeMovies extends Component {
  render() {
    const settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 10,
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
        <h2 className="title" style={{color:"white",marginLeft:"10px"}}> Free Movies </h2>
        <Slider {...settings} >
          <div   className="cards">
            <img src="https://image-resizer-cloud-api.akamaized.net/image/A96E2CD1-1E6D-46A5-A533-42B0E775D30B/0-2x3.jpg?width=181" alt="card1" />
            
            <p>Nyayam Kaavali</p>
          </div>
          <div className="cards">
            <img src="https://image-resizer-cloud-api.akamaized.net/image/C983D284-1C78-4749-BD38-BF8F060E9878/0-2x3.jpg?width=181" alt="card1" />
            
            <p>Seethamma Vakitlo Sirimalle Chettu</p>
          </div>
          <div className="cards">
            <img src="https://image-resizer-cloud-api.akamaized.net/image/F65D2ED4-FA24-415A-9B86-A537814A1FC4/0-2x3.jpg?width=181" alt="card1" />
                 
            <p>Fida</p>
          </div>
          <div className="cards">
            <img src="https://image-resizer-cloud-api.akamaized.net/image/4F464F57-D634-438E-9DAB-B59C873B7F8F/0-2x3.jpg?width=181" alt="card1"/>
                        <div className="premiumTag">
            <img src="https://www.aha.video/premium-tag.e5df97bbb026e5ce238e.svg" alt="premiumTag" />
            </div>
            <p>Life Is Beautiful</p>
          </div>
          <div className="cards">
            <img src="https://image-resizer-cloud-api.akamaized.net/image/FFA1C59B-7E6C-4255-8847-202A414580B9/0-2x3.jpg?width=181" alt="card1"/>
                    
            <p>Khakee</p>
          </div>
          <div className="cards">
            <img src="https://image-resizer-cloud-api.akamaized.net/image/2719F7A0-CA9A-4B41-B590-4DE8A1B77F8D/0-2x3.jpg?width=181" alt="card1"/>
                    
            <p>Adhurs</p>
          </div>
          <div className="cards">
            <img src="https://image-resizer-cloud-api.akamaized.net/image/EF83055D-0E2D-49AC-9404-EC8617510EA0/0-2x3.jpg?width=181" alt="card1"/>
                     
            <p>Dev</p>
          </div>
          <div className="cards">
            <img src="https://image-resizer-cloud-api.akamaized.net/image/BDB45E67-D4F1-4514-B186-A8C0B4CEBE48/0-2x3.jpg?width=181" alt="card1"/>
                      
            <p>Magadheera</p>
          </div>
          <div className="cards">
            <img src="https://image-resizer-cloud-api.akamaized.net/image/E84C8ADB-A5CE-4616-8630-9C0187BFD91F/0-2x3.jpg?width=181" alt="card1"/>
                       
            <p>Vedaam</p>
          </div>
          <div className="cards">
            <img src="https://image-resizer-cloud-api.akamaized.net/image/C8A02681-1821-4F62-AEF2-4B8811DAE5D2/0-2x3.jpg?width=181" alt="card1"/>
                       
            <p>Yevadu</p>
          </div>
          <div className="cards">
            <img src="https://image-resizer-cloud-api.akamaized.net/image/FBC6F04D-4E11-43BE-8078-23090E24159F/0-2x3.jpg?width=181" alt="card1"/>
                    
            <p>Kedi</p>
          </div>
          <div className="cards">
            <img src="https://image-resizer-cloud-api.akamaized.net/image/0B9AA530-2292-4EDD-BB38-CA847AD63A5F/0-2x3.jpg?width=181" alt="card1"/>
                      
            <p>Jakkanna</p>
          </div>
          <div className="cards">
            <img src="https://image-resizer-cloud-api.akamaized.net/image/BF68B3F1-8CCF-4DD1-A3EF-A6B6E1BEDA7C/0-2x3.jpg?width=181" alt="card1"/>
                      
            <p>Style</p>
          </div>
          <div className="cards">
            <img src="https://image-resizer-cloud-api.akamaized.net/image/C58B411E-29FC-496C-B549-1FBD9CC47F04/0-2x3.jpg?width=181" alt="card1"/>
                      
            <p>Sindhuram</p>
          </div>
          <div className="cards">
            <img src="https://image-resizer-cloud-api.akamaized.net/image/9A8AF745-EB7E-44C4-A10F-C746A8D1B524/0-2x3.jpg?width=181" alt="card1"/>
                      
            <p>Mayalodu</p>
          </div>
          <div className="cards">
            <img src="https://image-resizer-cloud-api.akamaized.net/image/7B100A61-FA40-4AB3-BA68-23B5A8C5CE00/0-2x3.jpg?width=181" alt="card1"/>
                      
            <p>Awaara</p>
          </div>
          <div className="cards">
            <img src="https://image-resizer-cloud-api.akamaized.net/image/74764EC2-9CAC-4376-B8DF-DEDCC7BBDB97/0-2x3.jpg?width=181" alt="card1"/>
                      
            <p>Yamaleela</p>
          </div>
          <div className="cards">
            <img src="https://image-resizer-cloud-api.akamaized.net/image/1AE33B57-4946-4789-B0CD-A3D80DE283AE/0-2x3.jpg?width=181" alt="card1"/>
                      
            <p>Yem Maya Chesave</p>
          </div>
          <div className="cards">
            <img src="https://image-resizer-cloud-api.akamaized.net/image/9150A408-48BB-4094-93E8-2DA973B6B574/0-2x3.jpg?width=181" alt="card1"/>
                      
            <p>Parugu</p>
          </div>
                    <div className="cards">
            <img src="https://image-resizer-cloud-api.akamaized.net/image/BE920FF8-57E9-456C-A9CA-B224A8F1FC04/0-2x3.jpg?width=181" alt="card1"/>
                      
            <p>Racegurram</p>
          </div>
        </Slider>
      </div>
    );
  }
}