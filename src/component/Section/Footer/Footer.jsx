import styles from "./styles.module.css";
import GetThruLogo from "../../../assets/gettruelogo.svg";
import LocationImg from "../../../assets/locationimg.png";
import WhatsApp from "../../../assets/whatsapp.svg";
import CallImg from "../../../assets/calls.svg";
import InstagramImg from "../../../assets/instagram.svg";
import FacebookImg from "../../../assets/facebook.svg";
import TwitterImg from "../../../assets/twitter.svg";
import Button from "../../Button/Button";

const Footer = () => {
  return (
    <div className={`${styles.footercont}`}>
      <div className={`${styles.margincont}`}>
        <div className={`${styles.footermoreinfo}`}>
          <div className="flex gap-16 align-item-center">
            <img src={GetThruLogo} alt="" />
            <h2>Get Thru</h2>
          </div>
          <p className={`${styles.getfooter}`}>
            Get Thru is dedicated to bridging the digital divide in South Africa
            by providing affordable internet access and essential digital skills
            training to underserved communities.
          </p>
          <div className="flex gap-16 align-item-start">
            <div>
              <img src={LocationImg} alt="" />
            </div>
            <p>
              75 Leander Road, Olympus, Pretoria, Gauteng, 0081, South Africa
            </p>
          </div>
          <div className={`${styles.footersocials}`}>
            <img src={WhatsApp} alt="whatsapp" />
            <img src={CallImg} alt="call" />
            <img src={InstagramImg} alt="instagram" />
            <img src={FacebookImg} alt="facebook" />
            <img src={TwitterImg} alt="twitter" />
          </div>
        </div>
        <div className={`${styles.footerright}`}>
          <h4>Stay Updated with Our Latest News</h4>
          <h5>Got questions or need assistance?</h5>
          <p>
            We`re here to help you with any information or support you need.
            Reach out to us, and we`ll get back to you promptly!
          </p>
          <form action="">
            {/* <input
              type="email"
              name="email"
              id="e_mail"
              placeholder="Email Address"
            /> */}
            <div className={`${styles.footerbtn}`}>
              <Button title="Send Enquiry" />
            </div>
          </form>
        </div>
      </div>
      <div className="margin-inline-70">
        <hr />
      </div>
      <div className={`${styles.copyright}`}>
        <p>© 2024 Get Thru | All Rights Reserved.</p>
        <div className="flex gap-16">
          <p>Terms of Service</p>
          <p>Privacy Policy</p>
          <p>Cookies</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
