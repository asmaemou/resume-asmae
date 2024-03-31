import React, { useState } from 'react';

const TabComponent = () => {
  const [activeTab, setActiveTab] = useState('skills');


  const openTab = (tabname) => {
    setActiveTab(tabname);
  };

  return (
    <div>
      <div className="tab-links">
        {/* Render your tab links here */}
        <p
          className={`tab-link ${activeTab === 'skills' ? 'active-link' : ''}`}
          onClick={() => openTab('skills')}
        >
          Skills
        </p>
        <p
          className={`tab-link ${activeTab === 'experience' ? 'active-link' : ''}`}
          onClick={() => openTab('experience')}
        >
          Experience
        </p>
        {/* Add more tab links as needed */}
      </div>

      <div className="tab-contents">
        {/* Render your tab contents here */}
        <div
          id="skills"
          className={`tab-content ${activeTab === 'skills' ? 'active-tab' : ''}`}
        >
          Skills content
        </div>
        <div
          id="experience"
          className={`tab-content ${activeTab === 'experience' ? 'active-tab' : ''}`}
        >
          Experience content
        </div>
        {/* Add more tab contents as needed */}
      </div>
    </div>
  );
};

export default TabComponent;