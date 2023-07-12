import React from "react";
import playstore from "../../../images/playstore.png";
import appstore from "../../../images/Appstore.png";
import "./Footer.css";

function Footer() {
  return (
    <footer>
      <div className="leftFooter">
        <h4>Download our App</h4>
        <p>Download our android and Ios App</p>
        <img src={playstore} alt="playstore icon" />
        <img src={appstore} alt="app store icon" />
      </div>

      <div className="midFooter">
        <h1>Aman</h1>
        <p>Quality is our first priority.</p>
        <p>Copyright 2023 &copy; VPG</p>
      </div>
      <div className="rightFooter"></div>

      <div className="rightFooter">
        <h4>Follow Us</h4>
        <a href="http://instagram.com/___amanverma___"> 
          <i class="fa-brands fa-instagram"></i> Instagram
        </a>
        <a href="http://github.com/amanverma2253">
          <i class="fa-brands fa-github"></i> Github
        </a>
        <a href="https://www.linkedin.com/in/aman-verma-a23545191/">
          <i class="fa-brands fa-linkedin-in"> </i> Linkedin
        </a>
        <a href="https://twitter.com/AmanVerma2253">
          <i class="fa-brands fa-twitter"></i> Twitter
        </a>
      </div>
    </footer>
  );
}

export default Footer;
