import React from "react";
import "./page.css";
import { assets } from "../../assets/assets";

const Page = () => {
  return (
    <div className="main">
      <div className="nav">
        <p>Gemini</p>
        <img src={assets.user} alt="" />
      </div>
      <div className="main-container">
        <div className="greet">
          <p>
            <span>Hello, Human..</span>
          </p>
          <p>How can I help you?</p>
        </div>
        <div className="cards">
          <div className="card">
            <p>Suggest beautiful places to see on an upcoming road trip</p>
            <img src={assets.compass} alt="" />
          </div>
          <div className="card">
            <p>Briefly summarize this concept: urban planning</p>
            <img src={assets.bulb} alt="" />
          </div>
          <div className="card">
            <p>Brainstorm team bonding activities for our work retreat</p>
            <img src={assets.message} alt="" />
          </div>
          <div className="card">
            <p>Tell me about React js and React native</p>
            <img src={assets.code} alt="" />
          </div>
        </div>

        <div className="main-bottom">
          <div className="search-box">
            <input type="text" placeholder="Enter a prompt here" />
            <div>
              <img src={assets.gallery} alt="" />
              <img src={assets.mic} alt="" />
              <img src={assets.send} alt="" />
            </div>
          </div>
        
        <p className="bottom-info">
          Gemini may display inaccurate info, including about people, so
          double-check its responses. Your privacy and Gemini Apps
        </p>
      </div>
      </div>
    </div>
  );
};

export default Page;
