import React from "react";
import avatar from "../assets/images/avatar-jessica.jpeg"
import "./css/header.css"

function Header() {
    return(
    <div className="header-container">
      <img src={avatar} className="header-image" alt="jessica avatar image"/>
      <h1>Jessica Randal</h1>
      <h2>London, United Kingdom</h2>
      <p>"Front-end developer and avid reader"</p>
    </div>
    )
}
export default Header;