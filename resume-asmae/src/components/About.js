import React, { useState } from "react";
import aboutImage from "../images/about.png";
import Awards from "./AboutComponents/Awards";
import Education from "./AboutComponents/Education";
import Experience from "./AboutComponents/Experience";
import Skills from "./AboutComponents/Skills";

const About = () => {
  const [clickedTab, setClickedTab] = useState("skills");
  console.log(clickedTab);

  return (
    <>
      <div id="about">
        <div className="container">
          <div className="row">
            <div className=" 1">
              <img
                className="about-image"
                src={aboutImage}
                alt="logo of about section in my portfolio"
              />
            </div>
            <div className="about-col-2">
              <h1 className="sub-title">About Me</h1>
              <p>
                I am a student majoring in computer science at Al Akhawayn
                University in Morocco and minoring in Mathematics at Agnes Scott
                in US. As an experienced computer science student, I am
                passionate about leveraging technology to solve complex
                problems. With a track record of consistent hard work and
                determination, I am committed to honing my skills and expanding
                my expertise as a full stack developer. I believe that with
                continuous learning and growth, I can drive innovative solutions
                and make a positive impact in the tech industry.
              </p>

              <div className="tab-titles">
                <p
                  className="tab-links active-link"
                  onClick={() => setClickedTab("skills")}
                >
                  Skills
                </p>
                <p
                  className="tab-links active-link"
                  onClick={() => setClickedTab("experience")}
                >
                  Experience{" "}
                </p>
                <p
                  className="tab-links active-link"
                  onClick={() => setClickedTab("education")}
                >
                  Education{" "}
                </p>
                <p
                  className="tab-links active-link"
                  onClick={() => setClickedTab("awards")}
                >
                  Awards{" "}
                </p>
              </div>
              {clickedTab === "skills" ? (
                <Skills />
              ) : clickedTab === "experience" ? (
                <Experience />
              ) : clickedTab === "education" ? (
                <Education />
              ) : clickedTab === "awards" ? (
                <Awards />
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default About;
