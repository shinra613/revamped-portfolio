import React, { useState } from "react";
import "./styles.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import defaultProps from "./projects";
import blog from "./blogs";
import Render from "./engine";
import Tech from "./tech";
import Hobbies from "./hobbies";
import Social from "./social";





export default function App() {

  let ResponsiveDesign = defaultProps.rddb;
  let WebApps = defaultProps.wadb;

 const [module,setmodule] = useState(WebApps)

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrow: true,
    className: "slider"
  };

  return (
    <div className="App">
      <div className="container-header">
        <img src="./images/me.jpg" alt="me"/>
        <div className="header-content">
          <div className="header-title">
            <div>
              <h1> Akhil venkatesh</h1>
              <p>Frontend developer </p>
            </div>
            <div>
              <p>akhiltechwiz@gmail.com </p>
              <p>8190938699</p>
            </div>
          </div>
          <div className="header-body ">
            <p>
              Self-motivated developer, who is willing to learn and create
              outstanding UI applications.
            </p>

            <p>
              Recently found interest in web development and currently exploring
              it. Learning HTML/CSS, javascript, react js and many more to come.
            </p>
          </div>
        </div>
      </div>
      <div className="container-body">
        <div className="body-one ">
          <Social />
          <Tech />

          <div className="exp">
            <h1>Experience</h1>

            <div className="exp-container">
              <img src="/images/zoho.png" />

              <div className="exp-content ">
                <p>Feb 2018 - current</p>
                <h1>Product Consultant</h1>
                <p>
                  {" "}
                  working a product consultant at Zoho ( Zoho Invoice team),
                  providing the best service experience to the customers.{" "}
                </p>
              </div>
            </div>
          </div>

          <Hobbies />
        </div>

        <div className="body-two">

        <div className="blog">
          <h1>Blog ({blog.length})</h1>
          </div>
          <div className="blog">
      

            <Slider {...settings}>
              {blog.map((item) => {
                return (
                  <div  keys={item} className="slider-container">
                    <div className="slider-content">
                      <h1>{item.name}</h1>
                      <small>{item.date}</small>
                      <img src={item.img} />
                      <p>{item.def}</p>
                      <a href={item.url} target="_blank">
                        <button>Read</button>
                      </a>
                    </div>
                  </div>
                );
              })}
            </Slider>
          </div>
          <div className="blog">
            <h1>Projects </h1>
            <div className="projecttab">
            <button className="btn-one " onClick={()=>setmodule(WebApps)}>Web Apps({WebApps.length})</button> 
            <button className="btn-one " onClick={()=>setmodule(ResponsiveDesign)} >Responsive Designs ({ResponsiveDesign.length})</button>
            </div>
            
          </div>
          <div className="blog">
           
            <div className="slider-container">
              
              <Render types={module}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
