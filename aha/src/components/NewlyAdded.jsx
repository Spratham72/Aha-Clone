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


export default class NewlyAdded extends Component {
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
        <h2 className="title" style={{color:"white",marginLeft:"10px"}}>Newly Added Library </h2>
        <Slider {...settings} >
          <div   className="cards">
            <img src="https://image-resizer-cloud-api.akamaized.net/image/3A89660F-D86A-4063-83FE-1F306188D1E3/0-2x3.jpg?width=181" alt="card1" />
            <div className="premiumTag">
            <img src="https://www.aha.video/premium-tag.e5df97bbb026e5ce238e.svg" alt="premiumTag" />
            </div>
            <p>Bhairava Dweepam</p>
          </div>
          <div className="cards">
            <img src="https://image-resizer-cloud-api.akamaized.net/image/1AE33B57-4946-4789-B0CD-A3D80DE283AE/0-2x3.jpg?width=181" alt="card1" />
            <div className="premiumTag">
              <img src="https://www.aha.video/premium-tag.e5df97bbb026e5ce238e.svg" alt="premiumTag" />
            </div>
            <p>Ye Maaya Chesave</p>
          </div>
          <div className="cards">
            <img src="https://image-resizer-cloud-api.akamaized.net/image/63EA1B68-C798-4190-B067-BBAEFBDA3652/0-2x3.jpg?width=181" alt="card1" />
                        <div className="premiumTag">
              <img src="https://www.aha.video/premium-tag.e5df97bbb026e5ce238e.svg" alt="premiumTag" />
            </div>
            <p>Konchem Ishtam Konchem Kashtam</p>
          </div>
          <div className="cards">
            <img src="https://image-resizer-cloud-api.akamaized.net/image/AE587FAA-F596-4750-8635-915F1D543E55/0-2x3.jpg?width=181" alt="card1"/>
                        <div className="premiumTag">
            <img src="https://www.aha.video/premium-tag.e5df97bbb026e5ce238e.svg" alt="premiumTag" />
            </div>
            <p>Lovely</p>
          </div>
          <div className="cards">
            <img src="https://image-resizer-cloud-api.akamaized.net/image/FFA1C59B-7E6C-4255-8847-202A414580B9/0-2x3.jpg?width=181" alt="card1"/>
                        <div className="premiumTag">
            <img src="https://www.aha.video/premium-tag.e5df97bbb026e5ce238e.svg" alt="premiumTag" />
            </div>
            <p>Khakee</p>
          </div>
          <div className="cards">
            <img src="https://image-resizer-cloud-api.akamaized.net/image/BDDD7C14-802E-4DB2-88B5-D72D8FF1642F/0-2x3.jpg?width=181" alt="card1"/>
                        <div className="premiumTag">
            <img src="https://www.aha.video/premium-tag.e5df97bbb026e5ce238e.svg" alt="premiumTag" />
            </div>
            <p>Chirunavvutho</p>
          </div>
          <div className="cards">
            <img src="https://image-resizer-cloud-api.akamaized.net/image/3C1645E9-5C60-454E-BC7F-EFA559FBA44F/0-2x3.jpg?width=181" alt="card1"/>
                        <div className="premiumTag">
            <img src="https://www.aha.video/premium-tag.e5df97bbb026e5ce238e.svg" alt="premiumTag" />
            </div>
            <p>Eega</p>
          </div>
          <div className="cards">
            <img src="https://image-resizer-cloud-api.akamaized.net/image/2719F7A0-CA9A-4B41-B590-4DE8A1B77F8D/0-2x3.jpg?width=181" alt="card1"/>
                        <div className="premiumTag">
            <img src="https://www.aha.video/premium-tag.e5df97bbb026e5ce238e.svg" alt="premiumTag" />
            </div>
            <p>Adhurs</p>
          </div>
          <div className="cards">
            <img src="https://image-resizer-cloud-api.akamaized.net/image/4F464F57-D634-438E-9DAB-B59C873B7F8F/0-2x3.jpg?width=181" alt="card1"/>
                        <div className="premiumTag">
            <img src="https://www.aha.video/premium-tag.e5df97bbb026e5ce238e.svg" alt="premiumTag" />
            </div>
            <p>Life Is Beautiful</p>
          </div>
          <div className="cards">
            <img src="https://image-resizer-cloud-api.akamaized.net/image/4F4887D1-7CAF-4479-820A-787FD6457E86/0-2x3.jpg?width=181" alt="card1"/>
                        <div className="premiumTag">
            <img src="https://www.aha.video/premium-tag.e5df97bbb026e5ce238e.svg" alt="premiumTag" />
            </div>
            <p>Sriramadasu</p>
          </div>
          <div className="cards">
            <img src="https://image-resizer-cloud-api.akamaized.net/image/9730DF0B-6C54-4472-8AA2-EF71D30BBA3C/0-2x3.jpg?width=181" alt="card1"/>
                        <div className="premiumTag">
            <img src="https://www.aha.video/premium-tag.e5df97bbb026e5ce238e.svg" alt="premiumTag" />
            </div>
            <p>Ghatotkachudu</p>
          </div>
          <div className="cards">
            <img src="https://image-resizer-cloud-api.akamaized.net/image/F65D2ED4-FA24-415A-9B86-A537814A1FC4/0-2x3.jpg?width=181" alt="card1"/>
                        <div className="premiumTag">
            <img src="https://www.aha.video/premium-tag.e5df97bbb026e5ce238e.svg" alt="premiumTag" />
            </div>
            <p>Fida</p>
          </div>
          <div className="cards">
            <img src="https://image-resizer-cloud-api.akamaized.net/image/505D339B-8F6A-4360-A467-0A31E3E7AFD5/0-2x3.jpg?width=181" alt="card1"/>
                        <div className="premiumTag">
            <img src="https://www.aha.video/premium-tag.e5df97bbb026e5ce238e.svg" alt="premiumTag" />
            </div>
            <p>Vetagadu</p>
          </div>
          <div className="cards">
            <img src="https://image-resizer-cloud-api.akamaized.net/image/635781E9-3BBB-4CDF-9C43-31A41817DBAE/0-2x3.jpg?width=181" alt="card1"/>
                        <div className="premiumTag">
            <img src="https://www.aha.video/premium-tag.e5df97bbb026e5ce238e.svg" alt="premiumTag" />
            </div>
            <p>Rajendrudu Gajendrudu</p>
          </div>
          <div className="cards">
            <img src="https://image-resizer-cloud-api.akamaized.net/image/0820C3A4-31B0-42B8-AF2C-9AC9F12A4812/0-2x3.jpg?width=181" alt="card1"/>
                        <div className="premiumTag">
            <img src="https://www.aha.video/premium-tag.e5df97bbb026e5ce238e.svg" alt="premiumTag" />
            </div>
            <p>Lisa</p>
          </div>        
        </Slider>
      </div>
    );
  }
}