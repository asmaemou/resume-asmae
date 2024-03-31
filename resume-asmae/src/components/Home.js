import React from "react";
import homeImage from "../images/me.png";
import Chat from "../pages/Chat";

const Home = () => {
  return (
    <>
      <div className="header-text">
        <div className="image-container">
          <img className="me" src={homeImage} alt="home" />
        </div>
        <div className="content-container">
          <p>Software Engineering</p>
          <h1>
            Hi, I'm <span>Asmae</span> <br />
            Mouradi
            <br />
            from Morocco
          </h1>
        </div>
      </div>
      <Chat/>
    </>

  );
};

export default Home;
