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


export default class MultipleItems extends Component {
  render() {
    const settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 10,
      slidesToScroll: 3,
      arrows: true,
      nextArrow: <SampleNextArrow />,
      prevArrow:<SamplePrevArrow />
    };
    return (
      <div >
        <h2 style={{color:"white"}}> Best of 2021 </h2>
        <Slider {...settings} >
          <div   className="cards">
            <img src="https://image-resizer-cloud-api.akamaized.net/image/082F82D4-9E62-4B95-AC33-97FA05F16989/0-2x3.jpg?width=181" alt="card1" />
            <p>Movie Name</p>
          </div>
          <div className="cards">
            <img src="https://image-resizer-cloud-api.akamaized.net/image/3B231226-EF16-442E-815E-AAEAF5108338/0-2x3.jpg?width=181" alt="card1" />
            <p>Movie Name</p>
          </div>
          <div className="cards">
            <img src="https://image-resizer-cloud-api.akamaized.net/image/4BAD80A8-8D00-4010-B9E3-02F257B86B74/0-2x3.jpg?width=181" alt="card1" />
            <p>Movie Name</p>
          </div>
          <div className="cards">
            <img src="https://image-resizer-cloud-api.akamaized.net/image/5B48DD8D-CA0B-4836-933B-D69BB80DFBD3/0-2x3.jpg?width=181" alt="card1"/>
            <p>Movie Name</p>
          </div>
          <div className="cards">
            <img src="https://image-resizer-cloud-api.akamaized.net/image/4B436E0D-B442-4647-9014-5D46B0B3DF37/0-2x3.jpg?width=181" alt="card1"/>
            <p>Movie Name</p>
          </div>
          <div className="cards">
            <img src="https://image-resizer-cloud-api.akamaized.net/image/FD0ED325-4244-4437-877B-73AB859A1238/0-2x3.jpg?width=181" alt="card1"/>
            <p>Movie Name</p>
          </div>
          <div className="cards">
            <img src="https://image-resizer-cloud-api.akamaized.net/image/73830D38-C02F-4B96-9E67-EA5034FA7432/0-2x3.jpg?width=181" alt="card1"/>
            <p>Movie Name</p>
          </div>
          <div className="cards">
            <img src="https://image-resizer-cloud-api.akamaized.net/image/3F86D041-EBBB-4028-90EC-B199AC580FB9/0-2x3.jpg?width=181" alt="card1"/>
            <p>Movie Name</p>
          </div>
          <div className="cards">
            <img src="https://image-resizer-cloud-api.akamaized.net/image/5A8AAB23-17F7-4E49-A299-8D422EA8117B/0-2x3.jpg?width=181" alt="card1"/>
            <p>Movie Name</p>
          </div>
          <div className="cards">
            <img src="https://image-resizer-cloud-api.akamaized.net/image/543ABA39-F07B-4594-B2EB-0CDC025F5AC0/0-2x3.jpg?width=181" alt="card1"/>
            <p>Movie Name</p>
          </div>
          <div className="cards">
            <img src="https://image-resizer-cloud-api.akamaized.net/image/FE88FDDA-88F4-4BC1-9FF7-57C091AEABA4/0-2x3.jpg?width=181" alt="card1"/>
            <p>Movie Name</p>
          </div>
          <div className="cards">
            <img src="https://image-resizer-cloud-api.akamaized.net/image/4A651C09-9C7D-49CE-B03F-6495DC54C043/0-2x3.jpg?width=181" alt="card1"/>
            <p>Movie Name</p>
          </div>
        </Slider>
      </div>
    );
  }
}