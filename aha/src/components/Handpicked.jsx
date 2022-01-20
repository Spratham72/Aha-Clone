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


export default class Handpicked extends Component {
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
        <h2 className="title" style={{color:"white",marginLeft:"10px"}}> Handpicked </h2>
        <Slider {...settings} >
          <div   className="cards">
            <img src="https://image-resizer-cloud-api.akamaized.net/image/FDE2CB8F-8356-4B0D-BA0B-BD6E36EBD678/0-2x3.jpg?width=181" alt="card1" />
            <div className="premiumTag">
            <img src="https://www.aha.video/premium-tag.e5df97bbb026e5ce238e.svg" alt="premiumTag" />
            </div>
            <p>Orey Bammardhi</p>
          </div>
          <div className="cards">
            <img src="https://image-resizer-cloud-api.akamaized.net/image/C2C78ED5-4678-4228-A82E-B4FD89BDD179/0-2x3.jpg?width=181" alt="card1" />
            <div className="premiumTag">
              <img src="https://www.aha.video/premium-tag.e5df97bbb026e5ce238e.svg" alt="premiumTag" />
            </div>
            <p>Orey Bujjiga</p>
          </div>
          <div className="cards">
            <img src="https://image-resizer-cloud-api.akamaized.net/image/3883DA5A-D1D9-4497-B382-64B02B5A98EA/0-2x3.jpg?width=181" alt="card1" />
                        <div className="premiumTag">
              <img src="https://www.aha.video/premium-tag.e5df97bbb026e5ce238e.svg" alt="premiumTag" />
            </div>
            <p>Cold Case</p>
          </div>
          <div className="cards">
            <img src="https://image-resizer-cloud-api.akamaized.net/image/6C42B58B-23A3-4BA5-BCCE-2A120DDCF9F8/0-2x3.jpg?width=181" alt="card1"/>
                        <div className="premiumTag">
            <img src="https://www.aha.video/premium-tag.e5df97bbb026e5ce238e.svg" alt="premiumTag" />
            </div>
            <p>Chatur Mukham</p>
          </div>
          <div className="cards">
            <img src="https://image-resizer-cloud-api.akamaized.net/image/FDE7885C-167D-45D5-AC41-EA5DD4484D9F/0-2x3.jpg?width=181" alt="card1"/>
                        <div className="premiumTag">
            <img src="https://www.aha.video/premium-tag.e5df97bbb026e5ce238e.svg" alt="premiumTag" />
            </div>
            <p>Kanulu Kanulu Dochayante</p>
          </div>
          <div className="cards">
            <img src="https://image-resizer-cloud-api.akamaized.net/image/606E8C61-035B-4568-BE31-A9A350604B03/0-2x3.jpg?width=181" alt="card1"/>
                        <div className="premiumTag">
            <img src="https://www.aha.video/premium-tag.e5df97bbb026e5ce238e.svg" alt="premiumTag" />
            </div>
            <p>Jallikattu</p>
          </div>
          <div className="cards">
            <img src="https://image-resizer-cloud-api.akamaized.net/image/558F41D2-729F-4E47-809E-2824FF534A32/0-2x3.jpg?width=181" alt="card1"/>
                        <div className="premiumTag">
            <img src="https://www.aha.video/premium-tag.e5df97bbb026e5ce238e.svg" alt="premiumTag" />
            </div>
            <p>Parinayam</p>
          </div>
          <div className="cards">
            <img src="https://image-resizer-cloud-api.akamaized.net/image/44AFD724-4736-4713-A12A-161B93EF8F02/0-2x3.jpg?width=181" alt="card1"/>
                        <div className="premiumTag">
            <img src="https://www.aha.video/premium-tag.e5df97bbb026e5ce238e.svg" alt="premiumTag" />
            </div>
            <p>Trance</p>
          </div>
          <div className="cards">
            <img src="https://image-resizer-cloud-api.akamaized.net/image/B87008AB-13BA-42FE-9983-6CEE1823CE7C/0-2x3.jpg?width=181" alt="card1"/>
                        <div className="premiumTag">
            <img src="https://www.aha.video/premium-tag.e5df97bbb026e5ce238e.svg" alt="premiumTag" />
            </div>
            <p>Laabam</p>
          </div>
          <div className="cards">
            <img src="https://image-resizer-cloud-api.akamaized.net/image/920EDB10-46FB-42B8-9013-FD8ACF448968/0-2x3.jpg?width=181" alt="card1"/>
                        <div className="premiumTag">
            <img src="https://www.aha.video/premium-tag.e5df97bbb026e5ce238e.svg" alt="premiumTag" />
            </div>
            <p>Super Deluxe</p>
          </div>
          <div className="cards">
            <img src="https://image-resizer-cloud-api.akamaized.net/image/FE88FDDA-88F4-4BC1-9FF7-57C091AEABA4/0-2x3.jpg?width=181" alt="card1"/>
                        <div className="premiumTag">
            <img src="https://www.aha.video/premium-tag.e5df97bbb026e5ce238e.svg" alt="premiumTag" />
            </div>
            <p>Superover</p>
          </div>
          <div className="cards">
            <img src="https://image-resizer-cloud-api.akamaized.net/image/4A651C09-9C7D-49CE-B03F-6495DC54C043/0-2x3.jpg?width=181" alt="card1"/>
                        <div className="premiumTag">
            <img src="https://www.aha.video/premium-tag.e5df97bbb026e5ce238e.svg" alt="premiumTag" />
            </div>
            <p>Thank You Brother</p>
          </div>
        </Slider>
      </div>
    );
  }
}