import React from 'react';
import "./css/link.css";

function Link() {
  const links = ["GitHub", "Frontend Mentor", "LinkedIn", "Twitter", "Instagram"];

  function checkURL(link) {
    if (link === "GitHub") return "https://github.com/VictorKevz";
    if (link === "Frontend Mentor") return "https://www.frontendmentor.io/profile/VictorKevz";
    if (link === "LinkedIn") return "https://www.linkedin.com/in/victor-kuwandira-bb6269292/";
    if (link === "Twitter") return "https://x.com/?lang=en";
    if (link === "Instagram") return "https://instagram.com/";
    return "#";
  }

  return (
    <div className="links-container">
      {links.map((link, index) => {
        return (
          <a href={checkURL(link)} target='_blank' className='link' key={index}>
            {link}
          </a>
        );
      })}
    </div>
  );
}

export default Link;
