import logo from "../assests/images/logo_dark.png";
import fb from "../assests/images/fb.png";
import linkedin from "../assests/images/linkedin.png";
import twitter from "../assests/images/twitter.png";
import youtube from "../assests/images/youtube.png";
import instagram from "../assests/images/instagram.png";
import lang from "../assests/icons/lang.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container-xxl">
        <div className="row footer">
          <div className="col-12 col-md-6">
            <img src={logo} className="footerImage" alt="logo" />
          </div>
          <div className="col-12 col-md-6">
            <div className="footer_links row">
              <div className="links col-12 col-md-4">
                <Link to={"/"} className="link">
                  FAQ
                </Link>
                <Link to={"/"} className="link">
                  CONTACT
                </Link>
              </div>
              <div className="links col-12 col-md-8">
                <Link to={"/"} className="link">
                  Support
                </Link>
                <Link to={"/"} className="link">
                  Privacy
                </Link>
                <Link to={"/"} className="link">
                  Terms & conditions
                </Link>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "flex-start",
                width: "5%",
                margin: "8% 0",
                alignItems: "center",
              }}
            >
              <img className="item" src={fb} alt="fb" />
              <img className="item" src={twitter} alt="twitter" />
              <img className="item" src={youtube} alt="youtube" />
              <img className="item" src={linkedin} alt="linkedin" />
              <img className="item" src={instagram} alt="instagram" />
            </div>
            <p style={{ marginTop: "5%", fontFamily: "Poppins" }}>
              Start Your Business With Shopify. Sign Up For Our Annual Plan And
              Get A<br /> 10% Discount. Shopify® Is an Easy-To-Use Online Store
              Builder Trusted by
              <br /> Millions of Stores. Mobile Commerce Ready. Fraud
              Prevention. Drop
              <br /> Shipping Integration. 99.99% Average Uptime.
            </p>
          </div>
          <img
            src={lang}
            alt="lang"
            style={{ width: "7%", marginTop: "-4%" }}
          />
          <div style={{ borderTop: "1px solid white", marginTop: "3%" }}></div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
