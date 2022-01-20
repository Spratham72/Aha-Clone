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


export default class Top10ThisWeek extends Component {
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
        <h2 style={{color:"white",marginLeft:"10px"}}> Top 10 - This Week </h2>
        <Slider {...settings} >
          <div   className="cards">
            <img src="https://image-resizer-cloud-api.akamaized.net/image/4BAD80A8-8D00-4010-B9E3-02F257B86B74/0-2x3.jpg?width=181" alt="card1" />
            <div className="premiumTag">
            <img src="https://www.aha.video/premium-tag.e5df97bbb026e5ce238e.svg" alt="premiumTag" />
            </div>
            <p>SenaPathi</p>
          </div>
          <div className="cards">
            <img src="https://image-resizer-cloud-api.akamaized.net/image/1D67B609-AC68-4A94-B80E-D0B8437B5519/0-2x3.jpg?width=181" alt="card1" />
            <div className="premiumTag">
              <img src="https://www.aha.video/premium-tag.e5df97bbb026e5ce238e.svg" alt="premiumTag" />
            </div>
            <p>3 Roses</p>
          </div>
          <div className="cards">
            <img src="https://image-resizer-cloud-api.akamaized.net/image/85D56847-BEB7-4C31-8F03-72FB55EE3FA6/0-2x3.jpg?width=181" alt="card1" />
                        <div className="premiumTag">
              <img src="https://www.aha.video/premium-tag.e5df97bbb026e5ce238e.svg" alt="premiumTag" />
            </div>
            <p>Kudi Yedamaithe</p>
          </div>
          <div className="cards">
            <img src="https://image-resizer-cloud-api.akamaized.net/image/09E87D4B-120A-4971-8016-E177B373E66E/0-2x3.jpg?width=181" alt="card1"/>
                        <div className="premiumTag">
            <img src="https://www.aha.video/premium-tag.e5df97bbb026e5ce238e.svg" alt="premiumTag" />
            </div>
            <p>Tharagathi Gadhi Dati</p>
          </div>
          <div className="cards">
            <img src="https://image-resizer-cloud-api.akamaized.net/image/0AA73A1E-4E26-45C5-9891-FBA787699AD4/0-2x3.jpg?width=181" alt="card1"/>
                        <div className="premiumTag">
            <img src="https://www.aha.video/premium-tag.e5df97bbb026e5ce238e.svg" alt="premiumTag" />
            </div>
            <p>Alludu Garu</p>
          </div>
          <div className="cards">
            <img src="https://image-resizer-cloud-api.akamaized.net/image/99923D3A-9879-4487-BD1F-CAA49CB54BE7/0-2x3.jpg?width=181" alt="card1"/>
                        <div className="premiumTag">
            <img src="https://www.aha.video/premium-tag.e5df97bbb026e5ce238e.svg" alt="premiumTag" />
            </div>
            <p>Shakthi</p>
          </div>
          <div className="cards">
            <img src="https://image-resizer-cloud-api.akamaized.net/image/E1393AA6-177A-419F-80D6-0B40F698AC90/0-2x3.jpg?width=181" alt="card1"/>
            <p>Christmas Thata</p>
          </div>
          <div className="cards">
            <img src="https://image-resizer-cloud-api.akamaized.net/image/7C1146D3-79CA-47FF-AB88-B9721D445531/0-2x3.jpg?width=181" alt="card1"/>
                        <div className="premiumTag">
            <img src="https://www.aha.video/premium-tag.e5df97bbb026e5ce238e.svg" alt="premiumTag" />
            </div>
            <p>The Baker & The Beauty</p>
          </div>
          <div className="cards">
            <img src="https://image-resizer-cloud-api.akamaized.net/image/8F4F1DAD-0D2D-47E9-90F1-63B53C73D15A/0-2x3.jpg?width=181" alt="card1"/>
                        <div className="premiumTag">
            <img src="https://www.aha.video/premium-tag.e5df97bbb026e5ce238e.svg" alt="premiumTag" />
            </div>
            <p>CommitMental</p>
          </div>
          <div className="cards">
            <img src="https://image-resizer-cloud-api.akamaized.net/image/2400F785-DE59-4F9B-81AB-C5B88C2AD9E2/0-2x3.jpg?width=181" alt="card1"/>
                        <div className="premiumTag">
            <img src="https://www.aha.video/premium-tag.e5df97bbb026e5ce238e.svg" alt="premiumTag" />
            </div>
            <p>Sam Jam Episode 8</p>
          </div>
        </Slider>
      </div>
    );
  }
}