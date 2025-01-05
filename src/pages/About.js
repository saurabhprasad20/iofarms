// src/pages/About.js
import React from 'react';
import './About.css'; 

const About = () => (
  <div className="about-container">
    <div className="team-section">
      <h2>Team Members</h2>
      <ul className="team-list">
        <li>
          <strong>Devashish Roy:</strong> Self-Employed, Ranchi, Nondisabled.
        </li>
        <li>
          <strong>Anay Kumar Jaiswal:</strong> Bank Employee, Bundu/Ranchi, Visually Impaired.
        </li>
        <li>
          <strong>Prakash:</strong> Employee at Indian Railways, Kolkata, Visually Impaired.
        </li>
        <li>
          <strong>Madhav Chandra Das:</strong> Senior Stenographer at Indian Railways, Ranchi, Visually Impaired.
        </li>
        <li>
          <strong>Saurabh Prasad:</strong> Software Engineer at Microsoft, Tandwa/Chatra, Visually Impaired.
        </li>
      </ul>
    </div>
  </div>
);

export default About;
