import React from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CopyrightIcon from "@mui/icons-material/Copyright";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <div className="footer-container">
      <p>
        Coded With <FavoriteIcon className="footer-icon" fontSize="medium" /> by
        <a href="https://github.com/VictorKevz">Victor.Kevz</a> <CopyrightIcon className="footer-icon" fontSize="small" />
        {year}
      </p>
    </div>
  );
}
export default Footer;
