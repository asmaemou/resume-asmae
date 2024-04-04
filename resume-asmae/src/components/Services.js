import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faCropSimple } from "@fortawesome/free-solid-svg-icons";
import { faAppStore } from "@fortawesome/free-brands-svg-icons";

const Services = () => {
  const [showWebDesignDescription, setShowWebDesignDescription] = useState(false);
  const [showDataStructureDescription, setShowDataStructureDescription] = useState(false);
  const [showAPPDesign, setAPPDesign] = useState(false);

  const handleWebDesignClick = () => {
    setShowWebDesignDescription(!showWebDesignDescription);
  };

  const handleDataStructureClick = () => {
    setShowDataStructureDescription(!showDataStructureDescription);
  };

  const handleAPPDesign = () => {
    setAPPDesign(!showAPPDesign);
  };

  return (
    <>
      <div id="services">
        <div className="container">
          <h1 className="sub-title">My services</h1>
          <div className="services-list">
            <div onClick={handleWebDesignClick}>
              <FontAwesomeIcon icon={faCode} />
              <h2>Artificial Intelligence and Machine Learning:</h2>
              {showWebDesignDescription && (
                <p>
                  - AI-Powered Chatbot Solutions
                  <br />
                  - Specialization in creating intelligent chatbots powered by state-of-the-art Large Language Models (LLMs)
                  <br />
                  - Integration of the LAMA (LAnguage Model Analysis) index for refined question-answering capabilities.
                </p>
              )}
            </div>
            <div onClick={handleDataStructureClick}>
              <FontAwesomeIcon icon={faCropSimple} />
              <h2>Data Structure and Algorithms</h2>
              {showDataStructureDescription && (
                <p>
                  - Gain knowledge of different data structures.
                  <br />
                  - Learn how to use data structures to solve coding problems.
                </p>
              )}
            </div>
            <div onClick={handleAPPDesign}>
              <FontAwesomeIcon icon={faAppStore} />
              <h2>Full Stack Website and Mobile App Development</h2>
              {showAPPDesign && (
                <p>
                  - Expertise in developing responsive and interactive websites and mobile apps from concept to launch.
                  <br />
                  - Expertise in developing cross-platform mobile applications with React Native, providing a native-like experience on both iOS and Android devices.
                  <br />
                  - Commitment to code quality and best practices, employing version control with Git for collaborative and iterative development.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
