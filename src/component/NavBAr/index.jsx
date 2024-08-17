import GetTrueLogo from "../../assets/gettruelogo.svg";
import { useState } from "react";
import Button from "../Button/Button";
import styles from "./styles.module.css";
import Modal from "../../component/Modal";
import { Grid } from "@mui/material";
import InputGroup from "../FormComponent/InputGroup";
import SelectGroup from "../FormComponent/SelectGroup";
import TextAreaGroup from "../FormComponent/TextAreaGroup";

const NavBar = () => {
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
    <div className={`${styles.navbar}`}>
      <div className={`${styles.navbarcont} `}>
        <div className={`${styles.imglogo} `}>
          <div>
            <img src={GetTrueLogo} alt="logo" />
          </div>
          <h5>Get Thru</h5>
        </div>
        <div>
          <Button title="Start Your Journey" onClick={handleModal} />
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

export default NavBar;
