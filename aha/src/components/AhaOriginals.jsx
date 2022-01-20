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


export default class AhaOriginals extends Component {
  render() {
    const settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 6,
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
        <h2 className="title" style={{color:"white",marginLeft:"10px"}}> Aha Originals </h2>
        <Slider {...settings} >
          <div   className="cards ahaOG">
            <img src="https://image-resizer-cloud-api.akamaized.net/image/AE9D806A-5950-4F13-8FAD-1CFF2AD7DABF/0-2x3.jpg?width=272" alt="card1" />
            <div className="premiumTag tagNew">
            <img src="https://www.aha.video/premium-tag.e5df97bbb026e5ce238e.svg" alt="premiumTag tagNew" />
            </div>
            <p className="movieTitle" style={{backgroundColor:"none"}}>The American Dream</p>
          </div>
          <div className="cards ahaOG">
            <img src="https://image-resizer-cloud-api.akamaized.net/image/4BAD80A8-8D00-4010-B9E3-02F257B86B74/0-2x3.jpg?width=272" alt="card1" />
            <div className="premiumTag tagNew">
              <img src="https://www.aha.video/premium-tag.e5df97bbb026e5ce238e.svg" alt="premiumTag tagNew" />
            </div>
            <p className="movieTitle" style={{backgroundColor:"none"}}>Senapathi</p>
          </div>
          <div className="cards ahaOG">
            <img src="https://image-resizer-cloud-api.akamaized.net/image/E51CB6A8-D3A9-474C-84E7-BDB6B2980239/0-2x3.jpg?width=272" alt="card1" />
                        <div className="premiumTag tagNew">
              <img src="https://www.aha.video/premium-tag.e5df97bbb026e5ce238e.svg" alt="premiumTag tagNew" />
            </div>
            <p className="movieTitle" style={{backgroundColor:"none"}}>Unstoppable</p>
          </div>
          <div className="cards ahaOG">
            <img src="https://image-resizer-cloud-api.akamaized.net/image/A7C4A8B8-B112-4C74-8AFC-6128093F71FC/0-2x3.jpg?width=272" alt="card1"/>
                        
            <p className="movieTitle" style={{backgroundColor:"none"}}>Chef Mantra</p>
          </div>
          <div className="cards ahaOG">
            <img src="https://image-resizer-cloud-api.akamaized.net/image/1D67B609-AC68-4A94-B80E-D0B8437B5519/0-2x3.jpg?width=272" alt="card1"/>
                        <div className="premiumTag tagNew">
            <img src="https://www.aha.video/premium-tag.e5df97bbb026e5ce238e.svg" alt="premiumTag tagNew" />
            </div>
            <p className="movieTitle" style={{backgroundColor:"none"}}>3 Roses</p>
          </div>
          <div className="cards ahaOG">
            <img src="https://image-resizer-cloud-api.akamaized.net/image/836A0A87-656C-46FE-BBD1-F12BA6088F68/0-2x3.jpg?width=272" alt="card1"/>
                        <div className="premiumTag tagNew">
            <img src="https://www.aha.video/premium-tag.e5df97bbb026e5ce238e.svg" alt="premiumTag tagNew" />
            </div>
            <p className="movieTitle" style={{backgroundColor:"none"}}>SAARKAR</p>
          </div>
          <div className="cards ahaOG">
            <img src="https://image-resizer-cloud-api.akamaized.net/image/0AA73A1E-4E26-45C5-9891-FBA787699AD4/0-2x3.jpg?width=272" alt="card1"/>
                        <div className="premiumTag tagNew">
            <img src="https://www.aha.video/premium-tag.e5df97bbb026e5ce238e.svg" alt="premiumTag tagNew" />
            </div>
            <p className="movieTitle" style={{backgroundColor:"none"}}>Alludu Garu</p>
          </div>
          <div className="cards ahaOG">
            <img src="https://image-resizer-cloud-api.akamaized.net/image/7C1146D3-79CA-47FF-AB88-B9721D445531/0-2x3.jpg?width=272" alt="card1"/>
                        <div className="premiumTag tagNew">
            <img src="https://www.aha.video/premium-tag.e5df97bbb026e5ce238e.svg" alt="premiumTag tagNew" />
            </div>
            <p className="movieTitle" style={{backgroundColor:"none"}}>The Baker & The Beauty</p>
          </div>
          <div className="cards ahaOG">
            <img src="https://image-resizer-cloud-api.akamaized.net/image/09E87D4B-120A-4971-8016-E177B373E66E/0-2x3.jpg?width=272" alt="card1"/>
                        <div className="premiumTag tagNew">
            <img src="https://www.aha.video/premium-tag.e5df97bbb026e5ce238e.svg" alt="premiumTag tagNew" />
            </div>
            <p className="movieTitle" style={{backgroundColor:"none"}}>Tharagathi Gadhi Daati</p>
          </div>
          <div className="cards ahaOG">
            <img src="https://image-resizer-cloud-api.akamaized.net/image/AE0B5149-A41D-492E-9031-9D00DA960641/0-2x3.jpg?width=272" alt="card1"/>
                        <div className="premiumTag tagNew">
            <img src="https://www.aha.video/premium-tag.e5df97bbb026e5ce238e.svg" alt="premiumTag tagNew" />
            </div>
            <p className="movieTitle" style={{backgroundColor:"none"}}>Maha Ganesha</p>
          </div>
          <div className="cards ahaOG">
            <img src="https://image-resizer-cloud-api.akamaized.net/image/85D56847-BEB7-4C31-8F03-72FB55EE3FA6/0-2x3.jpg?width=272" alt="card1"/>
                        <div className="premiumTag tagNew">
            <img src="https://www.aha.video/premium-tag.e5df97bbb026e5ce238e.svg" alt="premiumTag tagNew" />
            </div>
            <p className="movieTitle" style={{backgroundColor:"none"}}>Kudi Yedamaithe</p>
          </div>
          <div className="cards ahaOG">
            <img src="https://image-resizer-cloud-api.akamaized.net/image/CF86398B-F897-4DEA-B067-2AEC473A7309/0-2x3.jpg?width=272" alt="card1"/>
                        <div className="premiumTag tagNew">
            <img src="https://www.aha.video/premium-tag.e5df97bbb026e5ce238e.svg" alt="premiumTag tagNew" />
            </div>
            <p className="movieTitle" style={{backgroundColor:"none"}}>11th Hour</p>
                </div>
          <div className="cards ahaOG">
            <img src="https://image-resizer-cloud-api.akamaized.net/image/73842883-4C30-43B4-AC0D-232A4496E185/0-2x3.jpg?width=272" alt="card1"/>
                        <div className="premiumTag tagNew">
            <img src="https://www.aha.video/premium-tag.e5df97bbb026e5ce238e.svg" alt="premiumTag tagNew" />
            </div>
            <p className="movieTitle" style={{backgroundColor:"none"}}>In The Name of God</p>
                </div>
          <div className="cards ahaOG">
            <img src="https://image-resizer-cloud-api.akamaized.net/image/AB4E98DA-CAA5-48C0-81A8-DB20084EE026/0-2x3.jpg?width=272" alt="card1"/>
                        <div className="premiumTag tagNew">
            <img src="https://www.aha.video/premium-tag.e5df97bbb026e5ce238e.svg" alt="premiumTag tagNew" />
            </div>
            <p className="movieTitle" style={{backgroundColor:"none"}}>Locked</p>
                </div>   

        <div className="cards ahaOG">
            <img src="https://image-resizer-cloud-api.akamaized.net/image/90D118F9-FD42-42B4-AAD0-94CF8C50BF26/0-2x3.jpg?width=272" alt="card1"/>
                        <div className="premiumTag tagNew">
            <img src="https://www.aha.video/premium-tag.e5df97bbb026e5ce238e.svg" alt="premiumTag tagNew" />
            </div>
            <p className="movieTitle" style={{backgroundColor:"none"}}>aha Bojanambu</p>
                </div> 
        <div className="cards ahaOG">
            <img src="https://image-resizer-cloud-api.akamaized.net/image/E9F1B1FE-D492-4132-A6CB-5EC5928BEB9F/0-2x3.jpg?width=272" alt="card1"/>
                        <div className="premiumTag tagNew">
            <img src="https://www.aha.video/premium-tag.e5df97bbb026e5ce238e.svg" alt="premiumTag tagNew" />
            </div>
            <p className="movieTitle" style={{backgroundColor:"none"}}>Sam Jam</p>
                </div>                
        <div className="cards ahaOG">
            <img src="https://image-resizer-cloud-api.akamaized.net/image/20CD128F-B402-4734-B1AF-56FBE79E465F/0-2x3.jpg?width=272" alt="card1"/>
                        <div className="premiumTag tagNew">
            <img src="https://www.aha.video/premium-tag.e5df97bbb026e5ce238e.svg" alt="premiumTag tagNew" />
            </div>
            <p className="movieTitle" style={{backgroundColor:"none"}}>Sin</p>
          </div>                                
        </Slider>
      </div>
    );
  }
}