import React from "react";
import playStore from "../../../images/playstore.png";
import appStore from "../../../images/Appstore.png";
import "./Footer.css";

const Footer = () => {
  return (
    <footer id="Footer">
        <div className="leftFooter">
            <h4>DOWNLOAD OUR APP</h4>
            <p>Download app for android and IOS mobile phone</p>
            <img src={playStore} alt="playStore"></img>
            <img src={appStore} alt="appStore"></img>
        </div>

        <div className="midFooter">
            <h1>E-Kart</h1>
            <p>High Quality is our first priority</p>

            <p>Copyrights 2022 &copy; Rounak kr. Shaw</p>
        </div>

        <div className="rightFooter">
            <h4>Follow US</h4>
            <a href="https://www.instagram.com/rounak.2002/">Instagram</a>
            <a href="https://www.linkedin.com/in/rounak-kr-shaw-907ba3227/">Linked In</a>
            <a href="https://github.com/Rounak-2002">Github</a>
        </div>
    </footer>
  );
};

export default Footer;