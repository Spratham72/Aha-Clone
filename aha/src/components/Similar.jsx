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


export default class Similar extends Component {
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
        <h2 className="title" style={{color:"white",marginLeft:"10px"}}> Similar to this </h2>
        <Slider {...settings} >
          <div   className="cards">
            <img src="https://image-resizer-cloud-api.akamaized.net/image/AD64848C-39EA-4568-98A3-4AA88B49C928/0-2x3.jpg?width=181" alt="card1" />
            <div className="premiumTag">
            <img src="https://www.aha.video/premium-tag.e5df97bbb026e5ce238e.svg" alt="premiumTag" />
            </div>
            <p>100</p>
          </div>
          <div className="cards">
            <img src="https://image-resizer-cloud-api.akamaized.net/image/9AA542D9-08A4-4FCD-92FC-D6055B4E32C8/0-2x3.jpg?width=181" alt="card1" />
        
            <p>Gunturoodu</p>
          </div>
          <div className="cards">
            <img src="https://image-resizer-cloud-api.akamaized.net/image/D2E3CCFA-92AD-4719-9C25-D3F4E38178E0/0-2x3.jpg?width=181" alt="card1" />
                        <div className="premiumTag">
              <img src="https://www.aha.video/premium-tag.e5df97bbb026e5ce238e.svg" alt="premiumTag" />
            </div>
            <p>Maari 2</p>
          </div>
          <div className="cards">
            <img src="https://image-resizer-cloud-api.akamaized.net/image/0EA9300B-78BD-40D8-8BFD-BFAC4C160E7E/0-2x3.jpg?width=181" alt="card1"/>
                        <div className="premiumTag">
            <img src="https://www.aha.video/premium-tag.e5df97bbb026e5ce238e.svg" alt="premiumTag" />
            </div>
            <p>Mr KK</p>
          </div>
          <div className="cards">
            <img src="https://image-resizer-cloud-api.akamaized.net/image/4586C2EB-3600-4607-9468-114C1BFFCA6D/0-2x3.jpg?width=181" alt="card1"/>
                        <div className="premiumTag">
            <img src="https://www.aha.video/premium-tag.e5df97bbb026e5ce238e.svg" alt="premiumTag" />
            </div>
            <p>Bhairava geetha</p>
          </div>
          <div className="cards">
            <img src="https://image-resizer-cloud-api.akamaized.net/image/99923D3A-9879-4487-BD1F-CAA49CB54BE7/0-2x3.jpg?width=181" alt="card1"/>
                        <div className="premiumTag">
            <img src="https://www.aha.video/premium-tag.e5df97bbb026e5ce238e.svg" alt="premiumTag" />
            </div>
            <p>Shakthi</p>
          </div>
          <div className="cards">
            <img src="https://image-resizer-cloud-api.akamaized.net/image/C8A02681-1821-4F62-AEF2-4B8811DAE5D2/0-2x3.jpg?width=181" alt="card1"/>
                     
            <p>Yevadu</p>
          </div>
          <div className="cards">
            <img src="https://image-resizer-cloud-api.akamaized.net/image/E810A6FC-18D6-4A51-B917-0CCEED68A881/0-2x3.jpg?width=181" alt="card1"/>
                     
            <p>Taagore</p>
          </div>
          <div className="cards">
            <img src="https://image-resizer-cloud-api.akamaized.net/image/BE920FF8-57E9-456C-A9CA-B224A8F1FC04/0-2x3.jpg?width=181" alt="card1"/>
                    
            <p>Racegurram</p>
          </div>
          <div className="cards">
            <img src="https://image-resizer-cloud-api.akamaized.net/image/C5E97E4A-CD9A-4E17-8D83-95781A7078CC/0-2x3.jpg?width=181" alt="card1"/>
                        <div className="premiumTag">
            <img src="https://www.aha.video/premium-tag.e5df97bbb026e5ce238e.svg" alt="premiumTag" />
            </div>
            <p>Jaya Janaki Nayaka</p>
          </div>
          <div className="cards">
            <img src="https://image-resizer-cloud-api.akamaized.net/image/EE780519-CE66-4E9B-9D3A-342B9648F75F/0-2x3.jpg?width=181" alt="card1"/>
                        <div className="premiumTag">
            <img src="https://www.aha.video/premium-tag.e5df97bbb026e5ce238e.svg" alt="premiumTag" />
            </div>
            <p>NGK</p>
          </div>
          <div className="cards">
            <img src="https://image-resizer-cloud-api.akamaized.net/image/62E8AAB6-2AF3-45C2-B1B1-313D40DF7E74/0-2x3.jpg?width=181" alt="card1"/>
                        <div className="premiumTag">
            <img src="https://www.aha.video/premium-tag.e5df97bbb026e5ce238e.svg" alt="premiumTag" />
            </div>
            <p>Kavacham</p>
          </div>          <div className="cards">
            <img src="https://image-resizer-cloud-api.akamaized.net/image/13120087-DD82-40BF-8075-7E15891FBB72/0-2x3.jpg?width=181" alt="card1"/>
                        <div className="premiumTag">
            <img src="https://www.aha.video/premium-tag.e5df97bbb026e5ce238e.svg" alt="premiumTag" />
            </div>
            <p>Shylock</p>
          </div>          <div className="cards">
            <img src="https://image-resizer-cloud-api.akamaized.net/image/675C8AD4-B307-4200-8254-12E3325DCE9B/0-2x3.jpg?width=181" alt="card1"/>
                        <div className="premiumTag">
            <img src="https://www.aha.video/premium-tag.e5df97bbb026e5ce238e.svg" alt="premiumTag" />
            </div>
            <p>Krishnarjuna Yuddham</p>
          </div>          <div className="cards">
            <img src="https://image-resizer-cloud-api.akamaized.net/image/5B81FB04-6531-49ED-94ED-81976C6B977E/0-2x3.jpg?width=181" alt="card1"/>
                        
            <p>Oke Okkadu</p>
          </div>          <div className="cards">
            <img src="https://image-resizer-cloud-api.akamaized.net/image/0A6C87A4-B8E7-422F-B16D-88E06A7C7198/0-2x3.jpg?width=181" alt="card1"/>
                      
            <p>Jalsa</p>
          </div>
           <div className="cards">
            <img src="https://image-resizer-cloud-api.akamaized.net/image/194992CC-8133-40BF-A061-D0CBE9746F3A/0-2x3.jpg?width=181" alt="card1"/>
                      
            <p>Bujjigaadu</p>
          </div> <div className="cards">
            <img src="https://image-resizer-cloud-api.akamaized.net/image/B51E4D07-4B14-4873-ABA4-9B65C7D006CB/0-2x3.jpg?width=181" alt="card1"/>
                      
            <p>Venky</p>
          </div>
        </Slider>
      </div>
    );
  }
}