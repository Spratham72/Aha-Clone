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


export default class MostWatched extends Component {
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
        <h2 className="title" style={{color:"white",marginLeft:"10px"}}> Most Watched On aha </h2>
        <Slider {...settings} >
          <div   className="cards">
            <img src="https://image-resizer-cloud-api.akamaized.net/image/5DB408A5-20C9-4CA7-B59C-0290AC809635/0-2x3.jpg?width=181" alt="card1" />
            <div className="premiumTag">
            <img src="https://www.aha.video/premium-tag.e5df97bbb026e5ce238e.svg" alt="premiumTag" />
            </div>
            <p>Color Photo</p>
          </div>
          <div className="cards">
            <img src="https://image-resizer-cloud-api.akamaized.net/image/08DE9DB8-752B-4ADF-B560-C110E9F0E7D0/0-2x3.jpg?width=181" alt="card1" />
            <div className="premiumTag">
              <img src="https://www.aha.video/premium-tag.e5df97bbb026e5ce238e.svg" alt="premiumTag" />
            </div>
            <p>Anukoni Athidhi</p>
          </div>
          <div className="cards">
            <img src="https://image-resizer-cloud-api.akamaized.net/image/8CF90912-C67D-4669-B4FA-1610F2B5C1E0/0-2x3.jpg?width=181" alt="card1" />
                        <div className="premiumTag">
              <img src="https://www.aha.video/premium-tag.e5df97bbb026e5ce238e.svg" alt="premiumTag" />
            </div>
            <p>Chavu Kaburu Challaga</p>
          </div>
          <div className="cards">
            <img src="https://image-resizer-cloud-api.akamaized.net/image/C6DE0F89-3C79-4E94-9324-913D1BA65563/0-2x3.jpg?width=181" alt="card1"/>
                        <div className="premiumTag">
            <img src="https://www.aha.video/premium-tag.e5df97bbb026e5ce238e.svg" alt="premiumTag" />
            </div>
            <p>Khaidi</p>
          </div>
          <div className="cards">
            <img src="https://image-resizer-cloud-api.akamaized.net/image/EB6068D9-E65F-45AC-9069-B715FF27058E/0-2x3.jpg?width=181" alt="card1"/>
                        <div className="premiumTag">
            <img src="https://www.aha.video/premium-tag.e5df97bbb026e5ce238e.svg" alt="premiumTag" />
            </div>
            <p>Kothaporadu</p>
          </div>
          <div className="cards">
            <img src="https://image-resizer-cloud-api.akamaized.net/image/20CD128F-B402-4734-B1AF-56FBE79E465F/0-2x3.jpg?width=181" alt="card1"/>
                        <div className="premiumTag">
            <img src="https://www.aha.video/premium-tag.e5df97bbb026e5ce238e.svg" alt="premiumTag" />
            </div>
            <p>Sin</p>
          </div>
          <div className="cards">
            <img src="https://image-resizer-cloud-api.akamaized.net/image/34171E31-9E91-4567-8E6F-F6B81B2A481D/0-2x3.jpg?width=181" alt="card1"/>
                        <div className="premiumTag">
            <img src="https://www.aha.video/premium-tag.e5df97bbb026e5ce238e.svg" alt="premiumTag" />
            </div>
            <p>Nandi</p>
          </div>
          <div className="cards">
            <img src="https://image-resizer-cloud-api.akamaized.net/image/34E44990-4507-49AF-B283-876B2D958ECF/0-2x3.jpg?width=181" alt="card1"/>
                        <div className="premiumTag">
            <img src="https://www.aha.video/premium-tag.e5df97bbb026e5ce238e.svg" alt="premiumTag" />
            </div>
            <p>Krishna And His Leela</p>
          </div>
          <div className="cards">
            <img src="https://image-resizer-cloud-api.akamaized.net/image/E9B92DEE-9107-4A6B-9E3A-4BD01968B819/0-2x3.jpg?width=181" alt="card1"/>
                        <div className="premiumTag">
            <img src="https://www.aha.video/premium-tag.e5df97bbb026e5ce238e.svg" alt="premiumTag" />
            </div>
            <p>Arjun Suravaram</p>
          </div>
          <div className="cards">
            <img src="https://image-resizer-cloud-api.akamaized.net/image/99C5D943-0626-4355-A6E2-82D4180AFA4E/0-2x3.jpg?width=181" alt="card1"/>
                        <div className="premiumTag">
            <img src="https://www.aha.video/premium-tag.e5df97bbb026e5ce238e.svg" alt="premiumTag" />
            </div>
            <p>Play Back</p>
          </div>
          <div className="cards">
            <img src="https://image-resizer-cloud-api.akamaized.net/image/AE871D39-4E17-499B-85DA-227B0FC28556/0-2x3.jpg?width=181" alt="card1"/>
                        <div className="premiumTag">
            <img src="https://www.aha.video/premium-tag.e5df97bbb026e5ce238e.svg" alt="premiumTag" />
            </div>
            <p>Forensic</p>
          </div>
        </Slider>
      </div>
    );
  }
}