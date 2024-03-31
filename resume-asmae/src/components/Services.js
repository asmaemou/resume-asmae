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
              <h2>Web Design</h2>
              {showWebDesignDescription && (
                <p>
                  - Create user-friendly websites.
                  <br />
                  - Custom Website Design.
                  <br />
                  - Responsive Design.
                  <br />
                  - User experience optimization.
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
              <h2>App Design</h2>
              {showAPPDesign && (
                <p>
                  - Design applications based on client requirements.
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
