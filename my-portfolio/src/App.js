import React, { useState } from "react";

import "./styles.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import ResponsiveDesigns from "./projects";
import blog from "./blogs";





export default function App() {
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
          <div className="header-body">
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
        <div className="body-one">
          <div className="tech">
            <h1>Front end</h1>

            <table>
              <tr>
                <td>HTML</td>
                <td>
                  <i class="fab fa-html5 fa-2x"></i>
                </td>
              </tr>
              <tr>
                <td>CSS</td>
                <td>
                  <i class="fab fa-css3-alt fa-2x"></i>
                </td>
              </tr>
              <tr>
                <td>JAVASCRIPT</td>
                <td>
                  <i class="fab fa-js-square fa-2x"></i>
                </td>
              </tr>
              <tr>
                <td>REACT</td>
                <td>
                  <i class="fab fa-react fa-2x"></i>
                </td>
              </tr>
              <tr>
                <td>REDUX</td>
                <td>
                  <i class="fab fa-react fa-2x"></i>
                </td>
              </tr>
            </table>
          </div>

          <div className="exp">
            <h1>Experience</h1>

            <div className="exp-container">
              <img src="/images/zoho.png" />

              <div className="exp-content">
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

          <div className="hobbies">
            <h1>Hobbies</h1>

            <div>
              <img src="./images/biking.jpg" />
              <h2>Biking</h2>
              <p>
                I'm an avid motocycle rider and traveller. Proud owner of Bajaj
                Dominar 400.
              </p>
            </div>

            <div>
              <img src="./images/coding.jpg" />
              <h2>Coding</h2>
              <p>
                well coding gives me peace. Helps me attain order with in my
                chaotic mind.
              </p>
            </div>

            <div>
              <img src="./images/cooking.jpg" />
              <h2>Cooking</h2>
              <p>
                I got a knack for cooking too. I know cook many south-indian
                delicacies
              </p>
            </div>
          </div>
        </div>

        <div className="body-two">

        <div className="blog">
          <h1>Blog ({blog.length})</h1>
          </div>
          <div className="blog">
      

            <Slider {...settings}>
              {blog.map((item) => {
                return (
                  <div className="slider-container">
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
            <h1>Projects ({ResponsiveDesigns.length})</h1>
            <h2>Responsive Designs ({ResponsiveDesigns.length})</h2>
          </div>
          <div className="blog">
           
            <div className="slider-container">
              {ResponsiveDesigns.map((item) => {
                return (
                  <div className="project-content">
                    <h1>{item.name}</h1>
                    <img
                      className="pro-img"
                      src={item.img}
                      style={{ width: "100%" }}
                    />
                    <p>{item.def}</p>

                    <table>
                      <tr>
                        <td>
                          <a href={item.url} target="_blank">
                            <button className="btn-one">See Code</button>
                          </a>{" "}
                        </td>
                        <td>
                          {" "}
                          <a href={item.demo} target="_blank">
                            <button className="btn-two">Test App</button>
                          </a>
                        </td>
                      </tr>
                    </table>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
