import styles from "./styles.module.css";
import GetThruLogo from "../../../assets/gettruelogo.svg";
import LocationImg from "../../../assets/locationimg.png";
import WhatsApp from "../../../assets/whatsapp.svg";
import CallImg from "../../../assets/calls.svg";
import InstagramImg from "../../../assets/instagram.svg";
import FacebookImg from "../../../assets/facebook.svg";
import YoutubeImg from "../../../assets/youtube.svg";
import Button from "../../Button/Button";
import Modal from "../../../component/Modal";
import { Grid } from "@mui/material";
import InputGroup from "../../FormComponent/InputGroup";
import SelectGroup from "../../FormComponent/SelectGroup";
import TextAreaGroup from "../../FormComponent/TextAreaGroup";
import { useState } from "react";

const Footer = () => {
  const [showButton, setShowButton] = useState(false);
  const [selectedOption, setSelectedOption] = useState("select");

  const handleSelectChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedOption(selectedValue);
    console.log("Selected option:", selectedValue);
  };

  const handleModal = () => {
    setShowButton(!showButton);
  };

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
            <img src={YoutubeImg} alt="twitter" />
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
              <Button title="Contact Us" onClick={handleModal} />
            </div>
          </form>
        </div>
      </div>
      <div className={`${styles.hrr}`}>
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
      <Modal
        title="We`re here to help with all your needs"
        subtitle={
          <div>
            We value your interest and are here to assist you. Please fill out
            the form below to reach out to us.
          </div>
        }
        modalContent={
          <>
            <Grid container spacing={2} className="input-padding">
              <Grid item lg={6} md={6} sm={12} xs={12}>
                <InputGroup
                  label="First Name"
                  margin="normal"
                  placeHolder="Enter your first name"
                  inputType="text"
                />
              </Grid>
              <Grid item lg={6} md={6} sm={12} xs={12}>
                <InputGroup
                  label="Last Name"
                  margin="normal"
                  placeHolder="Enter your last name"
                  inputType="text"
                />
              </Grid>
              <Grid item lg={6} md={6} sm={12} xs={12}>
                <InputGroup
                  label="Cell Number"
                  margin="normal"
                  placeHolder="Enter your cell number"
                  inputType="text"
                />
              </Grid>
              <Grid item lg={6} md={6} sm={12} xs={12}>
                <InputGroup
                  label="Email Address"
                  margin="normal"
                  placeHolder="Enter your email address"
                  inputType="text"
                />
              </Grid>
              <Grid item lg={12} md={12} sm={12} xs={12}>
                <SelectGroup label="Reason for Contact:">
                  <select
                    name="type"
                    value={selectedOption}
                    onChange={handleSelectChange}
                  >
                    <option value="select">--- Select ---</option>
                    <option value="wifi">Wi-Fi Hotspots</option>
                    <option value="home">Home Internet Solutions</option>
                    <option value="business">
                      Business Internet Solutions
                    </option>
                    <option value="digital-skills">
                      Digital Skills Training
                    </option>
                  </select>
                </SelectGroup>
              </Grid>
              <Grid item lg={12} md={12} sm={12} xs={12}>
                    <TextAreaGroup
                      label="Additional Information"
                      margin="normal"
                      placeholder="Additional Information (Optional)"
                    />
                  </Grid>
            </Grid>
          </>
        }
        modalFooter={
          <>
            <div className={styles.modalFooterBtn}>
              <Button title="Submit Request" onClick={handleModal} />
            </div>
          </>
        }
        isopen={showButton}
        closeModal={handleModal}
      />
    </div>
  );
};

export default Footer;
