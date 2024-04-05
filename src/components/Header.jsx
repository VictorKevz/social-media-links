import React from "react";
import avatar from "../assets/images/avatar-jessica.jpeg"

function Header() {
    return(
    <div className="header-container">
      <img src={avatar} className="header-image" alt="jessica avatar image"/>
      <h1>Jessica Randal</h1>
      <figcaption>London, United Kingdom</figcaption>
      <p>"Front-end developer and avid reader"</p>
    </div>
    )
}
export default Header;