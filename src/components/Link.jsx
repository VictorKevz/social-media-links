
import React from 'react';
import "./css/link.css"
function Link() {
  const links =["GitHub","Frontend Mentor","LinkedIn","Twitter","Instagram"]
  return (
    <div className="links-container">
     {links.map((link,index)=>{
      return <a className='link' key={index}>{link}</a>
     })}
    </div>
  );
}

export default Link;
