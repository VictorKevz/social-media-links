// import React from "react";

// function Buttons(){
//     return(
//         <div className="buttons-container">
//             <button>GitHub</button>
//             <button>Frontend Mentor</button>
//             <button>LinkedIn</button>
//             <button>Twitter</button>
//             <button>Instagram</button>
//         </div>
//     )
// }
// export default Buttons;
import React from 'react';

function Buttons() {
  return (
    <div className="buttons-container">
      <a href="https://github.com" target="_blank" rel="noopener noreferrer">
        <button>GitHub</button>
      </a>
      <a href="https://www.frontendmentor.io" target="_blank" rel="noopener noreferrer">
        <button>Frontend Mentor</button>
      </a>
      <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
        <button>LinkedIn</button>
      </a>
      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
        <button>Twitter</button>
      </a>
      <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
        <button>Instagram</button>
      </a>
    </div>
  );
}

export default Buttons;
