import MissionImg from "../../../assets/missionimg.svg";
import styles from "./styles.module.css";
import { useState } from "react";
import Button from "../../Button/Button";
import Modal from "../../../component/Modal";
import { Grid } from "@mui/material";
import InputGroup from "../../FormComponent/InputGroup";
import SelectGroup from "../../FormComponent/SelectGroup";
import TextAreaGroup from "../../FormComponent/TextAreaGroup";

const Mission = () => {
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
    <div className={`${styles.mission}`}>
      <div className={styles.missioncont}>
        <div>
          <img src={MissionImg} alt="" />
        </div>
        <div className={styles.missioninfo}>
          <h6>Our Mission</h6>
          <h2>Empowering Every Connection</h2>
          <p>
            At <strong>Get Thru</strong>, we are dedicated to closing South
            Africa’s digital divide by providing affordable, reliable internet
            access and in-depth digital skills training. We believe that
            connectivity is a fundamental right and a key to unlocking
            potential.
          </p>
          <p className="margin-top-20">
            Our mission is to empower individuals and communities, foster
            innovation, and drive socio-economic progress. By ensuring that
            everyone has the tools and opportunities to connect and grow, we
            strive to create a more inclusive and prosperous future for all.
          </p>
          <div className={styles.missionbtn}>
            <Button title="Support Our Mission" onClick={handleModal} />
          </div>
        </div>
      </div>
      <Modal
        title="Support Our Mission"
        subtitle={
          <div>
            Thank you for your interest in supporting our mission. Please choose how
             you`d like to contribute, and provide your details below.
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
                <SelectGroup label="Mode of Support:">
                  <select
                    name="type"
                    value={selectedOption}
                    onChange={handleSelectChange}
                  >
                    <option value="select">--- Select ---</option>
                    <option value="sponsor">Sponsor</option>
                    <option value="donate">
                      Donate
                    </option>
                    <option value="partner">
                      Become a Partner
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
              <Button title="Support Now" onClick={handleModal} />
            </div>
          </>
        }
        isopen={showButton}
        closeModal={handleModal}
      />
    </div>
  );
};

export default Mission;
