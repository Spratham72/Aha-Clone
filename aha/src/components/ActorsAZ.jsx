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

// function SamplePrevArrow(props) {
//   const { className, style, onClick } = props;
//   return (
//     <div
//       className={className}
//       style={{ ...style, display: "block", position: "absolute", backgroundColor: 'red',height:'100px',width:"100px" }}
//       onClick={onClick}
//     />
//   );
// }


export default class ActorsAZ extends Component {
  render() {
    const settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 13,
      slidesToScroll: 3,
      arrows: true,
      nextArrow: <SampleNextArrow />,
      // prevArrow: <SamplePrevArrow />,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 3,
            infinite: true,
            // dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 5,
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
        <h2 className="title" style={{color:"white",marginLeft:"10px"}}> Actors (A-Z) </h2>
        <Slider {...settings} >
          <div   className="cards actors">
            <img src="https://image-resizer-cloud-api.akamaized.net/image/8995C63C-D9F9-4D0D-91E3-5432765F028A/3-1x1.jpg?width=130" alt="card1" />
            
            <p>Nagarjuna</p>
          </div>
          <div className="cards actors">
            <img src="https://image-resizer-cloud-api.akamaized.net/image/498B3460-145A-4088-A656-3F9D44B4FD91/3-1x1.jpg?width=130" alt="card1" />
            
            <p>Allu Arjun</p>
          </div>
          <div className="cards actors">
            <img src="https://image-resizer-cloud-api.akamaized.net/image/1404BDD0-2E86-4C65-A999-9F36A5DFC2AE/3-1x1.jpg?width=130" alt="card1" />
            
            <p>Chiranjeevi</p>
          </div>
          <div className="cards actors">
            <img src="https://image-resizer-cloud-api.akamaized.net/image/1580D135-FF22-45C1-B3C8-65CED50EA27F/3-1x1.jpg?width=130" alt="card1"/>
             
            <p>Jr. NTR</p>
          </div>
          <div className="cards actors">
            <img src="https://image-resizer-cloud-api.akamaized.net/image/3CBADE9A-63A6-4D93-9688-AA7C936920DB/3-1x1.jpg?width=130" alt="card1"/>
               
            <p>Jyothika</p>
          </div>
          <div className="cards actors">
            <img src="https://image-resizer-cloud-api.akamaized.net/image/AB8FEF49-93C9-4E0B-97DB-C7D32CC931A3/3-1x1.jpg?width=130" alt="card1"/>
                 
            <p>Karthik</p>
          </div>
          <div className="cards actors">
            <img src="https://image-resizer-cloud-api.akamaized.net/image/C0C4B2F0-DB30-478C-87DE-280121FD5C82/3-1x1.jpg?width=130" alt="card1"/>
                 
            <p>Mahesh Babu</p>
          </div>
          <div className="cards actors">
            <img src="https://image-resizer-cloud-api.akamaized.net/image/8EE186ED-B68A-470F-BAA6-F376B106DACC/3-1x1.jpg?width=130" alt="card1"/>
                 
            <p>Bala Krishna</p>
          </div>
          <div className="cards actors">
            <img src="https://image-resizer-cloud-api.akamaized.net/image/234B14EE-540C-4E6B-8EB4-2491528DFD98/3-1x1.jpg?width=130" alt="card1"/>
                 
            <p>Pavan Kalyan</p>
          </div>
          <div className="cards actors">
            <img src="https://image-resizer-cloud-api.akamaized.net/image/AAC925F0-C817-4641-8581-F9C2B07D9A8D/3-1x1.jpg?width=130" alt="card1"/>
                  
            <p>Prabhas</p>
          </div>
          <div className="cards actors">
            <img src="https://image-resizer-cloud-api.akamaized.net/image/88EA1835-1926-4EA3-9523-92BA2E25018E/3-1x1.jpg?width=130" alt="card1"/>
                  
            <p>Rajendra Prasad</p>
          </div>
          <div className="cards actors">
            <img src="https://image-resizer-cloud-api.akamaized.net/image/A8963132-E61C-45C5-B5BF-3B686C687CF9/3-1x1.jpg?width=130" alt="card1"/>
                  
            <p>Ram Charan</p>
                </div>
<div className="cards actors">
            <img src="https://image-resizer-cloud-api.akamaized.net/image/3CFDC449-C0CB-4B46-91B4-ECC1F6EA9812/3-1x1.jpg?width=130" alt="card1"/>
                  
            <p>Ravi Teja</p>
                </div>
<div className="cards actors">
            <img src="https://image-resizer-cloud-api.akamaized.net/image/0791757D-817B-4B2C-8B1F-F2C14A786948/3-1x1.jpg?width=130" alt="card1"/>
                  
            <p>Sai Pallavi</p>
                </div>     
<div className="cards actors">
            <img src="https://image-resizer-cloud-api.akamaized.net/image/71297C70-1A6B-44B0-9018-420A4ED7AE1B/3-1x1.jpg?width=130" alt="card1"/>
                  
            <p>Samantha</p>
                </div>     
<div className="cards actors">
            <img src="https://image-resizer-cloud-api.akamaized.net/image/A55CA686-649C-4244-9CA3-129456149B3F/3-1x1.jpg?width=130" alt="card1"/>
                  
            <p>Thammanna</p>
                </div>     
<div className="cards actors">
            <img src="https://image-resizer-cloud-api.akamaized.net/image/18ED9E71-6072-40AE-A099-FAE8163DA96A/3-1x1.jpg?width=130" alt="card1"/>
                  
            <p>Venkatesh</p>
          </div>                     
        </Slider>
      </div>
    );
  }
}