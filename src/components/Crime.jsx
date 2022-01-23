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


export default class Crime extends Component {
  render() {
    const settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 10,
      slidesToScroll: 3,
      arrows: true,
      nextArrow: <SampleNextArrow />,
      // prevArrow: <SamplePrevArrow />,
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
        <h2 className="title" style={{color:"white",marginLeft:"10px"}}> Crime </h2>
        <Slider {...settings} >
          <div   className="cards">
            <img src="https://image-resizer-cloud-api.akamaized.net/image/62E8AAB6-2AF3-45C2-B1B1-313D40DF7E74/0-2x3.jpg?width=181" alt="card1" />
            <div className="premiumTag">
            <img src="https://www.aha.video/premium-tag.e5df97bbb026e5ce238e.svg" alt="premiumTag" />
            </div>
            <p>Kavacham</p>
          </div>
          <div className="cards">
            <img src="https://image-resizer-cloud-api.akamaized.net/image/42699B92-141F-45DC-AE9A-CF704FBF5F01/0-2x3.jpg?width=181" alt="card1" />
 
            <p>Anasuya</p>
          </div>
          <div className="cards">
            <img src="https://image-resizer-cloud-api.akamaized.net/image/04629612-89FE-43CC-BB63-62FF223C0944/0-2x3.jpg?width=181" alt="card1" />
                  
            <p>Gulabi</p>
          </div>
          <div className="cards">
            <img src="https://image-resizer-cloud-api.akamaized.net/image/1252772E-F862-46A5-9178-811BB08F5A86/0-2x3.jpg?width=181" alt="card1"/>
                      
            <p>Ghatana</p>
          </div>
          <div className="cards">
            <img src="https://image-resizer-cloud-api.akamaized.net/image/3E0B0FE2-B352-4B02-8EE8-D82202C3C345/0-2x3.jpg?width=181" alt="card1"/>
                        <div className="premiumTag">
            <img src="https://www.aha.video/premium-tag.e5df97bbb026e5ce238e.svg" alt="premiumTag" />
            </div>
            <p>Midnight Murders</p>
          </div>
          <div className="cards">
            <img src="https://image-resizer-cloud-api.akamaized.net/image/12E4D3A6-682C-459F-B27D-8B9B60D846A7/0-2x3.jpg?width=181" alt="card1"/>
                  
            <p>Sathruvu</p>
          </div>
          <div className="cards">
            <img src="https://image-resizer-cloud-api.akamaized.net/image/5FB249D9-8C43-4AB6-B838-D084A68F8ACC/0-2x3.jpg?width=181" alt="card1"/>
                   
            <p>NH 4</p>
          </div>
          <div className="cards">
            <img src="https://image-resizer-cloud-api.akamaized.net/image/9B0C7DF1-B9DE-4349-9E6D-691C6F4DC80F/0-2x3.jpg?width=181" alt="card1"/>
                        <div className="premiumTag">
            <img src="https://www.aha.video/premium-tag.e5df97bbb026e5ce238e.svg" alt="premiumTag" />
            </div>
            <p>Satya 2</p>
          </div>
          <div className="cards">
            <img src="https://image-resizer-cloud-api.akamaized.net/image/FDE7885C-167D-45D5-AC41-EA5DD4484D9F/0-2x3.jpg?width=181" alt="card1"/>
                        <div className="premiumTag">
            <img src="https://www.aha.video/premium-tag.e5df97bbb026e5ce238e.svg" alt="premiumTag" />
            </div>
            <p>Kanulu Kanulu Dochayante</p>
          </div>
          <div className="cards">
            <img src="https://image-resizer-cloud-api.akamaized.net/image/5EC1FE12-787C-4B5A-A75B-C3CED4C636D6/0-2x3.jpg?width=181" alt="card1"/>
                  
            <p>Dandupalyam 2</p>
          </div>
          <div className="cards">
            <img src="https://image-resizer-cloud-api.akamaized.net/image/B64900CD-533A-4285-91F9-5A1A8CEE480A/0-2x3.jpg?width=181" alt="card1"/>
                  
            <p>Satya</p>
          </div>
          <div className="cards">
            <img src="https://image-resizer-cloud-api.akamaized.net/image/CB1F4827-5A5E-42F0-8B96-D0E30BAD85BB/0-2x3.jpg?width=181" alt="card1"/>
            <p>Kanupapa</p>
          </div>          <div className="cards">
            <img src="https://image-resizer-cloud-api.akamaized.net/image/B8148CC5-C93C-4D3C-AB08-0487FF40BE38/0-2x3.jpg?width=181" alt="card1"/>
                        <div className="premiumTag">
            <img src="https://www.aha.video/premium-tag.e5df97bbb026e5ce238e.svg" alt="premiumTag" />
            </div>
            <p>Anukunnadi Okati Ayinadi Okati</p>
          </div>          <div className="cards">
            <img src="https://image-resizer-cloud-api.akamaized.net/image/E0E4BF81-F677-4E1F-BB29-E223F1694988/0-2x3.jpg?width=181" alt="card1"/>
                        <div className="premiumTag">
            <img src="https://www.aha.video/premium-tag.e5df97bbb026e5ce238e.svg" alt="premiumTag" />
            </div>
            <p>Where is Venkatalaxmi</p>
          </div>          <div className="cards">
            <img src="https://image-resizer-cloud-api.akamaized.net/image/8A610FD0-DBB4-4225-BCAF-9CAB908B643A/0-2x3.jpg?width=181" alt="card1"/>
                        <div className="premiumTag">
            <img src="https://www.aha.video/premium-tag.e5df97bbb026e5ce238e.svg" alt="premiumTag" />
            </div>
            <p>Killing Veerappan</p>
          </div>          <div className="cards">
            <img src="https://image-resizer-cloud-api.akamaized.net/image/7F28115F-27A5-4362-B753-361EA3A774A6/0-2x3.jpg?width=181" alt="card1"/>
                        <div className="premiumTag">
            <img src="https://www.aha.video/premium-tag.e5df97bbb026e5ce238e.svg" alt="premiumTag" />
            </div>
            <p>Lankeshawarudu</p>
          </div>          <div className="cards">
            <img src="https://image-resizer-cloud-api.akamaized.net/image/08569A17-6634-4EFD-867C-C6B84A100AEB/0-2x3.jpg?width=181" alt="card1"/>
                        
            <p>Run</p>
          </div>
        </Slider>
      </div>
    );
  }
}